
<template>
  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-5 fw-bold">Pi Coin Distribution</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"></p>
    </div>
    <div class="overflow-hidden">
      <div class="container">
        <div>
          <apexchart height="500" :options="options" :series="series"></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import _ from 'lodash'
import { cloneDeep } from 'lodash';
import moment from 'moment'
import { usePagination, useRequest } from 'vue-request';
// import { VXETable } from 'vxe-table'

// import { mapGetters, mapActions } from 'vuex'
// import { mapMutations } from 'vuex'
// import { mapState } from 'vuex'
// import { useStore } from 'vuex'
import { StatisticsApi } from '../api/statistics'

import { computed, defineComponent, ref, reactive } from 'vue';


// const store = useStore()
var api = new StatisticsApi();

const {
  data,
} = useRequest(() => api.get_pi_distribution());

const options = computed(() => {
  return {
    chart: {
      type: 'pie',
      toolbar: {
        show: true,
        autoSelected: 'pan',
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        },
      },
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
      '#f48024', '#69d2e7'
    ],
    title: {
      text: 'Pi Coin Distribution of Pioneers',
      align: 'center',
      floating: true
    },
    subtitle: {
      text: ' ©piiq.network',
      align: 'center',
    },
    labels: _.map(data?.value, 'label1'),
    tooltip: {
      theme: 'dark',
      y: {
        title: {
          formatter: function (value) {
            return value
          }
        }
      },
    },
  }
})

const series = computed(() => {
  return _.map(data?.value, 'totalpi')
})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
