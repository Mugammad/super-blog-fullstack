<template>
  <div id="blog">
    <div class="arrow">
    <router-link to="/blogs"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAECUlEQVRoge3a329URRQH8E8V6RJUaGFp45NEg1ZI5Z1gjD+LYFJ9U/ENgi/8CPqq/g8mJP4jSiAKVvwBigpqrC3oi0oUY0w0Vgia9WHmZq643b337t1tTfgmN5PcmTnnOzvnnHvmzHIDywtDNcoaxQPYhvtwFzZgdez/Az/hW3yF9/Aufq2RQ2U08DyO42+0Sj5/4Rh2Y3jA3MEqvIhLOVJXcAIvYxoTGMEt8RmJ76bxCk7GOdn8H3BY+HEGgp34JkfgY+zBmgqy1mIvzubkXcSOWpguggZezyn8BI/VKH8Kn+XkH9GH3RkXiLcEp92Pm+tWEmUexIK022N1Cd8obHcLs9hSl+AOmMRc1HkhcugJzZzAj7C+V4ElMCKE6Jbgk+NVBTUkc/pA+h4MEqtxWjKzSj6TOfas8LFbKqyTrOJI2ck7JccehE90w6QUAKaKTlolfSf294dXJRySnL+Qib0kfSf6EWKrYgXOCdwOdRs8LKQKLTzaX16V8ITA7ZIuu7JbihBVMC6kGx9WnN8NQ1IkfbbTwONx0J4KSsaF9LyFT9V7RMhjX9RxdLEBo0JafUX5BHBMWsSsHj5eBTCCq7hmEZ5PRSJvlxS8AV/EuV/jjuocC2Mm6nsye3FTrnNbbN8pIXBMOFdsERbxoOCI/cbJ2G7PXuQXMhHb8wWFNfGWcKydw8P4sUeCRZFxvLdd57ywXRPtOq9D3pz67RPtsFky5f/gl9jZLa9q4nOD9YnrsT7qv9yu82rsXNlBwJC0iH4+p7osZFiqE+DfPlIUrQpzBqqjimnNWRrTaupgWv9rZ8+b1oXYbiog6DIewpdCCJwx2J25J7bz2Yv8QmZje39BYT/jESE12SRkBIPamcnYtg2/08J2nSgpNG9mg/KZLEXZ1a5zREoa15YUPMikcVRKGm9fbNCxSGZvBQX5NP5chflF8ULU8WanQc/FQWcrKhkXFnG64vxuGBLOOi0802ngML6PAx/vE5lesEvg9p0C1xCHpVPecis+nBe4HSgyoSHVeg/2j1dpZD/wnBKXQjvipAUpZi8ltuJPgVPpq4wj0i+wrl5epdAUso4WXqsioCGUhVpCFFqKIvatOBM5nNHDPWNTSAOya4VmHewKYhTvS9dxPV/4bJS2dk7xXKwXbM3pnMeddQkek8xsQai9rqhLeA4rhOiUOfYZIZerFQ0pAGRpSF23r0PCVUb2ncgcu69371PStmdV+31C0lkWo0LulKUdmSnVeVvcEQ3BvLJ0piVkpDN4VahabhbC9sr4rBMKeU/HMTNSwSNLOw5Yon9ADAtV8aPCEaBsteQa3hASwJ4WUGfFfI3wp5rtwrn/biFc3xb7fxeOyBeFkH5K2JXfauRwA8sG/wDnLUmm9psk8QAAAABJRU5ErkJggg=="/></router-link>
    </div>
      <h1>BLOG</h1>
      <!-- <router-link to="/blogs"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAECUlEQVRoge3a329URRQH8E8V6RJUaGFp45NEg1ZI5Z1gjD+LYFJ9U/ENgi/8CPqq/g8mJP4jSiAKVvwBigpqrC3oi0oUY0w0Vgia9WHmZq643b337t1tTfgmN5PcmTnnOzvnnHvmzHIDywtDNcoaxQPYhvtwFzZgdez/Az/hW3yF9/Aufq2RQ2U08DyO42+0Sj5/4Rh2Y3jA3MEqvIhLOVJXcAIvYxoTGMEt8RmJ76bxCk7GOdn8H3BY+HEGgp34JkfgY+zBmgqy1mIvzubkXcSOWpguggZezyn8BI/VKH8Kn+XkH9GH3RkXiLcEp92Pm+tWEmUexIK022N1Cd8obHcLs9hSl+AOmMRc1HkhcugJzZzAj7C+V4ElMCKE6Jbgk+NVBTUkc/pA+h4MEqtxWjKzSj6TOfas8LFbKqyTrOJI2ck7JccehE90w6QUAKaKTlolfSf294dXJRySnL+Qib0kfSf6EWKrYgXOCdwOdRs8LKQKLTzaX16V8ITA7ZIuu7JbihBVMC6kGx9WnN8NQ1IkfbbTwONx0J4KSsaF9LyFT9V7RMhjX9RxdLEBo0JafUX5BHBMWsSsHj5eBTCCq7hmEZ5PRSJvlxS8AV/EuV/jjuocC2Mm6nsye3FTrnNbbN8pIXBMOFdsERbxoOCI/cbJ2G7PXuQXMhHb8wWFNfGWcKydw8P4sUeCRZFxvLdd57ywXRPtOq9D3pz67RPtsFky5f/gl9jZLa9q4nOD9YnrsT7qv9yu82rsXNlBwJC0iH4+p7osZFiqE+DfPlIUrQpzBqqjimnNWRrTaupgWv9rZ8+b1oXYbiog6DIewpdCCJwx2J25J7bz2Yv8QmZje39BYT/jESE12SRkBIPamcnYtg2/08J2nSgpNG9mg/KZLEXZ1a5zREoa15YUPMikcVRKGm9fbNCxSGZvBQX5NP5chflF8ULU8WanQc/FQWcrKhkXFnG64vxuGBLOOi0802ngML6PAx/vE5lesEvg9p0C1xCHpVPecis+nBe4HSgyoSHVeg/2j1dpZD/wnBKXQjvipAUpZi8ltuJPgVPpq4wj0i+wrl5epdAUso4WXqsioCGUhVpCFFqKIvatOBM5nNHDPWNTSAOya4VmHewKYhTvS9dxPV/4bJS2dk7xXKwXbM3pnMeddQkek8xsQai9rqhLeA4rhOiUOfYZIZerFQ0pAGRpSF23r0PCVUb2ncgcu69371PStmdV+31C0lkWo0LulKUdmSnVeVvcEQ3BvLJ0piVkpDN4VahabhbC9sr4rBMKeU/HMTNSwSNLOw5Yon9ADAtV8aPCEaBsteQa3hASwJ4WUGfFfI3wp5rtwrn/biFc3xb7fxeOyBeFkH5K2JXfauRwA8sG/wDnLUmm9psk8QAAAABJRU5ErkJggg=="/></router-link> -->
      
      <div class="container-fluid">

          <div class="card" >
  <img src="../assets/blog.jpg" class="card-img-top" alt="../assets/blog.jpg">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<div>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
EDIT
</button>
<button class="btn">DELETE</button>
</div>
  </div>
</div>
      </div>


      

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDIT BLOG</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  
  <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Title</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Body</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput3" class="form-label">Image URL</label>
  <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Another input placeholder">
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
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
.arrow{
  padding-right: 90%;
  padding-top: 1%;
}

.container-fluid {
  width: 60%;
  
}
.btn {
	text-align: center;
  position: relative;
  padding: 15px 20px;
  margin: 3px 3px 3px;
  background:  #dadada;
  color: black;
}
.card{
  border-radius: 15px;
  border: solid black 5px;
   background-color: rgb(91, 91, 91);
  height: 102vh;
  margin-bottom: 15px;
}
.card-img-top{
padding: 7px 7px 7px 7px;
  border-radius: 15px;

}
.card-title{
  font-size: xx-large;
  font-family: cursive;
}
.card-text{
  font-size: large;
}
</style>