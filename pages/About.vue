<template>
	<v-layout>
		<v-flex xs12>
			<v-btn color="success" @click="fetch('5cb5af02316266ed570003b6')">fetch article 1</v-btn>
			<v-btn color="success" @click="fetchData('5cb5c8b53162660879000190')">fetch article 2</v-btn>
			<v-btn color="secondary" @click="fetchData($route.params.id)">fetch route params article 2</v-btn>
			<v-btn color="primary" @click="getData()">get data</v-btn>
			Router Params: {{$route.params.id}}
			<!-- {{$route.params.payload.title}} -->

			{{data}}
		</v-flex>
	</v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			data: ['']
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