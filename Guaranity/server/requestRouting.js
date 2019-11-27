var express = require("express");
var Router = express.Router();
var lexicografico = require("./lexicografico");
var arreglos= require("./arreglos");
//var sintactico= require("./sintactico");
var mensaje="", error=false;
var i=0;

function condicion(tokens,recursive, variables){
  var actual=tokens[++i];
        if (actual == "(") {
            actual = tokens[++i];
            if (actual == "identificador" || actual == "num" || actual== "tokcadena" || actual == "true" || actual == "false") {
              actual = tokens[++i];
              if (arreglos.comparadores.indexOf(actual) !== -1) {
                actual = tokens[++i];
                if (actual == "identificador" || actual == "num" || actual== "tokcadena" || actual == "true" || actual == "false") {
                  actual = tokens[++i];
                  if (actual == ")") {
                    i++;
                    mensaje+="Condición Correcta sintacticamente \n";
                  }else {
                    error=true;
                    mensaje+='ERROR SINTACTICO en condición: Se  esperaba un ")" \n';
                    while(tokens[i]!="{"){
                      if(i<tokens.length)  
                        i++;
                      else
                        recursive=false;
                    }
                  }
                }else {
                    error=true;
                    mensaje+="ERROR SINTACTICO en condición: Se  esperaba un identificador, número, cadena o booleano \n";
                    while(tokens[i]!="{"){
                      if(i<tokens.length)  
                        i++;
                      else
                        recursive=false;
                    }
                }
              }else {
                    error=true;
                    mensaje+="ERROR SINTACTICO en condición: Se  esperaba un comparador \n";
                    while(tokens[i]!="{"){
                      if(i<tokens.length)  
                        i++;
                      else
                        recursive=false;
                    }
              }
            }else {
                error=true;
                mensaje+="ERROR SINTACTICO en condición: Se  esperaba un identificador, número, cadena o booleano \n";
                while(tokens[i]!="{"){
                  if(i<tokens.length)  
                    i++;
                  else
                    recursive=false;
                }
            }
          }else {
                error=true;
                mensaje+='ERROR SINTACTICO en condición: Se  esperaba un "(" \n';
                while(tokens[i]!="{"){
                  if(i<tokens.length)  
                    i++;
                  else
                    recursive=false;
                }
          }
}
function contenido(tokens, recursive, variables){
  var actual=tokens[i];
  if (actual == "{") {
      actual = tokens[++i];
      recursive=true;
      sintactico(tokens, recursive, variables);
      actual = tokens[i];
      recursive=false;
        if (actual == "}") {
            this.actual = tokens[++i];
            mensaje+="Contenido Correcto \n";
            
        }else {
            error=true;
            mensaje+='ERROR SINTACTICO en contenido: Se  esperaba una "}" \n';
            while(tokens[i]!=";" && tokens[i]!="}" && tokens[i]!="{"){
              if(i<tokens.length)  
                i++;
              else
                recursive=false;
            }
        }
    }else {
        error=true;
        mensaje+='ERROR SINTACTICO en contenido: Se  esperaba una "{" \n';
        while(tokens[i]!=";" && tokens[i]!="}" && tokens[i]!="{"){
          if(i<tokens.length)  
            i++;
          else
            recursive=false;
        }
    }
}
function iftok(tokens,recursive, variables){
  mensaje+="Bloque If:\n";
  condicion(tokens, recursive, variables);
  contenido(tokens, recursive, variables);
  mensaje+="Fin Bloque If:\n";
  if(i<tokens.length){
      recursive=true;
  }
}
function whiletok(tokens, recursive, variables){
  mensaje+="Bloque While:\n";
  condicion(tokens,recursive,variables);
  contenido(tokens, recursive, variables);
  mensaje+="Fin Bloque While \n";
  if(i<tokens.length){
    recursive=true;
}
}
function sintactico(tokens, recursive, variables){
  var actual=tokens[i];
  switch(actual){
      case "}":
          recursive=false;
          break;
      case "ifTok":
          iftok(tokens, recursive, variables);
          break;
      case "whileTok":
          whiletok(tokens, recursive, variables);    
          break;
  }
  if (recursive && i < tokens.length) {
    sintactico(tokens, recursive, variables);
  }
}

Router.post("/lexi", function(req, res) {
  var query1 = req.body.var1;
  var code = lexicografico(query1);
  res.send(code);
});

Router.post("/all", function(req, res) {
  res.send("sirvo");
  var codigo = req.bodyparser.codigo;
  res.send(codigo);
});
Router.post("/sintactico", function(req,res){
var tokens=req.body.tokens;
//error=false;mensaje="F";
mensaje="", i=0, error=false;
sintactico(tokens,false, []);
res.send(mensaje);

});
Router.post("/semantico", function(req,res){
  var code=req.bodyparser.code;
  //var errores= semantico(code);
  //res.send(errores);
  });

Router.all("*", function(req, res) {
  res.send("No se encontro el recurso solicitado");
  res.end();
});





module.exports = Router;
