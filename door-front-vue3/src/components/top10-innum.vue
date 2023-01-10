<template>
  <div class="px-lg-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-5 fw-bold">Top 10 'to'</h1>
    <MDBModal id="exampleModal" tabindex="-1" labelledby="exampleModalLabel" v-model="exampleModal" size="lg">
      <MDBModalHeader>
        <MDBModalTitle id="exampleModalLabel"> Pi door </MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <b>The address has been copied to the clipboard</b><br>
        <b>{{ address }}</b><br>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
        <MDBBtn color="primary" @click="goto">
          Pi BlockExplorer</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
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
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-vue-ui-kit';

// import { mapGetters, mapActions } from 'vuex'
// import { mapMutations } from 'vuex'
// import { mapState } from 'vuex'
// import { useStore } from 'vuex'
import { StatisticsApi } from '../api/statistics'
import { useShopStore } from '@/stores/shops'

import { computed, defineComponent, ref, reactive } from 'vue';


const store = useShopStore()
// const store = useStore()
var api = new StatisticsApi();

const exampleModal = ref(false);
const address = ref('');
function goto() {
  exampleModal.value = false;
  window.open('https://minepi.com/blockexplorer/account/' + address.value, '_blank');
}


// console.log(store.state)
const shops = computed(() => store.shops)
console.log(shops)

const {
  data,
} = useRequest(() => api.get_top100_innum());

const options = computed(() => {
  return {
    chart: {
      type: 'bar',
      height: 420,
      events: {
        legendClick: function (chartContext, seriesIndex, config) {

          if (navigator.clipboard) {
            navigator.clipboard.writeText(config.config.xaxis.categories[seriesIndex]);
            exampleModal.value = true;
            address.value = config.config.xaxis.categories[seriesIndex];
          }
        }
      }
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        borderRadius: 4,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
      '#f48024', '#69d2e7'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#000']
      },
      formatter: function (val, opt) {
        return "G..." + (opt.w.globals.labels[opt.dataPointIndex] + "").slice(52, 56) + ":  " + val + "txs"
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: _.map(data?.value, function (item) {
        return item.address // .slice(0,4)
      })
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    title: {
      text: 'Top 10 \'to\' address ',
      align: 'center',
      floating: true
    },
    subtitle: {
      text: 'in just last month ©piiq.network',
      align: 'center',
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true,
        formatter: function (value) {
          let shop = store.getshop(value);
          console.log(shop);
          return "<p>" + shop?.name + "<br>" + value.slice(0, 28) + "<br>" + value.slice(28, 56) + "</p>"
          // value.slice(0,28) + "\r\n" + value.slice(28,56);
        },
      },
      y: {
        title: {
          formatter: function (value) {
            return 'txs'
          }
        }
      },

      fixed: {
        enabled: true,
        offsetX: 0,
        offsetY: 0,
        position: "topLeft"
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'left',
      offsetX: 40,
      formatter: function (val, opt) {
        let shop = store.getshop(val);
        // console.log(shop);
        if (shop === undefined) {
          return "G..." + (val + "").slice(52, 56)
        } else {
          return "<img src='" + shop.logo + "' height='24' width='24'/>"
        }
      }

    }
  }
})

const series = computed(() => {
  return [{
    name: 'txs',
    data: _.map(data?.value, 'innum')
  }]
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
