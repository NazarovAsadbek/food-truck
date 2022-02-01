<template>
  <div>
    <v-container>
    
      
     <v-row>
        <v-col cols="12" class="mb-10">
              <v-img 
                    class="br-10 d-flex cover-img align-end" 
                    cover 
                    :src="require('~/assets/images/cover-img.png')"
                    gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
                >
                    
                    <div class="d-flex justify-center justify-md-space-between align-center mx-10 cover-image-content ">
                    <div class="d-md-flex d-block align-center text-md-left text-center flex-wrap">
                        <label for="avatarUpload" class="me-4">
                        <div class="avatar-upload">
                            <v-avatar size="160">
                            <img src="~/assets/images/faces/big-avatar.png" alt="">
                            </v-avatar>
                            <v-btn
                            class="avatar-upload-btn"
                            fab
                            
                            dark
                            small
                            color="grey lighten-4"
                            >
                            <v-icon color="secondary" dark size="20">
                                mdi-camera
                            </v-icon>
                            </v-btn>
                            <input class="d-none" type="file" id="avatarUpload" />
                        </div>
                        
                        </label>
                        <div>
                        <h2 class="white--text text-md-left text-center mb-1">Abriella Bond</h2>
                        <div class="d-flex mb-1 justify-center justify-md-start">
                            <v-icon size="15" class="me-2" color="white">mdi-map-marker</v-icon>
                            <h6 class="font-weight-light white--text">New York, US</h6>
                        </div>
                        <h6 class="font-weight-light white--text">Bigtime foodie..out and out dessert person</h6>
                        </div>
                    </div>
                    
                    <div class="d-none d-md-flex">  
                        <div class="text-center">
                        <h2 class="font-weight-bold white--text">24</h2>
                        <h6 class="font-weight-regular white--text">Reviews</h6>
                        </div>
                        <div class="mx-3">
                        <v-divider
                            vertical
                            dark
                        ></v-divider>
                        </div>
                        <div class="text-center">
                        <h2 class="font-weight-bold white--text">45</h2>
                        <h6 class="font-weight-regular white--text">Photos</h6>
                        </div>
                        <div class="mx-3">
                        <v-divider
                            vertical
                            dark
                        ></v-divider>
                        </div>
                        <div class="text-center">
                        <h2 class="font-weight-bold white--text">1.6k</h2>
                        <h6 class="font-weight-regular white--text">Followers</h6>
                        </div>
                    </div>

                    </div>
                    
                </v-img>
        </v-col>
        <v-col cols="12">
            <Box class="dashboard-box">
                <div slot="boxSidebar">
                    <DashboardSidebar />

                </div>
                <div slot="boxContent">
                   <div class="px-10">
                        <v-row>
                           <v-col cols="12">
                             <h1>Order List</h1>
                           </v-col>
                           <v-col cols="12">
                                <div class="d-none px-4 d-md-flex mb-5">
                                    <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Order #</h4>
                                    <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Status </h4>
                                    <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Date Purchased </h4>
                                    <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Total </h4>
                                    <div class="px-5">
                                        
                                    </div>
                                </div>
                                <v-card 
                                    elevation="0" 
                                    class="border br-10 mb-4"
                                    v-for="(n, index) in 10"
                                    :key="index"
                                >
                                    <div class="pa-4 d-flex align-center flex-wrap">
                                            <div class="flex-1 mr-3">
                                                <h4 class="font-600 mb-0 ">1050017AS</h4>
                                            </div>
                                            <div class="flex-1 mr-3">
                                                <v-chip
                                                    class="ma-2 f-600"
                                                    color="green accent-1"
                                                    small
                                                    text-color="green accent-4"
                                                >
                                                    Delivered
                                                </v-chip>
                                            </div>
                                            <div class="flex-1 mr-3">
                                                <p class="mb-0">jun 09, 2021</p>
                                            </div>
                                            
                                            <div class="flex-1 mr-3">
                                                <p class="mb-0">$350.00</p>
                                            </div>
                                            <v-btn
                                                icon
                                                color="grey"
                                                class=""
                                                to="/dashboard/OrderHistory"
                                            >
                                                <v-icon>mdi-arrow-right</v-icon>
                                            </v-btn>
                                    </div>
                                </v-card>
                           </v-col>
                           <v-col cols="12">
                               <div class="d-flex justify-center align-center justify-sm-space-between flex-wrap">
                                   <div class="mb-4 me-3">
                                        <p class="font-weight-normal mb-0 text-14">Showing 1-12 of 29 Reviews</p>
                                    </div>
                                   <div class="mb-4">
                                        <v-pagination
                                            class="food-truck-pagination"
                                            v-model="page"
                                            :length="4"
                                            circle
                                        ></v-pagination>
                                    </div>
                               </div>
                           </v-col>
                            
                        </v-row>
                   </div>
                </div>
            </Box>
        </v-col>
     </v-row>
    </v-container>
    <Footer />
    
  </div>
</template>
<script>
  export default {
    head: {
        title: 'Order List'
    },
    data () {
      return {
        page: 1,
      }
    },
  }
</script>
<style lang="scss">

.test {}

</style>

