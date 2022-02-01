<template>
  <div class="py-16">
      <v-container>
        <v-row>
          <v-col xl="12">
            <h2 class="mb-5">Popular Localities In & Around New York</h2>
            <v-row>
              <v-col
                cols="12"
                xl="3"
                lg="3"
                md="6"
                sm="6"
                class="mb-3" 
                v-for="item in 4"
                :key="item"
              >
                <div 
                  v-for="(n, index) in locations"
                  :key="index"
                  class="mb-3"
                >
                  <nuxt-link to="/resturant/ResturantTwoColumn" class="text-decoration-none black--text ">
                    {{n.title}} <span class="grey--text">({{n.no}} places)</span>
                  </nuxt-link>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          title: 'Newport',
          no: 26
        },
        {
          title: 'Brooklyn',
          no: 14
        },
        {
          title: 'Chinatown',
          no: 10
        },
        {
          title: 'Chelsea',
          no: 20
        },
        {
          title: 'Coney Island',
          no: 6
        },
        // {
        //   title: 'East Village',
        //   no: 26
        // },
        // {
        //   title: 'Brooklyn',
        //   no: 14
        // },
        // {
        //   title: 'Chinatown',
        //   no: 10
        // },
        // {
        //   title: 'Chelsea',
        //   no: 20
        // },
        // {
        //   title: 'Coney Island',
        //   no: 6
        // },
        // {
        //   title: 'Newport',
        //   no: 26
        // },
        // {
        //   title: 'Brooklyn',
        //   no: 14
        // },
        // {
        //   title: 'Chinatown',
        //   no: 10
        // },
        // {
        //   title: 'Chelsea',
        //   no: 20
        // },
        // {
        //   title: 'Coney Island',
        //   no: 6
        // },
        // {
        //   title: 'East Village',
        //   no: 26
        // },
        // {
        //   title: 'Brooklyn',
        //   no: 14
        // },
        // {
        //   title: 'Chinatown',
        //   no: 10
        // },
        // {
        //   title: 'Chelsea',
        //   no: 20
        // },
        // {
        //   title: 'Coney Island',
        //   no: 6
        // },
        
      ]
    }
  }
}
</script>

<style>

</style>