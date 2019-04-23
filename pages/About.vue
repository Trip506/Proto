<template>
	<div>
		<v-parallax :src="require('@/assets/effect.png')"></v-parallax>
		<v-card dark>
			<v-container grid-list-xs>
				<v-layout row wrap>
					<v-flex xs12>
						<h1 class="text-xs-center">Sam and Josefine Creative Services</h1>
						<p
							class="text-xs-center"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>

		<v-container grid-list-xs>
			<v-layout align-top justify-center row>
				<v-flex xs12>
					<h1 class="text-xs-center">
						<v-icon mx-auto large>camera_alt</v-icon>
						<br>Photography
					</h1>
					<p
						class="text-xs-center"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</v-flex>
				<v-flex xs12>
					<h1 class="text-xs-center">
						<v-icon mx-auto large>code</v-icon>
						<br>Web Design
					</h1>
					<p
						class="text-xs-center"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</v-flex>
				<v-flex xs12>
					<h1 class="text-xs-center">
						<v-icon mx-auto large>perm_media</v-icon>
						<br>Creative Media
					</h1>
					<p
						class="text-xs-center"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</v-flex>
			</v-layout>
		</v-container>

		<v-container grid-list-xs>
			<v-container grid-list-md>
				<v-layout align-top justify-center row>
					<v-flex xs12 md6>
						<v-card>
							<v-img height="200" :src="require('@/assets/portrait4.jpg')"></v-img>
							<v-card-title primary-title>Sam Furneaux</v-card-title>
							<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>

							<v-card-actions>
								<v-btn color="secondary">More</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
					<v-flex xs12 md6>
						<v-card>
							<v-img height="200" :src="require('@/assets/josephine.jpg')"></v-img>
							<v-card-title primary-title>
								<h3>Josefine</h3>
							</v-card-title>
							<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>
							<v-card-actions>
								<v-btn flat color="success">More</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-container>
		<v-parallax :src="require('@/assets/portrait5.jpg')"></v-parallax>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<h1>Samuel Furneaux</h1>

					<p>{{lorum}}</p>
					<p>{{lorum}}</p>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			data: [''],
			lorum:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			items: [
				{
					src: require('@/assets/portrait5.jpg')
				},
				{
					src: require('@/assets/orgiva1.jpg')
				},
				{
					src: require('@/assets/orgiva4.jpg')
				},
				{
					src: require('@/assets/orgiva3.jpg')
				}
			]
		}
	},

	methods: {
		...mapActions(['fetchData', 'incrementAction']),

		fetch(id) {
			this.$store.dispatch('fetchData', id)
		},
		getData() {
			this.data = this.$store.getters.getFetchedData
		}
	},

	watch: {
		data: function() {
			this.data = this.$store.getters.getFetchedData
		}
	},

	computed: {}
}
</script>