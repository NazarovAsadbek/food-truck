<template>
  <div>
      <v-container>
        <v-breadcrumbs class="ps-0" :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <!-- gallery  -->
        <v-row dense>
            <v-col cols="12" xl="6" lg="6">
                <v-img width="100%" height="100%" :src="require('~/assets/images/gallery/bigFood.png')"></v-img>
            </v-col>
            <v-col cols="12" xl="6" lg="6">
                <v-row dense>
                    <v-col cols="6" xl="6">
                        <v-img contain :src="require('~/assets/images/gallery/foodOne.png')"></v-img>
                    </v-col>
                    <v-col cols="6" xl="6">
                        <v-img contain :src="require('~/assets/images/gallery/foodTwo.png')"></v-img>
                    </v-col>
                    <v-col cols="6" xl="6">
                        <v-img contain :src="require('~/assets/images/gallery/foodThree.png')"></v-img>
                    </v-col>
                    <v-col cols="6" xl="6">
                        <v-img contain :src="require('~/assets/images/gallery/foodFour.png')"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="mt-4">
                <div class="d-flex justify-space-between flex-wrap align-center mb-3">
                    <h1 class="me-2">Starbucks</h1>
                    <div class="mb-3">
                        <span 
                            v-for="(star, index) in 5"
                            :key="index"
                        >
                            <v-icon small color="warning">mdi-star</v-icon>
                        </span>
                        <span class="text-14 me-1"> 4.5 
                            <span class="grey--text">(1004)</span>
                        </span>
                    </div>
                </div>
                <p class="mb-5 text-14">Coffee, signature roasts, light bite, quick bite, fast foods</p>
                <div class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap">
                    <v-icon left small color="grey">mdi-map-marker</v-icon>
                    The Dorothy Ross Friedman Residence, NY, US  -
                    <nuxt-link to="" class="grey--text text--darken-3">Show Map</nuxt-link>
                </div>
                <div class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap">
                    <v-icon left small color="grey">mdi-clock-outline</v-icon>
                    <span class="primary--text me-2">Open Now</span> -  Sun - Mon: 9am - 10pm
                </div>
                <div class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap">
                    <v-icon left small color="grey">mdi-earth</v-icon>
                    <nuxt-link to="" class="text-decoration-none grey--text text--darken-1">www.starbucks.com</nuxt-link>
                </div>

            </v-col>
        </v-row>
        <!-- end::gallery  -->

        <div>
          <v-tabs
            v-model="tab"
            class="mb-8"
          >
            

                <v-tab class="text-capitalize" href="#tab-1">
                    Order Online
                    
                </v-tab>

                <v-tab class="text-capitalize" href="#tab-2">
                    Book a Table
                
                </v-tab>

                <v-tab class="text-capitalize" href="#tab-3">
                    Reviews
                    
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item 
                    value="tab-1"
                >
                    <v-row>
                        <v-col cols="12" xl="12">
                            <Box>
                                <div slot="boxSidebar">
                                    <div class=" d-flex flex-column ">
                                        <nuxt-link to="" class="mb-5 food-menu-link active">Recomended (40)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">DPB Special Combos (10)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Chineese Starters (30)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Chinese Main Course (75)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Indian Main Course (63)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Rice & Pulao (7)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Desserts (1)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Soup & wonton (15)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Accompaniment (4)</nuxt-link>
                                        <nuxt-link to="" class="mb-5 food-menu-link">Biryani (1)</nuxt-link>
                                    </div>
                                   

                                </div>
                                <div slot="boxContent">
                                    <div class="px-8">
                                        <v-row>
                                            <v-col cols="12">
                                                <h3 class="fw-bold">Recommended</h3>
                                            </v-col>
                                            <v-col 
                                                cols="12"
                                                v-for="(n, index) in 4"
                                                :key="index"
                                            >
                                                <div class="d-flex justify-space-between align-center flex-wrap">
                                                    <div class="d-flex flex-wrap">
                                                        <v-avatar class="me-3" size="150" tile>
                                                            <img src="~/assets/images/4.png" alt="">
                                                        </v-avatar>
                                                        <div>
                                                            <h5 class="f-600 mb-3">Tandoori Chicken (Full)</h5>
                                                            <v-chip class="text-uppercase mb-2" text-color="secondary" small color="grey lighten-4">Must Try</v-chip>
                                                            <div class="d-flex mb-3">
                                                                <v-icon color="amber" small>mdi-star</v-icon>
                                                                <v-icon color="amber" small>mdi-star</v-icon>
                                                                <v-icon color="amber" small>mdi-star</v-icon>
                                                                <v-icon color="amber" small>mdi-star</v-icon>
                                                                <v-icon color="amber" small>mdi-star</v-icon>
                                                                <h6 class="ms-3 grey--text text--darken-1 font-weight-light">(57)</h6>
                                                            </div>
                                                            <div class="d-flex mb-1">
                                                                <p class="text-14 grey--text text--darken-1 text-decoration-line-through me-2 mb-0">$25</p>
                                                                <p class="text-14 grey--text text--darken-4 me-2 mb-0">$22.5</p>
                                                                <p class="text-14 primary--text mb-0">10% off</p>
                                                            </div>
                                                            <p class="text-14 grey--text text--darken-1">(4 Pcs mutton in chicken keema gravy)</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <v-btn 
                                                            outlined 
                                                            color="primary"
                                                            small
                                                        > 
                                                            Add 
                                                            <v-icon right small>mdi-plus</v-icon>
                                                        </v-btn>
                                                    </div>
                                                </div>
                                            </v-col>

                                        
                                        </v-row>
                                    </div>
                                </div>
                            </Box>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item
                    value="tab-2"
                >
                    <v-row>
                        <v-col cols="12" lg="6">
                            <v-row>
                                <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                                    <v-select
                                        :items="formSelectItems"
                                        label="Select Date"
                                        outlined
                                        hide-details
                                        dense
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                                    <v-select
                                        :items="formSelectItems"
                                        label="Number Of Guests"
                                        outlined
                                        hide-details
                                        dense
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                                    <v-text-field
                                        label="First Name"
                                        outlined
                                        dense
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                                    <v-text-field
                                        label="Last Name"
                                        outlined
                                        hide-details
                                        dense
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                                    <v-text-field
                                        label="Email"
                                        type="email"
                                        outlined
                                        hide-details
                                        dense
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                                    <v-text-field
                                        label="Phone"
                                        outlined
                                        hide-details
                                        dense
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn color="primary">Book</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-img class="mx-auto" max-width="500px" :src="require('~/assets/images/download-app.png')"></v-img>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item
                    value="tab-3"
                >
                   <v-row>
                       <v-col cols="12" lg="6">
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
                       <v-col cols="12" lg="6">
                           <v-img class="mx-auto" max-width="500px" :src="require('~/assets/images/download-app.png')"></v-img>
                       </v-col>
                   </v-row>
                </v-tab-item>
            </v-tabs-items>
        </div>
        

        
      </v-container>
      <Location />
      <Footer />
      
  </div>
</template>
<script>
  export default {
    head: {
        title: 'Food Menu'
    },
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'New York',
          disabled: false,
          href: '/',
        },
        {
          text: 'Resturants',
          disabled: true,
          href: '/',
        },
      ],
      formSelectItems: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      mobileItems: [
          'Order Online', 'Book a Table', 'Reviews',
       ],
       text: 'hello',
      tab: null,
      checkbox: true,
      radioGroup: 1,
      value: [20, 40],
    }),
  }
</script>
<style lang="scss">
.food-menu-link {
    font-size: 14px;
    text-decoration: none;
    color: #4B566B !important;
    font-weight: 400;
    &:hover {
        color: #000 !important;
        border-right: 3px solid #D23F57;
    }
    &.active {
        color: #000 !important;
        border-right: 3px solid #D23F57;
       
    }
}
</style>

