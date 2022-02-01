<template>
  <div>
      <v-container>
        <v-breadcrumbs class="ps-0" :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <div class="d-flex justify-space-between flex-wrap flex-sm-nowrap">
          <v-tabs class="mb-3">
            <v-tab class="text-capitalize">Delivery</v-tab>
            <v-tab class="text-capitalize">Dining Out</v-tab>
            <v-tab class="text-capitalize">Nightlife</v-tab>
          </v-tabs>
          <v-btn color="primary" class="mb-3">Filter</v-btn>
        </div>
        <v-row>
         
          <v-col cols="6" xl="3" lg="3" md="4" sm="6">
            <h6 class="mt-6">Categories</h6>
            <v-checkbox
              v-for="(check, index) in 4"
              :key="index"
              class="mt-2"
              label="Pizza"
              color="secondary"
              hide-details=""
            ></v-checkbox>
          </v-col>
          <v-col cols="6" xl="3" lg="3" md="4" sm="6">
            <h6 class="mt-6">Rating</h6>
            <v-checkbox
              v-for="(check, index) in 4"
              :key="index"
              class="mt-2"
              label="4+"
              color="secondary"
              hide-details=""
            ></v-checkbox>
          </v-col>
          <v-col cols="6" xl="3" lg="3" md="4" sm="6">
            <h6 class="mt-6">Sort By</h6>
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="n in 4"
                :key="n"
                label="Popularity"
                color="secondary"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="6" xl="3" lg="3" md="4" sm="6">
            <h6 class="mt-6 mb-12">Cost per person</h6>
            <v-range-slider
              v-model="value"
              step="10"
              thumb-label="always"
            ></v-range-slider>
          </v-col>
          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h5 class="text-18">184 Delivery Restaurants in New York</h5>
          </v-col>
          <v-col 
            cols="12" xl="3" lg="3" md="4" sm="6"
            v-for="(item, index) in CardList.slice(0, 8)"
            :key="index"
          >
            <Card :cardSection="item" />
          </v-col>

          <v-col cols="12" class="mt-6">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-container>
      <Location />
      <Footer />
      
  </div>
</template>
<script>
  import { CardSection } from '@/assets/database/data.js';
  export default {
    head: {
        title: 'Search Resturant'
    },
    data: () => ({
      CardList:CardSection,
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
      checkbox: true,
      radioGroup: 1,
       value: [20, 40],
    }),
  }
</script>

