var express=require('express');
var path=require('path');
var app=express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.get('/', function (req,res) { res.render('index');});
app.get('/cadastro', function (req,res) { res.render('cadastro');});
app.get('/lista', function (req,res) { res.render('lista');});
app.listen(3000,function(){ console.log('Listening on port 3000');});