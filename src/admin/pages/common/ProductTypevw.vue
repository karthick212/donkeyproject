<template>
   <div>
    <Header></Header>
  <Sidebar></Sidebar>

  <div class="content-wrapper">
  <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Product Master</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Product Master</li>
            </ol>
          </div><!-- /.col -->


        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

<!-- Content Body-->

<div class="col-md-12">
<div class="card">
              <div class="card-header">
                <h3 class="card-title text-right"><router-link :to="{ name: 'ProductTypeadd' }" class="btn btn-primary">Add Product</router-link></h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table table-condensed">
                  <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 85%">Product Name</th>
                    <th style="width: 5%;">Action</th>
                  </tr>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.id }}</td>
                    <td>{{ item.ProductType }}</td>
                    <td><router-link :to="{name: 'ProductTypeadd',params:{id: item.id}}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteItem(item.id)">Delete</button></td>                   
                </tr>
            </tbody>

                </table>
              </div>
              <!-- /.card-body -->
            </div>
</div>
</div>
</div>

</template>

<script>
import Sidebar from '../../components/sidebar'
import Header from '../../components/Header'
export default {
/* eslint-disable */
  name: 'ProductTypevw',
  data(){return{items:[]}},
  created:function(){
    this.FetchItem();
  },
  methods:{ FetchItem(){
     let uri = this.$hostName+ '/common/ProductType';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
  },
  deleteItem(id1){
  var r=  confirm('Are u want to Delete?');
  if(r==true){
     let uri = this.$hostName+ '/common/ProductType/Del/'+id1;
     console.log("Del"+id1);
     this.items.splice(1, 1);
              this.axios.get(uri).then((response) => {
                //console.log(response.data);
                 this.$router.push({name: 'ProductTypevw'})
              });}
  }
},
  components: {
    Sidebar,
    //App,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
