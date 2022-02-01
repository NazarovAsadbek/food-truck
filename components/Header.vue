<template>
    <div>
        <v-app-bar
            fixed
            color="white"
            elevate-on-scroll
            width="100%"
        >
            <v-container class="d-flex align-center">
                <nuxt-link to="/">
                  <v-avatar class="me-10" tile>
                      <img src="~/assets/images/logo.png" alt="" />
                  </v-avatar>
                </nuxt-link>
                
                <div class="form-location flex-grow-1 d-none d-md-flex border rounded ">
                  <div class=" d-flex align-center ps-5">
                    <v-icon small left>mdi-map-marker</v-icon>
                    <span class="grey--text text--darken-1 me-3">New York</span>
                  </div>
                  <v-btn icon tile large text class="text-capitalize rounded-0">
                    <v-icon small>mdi-crosshairs-gps</v-icon>
                  </v-btn>
                  <input class="white flex-grow-1  ps-5" type="text" placeholder="Search for restaurant " />
                  <v-btn icon large tile class="rounded-l-0 text-capitalize">
                    <v-icon small>mdi-magnify</v-icon>
                  </v-btn>
                </div>
                <v-spacer></v-spacer>

                <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      
                      light
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

                <v-btn @click="shoppingCartDrawer = true" light text tile class="me-2">
                  <v-icon small>mdi-cart-outline</v-icon>(8)
                </v-btn>
                
                <v-app-bar-nav-icon text light @click="drawer = true"></v-app-bar-nav-icon>
        
            </v-container>
        </v-app-bar>
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
    
       
  
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            group: null,
            dialog: false,
            shoppingCartDrawer: false,
            items: [
                {
                  action: 'mdi-view-dashboard-variant-outline',
                  active: true,
                  items: [
                      { 
                        title: 'Review',
                        link: '/dashboard/Review',
                      },
                      { 
                        title: 'Photos',
                        link: '/dashboard/Photos',
                      },
                      { 
                        title: 'Order List',
                        link: '/dashboard/OrderList',
                      },
                      { 
                        title: 'Order History',
                        link: '/dashboard/OrderHistory',
                      },
                      { 
                        title: 'Followers',
                        link: '/dashboard/Followers',
                      },
                      { 
                        title: 'Bookmarks',
                        link: '/dashboard/Bookmarks',
                      },
                  ],
                  title: 'Dashboards',
                },
                {
                action: 'mdi-silverware-fork-knife',
                active: false,
                  items: [
                      { title: 'Breakfast & brunch' },
                      { title: 'New American' },
                      { title: 'Sushi' },
                  ],
                  title: 'Dining',
                },
                
            ]
        }
    }
}
</script>
<style scoped>

</style>