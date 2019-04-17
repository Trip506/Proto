<template>
	<v-layout>
		<v-flex text-xs-center>counter: {{counter}}</v-flex>
	</v-layout>
</template>

<script>
export default {
	computed: {
		counter() {
			return this.$store.state.counter
		}
	}
}
</script>