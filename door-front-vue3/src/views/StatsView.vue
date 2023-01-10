<template>
  <!--   <main>
  <TheWelcome />
  </main> -->
  <!-- <div class="b-example-divider"></div> -->
  <div>
    <div>
      <div class="col-12">
        <Today24h></Today24h>
      </div>
      <!-- <div class="col-lg-6">
      <LedgerRealtime></LedgerRealtime>
    </div> -->
    </div>
  </div>


  <div class="b-example-divider"></div>
  <Ledgers></Ledgers>
  <div class="b-example-divider"></div>
  <Accounts></Accounts>
  <div class="b-example-divider"></div>
  <Payments></Payments>
  <div class="b-example-divider"></div>
  <OperationDistribution></OperationDistribution>
  <div class="b-example-divider"></div>
  <TransactionsSuccessRate></TransactionsSuccessRate>
  <div class="b-example-divider"></div>

</template>

<script>
import _ from 'lodash'
import { cloneDeep } from 'lodash';
import moment from 'moment'
import { usePagination, useRequest } from 'vue-request';

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

export default {
  name: 'App',
  components: {
    Accounts,
    Today24h,
    Payments,
    Ledgers,
    OperationDistribution,
    TransactionsSuccessRate,
    Today24h,
    LedgerRealtime,
    HelloWorldVue

  }
}

// export default defineComponent({

//   setup() {
//     const store = useStore()

//     const {
//       data,
//     } = useRequest(() => store.dispatch('statistics/metrics_today'));



//     return {
//       data,
//       moment
//     };
//   },
// })



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
