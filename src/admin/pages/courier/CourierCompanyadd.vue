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
              <li class="breadcrumb-item active">Add Courier Name</li>
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
                <h3 class="card-title">Add Courier</h3>
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
                    <label for="exampleInputPassword1">Courier Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Courier Name" v-model="cname" autofocus ref="focus">
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
  name: 'CourierCompanyadd',
  data(){return{item:{},id:'',cname:''
}},
  created:function(){ this.autoInc();},
  methods:{
    autoInc(){
      console.log("Auto");

      if (this.$route.params.id==undefined) {
           let uri = this.$hostName+ '/courier/CourierCompany/Auto';
              this.axios.get(uri).then((response) => {
                console.log(response.data[0]);
                  this.id = response.data[0]["id"];
                  this.item.id =this.id;
              });
            }
            else{
                let uri = this.$hostName+ '/courier/CourierCompany/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    //this.item = response.data;
                    this.id= response.data[0]["id"];
                    this.item.id=this.id;
                    this.cname= response.data[0]["CourierName"];                    
                });
            }
            this.$refs.focus.focus();            
    },
         addItem(){
        let uri = this.$hostName+ '/courier/CourierCompany/add';
        if(this.$route.params.id!=undefined)         
         uri = this.$hostName+ '/courier/CourierCompany/update';
        this.item.id=this.id;
        this.item.cname=this.cname;
        
         this.axios.post(uri, this.item).then((response) => 
         { this.$router.push({name: 'CourierCompanyvw'})})
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
