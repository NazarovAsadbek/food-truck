<template>
  <div>
      <v-container>
        <v-breadcrumbs class="ps-0" :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <div class="d-flex justify-space-between flex-wrap flex-sm-nowrap mb-3">
          <v-tabs class="mb-3">
            <v-tab class="text-capitalize">Delivery</v-tab>
            <v-tab class="text-capitalize">Dining Out</v-tab>
            <v-tab class="text-capitalize">Nightlife</v-tab>
          </v-tabs>
          <v-btn color="primary" class="mb-3">Filter</v-btn>
        </div>
        

        <v-row>
            <v-col cols="12" xl="12">
                <Box>
                    <div slot="boxSidebar">
                        <div class="">
                            <div class="mb-6">
                                <h6 class="">Categories</h6>
                                <v-checkbox
                                    v-for="(check, index) in 4"
                                    :key="index"
                                    class="mt-2"
                                    label="Pizza"
                                    color="secondary"
                                    hide-details=""
                                ></v-checkbox>
                            </div>
                            <div class="mb-6">
                                <h6 class="">Categories</h6>
                                <v-checkbox
                                    v-for="(check, index) in 4"
                                    :key="index"
                                    class="mt-2"
                                    label="4+"
                                    color="secondary"
                                    hide-details=""
                                ></v-checkbox>
                            </div>
                            <div class="mb-6">
                                <h6 class="mt-6">Sort By</h6>
                                <v-radio-group v-model="radioGroup">
                                    <v-radio
                                        v-for="n in 4"
                                        :key="n"
                                        label="Popularity"
                                        color="secondary"
                                    ></v-radio>
                                </v-radio-group>
                            </div>
                            <div class="mb-6">
                                <h6 class="mt-6 mb-12">Cost per person</h6>
                                <v-range-slider
                                    v-model="value"
                                    step="10"
                                    thumb-label="always"
                                ></v-range-slider>
                            </div>
                        </div>

                    </div>
                    <div slot="boxContent">
                        <div class="px-8">
                            <v-row>
                                <v-col cols="12">
                                    <h5 class="text-18 test-color">184 Delivery Restaurants in New York</h5>
                                </v-col>
                                <v-col 
                                    cols="12" xl="4" lg="4" md="4" sm="6"
                                    v-for="(item, index) in CardList.slice(0, 6)"
                                    :key="index"
                                >
                                    <Card :cardSection="item" />
                                </v-col>

                            
                            </v-row>
                        </div>
                    </div>
                </Box>
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
        title: 'Resturant Column'
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

