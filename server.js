'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
let contacts = require('./data');
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//GET, POST, PUT, DELETE, PATCH
app.get('/api/contacts', (request, response) =>{
    if(!contacts){
        response.status(404).json({message: "No se encontraron pedidos"});
    }
    response.json(contacts);
});
app.get('/api/contacts/:id', (request, response) => {
    const requestId = request.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    });

    if(!contact){
        response.status(404).json({message: "No se encontro el pedido"});
    }else{
        response.json(contact[0]);
    }
});

app.post('/api/contacts', (request, response) => {
    const contact = {
        id: request.body.id,
        nombre: request.body.nombre,
        email: request.body.email,
        numero: request.body.numero,
        cantidad: request.body.cantidad,
        direccion: request.body.direccion
    }
    contacts.push(contact);
    response.json(contact);
});

app.put('/api/contacts/:id', (request, response) =>{
    const requestId= request.param.id;

    let contact = contacts.filter(contact =>{
        return contact.id == requestId;
    })[0];
    const index = contacts.indexOf(contact);

    const keys = Object.keys(request.body);

    keys.forEach(key => {
        contact[key] = request.body[key];
    });
    contacts[index] = contact;
    response.json(contacts[index]);
});
  
app.delete('/api/contacts/:id', (request, response) =>{
    const requestId= request.param.id;

    let contact = contacts.filter(contact =>{
        return contact.id == requestId;
    })[0];
    const index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    response.json({message: `pedido ${contactId} deleted`});
});
const hostname = 'localhost';
const port =8080;

app.listen(port, hostname, ()  => {
    console.log(`Server is running at http://${hostname}:${port}`);
});