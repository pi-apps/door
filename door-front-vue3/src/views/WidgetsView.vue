<template>
  <!--   <main>
  <TheWelcome />
  </main> -->

  <MDBTabs v-model="activeTabId1">
    <!-- Tabs navs -->
    <MDBTabNav pills tabsClasses="mb-3" justify>
      <MDBTabItem tabId="ex1-1" href="ex1-1">Top10 Wallets</MDBTabItem>
      <MDBTabItem tabId="ex1-2" href="ex1-2">Wallets Migration</MDBTabItem>
      <MDBTabItem tabId="ex1-3" href="ex1-3">Network Stats</MDBTabItem>
      <MDBTabItem tabId="ex1-4" href="ex1-4">Distribution</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane tabId="ex1-1">
        <Top10Innum></Top10Innum>
        <div class="b-example-divider"></div>
        <Top10Income></Top10Income>
        <div class="b-example-divider"></div>
        <Top10Outnum></Top10Outnum>
        <div class="b-example-divider"></div>
        <Top10Expenditure></Top10Expenditure>
        <div class="b-example-divider"></div>
      </MDBTabPane>
      <MDBTabPane tabId="ex1-2">
        <WalletsMigrated></WalletsMigrated>
      </MDBTabPane>
      <MDBTabPane tabId="ex1-3">
        <div>
          <div>
            <div class="col-12">
              <Today24h></Today24h>
            </div>
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
      </MDBTabPane>
      <MDBTabPane tabId="ex1-4">
        <PiDistribution></PiDistribution>
        <div class="b-example-divider"></div>
        <WalletDistribution></WalletDistribution>
        <div class="b-example-divider"></div>
      </MDBTabPane>
    </MDBTabContent>
    <!-- Tabs content -->
  </MDBTabs>




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

import Top10Expenditure from '../components/top10-expenditure.vue'
import Top10Outnum from '../components/top10-outnum.vue'
import Top10Innum from '../components/top10-innum.vue'
import Top10Income from '../components/top10-income.vue'
import Top10Balance from '../components/top10-balance.vue'

import PiDistribution from '../components/pi-distribution.vue'
import WalletDistribution from '../components/wallet-distribution.vue'

import WalletsMigrated from '../components/wallets-migrated.vue';
import Payments8day from '../components/payments8day.vue'

import {
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from 'mdb-vue-ui-kit';

const router = useRouter()
const route = useRoute()

const activeTabId1 = ref('ex1-1');

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
