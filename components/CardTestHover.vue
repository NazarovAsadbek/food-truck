<template>
    <v-hover
        v-slot="{ hover }"
        
    > 
        <v-card elevation="0" outlined>
            <div class="position-relative">
                <v-img :src="require('~/assets/images/1.png')"></v-img>
                <v-chip 
                    label  
                    flat
                    class="custom-chip p-absolute mt-3"
                    color="primary"
                >Flat 30% Off</v-chip>
            </div>
            <div class="pa-4">
                <h3>Mughal Masala</h3>
            </div>
            <v-card-text 
                :class="{ 'on-hover' : hover }"
                class=" font-weight-medium  text-center text-subtitle-1"
            >
                Open Delay (Mouse enter)
            </v-card-text>
        
        </v-card>
    </v-hover>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .on-hover {
     background-color: red;
     cursor: pointer;
 }
 .custom-chip {
     border-radius: 0px 14px 14px 0px !important;
     position: absolute;
     top: 0;
 }
</style>