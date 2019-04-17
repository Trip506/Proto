<template>
	<v-layout column justify-center align-center>
		<!-- <Carousel></Carousel> -->
		<v-flex xs12 mt-3>
			<Parralax></Parralax>
			<v-card>
				<v-container grid-list-xs>
					<v-layout column justify-center align-center>
						<v-flex xs3 xs-offset-3>
							<v-avatar size="100" color="red">
								<img :src="require('@/assets/image1.jpg')" alt="alt">
							</v-avatar>
						</v-flex>
						<v-flex xs8>
							<v-card-title>
								<h1>Sam Furneaux Adventures through the Alpujarras</h1>
							</v-card-title>
						</v-flex>
						<v-card-text
							class="text-xs-center"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>
						<v-card-text
							class="text-xs-center"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>

						<v-btn color="secondary">More</v-btn>
					</v-layout>
				</v-container>
			</v-card>
		</v-flex>
		<v-flex xs12 mt-5 v-for="(item, index) in 4" :key="index">
			<v-card color="grey lighten-3">
				<v-img height="200" :src="require('@/assets/image'+index+'.jpg')"></v-img>
				<v-container grid-list-xs>
					<v-layout column justify-center align-center>
						<v-icon large>explore</v-icon>
						<v-card-title>
							<h2 display-3>Visit to Beni</h2>
						</v-card-title>
						<!-- <v-flex xs6 xs-offset-3>
							<v-img width="200" contain :src="require('@/assets/image0.jpg')"></v-img>
						</v-flex>-->

						<v-flex xs10>
							<v-card-text
								class="text-xs-center"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>
						</v-flex>
					</v-layout>

					<v-layout row justify-center align-center>
						<v-btn color="primary">More</v-btn>
					</v-layout>
				</v-container>
			</v-card>
		</v-flex>
		<!-- gallery must always be in container -->
		<!-- <v-container grid-list-xs>
			<v-flex xs6 mt-3>
				<Gallery></Gallery>
			</v-flex>
		</v-container>-->
	</v-layout>
</template>

<script>
import Hover from '../components/Hover.vue'
import Parralax from '../components/Parralax.vue'

export default {
	components: {
		Hover,

		Parralax
	}
}
</script>
