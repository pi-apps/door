<template>
	<div>
		<div class="px-4 py-5 text-center">
			<h1 class="display-5 fw-bold"></h1>
			<div class="row gy-2 gx-2 col-12 mx-auto">
				<div>
					<div class="card shadow-lg">
						<div class="card-header bg-info fs-3">
							Today Ledger Statistics
						</div>

						<ol class="list-group">
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Accounts:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start fw-bold">{{ today?.accounts }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Daily active accounts:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start fw-bold">{{ today?.daily_active_accounts
										}}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Processed operations:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start fw-bold">{{ today?.operations }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Payments:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start fw-bold">{{ today?.payments }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Volume:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start fw-bold">{{ Math.floor(today?.volume) }}</label>
									</div>
								</div>
							</li>
						</ol>

					</div>
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
import { useStatisticsStore } from '@/stores/statistics'

const store = useStatisticsStore()

const {
	data,
} = useRequest(() => store.metrics_today());

const today = data;

</script>

<style scoped>

</style>
