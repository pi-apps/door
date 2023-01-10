import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'

export const useShopStore = defineStore('shop', () => {

  const shops = ref([
    {
      "name": "Pi Chain Mall",
      "address": "GBCRZX73YTPTA7HSHVXNXYGJCUUKVUQMASELPXZ5WQVDUT7RLINS6N3Y",
      "logo": "/pcm.jpg"
    },
    {
      "name": "Pi Chain Mall",
      "address": "GB7BHOTZXZXMSV7E22VAORD5PLOP7LMPKU2LO46DY27452PRQWSPRF67",
      "logo": "/pcm.jpg"
    },
    {
      "name": "Pi Chain Mall",
      "address": "GDGVILYX4RATPIO6XTBXNIBEUZXI3EBI36NJXKGO4DVJINYJ5X42WXHF",
      "logo": "/pcm.jpg"
    },
    {
      "name": "lgkm",
      "address": "GDPYUVUM6MXY5RUAWPTATGVWNT34DSTDNC3J6KGD4EAVW36XTNQALX7N",
      "logo": "/lgkm.png"
    },
    {
      "name": "DZ International",
      "address": "GCSCB2JMPWLYY6BJ2Q2NSKRSUDJTZ4WDP5SFMHQRU2URKXENFBY32LZS",
      "logo": "/dzinternational.jpg"
    }
  ]);

  // const getshop = computed((payload) => {
  //   return _.findLast(state.shops, { "address": payload })
  // })

  function getshop(payload) {
    console.log(payload)
    return _.findLast(shops.value, { "address": payload })
  }
  return { shops, getshop };

})
