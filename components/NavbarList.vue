<template>
  <div>
        <!-- <v-app-bar-nav-icon tile dark @click="drawer = true"></v-app-bar-nav-icon> -->
          <div class="d-flex justify-space-between align-center ps-4 pe-3 mt-3">
            <h5 class="m-0">Navbar</h5>
            <slot name="userDrawerCloseButton"></slot>
          </div>
          <div class="navbar-scroll">
            <v-list dense>
              <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="child in item.items"
                  :key="child.title"
                  :to="child.link"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </div>
       
  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            group: null,
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
                      { 
                          title: 'Food Menu',
                          link: '/resturant/FoodMenu'
                      },
                      { 
                          title: 'Resturant Two Column',
                          link: '/resturant/ResturantTwoColumn'
                      },
                      { 
                          title: 'Search Resturant',
                          link: '/resturant/SearchResturant'
                      },
                      
                  ],
                  title: 'Resturant',
                },
                
            ]
        }
    }
}
</script>

<style lang="scss">
  // .navbar-scroll {
  //   overflow-y: scroll;
  //   height: calc(100vh - 36px);
  // }
</style>