var express = require('express');
var app = express();
var itemRoutes = express.Router();
var dbconfig = require('../config/DB');
//var tbl_CourierCompany = require('../server/controller/admin-Controller');

//Courier Company
itemRoutes.route('/CourierCompany').get(function(req,res,err){
//tbl_CourierCompany.FetchAllDetails((err,result,fields)=>{
dbconfig.query("select * from tbl_CourierCompany",(err,result,fields)=>{
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

itemRoutes.route('/CourierCompany/Auto').get(function(req,res,err){
var itemss=  dbconfig.query("select ifnull(max(id),0)+1 as id from tbl_CourierCompany",function(err,result,fields){
  console.log("id:"+result);
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

itemRoutes.route('/CourierCompany/Del/:id').get(function(req,res,err){
var id = req.params.id;  
  var qry="Delete from tbl_CourierCompany where id="+id; 
var itemss=  dbconfig.query(qry,function(err,result,fields){
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});
 
 itemRoutes.route('/CourierCompany/add').post(function(req,res,err){
  var qry="INSERT INTO tbl_CourierCompany VALUES (?,?,?);"
  var itm= dbconfig.query(qry, [req.body.id, req.body.cname,1]);
  //adminActivity.RegisterAdmin(req.body, (err, count) => {
        if (err) {
             res.json(err);
         }
         else {
             res.json(req.body);
         }
    //})
});

 itemRoutes.route('/CourierCompany/update').post(function(req,res,err){
  var qry="update tbl_CourierCompany set CourierName=? where id=?";
  var itm= dbconfig.query(qry, [req.body.cname,req.body.id]);
  //adminActivity.RegisterAdmin(req.body, (err, count) => {
         if (err) {
             res.json(err);
         }
         else {
             res.json(req.body);
         }
    //})
});

itemRoutes.route('/CourierCompany/edit/:id').get(function(req,res,err){
  var id = req.params.id;  
  var qry="select * from tbl_CourierCompany where id="+id; 
var itemss=  dbconfig.query(qry,function(err,result,fields){
  console.log(result);
if(err){
  res.json(err);
}else{
  res.json(result);
}  
});  
});

module.exports = itemRoutes;

