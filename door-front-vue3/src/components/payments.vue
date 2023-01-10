<template>
	<div class="px-lg-4 pt-5 my-5 text-center border-bottom">
		<h1 class="display-5 fw-bold">Payments</h1>
		<div class="col-lg-6 mx-auto">
			<p class="lead mb-4"></p>
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
					<apexchart type="line" height="500" :options="payments_options" :series="payments_series">
					</apexchart>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import _ from "lodash";
import { cloneDeep } from 'lodash';
import moment from 'moment'
import { usePagination, useRequest } from 'vue-request';
// import { useStore } from 'vuex'
import { computed, defineComponent, ref, reactive } from 'vue';
import { MDBRadio, MDBBtnGroup } from "mdb-vue-ui-kit";


import { useStatisticsStore } from '@/stores/statistics'
const store = useStatisticsStore()

const metrics = computed(() => {
	return store.metrics;
})

const months = ref("6")
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


const payments_series = computed(() => {
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
	return [
		{
			name: 'payments',
			data: _(data).map('payments').value(),
			type: 'line',
		},
		{
			name: 'volume',
			data: _(data).map('volume').value(),
			type: 'column',
		},
	]
})
const payments_options = computed(() => {
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
	return {
		chart: {
			id: 'Payments',
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
				// logarithmic: true,
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
					text: "payments",
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
				// logarithmic: true,
				// forceNiceScale: true,
				// max: 200000000,
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
					text: "volume",
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
			text: "Payments",
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
