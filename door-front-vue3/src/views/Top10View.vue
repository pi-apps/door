<template>

  <!-- <div class="b-example-divider"></div> -->
  <Top10Balance></Top10Balance>
  <div class="b-example-divider"></div>
  <Top10Innum></Top10Innum>
  <div class="b-example-divider"></div>
  <Top10Income></Top10Income>
  <div class="b-example-divider"></div>
  <Top10Outnum></Top10Outnum>
  <div class="b-example-divider"></div>
  <Top10Expenditure></Top10Expenditure>
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



import Top10Expenditure from '../components/top10-expenditure.vue'
import Top10Outnum from '../components/top10-outnum.vue'
import Top10Innum from '../components/top10-innum.vue'
import Top10Income from '../components/top10-income.vue'
import Top10Balance from '../components/top10-balance.vue'


export default {
  name: 'Top10',
  components: {
    Top10Expenditure,
    Top10Outnum,
    Top10Innum,
    Top10Income,
    Top10Balance,
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
