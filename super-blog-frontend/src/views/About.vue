<template>
  <div class="about">
    <h1>This is an about page</h1>

  <button class="heart_btn">
    <span id="icon"><i class="far fa-heart"></i></span>
    <span id="count">0</span> react
  </button>

 

  </div>
</template>

<script>

export default{

// data() {
//   return{

//   }
// },

// methods: {
// const likeBtn = document.querySelector(".heart_btn");
// const likeIcon = document.querySelector("#icon");
// const count = document.querySelector("#count");

// // button clicked

// likeBtn.addEventListener("click", () => {
//   console.log("Hello")
// })

// }
// }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

/* ----- */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heart_btn {
  padding: 10px 15px;
  background: red;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  border: none;
  color:white;
  border-radius: 5px ;
  outline: none;
  cursor: pointer;
}


</style>
