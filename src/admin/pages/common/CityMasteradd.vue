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
           <!-- <h1 class="m-0 text-dark">Add Courier Name</h1>-->
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add Product</li>
            </ol>
          </div><!-- /.col -->


        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

<!-- Content Body-->
<div class="row">
  <div class="col-md-3"></div>
<div class="col-md-6">
 <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Product</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" v-on:submit.prevent="addItem" method="post">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">ID</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" disabled v-model="id">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Product Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Product Name" v-model="cname" autofocus ref="search">
                  </div>
                  <div class="form-group row">
                    <div class="col-md-4"><label for="exampleInputPassword1">Choose Type</label></div>
                    <div class="col-md-3"><input type="checkbox" class="form-check-input" value="Courier" v-model="ccourier">Courier</div>
                    <div class="col-md-3"><input type="checkbox" class="form-check-input" value="Parcel" v-model="cparcel">Parcel </div>                    
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
 </div></div>
 </div>
</div>
</template>

<script>
import Sidebar from '../../components/sidebar'
import Header from '../../components/Header'
export default {
  name: 'ProductTypeadd',
  data(){return{item:{},id:'',cname:'',ccourier:'',cparcel:''
}},
  created:function(){ this.autoInc();},
  methods:{
    autoInc(){
      console.log("Auto");

      if (this.$route.params.id==undefined) {
           let uri = this.$hostName+ '/courier/ProductType/Auto';
              this.axios.get(uri).then((response) => {
                console.log(response.data[0]);
                  this.id = response.data[0]["id"];
                  this.item.id =this.id;
              });
            }
            else{
                let uri = this.$hostName+ '/courier/ProductType/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    //this.item = response.data;
                    this.id= response.data[0]["id"];
                    this.item.id=this.id;
                    this.cname= response.data[0]["ProductType"];
                    this.ccourier= false;
                    this.cparcel=false;
                    if(response.data[0]["isCourier"]=='true')
                    this.ccourier= true;
                    if(response.data[0]["isParcel"]=='true')
                    this.cparcel= true;
                    console.log(response.data[0]["isCourier"],response.data[0]["isParcel"]);
                });
            }
            this.$refs.search.focus();
    },
         addItem(){
        let uri = this.$hostName+ '/courier/ProductType/add';
        if(this.$route.params.id!=undefined)         
         uri = this.$hostName+ '/courier/ProductType/update';
        this.item.id=this.id;
        this.item.cname=this.cname;
        var ccourier1='false',cparcel1='false';
        console.log(this.ccourier,this.cparcel);
        debugger;
              if(this.ccourier == true) ccourier1='true';
              if(this.cparcel == true) cparcel1='true';
        this.item.ccourier=ccourier1;
        this.item.cparcel=cparcel1;
console.log(this.item);
         this.axios.post(uri, this.item).then((response) => 
         { this.$router.push({name: 'ProductTypevw'})})
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
