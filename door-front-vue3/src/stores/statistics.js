import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
import { StatisticsApi } from '../api/statistics'

export const useStatisticsStore = defineStore('statistics', () => {
  var today = ref({});

  var metrics = ref([]);
  var payment8days = ref([]);

  function metrics_list(payload) {
    return new Promise((resolve, reject) => {
      console.log('get metrics_list')
      console.log(payload)
      var api = new StatisticsApi();

      return api.metrics_list(payload)
        .then(function (data) {
          console.log(data)
          metrics.value = data;

          resolve(data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })

    })
  }

  function metrics_today(payload) {
    return new Promise((resolve, reject) => {
      console.log('get metrics_today')
      console.log(payload)
      var api = new StatisticsApi();

      return api.metrics_today(payload)
        .then(function (data) {
          console.log(data)
          today.value = data;

          resolve(data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })

    })
  }

  function get_payment8day(payload) {
    return new Promise((resolve, reject) => {
      console.log('get get_payment8day')
      console.log(payload)
      var api = new StatisticsApi();

      return api.get_payment8day(payload)
        .then(function (data) {
          console.log(data)
          payment8days.value = data;

          resolve(data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })

    })
  }


  return { today, metrics, payment8days, metrics_list, metrics_today, get_payment8day };

})
