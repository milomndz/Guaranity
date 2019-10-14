class lexicografico {
  especiales = [
    "if",
    "elseif",
    "else",
    "for",
    "while",
    "function",
    "loop",
    "int",
    "float",
    "char",
    "boolean",
    "string",
    "array",
    "var",
    "openfile",
    "readfile",
    "closefile",
    "true",
    "false",
    "read",
    "print",
    "return"
  ];
  caracteres = [
    ";",
    "{",
    "}",
    "<",
    ">",
    "==",
    "<=",
    ">=",
    "!=",
    "+",
    "-",
    "*",
    "/",
    "%",
    "++",
    "--",
    "=",
    "#",
    "[",
    "]",
    "(",
    ")"
  ];

  alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "_"
  ];

  numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  lexicograficoFinal(cadena) {
    var codigo = cadena.toLowerCase();
    var tabla = [];
    let aux = "";
    var token = "";
    var flag = false;
    for (let i = 0; i < codigo.length; i++) {
      if (this.alfabeto.indexOf(codigo[i]) != -1) {
        aux += codigo[i];
        flag = true;
        if (this.caracteres.indexOf(codigo[i + 1]) != -1) {
          if (flag) {
            flag = false;
            if (this.especiales.indexOf(aux) != -1) {
              token = aux + "Token";

              tabla.push({
                lexema: aux,
                token: token
              });
            } else {
              token = "identificador";
              tabla.push({
                lexema: aux,
                token: token
              });
            }
          }
          ++i;
          token = "";
          aux = codigo[i];
        }
      }
      if (this.numero.indexOf(codigo[i]) != -1) {
        aux += codigo[i];
        if (this.caracteres.indexOf(codigo[i + 1]) != -1) {
          if (flag) {
            token = "identificador";
            flag = false;
            tabla.push({
              lexema: aux,
              token: token
            });
          } else {
            token = "num";
            tabla.push({
              lexema: aux,
              token: token
            });
          }
          ++i;
          token = "";
          aux = codigo[i];
        }
      }

      if (codigo[i] === " " || this.caracteres.indexOf(codigo[i]) != -1) {
        if (this.especiales.indexOf(aux) != -1) {
          token += aux + "Token";
          tabla.push({
            lexema: aux,
            token: token
          });
          flag = false;
        } else if (this.caracteres.indexOf(codigo[i]) != -1) {
          var algo = codigo[i] + codigo[i + 1];
          flag = false;
          if (this.caracteres.indexOf(algo) != -1) {
            tabla.push({
              lexema: algo,
              token: algo
            });
            i++;
          } else {
            tabla.push({
              lexema: codigo[i],
              token: codigo[i]
            });
            flag = false;
          }

          flag = false;
        } else {
          if (aux != "" && aux != " ") {
            if (!isNaN(Number(aux))) {
              tabla.push({
                lexema: aux,
                token: "num"
              });
            } else {
              tabla.push({
                lexema: aux,
                token: "identificador"
              });
              flag = false;
            }
          }
        }
        aux = "";
        token = "";
      }
    }
    return tabla;
  }
}
