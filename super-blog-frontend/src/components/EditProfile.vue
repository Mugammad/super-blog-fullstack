<template>
  
  <div class="modal fade" id="editProfile" tabindex="-1" aria-labelledby="editProfileLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProfileLabel">Edit Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
         <form @submit.prevent="editProfile" class="modal-body">
               <div class="mb-3">
                 <label for="formGroupExampleInput" class="form-label">username</label>
                   <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter name">
                      </div>
                   <div class="mb-3">
                 <label for="formGroupExampleInput2" class="form-label">email</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter email address">
            </div>
            <div class="mb-3">
               <label for="formGroupExampleInput3" class="form-label">Profile Picture</label>
                <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Insert Picture URL">
              </div>
                <div class="mb-3">
               <label for="formGroupExampleInput3" class="form-label">password</label>
                <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter password">
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        <!-- <input v-model="username" type="text" placeholder="username">
        <input v-model="email" type="text" Email...>
        <input v-model="profile" type="text" placeholder="profile picture">
        <input v-model="cover" type="text" placeholder="profile photo">
        <input v-model="password" type="text" placeholder="password">
        <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Edit</button> -->
      </form>
      
    </div>
  </div>
</div>       
 

</template>

<script>
export default {
    props:['user'],
    data() {
        return {
            // username: this.user.username,
            // email: this.user.email,
            // profile: this.user.profile,
            // password: null
        }
    },

    methods: {
        editProfile() {
            if (localStorage.getItem("jwt")){
                this.password = JSON.parse(localStorage.getItem("password"))
                fetch(``, {
                    method: "PUT",
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,
                        profile: this.profile,
                        password: this.password
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    }
                }).then(res => res.json())
                  .then(data => {
                      console.log(data)
                      alert(data.msg)
                      localStorage.setItem("newUser", JSON.stringify(data.updateUser));
                      localStorage.removeItem('user')
                      location.reload()
                  })
            }
        }
    }

}
</script>

<style>

</style>