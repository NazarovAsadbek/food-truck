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
                                <v-tabs
                                    v-model="tab"
                                    class="mb-4"
                                >
                                    <v-tab
                                        v-for="item in items"
                                        :key="item"
                                        class="text-capitalize"
                                    >
                                        {{ item }}
                                    </v-tab>
                                </v-tabs>

                                <v-tabs-items v-model="tab">
                                    <v-tab-item
                                        v-for="item in items"
                                        :key="item"
                                    >
                                      <v-row>
                                        <v-col 
                                            cols="12" 
                                            lg="6"
                                            v-for="(user, index) in users"
                                            :key="index"
                                        >
                                            <v-card elevation="0" class="followers-card">
                                                <div class="px-5 py-7 d-flex flex-sm-row  flex-column justify-content-center justify-sm-space-between align-center flex-wrap">
                                                    <div class="d-flex flex-wrap flex-sm-row flex-column">
                                                        <v-avatar size="50" class=" mx-auto ">
                                                            <img :src="user.img" alt="">
                                                        </v-avatar>
                                                        <div class="ms-0 ms-sm-4 text-center text-sm-left">
                                                            <h5>{{ user.name }}</h5>
                                                            <span class="grey--text text--darken-1 text-14">{{ user.feedBack }}</span>
                                                        </div>
                                                    </div>
                                                    <v-btn icon color="primary">
                                                        <v-icon>mdi-account-multiple-plus</v-icon>
                                                    </v-btn>
                                                </div>
                                            </v-card>
                                        </v-col>
                                      </v-row>
                                        
                                    </v-tab-item>
                                </v-tabs-items>
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
        title: 'Followers'
    },
    data () {
      return {
        page: 1,
        tab: null,
        items: [
          'Followers (1.6k)', 'Following',
        ],
        users: [
            {
                img: require('~/assets/images/faces/3.jpg'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/2.jpg'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/4.jpg'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/5.jpg'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/6.png'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/7.png'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/8.png'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            {
                img: require('~/assets/images/faces/9.jpg'),
                name: 'Abriella Bond',
                feedBack: '2 Reviews, 9 Followers'
            },
            
        ]
      }
    },
  }
</script>
<style lang="scss">

.followers-card {
    border: 1px solid #DAE1E7 !important;
    border-radius: 10px !important;
}

</style>

