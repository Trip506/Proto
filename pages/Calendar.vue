<template>
	<v-container grid-list-xs>
		<h1>
			<v-icon large>calendar_today</v-icon>
			{{month}}
		</h1>
		<v-layout>
			<v-flex>
				<v-sheet height="500">
					<v-calendar :now="today" :value="today" color="primary">
						<template v-slot:day="{ date }">
							<template v-for="event in eventsMap[date]">
								<v-menu :key="event.title" v-model="event.open" full-width offset-x>
									<template v-slot:activator="{ on }">
										<div v-ripple class="my-event" v-on="on" v-html="event.title"></div>
									</template>
									<v-card color="grey lighten-4" min-width="350px" flat>
										<v-toolbar color="primary" dark>
											<v-toolbar-title v-html="event.title"></v-toolbar-title>
											<v-spacer></v-spacer>
											<v-toolbar-title v-html="event.time"></v-toolbar-title>
										</v-toolbar>
										<v-card-title primary-title>
											<span v-html="event.details"></span>
										</v-card-title>
										<v-card-actions>
											<v-btn flat color="secondary">Cancel</v-btn>
										</v-card-actions>
									</v-card>
								</v-menu>
							</template>
						</template>
					</v-calendar>
				</v-sheet>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	data: () => ({
		data: [],
		date: new Date()
	}),
	computed: {
		// convert the list of events into a map of lists keyed by date
		eventsMap() {
			const map = {}
			this.data.forEach(e => (map[e.date] = map[e.date] || []).push(e))
			return map
		},
		today() {
			var now = this.date
			var y = now.getFullYear()
			var m = now.getMonth() + 1
			var d = now.getDate()
			var mm = m < 10 ? '0' + m : m
			var dd = d < 10 ? '0' + d : d
			return y + '-' + mm + '-' + dd
		},

		month() {
			const date = this.date // 2009-11-10
			const day = date.getDate()
			const month = date.toLocaleString('en-us', { month: 'long' })
			return month + ' ' + day
		}
	},
	methods: {
		open(event) {
			alert(event.title)
		}
	},
	beforeCreate() {
		var store = this.$store.state
		this.$http
			.get(
				//+ '&filter[_id]=' + $router.params.id
				store.apiRoot +
					store.apiEntryPoint +
					'/collections/get/dates?token=' +
					store.apiTokenDates
			)
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.data = data['entries']
			})
	}
}
</script>
<style lang="stylus" scoped>
.my-event {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	border-radius: 2px;
	background-color: #1867c0;
	color: #ffffff;
	border: 1px solid #1867c0;
	width: 100%;
	font-size: 12px;
	padding: 3px;
	cursor: pointer;
	margin-bottom: 1px;
}
</style>