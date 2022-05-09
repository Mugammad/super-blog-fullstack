<template>
  <div id="profile">
     <div class="arrow">
       <router-link to="/blogs"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAECUlEQVRoge3a329URRQH8E8V6RJUaGFp45NEg1ZI5Z1gjD+LYFJ9U/ENgi/8CPqq/g8mJP4jSiAKVvwBigpqrC3oi0oUY0w0Vgia9WHmZq643b337t1tTfgmN5PcmTnnOzvnnHvmzHIDywtDNcoaxQPYhvtwFzZgdez/Az/hW3yF9/Aufq2RQ2U08DyO42+0Sj5/4Rh2Y3jA3MEqvIhLOVJXcAIvYxoTGMEt8RmJ76bxCk7GOdn8H3BY+HEGgp34JkfgY+zBmgqy1mIvzubkXcSOWpguggZezyn8BI/VKH8Kn+XkH9GH3RkXiLcEp92Pm+tWEmUexIK022N1Cd8obHcLs9hSl+AOmMRc1HkhcugJzZzAj7C+V4ElMCKE6Jbgk+NVBTUkc/pA+h4MEqtxWjKzSj6TOfas8LFbKqyTrOJI2ck7JccehE90w6QUAKaKTlolfSf294dXJRySnL+Qib0kfSf6EWKrYgXOCdwOdRs8LKQKLTzaX16V8ITA7ZIuu7JbihBVMC6kGx9WnN8NQ1IkfbbTwONx0J4KSsaF9LyFT9V7RMhjX9RxdLEBo0JafUX5BHBMWsSsHj5eBTCCq7hmEZ5PRSJvlxS8AV/EuV/jjuocC2Mm6nsye3FTrnNbbN8pIXBMOFdsERbxoOCI/cbJ2G7PXuQXMhHb8wWFNfGWcKydw8P4sUeCRZFxvLdd57ywXRPtOq9D3pz67RPtsFky5f/gl9jZLa9q4nOD9YnrsT7qv9yu82rsXNlBwJC0iH4+p7osZFiqE+DfPlIUrQpzBqqjimnNWRrTaupgWv9rZ8+b1oXYbiog6DIewpdCCJwx2J25J7bz2Yv8QmZje39BYT/jESE12SRkBIPamcnYtg2/08J2nSgpNG9mg/KZLEXZ1a5zREoa15YUPMikcVRKGm9fbNCxSGZvBQX5NP5chflF8ULU8WanQc/FQWcrKhkXFnG64vxuGBLOOi0802ngML6PAx/vE5lesEvg9p0C1xCHpVPecis+nBe4HSgyoSHVeg/2j1dpZD/wnBKXQjvipAUpZi8ltuJPgVPpq4wj0i+wrl5epdAUso4WXqsioCGUhVpCFFqKIvatOBM5nNHDPWNTSAOya4VmHewKYhTvS9dxPV/4bJS2dk7xXKwXbM3pnMeddQkek8xsQai9rqhLeA4rhOiUOfYZIZerFQ0pAGRpSF23r0PCVUb2ncgcu69371PStmdV+31C0lkWo0LulKUdmSnVeVvcEQ3BvLJ0piVkpDN4VahabhbC9sr4rBMKeU/HMTNSwSNLOw5Yon9ADAtV8aPCEaBsteQa3hASwJ4WUGfFfI3wp5rtwrn/biFc3xb7fxeOyBeFkH5K2JXfauRwA8sG/wDnLUmm9psk8QAAAABJRU5ErkJggg=="/></router-link>
     </div>
   <h1>Profile</h1>

<div class="container mt-3 mb-4 p-4 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span class="name mt-3">Eleanor Pena</span> <span class="idd">@eleanorpena</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2"> <span class="idd1">Oxc4c16a645_b21a</span> <span><i class="fa fa-copy"></i></span> </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">1069 <span class="follow">Followers</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>
            <div class="text mt-3"> <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br><br> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span> </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
//  data() {
//      return {
//          id: localStorage.getItem("id"),

//          fullname: localStorage.getItem(fullname),
//          email: localStorage.getItem("email"),
//          phone_number: localStorage.getItem("phone_number"),
//      };
//  },
};
</script>

<style scoped>

.arrow{
  padding-right: 90%;
  padding-top: 2%;
}

body {
    background-color: #000
}

.card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.follow {
    font-size: 12px;
    font-weight: 500;
    color: #444444
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #545454;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}

.date {
    background-color: #ccc
}
</style>