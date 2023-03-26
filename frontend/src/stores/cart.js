import { reactive } from 'vue'

const state = reactive({
  cart: []
})

export const cart = state.cart
