var express = require("express");
var Router = express.Router();
var lexicografico = require("./lexicografico");
var arreglos = require("./arreglos");
var intermedio = require("./generador");
//var sintactico= require("./sintactico");
var mensaje = "",
  error = false,
  variables = [];
var i = 0;

function condicion(tokens, recursive) {
  var actual = tokens[++i];
  if (actual == "(") {
    actual = tokens[++i];
    if (
      actual == "identificador" ||
      actual == "num" ||
      actual == "tokcadena" ||
      actual == "true" ||
      actual == "false"
    ) {
      actual = tokens[++i];
      if (arreglos.comparadores.indexOf(actual) !== -1) {
        actual = tokens[++i];
        if (
          actual == "identificador" ||
          actual == "num" ||
          actual == "tokcadena" ||
          actual == "true" ||
          actual == "false"
        ) {
          actual = tokens[++i];
          if (actual == ")") {
            i++;
            mensaje += "Condición Correcta sintacticamente \n";
          } else {
            error = true;
            mensaje += 'ERROR SINTACTICO en condición: Se  esperaba un ")" \n';
            while (tokens[i] != "{") {
              if (i < tokens.length) i++;
              else recursive = false;
            }
          }
        } else {
          error = true;
          mensaje +=
            "ERROR SINTACTICO en condición: Se  esperaba un identificador, número, cadena o booleano \n";
          while (tokens[i] != "{") {
            if (i < tokens.length) i++;
            else recursive = false;
          }
        }
      } else {
        error = true;
        mensaje +=
          "ERROR SINTACTICO en condición: Se  esperaba un comparador \n";
        while (tokens[i] != "{") {
          if (i < tokens.length) i++;
          else recursive = false;
        }
      }
    } else {
      error = true;
      mensaje +=
        "ERROR SINTACTICO en condición: Se  esperaba un identificador, número, cadena o booleano \n";
      while (tokens[i] != "{") {
        if (i < tokens.length) i++;
        else recursive = false;
      }
    }
  } else {
    error = true;
    mensaje += 'ERROR SINTACTICO en condición: Se  esperaba un "(" \n';
    while (tokens[i] != "{") {
      if (i < tokens.length) i++;
      else recursive = false;
    }
  }
}
function contenido(tokens, recursive) {
  var actual = tokens[i];
  if (actual == "{") {
    actual = tokens[++i];
    recursive = true;
    sintactico(tokens, recursive);
    actual = tokens[i];
    recursive = false;
    if (actual == "}") {
      this.actual = tokens[++i];
      mensaje += "Contenido Correcto \n";
    } else {
      error = true;
      mensaje += 'ERROR SINTACTICO en contenido: Se  esperaba una "}" \n';
      while (tokens[i] != ";" && tokens[i] != "}" && tokens[i] != "{") {
        if (i < tokens.length) i++;
        else recursive = false;
      }
    }
  } else {
    error = true;
    mensaje += 'ERROR SINTACTICO en contenido: Se  esperaba una "{" \n';
    while (tokens[i] != ";" && tokens[i] != "}" && tokens[i] != "{") {
      if (i < tokens.length) i++;
      else recursive = false;
    }
  }
}
function declaracion(tokens, recursive) {
  var actual = tokens[++i];
  if (actual == "identificador") {
    actual = tokens[++i];
    if (
      actual == "intTok" ||
      actual == "charTok" ||
      actual == "floatTok" ||
      actual == "booleanTok" ||
      actual == "stringTok" ||
      actual == "arrayTok"
    ) {
      actual = tokens[++i];
      switch (actual) {
        case ";":
          mensaje += "Declaracion sintacticamente correcta \n";
          break;
        case "=":
          actual = tokens[++i];
          if (
            actual == "num" ||
            actual == "tokcadena" ||
            actual == "identificador"
          ) {
            variables.push({
              nombre: tokens[i - 3],
              tipo: tokens[i - 2],
              valor: actual
            });
            actual = tokens[++i];
            if (actual == ";") {
              mensaje += "Declaracion sintacticamente correcta \n";
            } else {
              mensaje += "ERROR SINTACTICO: Se esperaba un ; \n";
              error = true;
              while (tokens[i] != ";") {
                if (i < tokens.length) i++;
                else recursive = false;
              }
            }
          } else {
            mensaje +=
              "ERROR SINTACTICO: Se esperaba una cadena, numero u otra variable \n";
            error = true;
            while (tokens[i] != ";") {
              if (i < tokens.length) i++;
              else recursive = false;
            }
          }
          break;
        default:
          mensaje +=
            "ERROR SINTACTICO: Se esperaba un ; o la asignación de un valor \n";
          error = true;
          while (tokens[i] != ";") {
            if (i < tokens.length) i++;
            else recursive = false;
          }
      }
    } else {
      mensaje +=
        "ERROR SINTACTICO: Se esperaba el tipo de la variable declarada \n";
      error = true;
      while (tokens[i] != ";") {
        if (i < tokens.length) i++;
        else recursive = false;
      }
    }
  } else {
    mensaje +=
      "ERROR SINTACTICO: Se esperaba un identificador para la variable \n";
    error = true;
    while (tokens[i] != ";") {
      if (i < tokens.length) i++;
      else recursive = false;
    }
  }
}

function iftok(tokens, recursive) {
  mensaje += "Bloque If:\n";
  condicion(tokens, recursive);
  contenido(tokens, recursive);
  mensaje += "Fin Bloque If:\n";
  if (i < tokens.length) {
    recursive = true;
  }
  sintactico(tokens, recursive);
}
function elseiftok(tokens, recursive) {
  mensaje += "Bloque ElseIf: \n";
  condicion(tokens, recursive);
  contenido(tokens, recursive);
  mensaje += "Fin Bloque ElseIf:\n";
  if (i < tokens.length) {
    recursive = true;
  }
  sintactico(tokens, recursive);
}
function whiletok(tokens, recursive) {
  mensaje += "Bloque While:\n";
  condicion(tokens, recursive);
  contenido(tokens, recursive);
  mensaje += "Fin Bloque While \n";
  if (i < tokens.length) {
    recursive = true;
  }
  sintactico(tokens, recursive);
}
function vartok(tokens, recursive) {
  mensaje += "Declaración de variable \n";
  declaracion(tokens, recursive);
  ++i;
  if (i < tokens.length) {
    recursive = true;
  }
  sintactico(tokens, recursive);
}

function elsetok(tokens, recursive) {
  mensaje += "Bloque Else: \n";
  ++i;
  contenido(tokens, recursive);
  mensaje += "Fin Bloque Else \n";
  if (i < tokens.length) {
    recursive = true;
  }
}

function asignacion(tokens, recursive) {
  var actual = tokens[++i];
  if (actual == "identificador" || actual == "tokcadena" || actual == "num") {
    actual = tokens[++i];
    switch (actual) {
      case "+":
      case "-":
      case "*":
      case "/":
        actual = tokens[++i];
        if (
          actual == "identificador" ||
          actual == "tokcadena" ||
          actual == "num"
        ) {
          actual = tokens[++i];
          if (actual == ";") {
            mensaje += "Asignacion correcta \n";
          } else {
            mensajes += "ERROR SINTACTICO: Se esperaba un ; \n";
            error = true;
            while (tokens[i] != ";") {
              if (i < tokens.length) i++;
              else {
                recursive = false;
                break;
              }
            }
          }
        } else {
          mensajes +=
            "ERROR SINTACTICO: Se esperaba una variable o un valor \n";
          error = true;
          while (tokens[i] != ";") {
            if (i < tokens.length) i++;
            else {
              recursive = false;
              break;
            }
          }
        }
        break;
      case "++":
      case "--":
        actual = tokens[++i];
        if (actual == ";") {
          mensaje += "Asignacion correcta \n";
        } else {
          mensaje += "ERROR SINTACTICO: Se esperaba un ; \n";
          error = true;
          while (tokens[i] != ";") {
            if (i < tokens.length) i++;
            else {
              recursive = false;
              break;
            }
          }
        }
        break;
      case ";":
        mensaje += "Asignacion correcta\n";
        break;
      default:
        mensaje += "ERROR SINTACTICO: Se esperaba un operador o un valor \n";
        error = true;
        while (tokens[i] != ";") {
          if (i < tokens.length) i++;
          else {
            recursive = false;
            break;
          }
        }
    }
  }
}

function identificador2(tokens, recursive) {
  mensaje += "Actualizacion de variable \n";
  var actual = tokens[++i];
  if (actual == "=") asignacion(tokens, recursive);
  else if (actual == "++" || actual == "--") {
    actual = tokens[++i];
    if (actual == ";") {
      mensaje += "Asignacion correcta \n";
    } else {
      mensaje += "ERROR SINTACTICO: se esperaba un ; \n";
      error = true;
      while (tokens[i] != ";") {
        if (i < tokens.length) i++;
        else {
          recursive = false;
          break;
        }
      }
    }
  } else {
    mensaje +=
      "ERROR SINTACTICO: se esperaba un = o un operador de asignacion \n";
    error = true;
    while (tokens[i] != ";") {
      if (i < tokens.length) i++;
      else {
        recursive = false;
        break;
      }
    }
  }
  mensaje += "Fin de actualizacion de variable \n";
  if (i < tokens.length) {
    recursive = true;
    i++;
  } else recursive = false;
  sintactico(tokens, recursive);
}

function sintactico(tokens, recursive) {
  var actual = tokens[i];
  // console.log(actual+"\n");

  switch (actual) {
    case "}":
      recursive = false;
      break;
    case "ifTok":
      iftok(tokens, recursive);
      break;
    case "whileTok":
      whiletok(tokens, recursive);
      break;
    case "varTok":
      vartok(tokens, recursive);
      break;
    case "elseTok":
      elsetok(tokens, recursive);
      break;
    case "identificador":
      identificador2(tokens, recursive);
      break;
    case "elseifTok":
      elseiftok(tokens, recursive);
      break;
    //default:
    //mensaje+=actual+"Operacion no definida\n";
  }
  if (recursive && i < tokens.length) {
    sintactico(tokens, recursive);
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
Router.post("/sintactico", function(req, res) {
  var tokens = req.body.tokens;
  //error=false;mensaje="F";
  (mensaje = ""), (i = 0), (error = false), (variables = []);
  sintactico(tokens, false);
  res.send(mensaje);
});
Router.post("/semantico", function(req, res) {
  var code = req.bodyparser.code;
  //var errores= semantico(code);
  //res.send(errores);
});

Router.post("/inter", function(req, res) {
  var query1 = req.body.var1;
  var code = intermedio(query1);
  res.send(code);
});

Router.all("*", function(req, res) {
  res.send("No se encontro el recurso solicitado");
  res.end();
});

module.exports = Router;
