<template>
  <div>
      <div class="border border br-10">
        <h1 class="grey--text text-12 pa-5 text-uppercase font-weight-regular">Activity</h1>
        <div v-for="item in SidebarOne"
            :key="item.id"
        >   
            <nuxt-link :to="item.link" class="dashboard-sidebar-link">
                <div class=" px-4 d-flex justify-space-between align-center">
                    <div class="d-flex">
                        <v-icon size="18" class="me-2">{{ item.icon }}</v-icon>
                        <p class="mb-0">{{ item.title }}</p>
                    </div>
                    <p class="mb-0">{{ item.notify }}</p>
                </div>
            </nuxt-link>

        </div>
        <h1 class="grey--text text-12 pa-5 text-uppercase font-weight-regular">Order & Delivery</h1>
        <div v-for="item in SidebarTwo"
            :key="item.id"
        >   
            <nuxt-link :to="item.link" class="dashboard-sidebar-link">
                <div class=" px-4 d-flex justify-space-between align-center">
                    <div class="d-flex">
                        <v-icon size="18" class="me-2">{{ item.icon }}</v-icon>
                        <p class="mb-0">{{ item.title }}</p>
                    </div>
                    <p class="mb-0">{{ item.notify }}</p>
                </div>
            </nuxt-link>

        </div>
        
        
        
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            SidebarOne: [
                {
                    id: 1,
                    icon: 'mdi-message-text-outline',
                    title: 'Reviews',
                    notify: 2,
                    link: '/dashboard/Review'

                },
                {
                    id: 2,
                    icon: 'mdi-image-area',
                    title: 'Photos',
                    notify: 2,
                    link: '/dashboard/Photos'

                },
                {
                    id: 3,
                    icon: 'mdi-account-multiple-check-outline',
                    title: 'Followers',
                    notify: 2,
                    link: '/dashboard/Followers'

                },
                {
                    id: 4,
                    icon: 'mdi-bookmark-outline',
                    title: 'Bookmarks',
                    notify: 2,
                    link: '/dashboard/Bookmarks'

                },
            ],
            SidebarTwo: [
                {
                    id: 5,
                    icon: 'mdi-lock-outline',
                    title: 'Order History',
                    notify: 2,
                    link: '/dashboard/OrderHistory'
                    
                },
                {
                    id: 6,
                    icon: 'mdi-map-marker',
                    title: 'Order List',
                    notify: 2,
                    link: '/dashboard/OrderList'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    .dashboard-box {
        .box-sidebar {
            border-right: none !important;
        }
        .dashboard-sidebar-link {
            color: #2B3445 !important;
            text-decoration: none;
            border-left: 3px solid #fff;
            display: block;
            margin-bottom: 16px;
            &:hover {
                color: #D23F57 !important;
                border-left: 3px solid #D23F57;
            }
        }
        
    }
</style>