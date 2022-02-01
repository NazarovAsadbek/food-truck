<template>
 <v-app>
  <div class="hero-section" >
    <Header :class="toggleNavClass()" />
    <div id="navbar-hero" >
      <v-container>
        <div class="d-flex align-center mt-6 mb-10  navbar-container">
          <nuxt-link to="/">
            <v-avatar tile >
                <img src="~/assets/images/logo.png" alt="" />
            </v-avatar>
          </nuxt-link>
          
          <v-spacer></v-spacer>

          
         
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                
                dark
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="me-0 me-sm-3">mdi-account-circle-outline</v-icon>
                <span class="d-none d-sm-block">Account</span>
              </v-btn>
            </template>

            <SignIn />
          </v-dialog>
          

          <v-btn @click="shoppingCartDrawer = true" dark text tile class="me-2">
            <v-icon color="white" small>mdi-cart-outline</v-icon>(8)
          </v-btn>
          <v-navigation-drawer
            width="320"
            v-model="shoppingCartDrawer"
            fixed
            temporary
            right
          >
          
            <ShoppingCart>
              <template v-slot:userDrawerCloseButton>
                <v-btn icon color @click.stop="shoppingCartDrawer = !shoppingCartDrawer">
                  <v-icon color="primary">mdi-close</v-icon>
                </v-btn>
              </template>
              
            </ShoppingCart>
            <template v-slot:append >
                <div class="pa-2">
                  <v-btn class="text-capitalize mb-3" block color="primary">
                    Checkout Now ($ 220)
                  </v-btn>
                  <v-btn class="text-cappitalise" outlined block color="primary">
                    View Cart
                  </v-btn>
                </div>
              </template>
          </v-navigation-drawer>
          <v-app-bar-nav-icon 
             class="rounded"
            tile 
            dark 
            @click="drawer = true"
          ></v-app-bar-nav-icon>
          <v-navigation-drawer
            width="320"
            v-model="drawer"
            fixed
            temporary
            
          >
          
            <NavbarList>
              <template v-slot:userDrawerCloseButton>
                <v-btn icon color @click.stop="drawer = !drawer">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
            </NavbarList>
          </v-navigation-drawer>
        </div>
      </v-container>
    </div>
    <v-container>
      <div class="mt-15">
        <v-row>
          <v-col cols="12" xl="5" class="mx-auto">
            <h1 class="white--text text-center display-2 font-weight-regular mb-4">Discover the best food & drinks in <span class="font-weight-bold">New York</span></h1>
            <h4 class="text-h6 white--text text-center font-weight-light mb-5">The meals you love, delivered with care</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" lg="7" class="mx-auto mb-15">
            <div class="form-location d-flex white rounded flex-wrap">
              <div class=" d-flex align-center ps-5">
                <v-icon left>mdi-map-marker</v-icon>
                <span class="grey--text text--darken-1 me-10">New York</span>
              </div>
              <v-btn x-large text class="text-capitalize rounded-0 btn-location">
                <v-icon left>mdi-crosshairs-gps</v-icon>
                <span class="grey--text text--darken-4 font-weight-regular">Locate me</span>
              </v-btn>
              <input class="white flex-1 ps-5" type="text" placeholder="Search for restaurant " />
              <v-btn to="/resturant/ResturantTwoColumn" x-large color="primary" class="rounded-l-0 text-capitalize">
                Search
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>         
    </v-container>
   
  </div>
 <Nuxt class="content" />
  <GoToBtn />
</v-app>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      active: false,
      dialog: false,
      shoppingCartDrawer: false
    }),
    methods: {
      toggleNavClass(){
          if(this.active == false){
            return 'nav'
          } else {
            return 'sticky-nav'
          }

      }
    },
    mounted() {
      window.document.onscroll = () => {
        
        if(window.scrollY > 400){
          this.active = true;
        }else {
          this.active = false;
        }
      }
    }
  }
</script>
<style lang="scss">

  .hero-section {
    background-image: url('../assets/images/header-bg.png');
    background-size: cover;
    .nav {
      display: none;
    }
   
  }
  
  
</style>

