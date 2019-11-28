import { Component } from "@angular/core";
import { DataService } from "./services/data.service";
import { saveAs } from "file-saver";
import $ from "jquery";
import axios from "axios";

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "guaranity-ide";
  public codigoFull: string = "";
  public code: string = "";

  public tabla = [];
  todo = [
    {
      title: "var",
      class: "var",
      disabled: false,
      img: "./assets/equals.fw.png",
      condition: true
    },
    {
      title: "",
      class: "instruccion",
      disabled: false,
      condition: true
    },
    {
      title: "if",
      class: "if",
      disabled: false,
      condition: true
    },
    {
      title: "else",
      class: "else",
      disabled: false,
      condition: false
    },
    {
      title: "while",
      class: "while",
      disabled: false,
      condition: true
    },
    {
      title: "for",
      class: "for",
      disabled: false,
      condition: true
    },
    {
      title: "func",
      class: "function",
      disabled: false,
      condition: true
    }
  ];

  done = [];

  prueba(flag) {
    this.code = "";
    this.codigoFull = "";
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].className == "if1") {
        this.code += "if(" + inputs[i].value + "){\n";
        this.codigoFull += "if ( " + inputs[i].value + " ) { ";
      }
      if (inputs[i].className == "endif1") {
        this.code += "}\n";
        this.codigoFull += "}";
      }
      if (inputs[i].className == "elseif1") {
        this.code += "elseif(" + inputs[i].value + "){\n";
        this.codigoFull += "elseif ( " + inputs[i].value + " ){ ";
      }
      if (inputs[i].className == "endelseif1") {
        this.code += "}\n";
        this.codigoFull += "}";
      }
      if (inputs[i].className == "else1") {
        this.code += "else {\n";
        this.codigoFull += "else { ";
      }
      if (inputs[i].className == "endelse1") {
        this.code += "}\n";
        this.codigoFull += "}";
      }
      if (inputs[i].className == "instruccion1") {
        this.code += inputs[i].value + "\n";
        this.codigoFull += inputs[i].value + " ";
      }
      if (inputs[i].className == "while1") {
        this.code += "while(" + inputs[i].value + "){\n";
        this.codigoFull += "while ( " + inputs[i].value + " ) { ";
      }
      if (inputs[i].className == "endwhile1") {
        this.code += "}\n";
        this.codigoFull += "} ";
      }
      if (inputs[i].className == "for1") {
        this.code += "for(" + inputs[i].value + "){\n";
        this.codigoFull += "for ( " + inputs[i].value + " ) { ";
      }
      if (inputs[i].className == "endfor1") {
        this.code += "}\n";
        this.codigoFull += "}";
      }
      if (inputs[i].className == "var1") {
        this.code += "var " + inputs[i].value + ";\n";
        this.codigoFull += "var " + inputs[i].value + " ; ";
      }
      if (inputs[i].className == "function1") {
        this.code += "function(" + inputs[i].value + "){\n";
        this.codigoFull += "function " + inputs[i].value + " { ";
      }
      if (inputs[i].className == "endfunction1") {
        this.code += "}\n";
        this.codigoFull += "}";
      }
    }
    if (flag) {
      this.callLexicografico();
    } else {
      this.saveFile();
    }
  }

  splitCode() {
    return this.codigoFull.split(" ");
  }

  printTexto(texto) {
    var parrafo = document.createElement("p");
    var textCode = document.createTextNode(texto);
    parrafo.appendChild(textCode);
    document.getElementById("tabla1").appendChild(parrafo);
  }

  callLexicografico() {
    axios
      .post("http://server-test:5000/lexi", {
        var1: this.codigoFull
      })
      .then(res => {
        this.tabla = res.data;
        this.createTable();
        this.ToksTable = [];
        for (var i = 0; i < this.tabla.length; i++) {
          this.ToksTable.push(this.tabla[i].token);
        }
        this.callIntermedio();
      })
      .catch(error => {
        console.error(error);
      });
  }
  callSintactico() {
    axios
      .post("http://server-test:5000/sintactico", {
        tokens: this.ToksTable
      })
      .then(res => {
        alert(res.data);
        this.callIntermedio();
      })
      .catch(error => {
        console.error(error);
      });
  }

  callIntermedio() {
    axios
      .post("http://server-test:5000/inter", {
        var1: this.tabla
      })
      .then(res => {
        console.log("Codigo p");
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  limpiar() {
    this.done = [];
    this.codigoFull = "";
    this.clearTable();
  }

  createTable() {
    this.clearTable();
    var col = document.createElement("tr");
    var row1 = document.createElement("th");
    var textrow1 = document.createTextNode("Lexema");
    var row2 = document.createElement("th");
    var textrow2 = document.createTextNode("Token");
    row1.appendChild(textrow1);
    row2.appendChild(textrow2);
    col.appendChild(row1);
    col.appendChild(row2);
    document.getElementById("tabla1").appendChild(col);

    for (var i = 0; i < this.tabla.length; i++) {
      var col = document.createElement("tr");
      var row1 = document.createElement("td");
      var textrow1 = document.createTextNode(this.tabla[i].lexema);
      var row2 = document.createElement("td");
      var textrow2 = document.createTextNode(this.tabla[i].token);
      row1.appendChild(textrow1);
      row2.appendChild(textrow2);
      col.appendChild(row1);
      col.appendChild(row2);
      document.getElementById("tabla1").appendChild(col);
    }
  }

  clearTable() {
    var list = document.getElementById("tabla1");

    // As long as <ul> has a child node, remove it
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }

  insertarEnd(clase, num) {
    if (clase == " if ") {
      this.done.splice(num + 1, 0, {
        title: "end if",
        class: "endif",
        disabled: false,
        condition: false
      });
    }
    if (clase == " else ") {
      this.done.splice(num + 1, 0, {
        title: "end else",
        class: "endelse",
        disabled: false,
        condition: false
      });
    }
    if (clase == " elseif ") {
      this.done.splice(num + 1, 0, {
        title: "end elseif",
        class: "endelseif",
        disabled: false,
        condition: false
      });
    }
    if (clase == " for ") {
      this.done.splice(num + 1, 0, {
        title: "end for",
        class: "endfor",
        disabled: false,
        condition: false
      });
    }
    if (clase == " while ") {
      this.done.splice(num + 1, 0, {
        title: "end while",
        class: "endwhile",
        disabled: false,
        condition: false
      });
    }
    if (clase == " func ") {
      this.done.splice(num + 1, 0, {
        title: "end function",
        class: "endfunction",
        disabled: false,
        condition: false
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.item.element);
      this.insertarEnd(
        event.item.element.nativeElement.textContent,
        event.currentIndex
      );
      copyArrayItem(
        event.container.data,
        event.previousContainer.data,
        event.currentIndex,
        event.previousIndex
      );
    }
  }

  saveFile() {
    var blob = new Blob([this.code], { type: "text/plain" });
    saveAs(blob, "prueba.guat");
  }

  public especiales = [
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

  public tokens = [
    "ifTok",
    "elseifTok",
    "elseTok",
    "forTok",
    "whileTok",
    "functionTok",
    "loopTok",
    "intTok",
    "floatTok",
    "charTok",
    "booleanTok",
    "stringTok",
    "arrayTok",
    "varTok",
    "openfileTok",
    "readfileTok",
    "closefileTok",
    "trueTok",
    "falseTok",
    "readTok",
    "printTok",
    "returnTok"
  ];
  public caracteres = [
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

  public alfabeto = [
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

  public numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  lexicograficoFinal() {
    var codigo = this.codigoFull.toLowerCase();

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
              token = this.tokens[this.especiales.indexOf(aux)];

              this.tabla.push({
                lexema: aux,
                token: token
              });
              this.ToksTable.push(token);
            } else {
              token = "identificador";
              this.tabla.push({
                lexema: aux,
                token: token
              });
              this.ToksTable.push(token);
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
            this.tabla.push({
              lexema: aux,
              token: token
            });
            this.ToksTable.push(token);
          } else {
            token = "num";
            this.tabla.push({
              lexema: aux,
              token: token
            });
            this.ToksTable.push(token);
          }
          ++i;
          token = "";
          aux = codigo[i];
        }
      }

      if (codigo[i] === " " || this.caracteres.indexOf(codigo[i]) != -1) {
        if (this.especiales.indexOf(aux) != -1) {
          token = this.tokens[this.especiales.indexOf(aux)];
          this.tabla.push({
            lexema: aux,
            token: token
          });
          this.ToksTable.push(token);
          flag = false;
        } else if (this.caracteres.indexOf(codigo[i]) != -1) {
          var algo = codigo[i] + codigo[i + 1];
          flag = false;
          if (this.caracteres.indexOf(algo) != -1) {
            this.tabla.push({
              lexema: algo,
              token: algo
            });
            this.ToksTable.push(algo);
            i++;
          } else {
            this.tabla.push({
              lexema: codigo[i],
              token: codigo[i]
            });
            this.ToksTable.push(codigo[i]);
            flag = false;
          }

          flag = false;
        } else {
          if (aux != "" && aux != " ") {
            if (!isNaN(Number(aux))) {
              this.tabla.push({
                lexema: aux,
                token: "num"
              });
              this.ToksTable.push("num");
            } else {
              this.tabla.push({
                lexema: aux,
                token: "identificador"
              });
              this.ToksTable.push("identificador");
              flag = false;
            }
          }
        }
        aux = "";
        token = "";
      }
    }
    this.createTable();
    this.tokenActual = this.ToksTable[0];
    this.sintactico();
  }

  public position_actual = 0;

  // Todo esto lo ocupo para el Sintactico y unas llamadas en la función del Lexicografico
  public ToksTable = [];
  public comparadores = ["<", ">", ">='", ">=", "==", "!="];
  public posicion = 0;
  public tokenActual: string;
  public ret = true;
  sintactico() {
    switch (this.tokenActual) {
      case "}":
        //this.tokenActual=this.ToksTable[++this.posicion];
        this.ret = true;
        break;
      case "ifTok":
        this.tokenActual = this.ToksTable[++this.posicion];
        if (this.tokenActual == "(") {
          this.tokenActual = this.ToksTable[++this.posicion];
          if (
            this.tokenActual == "identificador" ||
            this.tokenActual == "num"
          ) {
            this.tokenActual = this.ToksTable[++this.posicion];
            if (this.comparadores.indexOf(this.tokenActual) !== -1) {
              this.tokenActual = this.ToksTable[++this.posicion];
              if (
                this.tokenActual == "identificador" ||
                this.tokenActual == "num"
              ) {
                this.tokenActual = this.ToksTable[++this.posicion];
                if (this.tokenActual == ")") {
                  this.tokenActual = this.ToksTable[++this.posicion];
                  if (this.tokenActual == "{") {
                    this.tokenActual = this.ToksTable[++this.posicion];
                    console.log("Condición del if Correcta");
                    this.ret = true;
                    this.sintactico();
                    this.ret = false;
                    if (this.tokenActual == "}") {
                      this.tokenActual = this.ToksTable[++this.posicion];
                      console.log("If Correcto");
                    } else {
                      console.log('ERROR SINTACTICO: Se  esperaba una "}"');
                    }
                  } else {
                    console.log('ERROR SINTACTICO: Se  esperaba una "{"');
                  }
                } else {
                  console.log('ERROR SINTACTICO: Se  esperaba un ")"');
                }
              } else {
                console.log(
                  "ERROR SINTACTICO: Se  esperaba un identificador o un numero"
                );
              }
            } else {
              console.log("ERROR SINTACTICO: Se  esperaba un comparador");
            }
          } else {
            console.log(
              "ERROR SINTACTICO: Se  esperaba un identificador o un número"
            );
          }
        } else {
          console.log('ERROR SINTACTICO: Se  esperaba un "("');
        }
        break;
      case "whileTok":
        this.tokenActual = this.ToksTable[++this.posicion];
        if (this.tokenActual == "(") {
          this.tokenActual = this.ToksTable[++this.posicion];
          if (
            this.tokenActual == "identificador" ||
            this.tokenActual == "num"
          ) {
            this.tokenActual = this.ToksTable[++this.posicion];
            if (this.comparadores.indexOf(this.tokenActual) !== -1) {
              this.tokenActual = this.ToksTable[++this.posicion];
              if (
                this.tokenActual == "identificador" ||
                this.tokenActual == "num"
              ) {
                this.tokenActual = this.ToksTable[++this.posicion];
                if (this.tokenActual == ")") {
                  this.tokenActual = this.ToksTable[++this.posicion];
                  if (this.tokenActual == "{") {
                    this.tokenActual = this.ToksTable[++this.posicion];
                    console.log("Condición del while Correcta");
                    this.ret = true;
                    this.sintactico();
                    this.ret = false;
                    if (this.tokenActual == "}") {
                      this.tokenActual = this.ToksTable[++this.posicion];
                      console.log("While Correcto");
                    } else {
                      console.log('ERROR SINTACTICO: Se  esperaba una "}"');
                    }
                  } else {
                    console.log('ERROR SINTACTICO: Se  esperaba una "{"');
                  }
                } else {
                  console.log('ERROR SINTACTICO: Se  esperaba un ")"');
                }
              } else {
                console.log(
                  "ERROR SINTACTICO: Se  esperaba un identificador o un numero"
                );
              }
            } else {
              console.log("ERROR SINTACTICO: Se  esperaba un comparador");
            }
          } else {
            console.log(
              "ERROR SINTACTICO: Se  esperaba un identificador o un número"
            );
          }
        } else {
          console.log('ERROR SINTACTICO: Se  esperaba un "("');
        }
        break;
      case "varTok":

      default:
        console.log('ERROR SINTACTICO: Se  esperaba una instrucción o una "}');
        break;
    }
    if (!this.ret && this.posicion < this.ToksTable.length) {
      this.sintactico();
    }
  }
}
