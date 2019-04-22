<template>
	<v-carousel hide-delimiters>
		<v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
			<v-jumbotron>
				<v-container>
					<v-layout align-end justify-start row fill-height>
						<v-flex>
							<v-container grid-list-xs>
								<h1>Seeing the world through our eyes</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</v-container>
						</v-flex>
					</v-layout>
				</v-container>
			</v-jumbotron>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
export default {
	data() {
		return {
			data: [''],
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

</script>

<style>
</style>
