<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12 mt-3>
				<!-- <v-card elevation24> -->
				<v-container grid-list-xs>
					<v-layout column justify-center align-center>
						<v-flex xs3 xs-offset-3>
							<v-avatar size="100" color="red">
								<img :src="require('@/assets/image1.jpg')" alt="alt">
							</v-avatar>
						</v-flex>
						<v-flex xs8>
							<v-card-title>
								<h1>What I'm doing with my life</h1>
							</v-card-title>
						</v-flex>
						<v-card-text
							class="text-xs-center"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>
					</v-layout>
				</v-container>
				<!-- </v-card> -->
			</v-flex>
		</v-layout>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm5 md4 lg4 mt-2 v-for="(item, index) in data['entries']" :key="index">
					<nuxt-link :to="{name: 'Article-id', params: {id: item._id} }">
						<v-hover>
							<v-card color="grey lighten-3" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
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
								</v-container>
							</v-card>
						</v-hover>
					</nuxt-link>
				</v-flex>
			</v-layout>
		</v-container>
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
					fields: { title: 1, subheading: 1, image: 1, location: 1 },
					limit: 6
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

<style lang="css">
a {
	text-decoration: none;
}
</style>