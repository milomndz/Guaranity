var arreglos = require("./arreglos");

module.exports = function generador(codigo) {
  var aux = codigo;
  var tablaP = [];
  var tablaV = [];
  var saltoT = [];
  var contadorVar = 1;

  for (var index = 0; index < aux.length; index++) {
    const element = aux[index].token;

    switch (element) {
      case "ifTok":
        switch (aux[index + 2].token) {
          case "identificador":
            var numVar = tablaV.indexOf(aux[index + 2].lexema);
            var caracterVar = arreglos.comparativos.indexOf(
              aux[index + 3].lexema
            );
            tablaP.push("CAR " + (numVar + 1));
            if (aux[index + 4].token == "num") {
              tablaP.push("LIT " + aux[index + 4].lexema);
              tablaP.push("OPR 1" + caracterVar);
              tablaP.push("SAC ");
            }
            if (aux[index + 4].token == "identificador") {
              var numVar2 = tablaV.indexOf(aux[index + 4].lexema);
              tablaP.push("CAR " + (numVar2 + 1));
              tablaP.push("OPR 1" + caracterVar);
              tablaP.push("SAC ");
            }
            index += 4;
            break;
          case "num":
            tablaP.push("LIT " + aux[index].lexema);
            break;
        }
        break;
      case "forTok":
        tablaP.push("codigo p de for");
        break;
      case "elseTok":
        tablaP.push("codigo p de else");
        break;
      case "elseifTok":
        tablaP.push("codigo p de else");
        break;
      case "whileTok":
        tablaP.push("codigo p de while");
        break;
      case "functionTok":
        tablaP.push("codigo p de function");
        break;
      case "varTok":
        tablaP.push("INS " + contadorVar);
        tablaV.push(aux[index + 1].lexema);
        if (aux[index + 3].token == "=") {
          tablaP.push("LIT " + aux[index + 4].lexema);
          tablaP.push("SET " + contadorVar);
          index += 4;
        } else {
          index += 1;
        }
        contadorVar++;
        break;
      case "identificador":
        tablaV.push(element);
        tablaP.push("codigo p de variable");
        break;
      case "num":
        tablaP.push("codigo p de numeros");
        break;
      case "}":
        //Salto final
        break;
    }
    if (arreglos.comparativos.indexOf(element)) {
      //codigo p de elementos
    }
    if (arreglos.operaciones.indexOf(element)) {
      //codigo p de operaciones
    }
  }

  return tablaP;
};
