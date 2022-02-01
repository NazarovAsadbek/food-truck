<template>
  <footer class="bg-grey-light py-16">
      <v-container>
          <v-row>
              <v-col cols="12" lg="3">
                <v-avatar class="mb-6" tile size="48">
                    <img src="~/assets/images/logo.png" alt="" />
                </v-avatar>
                <h5 class="mb-6 font-weight-regular footer-color ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. 
                    Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</h5>
                <div class="d-flex flex-wrap ">
                    <v-avatar class="me-4" tile width="120" height="45">
                        <img src="~/assets/images/google-play.png" alt="">
                    </v-avatar>
                    <v-avatar tile width="120" height="45">
                        <img src="~/assets/images/app-store.png" alt="">
                    </v-avatar>
                </div>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                  <h2 class="f-600 mb-4">About Us</h2>
                  <div class="d-flex flex-column">
                    <nuxt-link to="" class="footer-link">
                        Careers
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Our Stores
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Our Cares
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Terms & Conditions
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Privacy Policy
                    </nuxt-link>
                  </div>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                  <h2 class="f-600 mb-4">Customer Care</h2>
                  <div class="d-flex flex-column">
                    <nuxt-link to="" class="footer-link">
                        Help Center
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        How to Buy
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Track Your Order
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Corporate & Bulk Purchasing
                    </nuxt-link>
                    <nuxt-link to="" class="footer-link">
                        Returns & Refunds
                    </nuxt-link>
                  </div>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                  <h2 class="f-600 mb-4">Contact Us</h2>
                  <div class="d-flex flex-column">
                    <p class="mb-3 footer-color">Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh.
                        Email: uilib@gmail.com
                        Phone: +880 1123 456 780</p>
                    <p class="mb-3 footer-color">Sylhet, Bangladesh.</p>
                    <p class="mb-3 footer-color">Email: uilib@gmail.com</p>
                    <p class="mb-6 footer-color">Phone: +880 1123 456 780</p>
                    <div class="d-flex flex-wrap">
                        <v-btn
                            class="me-2"
                            fab
                            dark
                            x-small
                            color="secondary"
                        >
                            <v-icon dark>
                                mdi-facebook
                            </v-icon>
                        </v-btn>
                        <v-btn
                            class="me-2"
                            fab
                            dark
                            x-small
                            color="secondary"
                        >
                            <v-icon dark>
                                mdi-twitter
                            </v-icon>
                        </v-btn>
                        <v-btn
                            class="me-2"
                            fab
                            dark
                            x-small
                            color="secondary"
                        >
                            <v-icon dark>
                                mdi-instagram
                            </v-icon>
                        </v-btn>
                        <v-btn
                            class="me-2"
                            fab
                            dark
                            x-small
                            color="secondary"
                        >
                            <v-icon dark>
                                mdi-youtube
                            </v-icon>
                        </v-btn>
                        <v-btn
                            class="me-2"
                            fab
                            dark
                            x-small
                            color="secondary"
                        >
                            <v-icon dark>
                                mdi-google
                            </v-icon>
                        </v-btn>
                    </div>
                  </div>
              </v-col>
          </v-row>
      </v-container>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer-color{
    color: #4B566B;
}
.footer-link{
    text-decoration: none;
    color: #4B566B !important;
    margin-bottom: 12px;
    &:hover {
        color: #D23F57 !important;
    }
}
</style>