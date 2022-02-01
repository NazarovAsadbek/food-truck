<template>
  <div>
        <!-- <v-app-bar-nav-icon tile dark @click="drawer = true"></v-app-bar-nav-icon> -->
          <div class="d-flex justify-space-between align-center ps-4 pe-3 mt-3 mb-2">
            <div class="d-flex align-center">
                <v-icon class="me-1">mdi-shopping-outline</v-icon>
                <h4 class="mb-0 grey--text text--darken-1 f-600">1 Item</h4>
            </div>
            <slot name="userDrawerCloseButton"></slot>
          </div>
          <v-divider></v-divider>
          <div class="navbar-scroll">
            <div 
                v-for="(n, index) in 3"
                :key="index"
            >
                <div class="d-flex align-center justify-space-between pa-3 mb-4">
                    <div class="d-flex align-center">
                        <div class="text-center me-3">
                            <v-btn icon color="primary" outlined small>
                                <v-icon >mdi-plus</v-icon>
                            </v-btn>
                            <p class="my-1">1</p>
                            <v-btn icon color="primary" outlined small>
                                <v-icon >mdi-minus</v-icon>
                            </v-btn>
                        </div>
                        <v-avatar size="64" tile class="me-4">
                            <img class="br-10" :src="require(`~/assets/images/food/${n}.png`)" alt="">
                        </v-avatar>
                        <div class="">
                            <h5 class="text-truncate d-inline-block mw-120 mb-0 f-600">Mughal Masala Order Food Online With 50% Off</h5>
                            <p class="text-12 mb-0">$530 x 1</p>
                            <h5 class="primary--text">500</h5>
                        </div>
                    </div>
                    <v-btn icon class="">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
            </div>
          </div>
       
  </div>
</template>



<style lang="scss">
  // .navbar-scroll {
  //   overflow-y: scroll;
  //   height: calc(100vh - 36px);
  // }

  .mw-120 {
      max-width: 120px;
  }
</style>