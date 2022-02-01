<template>
  <div class="box-wrapper">
      <div 
        class="box-sidebar border-r"
        :class="{ 'open': isOpen }"
      >
        <v-btn 
          icon 
          tile
          class="mobile-box-btn-sidebar ms-auto"
          @click="isOpen = false"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <slot  name="boxSidebar">
            
        </slot>
      </div>
      
      <div class="box-content">
        <v-btn 
           
          color="primary"
          class="mobile-box-btn text-capitalize mb-4 mx-10"
          :class=" isOpen == true ? 'hidden' : 'visible'"
          @click="isOpen = true"
        >
            <v-icon left>mdi-menu</v-icon>
            Categories
        </v-btn>
        <slot name="boxContent">
          
        </slot>
      </div>
      <div class="box-overlay" 
            :class="{ 'open': isOpen }" 
            @click="isOpen = false"
      ></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
           
        }
    }
}
</script>

<style lang="scss" scoped>
    $sidebarWidth: 280px;
    
    .mobile-box-btn-sidebar{
        display: none;
         @media (max-width: 960px){
            display: block;
        }
    }
    .hidden {
        visibility: hidden;
    }
    .visible {
        visibility: visible;
    }
    .box-wrapper {
       
        display: flex;
        position: relative;
       
        .box-sidebar {
            background-color: #fff;
            width: $sidebarWidth;
            transition: all 0.3s ease-in;

            @media (max-width: 960px) {
                position: fixed;
                padding: 20px;
                height: 100vh;
                overflow-y: scroll;
                top: 0;
                left: -300px;
                z-index: 10;
                &.open {
                    left: 0;
                    
                    
                }
            }
        }
        .box-overlay {
            position: fixed; /* Sit on top of the page content */
            display: none; /* Hidden by default */
            width: 100%; /* Full width (cover the whole page) */
            height: 100%; /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5); /* Black background with opacity */
            z-index: 9; /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer; 
            &.open {
                display: block;
            }
        }
        .box-content {
            .mobile-box-btn {
                display: none;
                @media (max-width: 960px){
                    display: block;
                    
                    
                }
            }
            // background-color: #E7E0C9;
            width: calc(100% - #{$sidebarWidth});
            @media (max-width: 960px) {
                width: 100%;
                
            }
        }
    }
</style>