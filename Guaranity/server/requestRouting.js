var express = require("express");
var Router = express.Router();
var lexicografico = require("./lexicografico");
var sintactico= require("./sintactico");
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
Router.post("/sintactico_semantico", function(req,res){
var tokens=req.bodyparser.tokens;
var code= req.body.codigo;
var errores= sintactico(code, tokens);
res.send(errores);
});

Router.all("*", function(req, res) {
  res.send("No se encontro el recurso solicitado");
  res.end();
});


module.exports = Router;
