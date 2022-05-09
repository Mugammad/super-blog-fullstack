<template>
  <div id="landing">

<h1 class="text-pop-up-top">SUPER-BLOG</h1>

    <div class="container">
          <h1 class="animate__animated animate__bounce">SUPER BLOG</h1>
      <div class="row">
    <div class="col-lg-6">

        <router-link to="/login">LOG IN</router-link>
      </div>
           <div class="col-lg-6">
        <router-link to="/signup">SIGN UP</router-link>
      </div>
      </div>
  
    </div>

  </div>
</template>

<script>
export default {

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
  padding-top: 10%;
}
a{
  text-decoration: none;
  border: 2px solid black;
  padding: 20px;
}

h1 {
	/* margin: 100px; */
	color: #fff;
  padding-top: 8%;
	font: 40px/1 "Arial";
	font-weight: 700;
	text-align: center;
}

.text-pop-up-top {
	-webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		both;
	animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

#replay {
	margin: 0px auto;
	padding: 20px;
	width: 50px;
	height: 50px;
	background: url("https://cdn1.iconfinder.com/data/icons/navigate-the-interface/256/Ui_glyphs_replay-512.png") 50% 50% no-repeat;
	background-size: 38px;
	text-indent: -99999px;
	border: 0px;
	display: block;
	outline-style: none;
	cursor: pointer;
}

#replay:hover {
	border-radius: 30px;
	border: 3px solid #414042;
}

@-webkit-keyframes text-pop-up-top {
	0% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		text-shadow: none;
	}
	100% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
			0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
			0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
	}
}
@keyframes text-pop-up-top {
	0% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		text-shadow: none;
	}
	100% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
			0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
			0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
	}
}

</style>