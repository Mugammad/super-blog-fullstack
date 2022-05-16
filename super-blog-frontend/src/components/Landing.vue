<template>
  <div id="landing">
	  <!-- <h1>Welcome to the Super Blog</h1> -->
    <p class="line-1 anim-typewriter">Welcome to the Super 
      <button class="blogs">
        <router-link to="/blogs" class="router">Blogs</router-link>
       </button>.
    </p>
    
    <!-- <nav>
    <ul>
      <li><router-link to="/"><a><i class="fa fa-home fa-lg"></i></a></router-link>
        <ul class="sub-menu menu-1">
          
      </ul></li>
        <li><router-link to="/blogs"><a><i class="far fa-newspaper"></i></a></router-link>
          <ul class="sub-menu menu-2">
           
        </ul></li>
        <li><router-link to="/about"><a><i class="fa fa-user fa-lg"></i></a></router-link>
            <ul class="sub-menu menu-3">
              <li><router-link to="/login"><a>Login</a></router-link></li>
            
          </ul></li>
    </ul>
  </nav>
   

<h1 class="text-pop-up-top">SUPER-BLOG</h1>

    <div class="container">
  
   <div class="slider">
  <input type="radio" name="testimonial" id="t-1" />
  <input type="radio" name="testimonial" id="t-2" />
  <input type="radio" name="testimonial" id="t-3" checked />
  <input type="radio" name="testimonial" id="t-4" />
  <input type="radio" name="testimonial" id="t-5" />
  <div class="testimonials mb-8">
    <label class="item" for="t-1">
      <div class="mycard">
        <p class="cardtitle">Category</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-2">
      <div class="mycard">
        <p class="cardtitle">Category</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-3">
      <div class="mycard">
        <p class="cardtitle">Category</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-4">
      <div class="mycard">
        <p class="cardtitle">Category</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-5">
      <div class="mycard">
        <p class="cardtitle">Category</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    
  </div>
  <div class="dots">
    <label for="t-1"></label>
    <label for="t-2"></label>
    <label for="t-3"></label>
    <label for="t-4"></label>
    <label for="t-5"></label>
  </div>
</div>
    </div> -->

  </div>
</template>

<script>
export default {

methods: {
  
}
}

</script>

<style scoped>
#landing{
  /* background-image: url("https://i.postimg.cc/7LQ7B9sw/landingbg.jpg"); */
   background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(99, 96, 96, 0.7)), url("https://i.postimg.cc/0j3Hcgwt/istockphoto-1125266973-612x612.jpg");
   height: 100vh !important;
   background-size: cover;
  
}

.container{
  padding-top: 2%;
}
.router {
  color: black;
  text-decoration: none;
}

.line-1{
    position: relative;
    color: white;
    top: 50%;  
    width: 19em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(34) 1s 1 normal both,
             blinkTextCursor 500ms steps(34) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 14em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
/* a{
  text-decoration: none;
  border: 2px solid black;
  padding: 20px;
} */

h1 {
	/* margin: 100px; */
	color: #fff;
  padding-top: 1%;
	font: 50px/1 "Arial";
	font-weight: 700;
	text-align: center;
  padding-top: 23%;
}
.blogs{
  border-radius: 7px;
}
.blogs:hover {
      background-color:#9298a8;
      transition: 0.7s;
  }

</style>