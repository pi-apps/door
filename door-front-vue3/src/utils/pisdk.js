
import {PaymentApi} from '../api/payment'

class PiSDK {
  // methods
  static init() {
    console.log("begin init");
    console.log(navigator.userAgent)
    console.log(process.env.NODE_ENV);

    console.log(window.location)

    console.log(window.location.origin);
    if (window.location.origin == 'https://192.168.142.130') {
      console.log("Pi.init with sandbox to true")
      Pi.init({ version: "2.0", sandbox: true});
    }else{
      console.log("Pi.init with sandbox to false")
      Pi.init({ version: "2.0"});
    }

    console.log(Pi);
  }

  static authenticate () {
    // let that = this;

    var paymentApi = new PaymentApi();
    
    // Authenticate the user, and get permission to request payments from them:
    const scopes = ['username', 'payments'];
    console.log(scopes);

    // Read more about this callback in the SDK reference:
    function onIncompletePaymentFound(payment) {
      console.log('IncompletePaymentFound:');
      console.log(payment)

      paymentApi.incomplete(payment);
    };

    console.log("authenticate");

    return Pi.authenticate(scopes, onIncompletePaymentFound)
    .then(function(auth){
      console.log(auth);
      return auth;
    })
    

  }


  static sendPi (metadata) {

    console.log(metadata);

    var paymentApi = new PaymentApi();
    // let that = this;
    // console.log('sendPi:' + idolName);

    return new Promise((resolve, reject) => {
      Pi.createPayment({
        // Amount of π to be paid:
        amount: metadata.amount,
        // An explanation of the payment - will be shown to the user:
        memo: metadata.memo, // e.g: "Digital kitten #1234",
        // An arbitrary developer-provided metadata object - for your own usage:
        metadata: metadata // e.g: { kittenId: 1234 }
        // to_address: to_address,
      }, {
        // Callbacks you need to implement - read more about those in the detailed docs linked below:
        onReadyForServerApproval: function(paymentId) {
          console.log('onReadyForServerApproval:' + paymentId);
          paymentApi.approval(paymentId, metadata)
        },
        onReadyForServerCompletion: function(paymentId, txid) {
          console.log('onReadyForServerCompletion:' + paymentId + ',' + txid);
          paymentApi.complete(paymentId, txid, metadata);

          // payment process compelted
          resolve(1);
        },
        onCancel: function(paymentId) {
          console.log('onCancel:' + paymentId);
          paymentApi.cancel(paymentId, metadata);
        },
        onError: function(error, payment) {
          console.log('onError:' + error + ',' + payment);
          reject(error);
          if (payment) {
            console.log(payment);
          }
        },
      });
    })
    
  }

}

export {PiSDK}




