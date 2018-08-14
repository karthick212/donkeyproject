<template>
  <div id="app">
    
<div class="banner">
  <nav class="navbar navbar-expand-sm bg-light">
     <div class="container-fluid">

        <a class="navbar-brand" href="#">
        DonKeyCargo
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">About Us</a>
      <a class="nav-item nav-link" href="#">Login</a>
      <a class="nav-item nav-link" href="#">Register</a>
    </div>
  </div>
  </div>
</nav>
  <fig name="bg-banner" class="banner_bg">
   <img src="../assets/img/bg_banner.png"/>
 </fig>
 <div class="Check">
  <form action="">
    <h2 class="text-center header_s">Lorem Impus..</h2>
    <p class="">Lorem iojweio i ioewio iojewiojew</p>
    <div class="form-group">
      <input type="email" class="form-control" placeholder="From" id="email">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="To" id="pwd">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Type" id="pwd">
    </div>
    <button type="submit" class="btn btn-primary">SEARCH</button>
  </form>
</div>
</div>
<div class="content_1">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12 ">
          <h2 class="welcome_title">
            Lorem Ipsum is simply dummy
          </h2>
          <p class="welcome_cont">
             web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
          </p>
      </div>
    </div>
      <div class="row">
      <div class="col-lg-4">
          <div class="boxWrap">
             <h4 class="box_title">
              Lorem Ipsum is simply dummy
            </h4>
            <p class="box_cont">
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
              <div class="bottom_circle">
                  <div class="inside_circle">
                    <img src="../assets/img/truck.png"/>
                  </div>
              </div>
          </div>
      </div>
       <div class="col-lg-4">
          <div class="boxWrap">
            <h4 class="box_title">
              Lorem Ipsum is simply dummy
            </h4>
            <p class="box_cont">
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <div class="bottom_circle">
                  <div class="inside_circle">
                    <img src="../assets/img/track.png"/>
                  </div>
              </div>
          </div>
      </div>
       <div class="col-lg-4">
          <div class="boxWrap">
             <h4 class="box_title">
              Lorem Ipsum is simply dummy
            </h4>
            <p class="box_cont">
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <div class="bottom_circle">
                  <div class="inside_circle">
                    <img src="../assets/img/service.png"/>
                  </div>
              </div>
          </div>
      </div>


      <!-- <div class="col-lg-6 cnt">
        <h2>Modern Business Features</h2>
        <p>The Modern Business template by Start Bootstrap includes:</p>
        <ul>
          <li>
            <strong>Bootstrap v4</strong>
          </li>
          <li>jQuery</li>
          <li>Font Awesome</li>
          <li>Working contact form with validation</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde. omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid rounded" src="../assets/img/about.png" alt="">
      </div> -->
    </div>
  </div>

</div>
<div class="content_2">
    <div class="container">
        <div class="row ">
            <div class="col-md-12 text-center ">
                   <h2>
                Subscribe to our newsletter
              </h2>
              <br>
              <p>
                Lorem noioheoi  onewoi  iunewui fiuewu few
              </p>
              <form class="subscribe_form">
                  <div class="form-control">
                  
                      <input type="text" placeholder="Enter Your Email ID" class="subscribe_text"/>
                       <button type="submit" class="btn btn-sub btn-primary">SEARCH</button>
                  </div>
                  
              </form>
            </div>
        </div>
    </div>
</div>
	<div id="footer">
		<div class="container">
	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="#">DonKeyCargo</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="#" target="_blank">Sunlimetech</a></p>
				</div>
				</hr>
			</div>	
		</div>
	</div>
</div>
</template>
<script>
export default {
  name: "landingpage"
};
</script>
<style scoped>
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}
* {
  font-family: "Source Sans Pro", sans-serif;
}
nav {
  background-color: transparent !important;
  border-radius: 0px !important;
  transition: box-shadow 0.5s ease, transform 0.2s ease;
  color: #fff;
}
a.navbar-brand {
  color: #fff !important;
}
.nav-item {
  color: #fff !important;
}
.banner {
  width: 100%;
  height: 100vh;
  float: left;
  position: relative;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}
.banner_bg {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.Check {
  position: absolute;
  width: 30%;
  height: 500px;
  box-shadow: -7px 15px 47px rgba(0, 0, 0, 0.1),
    4px -4px 45px rgba(0, 0, 0, 0.1);
  left: 10%;
  top: 17%;
  border-radius: 1em;
  padding: 30px;
  text-align: center;
  background-color: #fff;
}
.form-control {
  border: 0px;
  border-bottom: 1px solid #ccc;
  height: 40px;
  border-radius: 0px;
}
.form-control:hover,
.form-control:focus {
  outline: none;
}
.form-group {
  margin: 15px 0px;
  float: left;
  width: 100%;
}
.header_s {
  margin: 15px 0px;
  float: left;
  width: 100%;
}

.left {
  float: left !important;
}

.content_1 {
  float: left;
  padding: 50px 0px;
  width: 100%;
  background-color: #fbfbfb;
}
.boxWrap {
  float: none;
  margin: auto;
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  height: 350px;
  box-shadow: 0px -2px 50px rgba(0, 0, 0, 0.055);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.box_title {
  font-size: 22px;
  font-family: "Source Sans Pro", sans-serif;
  float: left;
  width: 100%;
  padding: 20px 0px 5px 0px;
}

.box_cont {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12px;
  line-height: 2.5;
  color: rgba(0, 0, 0, 0.4);
}

.welcome_title {
  text-align: center;
  padding: 20px 0px 0=5px 0px;
  color: rgba(49, 49, 49, 0.747);
  font-family: "Source Sans Pro", sans-serif;
}
.welcome_cont {
  text-align: center;
  padding: 0px 15px 30px 15px;
  font-family: "Source Sans Pro", sans-serif;
  color: rgba(73, 72, 72, 0.404);
}
.bottom_circle {
  position: absolute;
  width: 170px;
  height: 170px;
  background: #eef3fd;
  bottom: -22px;
  right: -22px;
  z-index: 999;
  border-radius: 5em;
}
.inside_circle {
  position: absolute;
  width: 140px;
  height: 140px;
  background: #eaecf1;
  bottom: 15px;
  right: 15px;
  z-index: 999;
  border-radius: 5em;
  text-align: center;
  padding: 15px;
  line-height: 6;
}
.cnt {
  margin-top: 60px;
}

.btn {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 2px !important;
  border: 0px;
  transition: box-shadow 0.5s ease, transform 0.2s ease;
}
.btn:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

#footer {
  float: left;
  width: 100%;
  background: #212636 !important;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid #eeeeee;
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.content_2 {
  float: left;
  width: 100%;
  height: 450px;
  background: #e5e5e567;
  padding-top: 100px;
  padding-bottom: 0px;
}

.subscribe_form {
  text-align: center;
  float: none;
  margin: auto;
  max-width: 450px;
  padding: 0px;
  position: relative;
}

.subscribe_form .form-control {
  width: 370px;
  padding: 0;
  height: 50px;
  background: #fff;
  margin: auto;
  position: relative;
}

.subscribe_text {
  float: left;
  margin: 0;
  height: 70%;
  width: 80%;
  margin-top: 7px;
  border: 0px;
  margin-left: 10px;
  color: #ccc;
  padding-left: 30px;
}
.subscribe_text {
  content: "f003";
  position: relative;
}
.subscribe_text::placeholder {
  color: #ccc;
}
.subscribe_text:focus {
  outline: none;
}
.btn-sub {
  top: 7px;
  position: absolute;
  right: -25px;
}
@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>