<template>
	<div>
		<!-- <v-card elevation24> -->
		<v-container grid-list-xs>
			<v-parallax :src="require('@/assets/orgiva1.jpg')" alt="alt"></v-parallax>
			<v-layout column justify-center align-center>
				<v-flex xs8>
					<v-card-title>
						<h1>Teachers in Orgiva</h1>
					</v-card-title>
				</v-flex>
				<v-card-text
					class="text-xs-center"
				>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>
			</v-layout>
		</v-container>
		<!-- </v-card> -->

		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 lg4 mt-2 v-for="(item, index) in data['entries']" :key="index">
					<nuxt-link :to="{name: 'Article-id', params: {id: item._id} }">
						<v-hover>
							<v-card color="grey lighten-3" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
								<v-img height="200" :src="$store.state.apiRoot + item.image.path">
									<v-chip disabled :color="item.color" text-color="white">{{item.location.address}}</v-chip>
								</v-img>
								<v-container grid-list-xs>
									<v-layout column justify-center align-center>
										<h2 display-3>{{item.name}} {{item.lastname}}</h2>
										<h3>{{item.jobTitle}}</h3>
										<p class="text-xs-center">{{item.previewText}}</p>
										<v-card-actions>
											<v-btn :color="item.color">More</v-btn>
										</v-card-actions>
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
			collection: 'teachers',
			data: ['']
		}
	},

	beforeCreate() {
		var store = this.$store.state
		this.$http
			.post(
				store.apiRoot +
					store.apiEntryPoint +
					'/collections/get/teacher?token=' +
					store.apiTokenTeachers,
				JSON.stringify({
					fields: {
						name: 1,
						lastname: 1,
						jobTitle: 1,
						location: 1,
						image: 1,
						color: 1,
						previewText: 1
					},
					limit: 6
				})
			)
			.then(response => {
				return response.json()
			})
			.then(data => {
				console.log(data)
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