import {ApiBase} from './apiBase'
// import _ from 'lodash'
// import axios from 'axios'

console.log(ApiBase)

class PaymentApi extends ApiBase {

  cancel (paymentId, metadata) {

    return new Promise((resolve, reject) => {
      this.instance.post( '/api/payment/cancel',
      {
        ...metadata, 
        ...{
          paymentId : paymentId
        }
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    })

  }

  approval (paymentId, metadata) {

    var that = this;
    return this.instance.post( '/api/payment/approval',
    {
        ...metadata, 
        ...{
          paymentId : paymentId
        }
    })
    .then(function (response) {
      console.log(response)
      console.log('approvalSendPi ok')
    })
    .catch(function (error) {
      console.log(error)
      console.log('approvalSendPi error')
      that.cancel(paymentId);
    })
  }

  complete (paymentId, txid, metadata) {
    return this.instance.post( '/api/payment/complete',
    {
      ...metadata, 
      ...{
        paymentId : paymentId,
        txid : txid
      }
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  incomplete (payment) {
    return this.instance.post( '/api/payment/incomplete',
    {
      payment
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export {PaymentApi}