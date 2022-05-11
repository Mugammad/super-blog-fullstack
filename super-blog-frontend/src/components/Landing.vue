<template>
  <div id="landing">
	  
    <nav>
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
        <p class="cardtitle">Práctica</p>
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
        <p class="cardtitle">Práctica</p>
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
        <p class="cardtitle">Práctica</p>
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
        <p class="cardtitle">Práctica</p>
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
        <p class="cardtitle">Práctica</p>
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

  
    </div>

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
   background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(99, 96, 96, 0.7)), url("https://i.postimg.cc/7LQ7B9sw/landingbg.jpg");
   height: 100vh !important;
   background-size: cover;
  
}

.container{
  padding-top: 2%;
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
	font: 40px/1 "Arial";
	font-weight: 700;
	text-align: center;
}


nav {
  padding: 50px;
  text-align: center;
}

nav > ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  background: rgb(172, 166, 166);
}

nav > ul li {
  list-style: none;
  float: left;
  width: 150px;
  height: 65px;
  line-height: 65px;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  color: black;
  cursor: pointer;
}

nav > ul > li:hover{
  background: lightblue;
  border-radius: 5px;
}

nav ul >li > a{
  text-decoration: none;
  color: black;
}


ul.sub-menu{
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100%;
  padding: 0;
}

ul.sub-menu > li{
  background: #666;
}

ul.sub-menu > li >a{
  color: white;
}

ul.sub-menu li{
  display: none;
}

li:hover > ul.sub-menu li{
  display: block;
}


@keyframes menu-1{
  0% {
    opacity: 0;
    transform: rotateY(-90deg) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) translateY(0px);
  }
}


@keyframes menu-2{
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  
  60% {
    transform: rotateX(50deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}


@keyframes menu-3{
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  
  60% {
    opacity: 1;
    transform: scale(1.2);
  }
  
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
 
 /* --- */

.mycard {
  height: 100%;
  width: 100%;
  max-width: 35rem;
}
.cardtitle {
  font-weight: bold;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
  text-align: center;
}
.cardimg {
  /* margin-left: auto;
  margin-right: auto; */
  /* margin-top: 0.75rem; */
  width: 19rem !important;
  margin-bottom: 3.75rem;
  max-height: 10rem;
  border-radius: 9999px;
}
.carddescription {
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  text-align: center;
}

.slider {
  width: 100%;

  min-height: 495px;
}
.slider input {
  display: none;
}
.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 375px;
  perspective: 500px;
  margin-top: 5rem;
  overflow: hidden;
}
.testimonials .item {
  max-width: 30rem;
  border-radius: 1.5rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(30, 58, 138, var(--tw-border-opacity));
  top: 0;
  position: absolute;
  box-sizing: border-box;
  background-color: rgb(189, 184, 184);
  padding: 30px;
  width: 450px;
  text-align: center;
  transition: transform 0.4s;
  box-shadow: 0 0 10px rgba(248, 246, 246, 0.3);
  user-select: none;
  cursor: pointer;
}
.testimonials .item img {
  width: 100px;
  border-radius: 0%;
  border: 1px solid #3b344d;
}
.testimonials .item p {
  color: rgb(8, 8, 8);
}
.testimonials .item h2 {
  font-size: 14px;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots label {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413b52;
  margin: 7px;
  transition: transform 0.2s, color 0.2s;
}

/* First */
#t-1:checked ~ .dots label[for="t-1"] {
  transform: scale(2);
  background-color: #fff;
}
#t-1:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-1:checked ~ .testimonials label[for="t-1"] {
  z-index: 4;
}
#t-1:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);

  z-index: 3;
}
#t-1:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 2;
}
#t-1:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
  z-index: 1;
}
#t-1:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-60px);
}

/* Second */
#t-2:checked ~ .dots label[for="t-1"] {
  transform: scale(1.5);
}
#t-2:checked ~ .dots label[for="t-2"] {
  transform: scale(2);
  background-color: #fff;
}
#t-2:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-2:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
}
#t-2:checked ~ .testimonials label[for="t-2"] {
  z-index: 3;
}
#t-2:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}
#t-2:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 1;
}
#t-2:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
}

/* Third */
#t-3:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-3:checked ~ .dots label[for="t-3"] {
  transform: scale(2);
  background-color: #fff;
}
#t-3:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-3:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
}
#t-3:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
}
#t-3:checked ~ .testimonials label[for="t-3"] {
  z-index: 3;
}
#t-3:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}
#t-3:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
}

/* Fourth */
#t-4:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-4:checked ~ .dots label[for="t-4"] {
  transform: scale(2);
  background-color: #fff;
}
#t-4:checked ~ .dots label[for="t-5"] {
  transform: scale(1.5);
}
#t-4:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
}
#t-4:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
}
#t-4:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-4"] {
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
}

/* Fifth */
#t-5:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-5:checked ~ .dots label[for="t-5"] {
  transform: scale(2);
  background-color: #fff;
}
#t-5:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1200px) translateZ(-360px) translateY(-60px);
}
#t-5:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
  z-index: 1;
}
#t-5:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
  z-index: 2;
}
#t-5:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 3;
}
#t-5:checked ~ .testimonials label[for="t-5"] {
  z-index: 4;
}


</style>