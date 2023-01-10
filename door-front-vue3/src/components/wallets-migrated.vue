<template>
  <div class="px-lg-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-5 fw-bold">Wallets Migrated</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"></p>
    </div>
    <div class="overflow-hidden">
      <div class="container">
        <div>
          <div>
            <MDBBtnGroup>
              <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="1m" name="options"
                value="1" v-model="months" />
              <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="3m" name="options"
                value="3" v-model="months" />
              <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="6m" name="options"
                value="6" v-model="months" />
              <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="1y" name="options"
                value="12" v-model="months" />
              <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="All" name="options"
                value="100" v-model="months" />
            </MDBBtnGroup>
          </div>
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

// import { mapGetters, mapActions } from 'vuex'
// import { mapMutations } from 'vuex'
// import { mapState } from 'vuex'
// import { useStore } from 'vuex'
import { useStatisticsStore } from '@/stores/statistics'

import { computed, defineComponent, ref, reactive } from 'vue';
import { MDBRadio, MDBBtnGroup } from "mdb-vue-ui-kit";

// const store = useStore()
const store = useStatisticsStore()

const metrics = computed(() => {
  return store.metrics;
})

const months = ref("6")
const begin = computed(() => {
  return moment().subtract(months.value, 'months')
})


const options = computed(() => {
  var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
  return {
    chart: {
      id: 'accounts created every day',
      type: 'bar',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
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
    stroke: {
      width: 2,
      curve: 'straight'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: _(data)
        .map(function (item) {
          return moment(item.ts).format("YYYY-MM-DD")
        })
        .value(),
      type: 'datetime',
    },

    yaxis: [
      {
        // axisTicks: {
        // 	show: true
        // },
        // axisBorder: {
        // 	show: true,
        // 	color: "#FF1654"
        // },
        // labels: {
        // 	style: {
        // 		colors: "#FF1654"
        // 	}
        // },
        // title: {
        // 	text: "CreateAccount",
        // 	// style: {
        // 	// 	color: "#FF1654"
        // 	// }
        // },
        labels: {
          show: true,
          // formatter: (value: string) => { return nFormatter(value, 2) },
          formatter: (value) => { return value ? value.toLocaleString() : 0 },
        },
      }

    ],

    title: {
      text: 'Wallets Migrated',
      align: 'center',
      floating: true
      // floating: true,
      // offsetY: 0,
      // align: 'center',
      // style: {
      //   color: '#444'
      // }
    },

    subtitle: {
      text: '©piiq.network',
      align: 'center',
    },
  }
})

const series = computed(() => {
  var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
  return [{
    name: 'Create Accounts',
    data: _(data).map((item) => {
      var ret = _(item.operation_types).find({ type: 0 });
      return ret ? ret.count : 0;
    }).value(),
    // type: 'area',
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
