

	<!-- 
<template>
<v-container grid-list-sm fluid>
		<v-img contain v-if="img==false" max-height="400" :src="root + item.gallery[0].path"></v-img>
		<v-img contain v-if="img" max-height="400" :src="root + img"></v-img>

		<v-layout row wrap>
			<v-flex v-for="gallery in item.gallery" :key="n" xs4 d-flex @click="setImg(gallery.path)">
				<v-img
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
</template> -->

<script>
export default {}
</script>

<style>
</style>
