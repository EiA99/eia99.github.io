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

  var spanJ = getElementById("spanJSON");
  spanJ.textContent = toJSON;
  var text = spanJSON.textContent;
}
