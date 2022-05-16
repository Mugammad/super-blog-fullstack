<template>
  <div id="blogs">
      <Navbar/>

      <div class="container my-5">
  <div class="row" v-if="blogs">
    <div v-for="(blog, index) of blogs" :key="index.id" class="col-sm-12 col-md-6 col-lg-10">
    <div class="col-6">
      <div class="component-card">
        <div class="component-card_image">
          <div class="component-card_image-inside">
            <img :src='blog.image' alt="" title="" style="" />
          </div>
        </div>
        <div class="blog-detail">
          <h3>{{ blog.title }}</h3>
          <label>December 4, 2019</label>
          <p>{{ blog.content }}</p>
          <a class="btn btn-read-more" href="#">Read More</a>
          </div>
        </div>
      </div>
      </div>
    </div>
 </div>

 

 	<!-- <div class="row" v-if="blogs">
     <div v-for="(blog, index) of blogs" :key="index.id">
    <div class="col-md-6">
    <div class="blog-card spring-fever">
  <div class="title-content">
    <h3><a href="#">{{ blog.title }}</a></h3>
    <div class="intro"> <a href="#">Inspiration</a> </div>
  </div>
  <div class="card-info">
    {{ blog.content }} 
    <router-link to="/blog" class="router">Read more</router-link>
  </div>
  <div class="utility-info">
    <ul class="utility-list">
       <button class="btn-secondary like-review">
    <i class="fa fa-heart" aria-hidden="true"></i><a href="#"> 2</a> Likes
  </button>
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
    </div>
    </div>
  </div> -->

  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Blogs",

  data() {
    return {
      blogs: [],
      title: "",
      image: "",
      category: "",
      content: "",
    };
  },
  mounted() {
    fetch("https://super-blog-backend.herokuapp.com/blogs", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.blogs = json;
        console.log(json)

      })
  }
};
</script>

<style scoped>

.component-card:hover img, .component-card:focus img {
	 transform: scale(1.1);
}
 .component-card_image {
	 background: #fff;
	 height: 0;
	 overflow: hidden;
	 padding-bottom: 56.2%;
	 position: relative;
}
 .component-card_image-inside {
	 height: 100%;
	 left: 0;
	 position: absolute;
	 top: 0;
	 width: 100%;
}
 .component-card_image-inside img {
	 background-size: cover;
	 height: auto !important;
	 transform: scale(1);
	 transition: all 0.25s ease-in-out;
	 width: 100%;
}
 .component-card .blog-detail {
	 background: #fff;
	 margin: 0 20px;
	 padding: 20px;
	 position: relative;
	 top: -80px;
}
 .component-card .blog-detail h3 {
	 font-size: 22px;
	 margin: 0;
	 text-transform: uppercase;
}
 .component-card .blog-detail label {
	 color: #737373;
	 font-size: 14px;
}
 .component-card .blog-detail p {
	 margin-bottom: 1rem;
	 margin-top: 0;
}
 .component-card .blog-detail .btn {
	 background-color: transparent;
	 border: 1px solid transparent;
	 border-radius: 0.25rem;
	 color: #212529;
	 display: inline-block;
	 font-size: 1rem;
	 font-weight: 400;
	 line-height: 1.5;
	 padding: 0.375rem 0.75rem;
	 text-align: center;
	 transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	 user-select: none;
	 vertical-align: middle;
}
 .component-card .blog-detail .btn:hover {
	 background-color: #fac821;
	 color: #212529;
	 text-decoration: none;
}
 .component-card .blog-detail .btn-read-more {
	 background: transparent;
	 border-radius: 0;
	 border: 2px solid #fac821;
	 outline: none;
	 text-transform: uppercase;
}
 

</style>
