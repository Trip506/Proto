import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.base,
    secondary: colors.blue.base,
    accent: colors.teal.base,
    error: colors.purple.base,
    warning: colors.purple.base,
    info: colors.green.base,
    success: colors.lime.base
  }
})
