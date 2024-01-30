<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

// get data 
// import { useStore } from 'vuex'
import { useCounterStore } from './stores/counter'
import { useStatisticsStore } from './stores/statistics'
import { useSysStore } from './stores/sys'
import { ref, computed } from 'vue';

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-vue-ui-kit';

import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBadge,
  MDBIcon
} from 'mdb-vue-ui-kit';

import { loadScript } from "vue-plugin-load-script";
import {Browser} from './utils/browser.js'
import {PiSDK} from './utils/pisdk.js'

console.log(loadScript);
loadScript("https://sdk.minepi.com/pi-sdk.js")
.then(()=>{
  console.log("loadScript ok")
  var bSandbox = PiSDK.init();

  if (Browser.getType() == 'Pi' || bSandbox == true) {
    console.log("begin authencicate")
    // auto authencicate
    // that.authencicate().then(()=>console.log("login completed in HelloWorld.vue"))
  }
})

const store = useStatisticsStore()
const sysStore = useSysStore()
store.metrics_list();
store.get_payment8day();
// store.dispatch('statistics/metrics_list');
// store.dispatch('statistics/get_payment8day');

// const collapse1 = computed(() => { return sysStore.collapse1 });
// const collapse1 = sysStore.collapse1;
const dropdown1 = ref(false);
const dropdown2 = ref(false);

</script>

<template>

  <MDBNavbar expand="lg" dark class="bg-purple bg-gradient " container position="sticky" >
    <MDBNavbarBrand href="#">
      <img src="/pidoor3.png" alt="" width="48" height="38">
      Pi Door
    </MDBNavbarBrand>
    <MDBNavbarToggler @click="sysStore.collapse1 = !sysStore.collapse1" target="#navbarSupportedContent">
    </MDBNavbarToggler>
    <MDBCollapse v-model="sysStore.collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem :to="{ name: 'home' }">
          Home
        </MDBNavbarItem>

        <MDBNavbarItem :to="{ name: 'stats' }">
          Network Stats
        </MDBNavbarItem>

        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item " v-model="dropdown1">
            <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1">Wallet</MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton" class="bg-purple bg-gradient" dark>
              <MDBDropdownItem :to="{ name: 'account8day' }">Wallets Migration</MDBDropdownItem>
              <MDBDropdownItem :to="{ name: 'top10' }">Top10 Wallets</MDBDropdownItem>
              <MDBDropdownItem :to="{ name: 'distribution' }">Distribution</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>

        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown2">
            <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown2 = !dropdown2">Shops</MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton" dark class="bg-purple bg-gradient">
              <MDBDropdownItem
                :to="{ name: 'payment8day', params: { address: 'GBCRZX73YTPTA7HSHVXNXYGJCUUKVUQMASELPXZ5WQVDUT7RLINS6N3Y' } }">
                Pi Chain Mall</MDBDropdownItem>
              <MDBDropdownItem
                :to="{ name: 'payment8day', params: { address: 'GCSCB2JMPWLYY6BJ2Q2NSKRSUDJTZ4WDP5SFMHQRU2URKXENFBY32LZS' } }">
                DZ International</MDBDropdownItem>
              <MDBDropdownItem
                :to="{ name: 'payment8day', params: { address: 'GDPYUVUM6MXY5RUAWPTATGVWNT34DSTDNC3J6KGD4EAVW36XTNQALX7N' } }">
                lgkm</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
        
      </MDBNavbarNav>
      <!-- Search form -->
      <!-- <form class="d-flex input-group w-auto">
        <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
        <MDBBtn outline="primary">
          Search
        </MDBBtn>
      </form> -->


      <MDBBtn color="primary" floating>
        <img
          src="/pi.png"
          class="rounded-circle"
          height="32"
          alt=""
          loading="lazy"
        />
      </MDBBtn>


    </MDBCollapse>




  </MDBNavbar>

  <RouterView />

  <div class="container">
    <MDBFooter :text="['center', 'lg-start', 'muted']">
      <!-- Section: Social media -->
      <section class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      ">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->
        <!-- Right -->
        <div>
          <a href="https://t.me/piiqDoor" class="me-4 text-reset">
            <MDBIcon iconStyle="fab" icon="telegram"></MDBIcon>
          </a>
          <a href="https://twitter.com/piiqDoor" class="me-4 text-reset">
            <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->
      <!-- Section: Links  -->
      <section class="">
        <MDBContainer class="text-center text-md-start mt-5">
          <!-- Grid row -->
          <MDBRow class="mt-3">
            <!-- Grid column -->
            <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Pi Door
              </h6>
              <p>
                Pi door focuses on analysis of the Stellar Consensus Protocol and provides data analysis for Pi
                pioneers.
              </p>
            </MDBCol>
            <!-- Grid column -->
            <!-- Grid column -->
            <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="https://www.pidao.top/#/" class="text-reset">Pi Dao</a>
              </p>
              <p>
                <a href="https://pinft.com/" class="text-reset">Pi NFT</a>
              </p>
              <p>
                <a href="https://www.piiq.network/" class="text-reset">Pi Door</a>
              </p>
              <p>
                <a href="https://wordpress.com/" class="text-reset">coming soon</a>
              </p>
            </MDBCol>
            <!-- Grid column -->
            <!-- Grid column -->
            <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="https://minepi.com/" class="text-reset">Pi Network</a>
              </p>
              <p>
                <a href="https://minepi.com/blockexplorer" class="text-reset">Pi Network Block Explorer</a>
              </p>
              <p>
                <a href="https://www.stellar.org/developers?locale=en" class="text-reset">Stellar Developers</a>
              </p>
              <p>
                <a href="https://stellar.expert/" class="text-reset">Stellar Expert</a>
              </p>
            </MDBCol>
            <!-- Grid column -->
            <!-- Grid column -->
            <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> Wuxi, China
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                jiakuant@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" class="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" class="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
            <!-- Grid column -->
          </MDBRow>
          <!-- Grid row -->
        </MDBContainer>
      </section>
      <!-- Section: Links  -->
      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="https://www.piiq.network/">PI Door</a>
      </div>
      <!-- Copyright -->
    </MDBFooter>
  </div>



</template>

<style scoped>
.bg-purple {
  background-color: #8E24AA;
}


/* .bi {
  vertical-align: -.125em;
  fill: currentColor;
} */

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

/*header {
  line-height: 1.5;
  max-height: 100vh;
}*/

/*.logo {
  display: block;
  margin: 0 auto 2rem;
}

   {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
