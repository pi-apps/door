import axios from 'axios'

// // export const BASEADDR = 'http://localhost:2778'
// // export const BASEADDR = 'http://localhost:8088'
// // export const BASEADDR = 'http://192.168.0.144:8088'
// console.log(process.env.NODE_ENV)
// // let BASEADDR = window.location.protocol + '//' + window.location.host

// if (process.env.NODE_ENV === 'production') {
//   // BASEADDR = window.location.protocol + '//' + window.location.host
// } if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'https://localhost:4430';
//   // BASEADDR = 'http://localhost:2778'
//   // BASEADDR = 'http://192.168.0.144:8088'
// }
// // console.log(BASEADDR)

class ApiBase {

  instance = null;

  // console.log(instance);

  constructor() {
    console.log('ApiBase constructor')
    console.log(process.env.NODE_ENV)
    console.log(window.location.origin);

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    if (process.env.NODE_ENV === 'production') {
      this.instance = axios.create({
        //baseURL: 'https://pime.app',
        baseURL: "https://api.piiq.network",
        // baseURL: 'http://192.168.1.4:8000',
        timeout: 20000
      });
      console.log(this.instance);
    } if (process.env.NODE_ENV === 'development') {
      // axios.defaults.baseURL = 'https://localhost:4430';
      // console.log(axios)

      this.instance = axios.create({
        // baseURL: 'http://43.254.217.33',
        // baseURL: "http://localhost:8001",
        baseURL: "https://api.piiq.network",
        timeout: 20000
      });
      console.log(this.instance);
    }
  }
}

export { ApiBase }
