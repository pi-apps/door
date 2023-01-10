<template>
  <!--   <main>
  <TheWelcome />
  </main> -->

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="https://assets-global.website-files.com/5deac75ecad2173c2ccccbc7/624df257e2ebf86c0fe0e9c9_StellarStackDiagram%20(1)-p-800.png"
          class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Door of World of Trust</h1>
        <p class="lead">focuses on analysis of the Stellar Consensus Protocol and provides data stats for Pi pioneers
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" @click="gotohome()">
            Go to stats
          </button>
          <!-- <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> -->
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider"></div>

  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-5 fw-bold">The Story Of Pi</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">The First Digital Currency You Can Mine On Your Phone.</p>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
        <iframe class="img-fluid border rounded-3 mb-4" width="560" height="315"
          src="https://www.youtube.com/embed/MsOaC61cR3U" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { cloneDeep } from 'lodash';
import moment from 'moment'
import { usePagination, useRequest } from 'vue-request';
import { RouterLink, RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

// import { mapGetters, mapActions } from 'vuex'
// import { mapMutations } from 'vuex'
// import { mapState } from 'vuex'
// import { useStore } from 'vuex'
import { computed, defineComponent, ref, reactive } from 'vue';

import Accounts from "../components/accounts.vue";
import Payments from "../components/payments.vue";
import Ledgers from "../components/ledgers.vue";
import OperationDistribution from "../components/operation-distribution.vue";
import TransactionsSuccessRate from "../components/transactions-success-rate.vue";
import Today24h from "../components/24h.vue";
import LedgerRealtime from "../components/ledger-realtime.vue";
import HelloWorldVue from '../components/HelloWorld.vue';


const router = useRouter()
const route = useRoute()

function gotohome() {
  console.log('go to stats')
  router.push({
    name: 'stats'
  })
}

</script>

<style scoped>
.bg-purple {
  background-color: #0000FF;
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}


/*.bi {
  vertical-align: -.125em;
  fill: currentColor;
}*/
</style>
