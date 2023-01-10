<template>
  <PiDistribution></PiDistribution>
  <div class="b-example-divider"></div>
  <WalletDistribution></WalletDistribution>
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



import PiDistribution from '../components/pi-distribution.vue'
import WalletDistribution from '../components/wallet-distribution.vue'

export default {
  name: 'Top10',
  components: {
    PiDistribution,
    WalletDistribution,
  }
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
</style>
