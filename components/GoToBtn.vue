<template>
    <v-btn
        v-scroll="onScroll"
        :class="this.offsetTop >= 200 ? 'd-block' : 'd-none'"
        small
        fixed
        bottom
        right
        fab
        dark
        color="primary"
        @click="$vuetify.goTo(0)"
    >
        <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn>
</template>

<script>


export default {
  layout: 'landingHeader',
  head: {
    title: 'Home'
  },
  data () {
        return {
            offsetTop: 0
        }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset;
         
      },
    },
   
}
</script>