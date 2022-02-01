<template>
  <div class="bg-body d-flex flex-column justify-center align-center min-vh-100">
      <div class="sign-up-card">
        <div class="sign-up-card-container">
          <div class="text-center mb-10">
            <h3 class="mb-3">Create Your Account</h3>
            <h5 class="text-sm font-600 grey--text text--darken-4">Please fill all forms to continued</h5>
          </div>
          <div class="mb-4">
            <p class="text-14 mb-1">Full Name</p>
            <v-text-field
                placeholder="Ralph Awards"
                outlined
                dense
                hide-details=""
                class="mb-4"
            ></v-text-field>
          </div>
          <div class="mb-4">
            <p class="text-14 mb-1">Email or Phone Number</p>
            <v-text-field
                placeholder="example@mail.com"
                outlined
                dense
                hide-details=""
                class="mb-4"
            ></v-text-field>
          </div>
          <div class="mb-4">
            <p class="text-14 mb-1">Password</p>
            <v-text-field
                type="password"
                placeholder="*********"
                outlined
                dense
                hide-details=""
                class="mb-4"
            ></v-text-field>
          </div>
          <div class="mb-4">
            <p class="text-14 mb-1">Confirm Password</p>
            <v-text-field
                type="password"
                placeholder="*********"
                outlined
                dense
                hide-details=""
                class="mb-4"
            ></v-text-field>
          </div>

          <div class="mb-4">
             <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  By signing up, you agree to

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a
                        target="_blank"
                        href="#"
                        @click.stop
                        v-on="on"
                      >
                        Terms & Condtion
                      </a>
                    </template>
                    Opens in new window
                  </v-tooltip>
                 
                </div>
              </template>
             </v-checkbox>
          </div>

          <div class="mb-4">
            <v-btn
              block
              color="primary"
              class="text-capitalize font-600"
            >
                Create Account
            </v-btn>
          </div>
          <div class="d-flex align-center justify-center w-200 mx-auto mb-4">
            <v-divider></v-divider>
            <p class="mx-3 mb-1">on</p>
            <v-divider></v-divider>
            
          </div>
          
          <div class="mb-4">
            <v-btn 
              color="indigo"
              class="text-capitalize font-600 white--text mb-4 py-5"
              block
            >
              <v-icon left>mdi-facebook</v-icon>
              Continue with Facebook
            </v-btn>
          </div>
          <div class="mb-4">
            <v-btn 
              color="blue"
              class="text-capitalize font-600 white--text mb-0 py-5"
              block
            >
              <v-icon left>mdi-google</v-icon>
              Continue with Google
            </v-btn>
          </div>
         
                     
        </div>
         <div class="py-4 bg-grey-light">
              <div class="text-center">
                <span class="grey--text text--darken-1">Already Have Account ? <a href="#" class="ms-2 grey--text text--darken-4 font-600">Log in</a> </span>
              </div>
          </div>
      </div>
    </div>
</template>

<script>

  export default {
    layout: 'session',
    data () {
      return {
        checkbox: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sign-up-card {
    width: 500px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    margin: 2rem auto;
    box-shadow: rgb(3 0 71 / 9%) 0px 8px 45px;
    @media(max-width: 500px){
      width: 100%;
    }
    .sign-up-card-container {
      padding: 3rem 3.75rem 0px;
      @media(max-width: 500px){
        padding: 3rem 1rem 0px;
      }
    }
  }

</style>