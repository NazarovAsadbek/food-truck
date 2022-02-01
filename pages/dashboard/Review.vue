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
                            <v-col cols="12" lg="12">
                                <!-- user-post  -->
                                    <div class="mb-6">
                                        <div class="d-flex align-center flex-wrap mb-4">
                                            <v-avatar size="48" class="me-4">
                                                <img src="~/assets/images/faces/8.png" alt="">
                                            </v-avatar>
                                            <div>
                                                <h5 class="mb-0">Abriella Bond</h5>
                                                <p class="mb-0 text-14 grey--text text--darken-1">2 Reviews,  9 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-center mb-2">
                                            <span 
                                                v-for="(star, index) in 5"
                                                :key="index"
                                            >
                                                <v-icon small color="warning">mdi-star</v-icon>
                                            </span>
                                            <span class="font-weight-bold text-14 ms-2">4.0</span>
                                            <span class="grey--text text--darken-1 text-14 ms-2">3 Days Ago</span>
                                        </div>
                                        <h5 class="grey--text text--darken-2 font-weight-regular mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                                        <v-row class="mb-2">
                                            <v-col cols="6" lg="6">
                                                <v-img contain :src="require('~/assets/images/gallery/foodFive.png')"></v-img>
                                            </v-col>
                                            <v-col cols="6" lg="6">
                                                <v-img contain :src="require('~/assets/images/gallery/foodSix.png')"></v-img>
                                            </v-col>
                                        </v-row>
                                        <div>
                                            <span class="grey--text text--darken-1 text-14">4 Likes,  2 Comments</span>
                                            <div class="mt-4">
                                                <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                                                    <v-icon left small>mdi-thumb-up-outline</v-icon>
                                                    Like
                                                </v-btn>
                                                <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                                                    <v-icon left small>mdi-comment-text-outline</v-icon>
                                                    Comment
                                                </v-btn>
                                            </div>
                                        </div>
                                        <v-divider class="my-4"></v-divider>
                                        <!-- comment  -->
                                        <div class="mb-6">
                                            <div class="d-flex align-center mb-3">
                                                <v-avatar size="28" class="me-3">
                                                    <img src="~/assets/images/faces/6.png" alt="">
                                                </v-avatar>
                                                <div class="text-14 grey--text text--darken-4 f-600">Emmet McDermott</div>
                                            </div>
                                            <h5 class="grey--text text--darken-2 font-weight-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                                        </div>
                                        <div class="mb-6">
                                            <div class="d-flex align-center mb-3">
                                                <v-avatar size="28" class="me-3">
                                                    <img src="~/assets/images/faces/7.png" alt="">
                                                </v-avatar>
                                                <div class="text-14 grey--text text--darken-4 f-600">Emmet McDermott</div>
                                            </div>
                                            <h5 class="grey--text text--darken-2 font-weight-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                                        </div>
                                        <v-divider></v-divider>
                                        <!-- end::comment -->

                                    </div>
                                    <!-- end::user-post  -->
                                <!-- user-post  -->
                                    <div class="mb-6">
                                        <div class="d-flex align-center flex-wrap mb-4">
                                            <v-avatar size="48" class="me-4">
                                                <img src="~/assets/images/faces/13.jpg" alt="">
                                            </v-avatar>
                                            <div>
                                                <h5 class="mb-0">Abriella Bond</h5>
                                                <p class="mb-0 text-14 grey--text text--darken-1">2 Reviews,  9 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-center mb-2">
                                            <span 
                                                v-for="(star, index) in 5"
                                                :key="index"
                                            >
                                                <v-icon small color="warning">mdi-star</v-icon>
                                            </span>
                                            <span class="font-weight-bold text-14 ms-2">4.0</span>
                                            <span class="grey--text text--darken-1 text-14 ms-2">3 Days Ago</span>
                                        </div>
                                        <h5 class="grey--text text--darken-2 font-weight-regular mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                                        
                                        <div>
                                            <span class="grey--text text--darken-1 text-14">4 Likes,  2 Comments</span>
                                            <div class="mt-4">
                                                <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                                                    <v-icon left small>mdi-thumb-up-outline</v-icon>
                                                    Like
                                                </v-btn>
                                                <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                                                    <v-icon left small>mdi-comment-text-outline</v-icon>
                                                    Comment
                                                </v-btn>
                                            </div>
                                        </div>
                                        <v-divider class="my-4"></v-divider>
                                        
                                        

                                    </div>
                                    <!-- end::user-post  -->
                                <!-- user-post  -->
                                    <div class="mb-6">
                                        <div class="d-flex align-center flex-wrap mb-4">
                                            <v-avatar size="48" class="me-4">
                                                <img src="~/assets/images/faces/9.jpg" alt="">
                                            </v-avatar>
                                            <div>
                                                <h5 class="mb-0">Abriella Bond</h5>
                                                <p class="mb-0 text-14 grey--text text--darken-1">2 Reviews,  9 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-center mb-2">
                                            <span 
                                                v-for="(star, index) in 5"
                                                :key="index"
                                            >
                                                <v-icon small color="warning">mdi-star</v-icon>
                                            </span>
                                            <span class="font-weight-bold text-14 ms-2">4.0</span>
                                            <span class="grey--text text--darken-1 text-14 ms-2">3 Days Ago</span>
                                        </div>
                                        <h5 class="grey--text text--darken-2 font-weight-regular mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</h5>
                                        
                                        <div>
                                            <span class="grey--text text--darken-1 text-14">4 Likes,  2 Comments</span>
                                            <div class="mt-4">
                                                <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                                                    <v-icon left small>mdi-thumb-up-outline</v-icon>
                                                    Like
                                                </v-btn>
                                                <v-btn class="grey--text text--darken-2 text-capitalize" text elevation="0" small>
                                                    <v-icon left small>mdi-comment-text-outline</v-icon>
                                                    Comment
                                                </v-btn>
                                            </div>
                                        </div>
                                        <v-divider class="my-4"></v-divider>
                                        
                                        

                                    </div>
                                    <!-- end::user-post  -->
                            </v-col>
                            <v-col cols="12" class="mb-15">
                                
                                <v-row align="center">
                                    <v-col cols="12" lg="6">
                                        <div class="mb-4 me-3">
                                            <p class="font-weight-normal mb-0 text-14">Showing 1-12 of 29 Reviews</p>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" lg="6" >
                                        <div class="mb-4">
                                            <v-pagination
                                                class="food-truck-pagination"
                                                v-model="page"
                                                :length="4"
                                                circle
                                            ></v-pagination>
                                        </div>
                                    </v-col>
                                </v-row>
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
        title: 'Review'
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

