<template>
	<div>
		{{$vuetify.breakpoint.name}}
		<v-layout row wrap justify-space-between>
			<v-flex xs12 sm5 md5 lg5 mt-5 v-for="(item, index) in data['entries']" :key="index">
				<v-card color="grey lighten-3">
					<v-img height="200" :src="$store.state.apiRoot + item.image.path">
						<v-chip disabled color="secondary" text-color="white">
							<v-avatar>
								<v-icon>location_on</v-icon>
							</v-avatar>
							{{item.location}}
						</v-chip>
					</v-img>
					<v-container grid-list-xs>
						<v-layout column justify-center align-center>
							<v-icon large>explore</v-icon>

							<h2 display-3>{{item.title}}</h2>
							{{item.subheading}}
						</v-layout>

						<v-layout row justify-center align-center>
							<v-btn nuxt :to="{name: 'Article', params: {id: item._id} }" color="primary">Read More</v-btn>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: ['']
		}
	},

	beforeCreate() {
		var store = this.$store.state
		this.$http
			.post(
				//+ '&filter[_id]=' + $router.params.id
				store.apiRoot +
					store.apiEntryPoint +
					'/collections/get/blog?token=' +
					store.apiToken,
				JSON.stringify({
					fields: { title: 1, subheading: 1, image: 1, location: 1 }
				})
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

