<template>
	<v-app>
		<v-toolbar :clipped-left="clipped" fixed app :color="toolbarColor">
			<v-icon style="cursor:pointer;" @click="go('/')" :color="toolbarButtonColor">weekend</v-icon>
			<v-toolbar-title style="cursor:pointer;" @click="go('/')" class="toolbar-title" v-text="title"/>
			<v-spacer/>
			<!-- <template v-if="$vuetify.breakpoint.name != 'xs'"> -->
			<v-btn
				color="primary"
				v-for="(item, i) in items.slice(0,3)"
				:key="i"
				:to="item.to"
				router
				exact
			>{{item.title}}</v-btn>
			<!-- </template> -->
			<!-- Modal button  -->
			<v-btn color="secondary" @click.stop="dialog = true">Layout</v-btn>

			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon :color="toolbarButtonColor">menu</v-icon>
			</v-btn>
		</v-toolbar>
		<v-content>
			<!-- Removed container wrapping over nuxt element -->
			<nuxt/>
		</v-content>
		<v-navigation-drawer v-model="rightDrawer" right="right" temporary fixed>
			<v-list>
				<v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title"/>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
			<!-- Modal Layout picker -->
			<v-layout row justify-center>
				<v-dialog v-model="dialog">
					<v-card>
						<v-card-title class="headline">Use Google's location service?</v-card-title>

						<LayoutPlayground></LayoutPlayground>
					</v-card>
				</v-dialog>
			</v-layout>
		</v-navigation-drawer>

		<v-footer height="auto" :color="footerColor">
			<v-layout justify-center row wrap>
				<v-btn
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					nuxt
					exact
					:color="footerTextColor"
					flat
					round
				>{{ item.title }}</v-btn>
				<v-flex secondary lighten-2 py-3 text-xs-center white--text xs12>
					&copy;2019 —
					<strong>{{title}}</strong>
				</v-flex>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<script>
import LayoutPlayground from '../components/LayoutPlayground.vue'
export default {
	components: {
		LayoutPlayground
	},
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			dialog: false,
			items: [
				{
					icon: 'home',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'group',
					title: 'About',
					to: '/about'
				},
				{
					icon: 'explore',
					title: 'Blog',
					to: '/blog'
				},
				{
					icon: 'date_range',
					title: 'Calendar',
					to: '/calendar'
				},

				{
					icon: 'send',
					title: 'Contact',
					to: '/form'
				},
				{
					icon: 'person',
					title: 'Teachers',
					to: '/teachers'
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Samuel Furneaux',
			toolbarColor: 'primary lighten-1',
			toolbarTitleColor: '',
			toolbarButtonColor: 'white',
			footerTextColor: 'white',
			footerColor: 'secondary lighten-1'
		}
	},
	methods: {
		go(route) {
			this.$router.push(route)
		}
	}
}
</script>

<style>
.toolbar-title {
	color: white;
}
</style>

