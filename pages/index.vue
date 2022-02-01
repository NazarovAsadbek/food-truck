<template>
  <div>
    <!-- section-1  -->
    <div class="bg-grey-light">
      <v-container class="py-15">
        <v-row>
            <v-col 
              v-for="(item, index) in food.slice(0, 4)" 
              :key="index"
              cols="12" 
              lg="3"
              md="4"
              sm="6"
              data-aos="fade-up" 
            >
              <nuxt-link to="/resturant/FoodMenu" class="text-decoration-none ">
                <v-card elevation="0" outlined class="br-10 bg-transparent o-hidden">
                  <div>
                      <v-img contain :src="item.img"></v-img>
                      
                  </div>
                  <div class="pa-4 text-center">
                      <h3 class="me-3">{{ item.name }}</h3>
                      
                  </div>
                
                  
              
                </v-card>
              </nuxt-link>
            </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- section-2  4,8-->
    <div>
      <v-container class="py-15">
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-end flex-wrap">
              <div>
                <h2>Collections</h2>
                <h6 class="grey--text grey--lighten-3 font-weight-regular">Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends</h6>
              </div>
              <div>
                <nuxt-link to="" class="text-decoration-none">View all collections</nuxt-link>
              </div>
            </div>
          </v-col>
          <v-col
            v-for="(item, index) in food.slice(4,8)" 
            :key="index"
            cols="12" 
            lg="3"
            md="4"
            sm="6"
           
          >
            <nuxt-link to="/resturant/SearchResturant" class="text-decoration-none">
              <v-card class="br-10">
              <v-img :src="item.img"
                 gradient="to bottom, rgba(0,0,0, 0), rgba(0,0,0, 0), rgba(0,0,0, 0), rgba(0,0,0, 1)"
                 class="p-relative"
              >
                <div class="p-absolute bottom-0 pa-5">
                  <h5 class="white--text">{{item.name}}</h5>
                  <div class="d-flex">
                    <p class="text-sm white--text mb-0">30 Places</p>
                    <v-icon small color="white">mdi-chevron-right</v-icon>
                  </div>
                </div>
              </v-img>
            </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- section-3  -->
    <div>
      <v-container class="py-15">
        <v-row>
          <v-col cols="12">
            <h2>Browse By Cuisine</h2>
          </v-col>
          <v-col
            v-for="(item, index) in food.slice(8, 14)" 
            :key="index"
            cols="12" 
            lg="2"
            md="4"
            sm="6"
          >
            <div class="text-center">
              <nuxt-link to="/resturant/FoodMenu" class="text-decoration-none">
                <v-avatar size="150" class="mb-4">
                  <img :src="item.img" alt="">
                </v-avatar>
                <h4 class="grey--text text--darken-2">{{ item.name }}</h4>
              
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container class="py-15">
        <v-row>
          <v-col cols="12">
            <h2>Popular Near You</h2>
          </v-col>
          <v-col
            v-for="(item, index) in CardList.slice(0, 8) " 
            :key="index"
            cols="12" 
            lg="3"
            md="4"
            sm="6"
          >
            <Card :cardSection="item" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <div class="bg-grey-light py-16">
      <div class="container">
        <div class="d-flex justify-center flex-wrap">
          <v-img class="mb-3 me-8" max-width="185px" :src="require('~/assets/images/App.png')"></v-img>
          <div class="d-flex flex-column">
            <h1 class="text-40 mb-0">Get the Mobile App</h1>
            <p class="text-18 grey--text text--darken-1 mb-0">We will send you a link, open it on your phone to download the app</p>
            <v-radio-group
              row
              class="mb-4"
              
              hide-details=""
            >
              <v-radio
                label="Email"
                value="radio-1"
                
              ></v-radio>
              <v-radio
                label="Phone"
                value="radio-2"
              ></v-radio>
            </v-radio-group>
            <div class="d-flex align-center mb-8">
              <v-text-field
                flat
                class=" rounded-r-0 border-r-n-grey"
                dense
                solo
                placeholder="Email"
                hide-details=""
              ></v-text-field>
              <v-btn color="primary" class="rounded-l-0 py-5">
                Search 
              </v-btn>
            </div>

            <h6 class="mb-3 grey--text  font-weight-regular">Download App from</h6>
            <div class="d-flex flex-wrap">
              <v-avatar class="me-4" tile width="150" height="50">
                <img src="~/assets/images/google-play.png" alt="">
              </v-avatar>
              <v-avatar tile width="150" height="50">
                <img src="~/assets/images/app-store.png" alt="">
              </v-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Location />
    <Footer />
    
  </div>
</template>
<script>
import { CardSection } from '@/assets/database/data.js';
export default {
  layout: 'landingHeader',
  head: {
    title: 'Home'
  },
  data() {
    return {
      CardList: CardSection,
      food: [
        {
          img: require('~/assets/images/food/15.jpg'),
          name: 'Order Food Online',
          
        },
        {
          img: require('~/assets/images/food/16.jpg'),
          name: 'Go Out For Meal',
          
        },
        {
          img: require('~/assets/images/food/17.jpg'),
          name: 'Nightlife & Clubs',
          
        },
        {
          img: require('~/assets/images/food/18.jpg'),
          name: 'Pro Membership',
          
        },
        {
          img: require('~/assets/images/food/5.png'),
          name: 'Most Searched of 2020'
        },
        {
          img: require('~/assets/images/food/6.png'),
          name: 'Best Openings of 2020'
        },
        {
          img: require('~/assets/images/food/7.png'),
          name: 'Trending This Week'
        },
        {
          img: require('~/assets/images/food/8.png'),
          name: 'Best Of New York'
        },
        {
          img: require('~/assets/images/food/9.png'),
          name: 'Italian'
        },
        {
          img: require('~/assets/images/food/10.png'),
          name: 'Chinesse'
        },
        {
          img: require('~/assets/images/food/11.png'),
          name: 'Japanesse'
        },
        {
          img: require('~/assets/images/food/12.png'),
          name: 'Indian'
        },
        {
          img: require('~/assets/images/food/13.png'),
          name: 'Thai Food'
        },
        {
          img: require('~/assets/images/food/14.png'),
          name: 'Mexican'
        },
        
      ]
    }
  }
}
</script>
<style lang="scss">
 .bg-transparent {
   background-color: transparent !important;
 }
 .o-hidden {
   overflow: hidden !important;
 }
</style>