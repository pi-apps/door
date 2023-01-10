<template>
	<div class="px-lg-4 pt-5 my-5 text-center border-bottom">
		<div>
			<img :src=shop.logo class="img-thumbnail rounded " width="60" height="60" alt="...">
			<h1 class="display-5 fw-bold">{{ shop.name }}</h1>
		</div>

		<div class="col-lg-6 mx-auto">
			<p class="lead mb-4">average of {{ average }}({{ total_income }}/{{ total_innum }}) π/tx</p>
		</div>
		<div class="overflow-hidden">
			<div class="container px-lg-5">
				<div>
					<MDBBtnGroup>
						<MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="1m"
							name="options" value="1" v-model="months" />
						<MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="3m"
							name="options" value="3" v-model="months" />
						<MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="6m"
							name="options" value="6" v-model="months" />
						<MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="1y"
							name="options" value="12" v-model="months" />
						<MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="All"
							name="options" value="100" v-model="months" />
					</MDBBtnGroup>
				</div>
				<div id="chart">
					<apexchart type="line" height="500" :options="ledger_options" :series="ledger_series">
					</apexchart>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import _ from "lodash";
import numeral from 'numeral';
import { cloneDeep } from 'lodash';
import moment from 'moment'
import { usePagination, useRequest } from 'vue-request';
import { useStatisticsStore } from '@/stores/statistics'
import { useShopStore } from '@/stores/shops'
// import { useStore } from 'vuex'
import { computed, defineComponent, ref, reactive, watchEffect, watch } from 'vue';
import { StatisticsApi } from '../api/statistics'
import { useRouter, useRoute } from 'vue-router'
import { MDBRadio, MDBBtnGroup } from "mdb-vue-ui-kit";

const store = useStatisticsStore()
const shopstore = useShopStore()
var api = new StatisticsApi();
const route = useRoute()

var address = computed(() => {
	return route.params.address;
})

// all data 
const payment8days = computed(() => {
	return store.payment8days;
})

var metrics = computed(() => {
	return _(payment8days.value).filter((o) => { return o.address == address.value });
})

let shop = computed(() => {
	console.log(shopstore.shops)
	console.log(shopstore.getshop(address.value))
	return shopstore.getshop(address.value);
})

const months = ref("1")
const begin = computed(() => {
	return moment().subtract(months.value, 'months')
})

function nFormatter(num, digits) {
	const si = [
		{ value: 1, symbol: "" },
		{ value: 1E3, symbol: "K" },
		{ value: 1E6, symbol: "M" },
		{ value: 1E9, symbol: "G" },
		{ value: 1E12, symbol: "T" },
		{ value: 1E15, symbol: "P" },
		{ value: 1E18, symbol: "E" }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	let i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			break;
		}
	}
	return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}


const total_income = computed(() => {
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 }).value();
	if (data) {
		// console.log('calc total')
		// console.log(data)
		var total = data.reduce(function (a, b) {
			// console.log(a)
			return a.add(b.income)
		}, numeral(0))
		return numeral(total).format('0.0000000')
	}
});

const total_innum = computed(() => {
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
	if (data) {
		// console.log('calc total')
		// console.log(data?.value)
		var total = data.reduce(function (a, b) {
			return a + b.innum
		}, 0)
		return total
	}
});

const average = computed(() => {
	// console.log('---------------')
	// console.log(total_income)
	// console.log(total_innum)
	return numeral(total_income.value / total_innum.value).format('0.0000000')
})

const ledger_series = computed(() => {
	console.log(metrics)
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });

	return [
		{
			name: 'innum',
			data: _(data).map('innum').value(),
			type: 'column',
		},
		{
			name: 'income',
			data: _(data).map('income').value(),
			type: 'column',
		},
	]
})
const ledger_options = computed(() => {
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
	return {
		chart: {
			id: 'payments8day',
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
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 2,
			curve: 'straight'
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
				showAlways: false,
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
				title: {
					text: "innum",
					// style: {
					// 	color: "#FF1654"
					// }
				},
				labels: {
					show: true,
					// formatter: (value: string) => { return nFormatter(value, 2) },
					formatter: (value) => { return value ? value.toLocaleString() : 0 },
				},
			},
			{
				showAlways: false,
				opposite: true,
				// axisTicks: {
				// 	show: true
				// },
				// axisBorder: {
				// 	show: true,
				// 	color: "#247BA0"
				// },
				// labels: {
				// 	style: {
				// 		colors: "#247BA0"
				// 	}
				// },
				title: {
					text: "income",
					// style: {
					// 	color: "#247BA0"
					// }
				},
				labels: {
					show: true,
					// formatter: (value: string) => { return nFormatter(value, 2) },
					formatter: (value) => { return value ? value.toLocaleString() : 0 },
				},
			}
		]
		,
		title: {
			text: shop.name,
			align: 'center',
			floating: true,
			// floating: true,
			// offsetY: 0,
			// align: 'center',
			style: {
				color: '#000'
			}
		},
		subtitle: {
			text: '©piiq.network',
			align: 'center',
		},
	}
})

</script>

<style lang="scss" scoped>

</style>
