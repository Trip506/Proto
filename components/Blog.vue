<template>
	<div>
		<!-- {{preview}} -->
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12 mt-5 v-for="(item, index) in data['entries']" :key="index">
					<v-card color="grey lighten-3">
						<v-img height="200" :src="root + item.image.path"></v-img>
						<v-container grid-list-xs>
							<v-layout column justify-center align-center>
								<v-icon large>explore</v-icon>
								<v-card-title>
									<h2 display-3>{{item.title}}</h2>
									{{item._id}}
								</v-card-title>
								<span class="subheading">{{item.subheading}}</span>

								<v-flex xs12>
									<v-card-text v-html="item.text"></v-card-text>
								</v-flex>

								<!-- gallery from Nuxter -->
								<v-layout>
									<v-flex xs12>
										<v-container grid-list-sm fluid>
											<v-img
												contain
												v-if="img==false"
												width="600"
												height="450"
												:src="root + item.gallery[0].path"
											></v-img>
											<v-img contain v-if="img" width="600" height="450" :src="root + img"></v-img>

											<v-layout row wrap>
												<v-flex
													v-for="gallery in item.gallery"
													:key="n"
													xs4
													d-flex
													@click="setImg(gallery.path)"
												>
													<v-img
														max-height="100"
														v-model="img"
														:src="root + gallery.path"
														:lazy-src="root + gallery.path"
														aspect-ratio="1"
														class="grey lighten-2"
													>
														<template v-slot:placeholder>
															<v-layout fill-height align-center justify-center ma-0>
																<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
															</v-layout>
														</template>
													</v-img>
												</v-flex>
											</v-layout>
										</v-container>
									</v-flex>
								</v-layout>

								<!-- Date and Location  -->
								<v-flex xs12>
									<v-icon>location_on</v-icon>
									{{item.location}}
								</v-flex>
								<v-flex xs12>
									<v-icon>today</v-icon>
									{{item.date}}
								</v-flex>
							</v-layout>

							<v-layout row justify-center align-center>
								<v-btn
									nuxt
									:to="{name: 'Article', params: {id: item._id, payload: item} }"
									color="primary"
								>Read More</v-btn>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: [''],
			img: '',
			root: this.$store.state.apiRoot
		}
	},

	methods: {
		setImg(src) {
			this.img = src
		}
	},

	beforeCreate() {
		var store = this.$store.state
		this.$http
			.get(
				//+ '&filter[_id]=' + $router.params.id
				store.apiRoot +
					store.apiEntryPoint +
					'/collections/get/blog?token=' +
					store.apiToken
			)
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.data = data
			})
	}
}
</script>

<style>
</style>
