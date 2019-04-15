<template>
	<v-layout column justify-center align-center>
		<Carousel></Carousel>
		<v-flex xs12 mt-3>
			<v-card>
				<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>
			</v-card>
		</v-flex>
		<!-- gallery must always be in container -->
		<v-container grid-list-xs>
			<v-flex xs6 mt-3>
				<Gallery></Gallery>
			</v-flex>
		</v-container>

		<VueResourceCall></VueResourceCall>
	</v-layout>
</template>

<script>
import Hover from '../components/Hover.vue'
import Carousel from '../components/Carousel.vue'
import Gallery from '../components/Gallery.vue'
import VueResourceCall from '../components/VueResourceCall.vue'

export default {
	components: {
		Carousel,
		Gallery,
		Hover,
		VueResourceCall
	}
}
</script>
