<template>
<div class="login-box">
  <div class="login-logo">
    <a class="Company_name" href=""><b>D'o'NKey</b>Cargo</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">SignIn</p>

      <form>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email">
          <span class="fa fa-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
          <span class="fa fa-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox"> Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <p class="mb-1">
        <a class="anchor" href="#">I forgot my password</a>
      </p>
      
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</template>
<script>
    export default{
        name:"login",
        // data:{
        //  "username":"",
        //   "password":""
        // }

    }
</script>
<style scoped>

.btn {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
		border-radius: 2px !important;
    border:0px;
    transition: box-shadow .5s ease, transform .2s ease; 
}
.btn:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
}

.Company_name{
   background: -webkit-linear-gradient(#6e8efb, #a777e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.anchor{color:#6e8efb;}
.anchor:hover{color:#6e8efb;}
.anchor:focus{color:#6e8efb;}
</style>
