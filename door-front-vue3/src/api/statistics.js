import { ApiBase } from './apiBase'
// import _ from 'lodash'
// import axios from 'axios'


class StatisticsApi extends ApiBase {
  // methods
  metrics_today() {
    return new Promise((resolve, reject) => {
      this.instance.get('/app/demo/metrics/today')
        .then(function (response) {
          console.log(response)
          resolve(response.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })

  }

  metrics_list() {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/metrics/list')
        .then(function (response) {
          // console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })

  }

  get_payment8day(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/payments8day/list?address=' + address)
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })

  }


  get_top100_income(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/top100-income/list')
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }

  get_top100_innum(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/top100-innum/list')
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }

  get_top100_outnum(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/top100-outnum/list')
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }

  get_top100_expenditure(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/top100-expenditure/list')
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }

  get_top100_balance(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/top100-balance/list')
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }

  get_pi_distribution(address) {
    return new Promise((resolve, reject) => {
      this.instance.post('/app/demo/pi-distribution/list')
        .then(function (response) {
          console.log(response)
          resolve(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }



}

export { StatisticsApi }