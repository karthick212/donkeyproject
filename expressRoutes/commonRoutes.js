var express = require('express');
var app = express();
var itemRoutes = express.Router();
var dbconfig = require('../config/DB');
//var tbl_CourierCompany = require('../server/controller/admin-Controller');

//Product Type
itemRoutes.route('/ProductType').get(function(req,res,err){
//tbl_ProductType.FetchAllDetails((err,result,fields)=>{
dbconfig.query("select * from tbl_ProductType",(err,result,fields)=>{
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

itemRoutes.route('/ProductType/Auto').get(function(req,res,err){
var itemss=  dbconfig.query("select ifnull(max(id),0)+1 as id from tbl_ProductType",function(err,result,fields){
  console.log("id:"+result);
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

itemRoutes.route('/ProductType/Del/:id').get(function(req,res,err){
var id = req.params.id;  
  var qry="Delete from tbl_ProductType where id="+id; 
var itemss=  dbconfig.query(qry,function(err,result,fields){
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});
 
 itemRoutes.route('/ProductType/add').post(function(req,res,err){
  console.log(req.body.ccourier,req.body.cparcel);
  var qry="INSERT INTO tbl_ProductType VALUES (?,?,?,?,?);"
  var itm= dbconfig.query(qry, [req.body.id, req.body.cname,1,req.body.ccourier,req.body.cparcel]);
  //adminActivity.RegisterAdmin(req.body, (err, count) => {
        if (err) {
             res.json(err);
         }
         else {
             res.json(req.body);
         }
    //})
});

 itemRoutes.route('/ProductType/update').post(function(req,res,err){
  console.log(req.body.ccourier,req.body.cparcel);
  var qry="update tbl_ProductType set ProductType=?,isCourier=?,isParcel=? where id=?";
  var itm= dbconfig.query(qry, [req.body.cname,req.body.ccourier,req.body.cparcel,req.body.id]);
  //adminActivity.RegisterAdmin(req.body, (err, count) => {
         if (err) {
             res.json(err);
         }
         else {
             res.json(req.body);
         }
    //})
});

itemRoutes.route('/ProductType/edit/:id').get(function(req,res,err){
  var id = req.params.id;  
  var qry="select * from tbl_ProductType where id="+id; 
var itemss=  dbconfig.query(qry,function(err,result,fields){
  // console.log(result);
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

//State Master
itemRoutes.route('/StateMaster').get(function(req,res,err){
//tbl_ProductType.FetchAllDetails((err,result,fields)=>{
dbconfig.query("select * from tbl_State",(err,result,fields)=>{
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

itemRoutes.route('/StateMaster/Auto').get(function(req,res,err){
var itemss=  dbconfig.query("select ifnull(max(id),0)+1 as id from tbl_State",function(err,result,fields){
  console.log("id:"+result);
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

itemRoutes.route('/StateMaster/Del/:id').get(function(req,res,err){
var id = req.params.id;  
  var qry="Delete from tbl_State where id="+id; 
var itemss=  dbconfig.query(qry,function(err,result,fields){
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});
 
 itemRoutes.route('/StateMaster/add').post(function(req,res,err){
  console.log(req.body.ccourier,req.body.cparcel);
  var qry="INSERT INTO tbl_State VALUES (?,?,?,?,?);"
  var itm= dbconfig.query(qry, [req.body.id, req.body.cname,1,req.body.ccourier,req.body.cparcel]);
  //adminActivity.RegisterAdmin(req.body, (err, count) => {
        if (err) {
             res.json(err);
         }
         else {
             res.json(req.body);
         }
    //})
});

 itemRoutes.route('/StateMaster/update').post(function(req,res,err){
  console.log(req.body.ccourier,req.body.cparcel);
  var qry="update tbl_State set ProductType=?,isCourier=?,isParcel=? where id=?";
  var itm= dbconfig.query(qry, [req.body.cname,req.body.ccourier,req.body.cparcel,req.body.id]);
  //adminActivity.RegisterAdmin(req.body, (err, count) => {
         if (err) {
             res.json(err);
         }
         else {
             res.json(req.body);
         }
    //})
});

itemRoutes.route('/StateMaster/edit/:id').get(function(req,res,err){
  var id = req.params.id;  
  var qry="select * from tbl_State where id="+id; 
var itemss=  dbconfig.query(qry,function(err,result,fields){
  // console.log(result);
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});
module.exports = itemRoutes;

