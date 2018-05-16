var http = required("http");
var express = required("express");
var app = express();

function obtenerParametros(ev){
  var nomProduct = document.getElementById("inputNombreProducto");
  var nomCliente = document.getElementById("inputNombreCliente");
  var emailCliente = document.getElementById("inputEmailCliente");
  var celCliente = document.getElementById("inputCelularCliente");
  var cantidad = document.getElementById("inputCantidad");
  var dirCliente = document.getElementById("inputDireccion");

  var obj = {
    "producto": nomProduct,
    "cliente": nomCliente,
    "email": emailCliente,
    "celular": celCliente,
    "cantidad": cantidad,
    "direccion": dirCliente
  };

  var toJSON = JSON.stringify(obj);

  document.getElementById("spanJSON").textContent = toJSON;
}

var lista = new Array();

function enviar_mensaje(req, res){
   res.render('../compra', {
      lista: lista
   });
}

exports.get_enviar_mensaje = function(req, res){
   enviar_mensaje(req, res);
}

exports.post_enviar_mensaje = function(req, res){
   var asunto = req.body.asunto;
   var mensaje = req.body.mensaje;
   lista.push({
      asunto: asunto,
      mensaje: mensaje
   })
   enviar_mensaje(req, res);
}
