<template>
	<div>
		<div class="px-4 py-5 text-center">
			<h1 class="display-5 fw-bold"></h1>
			<div class="row gy-2 gx-2 col-12 mx-auto">
				<div>
					<div class="card">
						<div class="card-header bg-info fs-3">
							Ledger 000
						</div>

						<ol class="list-group">
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Transactions:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start">{{ }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Operations:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start">{{ }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Ledger closing time:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start">{{ }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Protocol version:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start">{{ }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Base operation fee:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start">{{ }}</label>
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<label class="col-8 col-lg-6 text-end opacity-50">Base reserve:</label>
									<div class="col-4 col-lg-6">
										<label class="col-12 text-start">{{ }}</label>
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

<script >

import { reactive } from "vue";
import moment from 'moment'
import { ref, computed } from "vue";
import _ from "lodash";
// import { Operation, Keypair, Network, Server, Account, TransactionBuilder } from "stellar-sdk";

// const proxy = require("node-global-proxy").default;
// const args = require('minimist')(process.argv.slice(2))

// if (args['env'] == 'development') {
// console.log("set proxy");
// proxy.setConfig({
// 	http: "http://localhost:10809",
// 	https: "http://localhost:10809",
// });
// proxy.start();
// }

// const StellarSdk = require('stellar-sdk');
// var server = new StellarSdk.Server('https://api.mainnet.minepi.com');

// console.log(server);


// console.log(Server)
// const modules = import.meta.glob('stellar-sdk', { import: 'default', eager: true })
console.log('dddddddddddddddddddddddddddddddddddddd')
// for (const path in modules) {
// 	modules[path]().then((mod) => {
// 		console.log(path, mod)
// 	})
// }

</script>

<style lang="scss" scoped>

</style>
