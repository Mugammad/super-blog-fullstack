<template>
  <div id="signup">
    <div class="arrow">
    <router-link to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAECUlEQVRoge3a329URRQH8E8V6RJUaGFp45NEg1ZI5Z1gjD+LYFJ9U/ENgi/8CPqq/g8mJP4jSiAKVvwBigpqrC3oi0oUY0w0Vgia9WHmZq643b337t1tTfgmN5PcmTnnOzvnnHvmzHIDywtDNcoaxQPYhvtwFzZgdez/Az/hW3yF9/Aufq2RQ2U08DyO42+0Sj5/4Rh2Y3jA3MEqvIhLOVJXcAIvYxoTGMEt8RmJ76bxCk7GOdn8H3BY+HEGgp34JkfgY+zBmgqy1mIvzubkXcSOWpguggZezyn8BI/VKH8Kn+XkH9GH3RkXiLcEp92Pm+tWEmUexIK022N1Cd8obHcLs9hSl+AOmMRc1HkhcugJzZzAj7C+V4ElMCKE6Jbgk+NVBTUkc/pA+h4MEqtxWjKzSj6TOfas8LFbKqyTrOJI2ck7JccehE90w6QUAKaKTlolfSf294dXJRySnL+Qib0kfSf6EWKrYgXOCdwOdRs8LKQKLTzaX16V8ITA7ZIuu7JbihBVMC6kGx9WnN8NQ1IkfbbTwONx0J4KSsaF9LyFT9V7RMhjX9RxdLEBo0JafUX5BHBMWsSsHj5eBTCCq7hmEZ5PRSJvlxS8AV/EuV/jjuocC2Mm6nsye3FTrnNbbN8pIXBMOFdsERbxoOCI/cbJ2G7PXuQXMhHb8wWFNfGWcKydw8P4sUeCRZFxvLdd57ywXRPtOq9D3pz67RPtsFky5f/gl9jZLa9q4nOD9YnrsT7qv9yu82rsXNlBwJC0iH4+p7osZFiqE+DfPlIUrQpzBqqjimnNWRrTaupgWv9rZ8+b1oXYbiog6DIewpdCCJwx2J25J7bz2Yv8QmZje39BYT/jESE12SRkBIPamcnYtg2/08J2nSgpNG9mg/KZLEXZ1a5zREoa15YUPMikcVRKGm9fbNCxSGZvBQX5NP5chflF8ULU8WanQc/FQWcrKhkXFnG64vxuGBLOOi0802ngML6PAx/vE5lesEvg9p0C1xCHpVPecis+nBe4HSgyoSHVeg/2j1dpZD/wnBKXQjvipAUpZi8ltuJPgVPpq4wj0i+wrl5epdAUso4WXqsioCGUhVpCFFqKIvatOBM5nNHDPWNTSAOya4VmHewKYhTvS9dxPV/4bJS2dk7xXKwXbM3pnMeddQkek8xsQai9rqhLeA4rhOiUOfYZIZerFQ0pAGRpSF23r0PCVUb2ncgcu69371PStmdV+31C0lkWo0LulKUdmSnVeVvcEQ3BvLJ0piVkpDN4VahabhbC9sr4rBMKeU/HMTNSwSNLOw5Yon9ADAtV8aPCEaBsteQa3hASwJ4WUGfFfI3wp5rtwrn/biFc3xb7fxeOyBeFkH5K2JXfauRwA8sG/wDnLUmm9psk8QAAAABJRU5ErkJggg=="/></router-link>
    </div>
    <section class="text-center text-lg-start">

    <!-- Jumbotron -->
    <div class="container py-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

                 <div class="mb-3">
                     <select id="type" class="form-select" aria-label="Default select example">
                      <option value="Blogger">Blogger</option>
                       <option value="Reader">Reader</option>
                     </select>
                   <label for="type" class="form-label">WHAT ARE YOU?</label>
                </div>
              <br>
              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label class="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <!-- Register buttons -->
              <div class="text-center">
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                 <a ref="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fa fa-google" ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fa fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fa fa-github"></i>
                </button>
              </div>

             <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a
                class="link-danger"><router-link to="/login">Log in</router-link></a></p>

            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</section>
  </div>


</template>

<script>
export default {

}
</script>

<style scoped>
 #signup{
   background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(85, 80, 80, 0.7)), url("https://i.postimg.cc/15wrsMZJ/write-5243230-1920.jpg");
   background-size: cover;
   height: 100vh;
 }

  .cascading-right {
      margin-right: -50px;
    }

    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }
  
  #signup{
    padding-top: 90px;
  }
  
  .arrow{
    padding-right: 90%;
  }


</style>