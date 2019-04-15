<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			:mini-variant="miniVariant"
			:clipped="clipped"
			temporary
			fixed
		>
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
		</v-navigation-drawer>
		<v-toolbar :clipped-left="clipped" fixed app color="primary">
			<!-- <v-toolbar-side-icon @click="drawer = !drawer"/> -->
			<v-btn icon @click="drawer = !drawer">
				<v-icon :color="toolbarButtonColor">menu</v-icon>
			</v-btn>
			<v-btn icon @click.stop="miniVariant = !miniVariant">
				<v-icon :color="toolbarButtonColor">{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
			</v-btn>
			<v-btn icon @click.stop="clipped = !clipped">
				<v-icon :color="toolbarButtonColor">web</v-icon>
			</v-btn>
			<v-btn icon @click.stop="fixed = !fixed">
				<v-icon :color="toolbarButtonColor">remove</v-icon>
			</v-btn>
			<v-toolbar-title class="toolbar-title" v-text="title"/>
			<v-spacer/>
			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon :color="toolbarButtonColor">menu</v-icon>
			</v-btn>
		</v-toolbar>
		<v-content>
			<v-container>
				<nuxt/>
			</v-container>
		</v-content>
		<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
			<v-list>
				<v-list-tile @click.native="right = !right">
					<v-list-tile-action>
						<v-icon light>compare_arrows</v-icon>
					</v-list-tile-action>
					<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<!-- <v-footer :fixed="fixed" app>
			<span>&copy; 2019</span>
		</v-footer>-->
		<v-footer height="auto" :color="footerColor">
			<v-layout justify-center row wrap>
				<v-btn
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
					:color="footerTextColor"
					flat
					round
				>{{ item.title }}</v-btn>
				<v-flex secondary lighten-2 py-3 text-xs-center white--text xs12>
					&copy;2018 —
					<strong>Vuetify</strong>
				</v-flex>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'apps',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'bubble_chart',
					title: 'Inspire',
					to: '/inspire'
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Samuel Furneaux',
			toolbarColor: 'primary',
			toolbarTitleColor: '',
			toolbarButtonColor: 'white',
			footerTextColor: 'white',
			footerColor: 'secondary lighten-1'
		}
	}
}
</script>

<style>
.toolbar-title {
	color: white;
}
</style>

