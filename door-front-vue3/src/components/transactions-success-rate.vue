<template>
	<div class="px-lg-4 pt-5 my-5 text-center border-bottom">
		<h1 class="display-5 fw-bold">Transactions Success Rate
		</h1>
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
					<apexchart type="line" height="500" :options="accounts_options" :series="accounts_series">
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

const accounts_series = computed(() => {

	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
	return [
		{
			name: 'Successful Transactions',
			data: _(data).map((item) => {
				var ret = item.transactions ? item.transactions : 0 - item.failed_transactions ? item.failed_transactions : 0
				return ret;
			}).value(),
			type: 'bar',
		},
		{
			name: 'Failed Transactions',
			data: _(data).map('failed_transactions').value(),
			type: 'bar',
		},

	]
})
const accounts_options = computed(() => {
	var data = _(metrics?.value).filter((o) => { return moment(o.ts).diff(begin.value) > 0 });
	return {
		chart: {
			id: 'Operation Distribution',
			type: 'bar',
			stacked: true,
			// stackType: '100%',
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

		]
		,
		title: {
			text: "Operations Distribution",
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
		theme: {
			mode: 'light',
			palette: 'palette6',
			monochrome: {
				enabled: false,
				color: '#255aee',
				shadeTo: 'light',
				shadeIntensity: 0.65
			},
		},
		// tooltip: {
		// 	custom: function ({ series, seriesIndex, dataPointIndex, w }) {
		// 		console.log(series)
		// 		return '<div class="arrow_box">' +
		// 			'<span>' + w.globals.labels[dataPointIndex] + '</span>' +
		// 			'<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
		// 			'</div>'
		// 	}
		// }
		// legend: {
		// 	position: 'right',
		// 	horizontalAlign: 'left',
		// },
	}
})

</script>

<style lang="scss" scoped>

</style>
