var express = require("express");
var Router = express.Router();
var lexicografico = require("./lexicografico");
var arreglos= require("./arreglos");
//var sintactico= require("./sintactico");
var mensaje="", error=false;
var i=0
function sintactico(tokens, recursive, variables){
  var actual=tokens[i];
  switch(actual){
      case "}":
          recursive=false;
          break;
      case "ifTok":
          actual=tokens[++i];
          if (actual == "(") {
              actual = tokens[++i];
              if (actual == "identificador" || actual == "num" || actual== "tokcadena" || actual == "true" || actual == "false") {
                actual = tokens[++i];
                if (arreglos.comparadores.indexOf(actual) !== -1) {
                  actual = tokens[++i];
                  if (actual == "identificador" || actual == "num" || actual== "tokcadena" || actual == "true" || actual == "false") {
                    actual = tokens[++i];
                    if (actual == ")") {
                      actual = tokens[++i];
                      mensaje+="Condición del if Correcta \n";
                      if (actual == "{") {
                        actual = tokens[++i];
                        recursive=true;
                        sintactico(tokens, recursive, variables);
                        actual = tokens[i];
                        recursive=false;
                          if (actual == "}") {
                              this.actual = tokens[++i];
                              mensaje+="If Correcto \n";
                              
                          }else {
                              error=true;
                              mensaje+='ERROR SINTACTICO: Se  esperaba una "}" \n';
                          }
                      }else {
                          error=true;
                          mensaje+='ERROR SINTACTICO: Se  esperaba una "{" \n';
                      }
                    }else {
                      error=true;
                      mensaje+='ERROR SINTACTICO: Se  esperaba un ")" \n';
                    }
                  }else {
                      error=true;
                      mensaje+="ERROR SINTACTICO: Se  esperaba un identificador, número, cadena o booleano \n";
                  }
                }else {
                      error=true;
                      mensaje+="ERROR SINTACTICO: Se  esperaba un comparador \n";
                }
              }else {
                  error=true;
                  mensaje+="ERROR SINTACTICO: Se  esperaba un identificador, número, cadena o booleano \n";
              }
            }else {
                  error=true;
                  mensaje+='ERROR SINTACTICO: Se  esperaba un "(" \n';
            }
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
