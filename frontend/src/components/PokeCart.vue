<template>
  <q-btn flat class="bg-purple-8 q-ml-md" round dense icon="shopping_cart" >
    <q-popup-proxy>
      <!-- {{ cart }} -->
      <div class="column q-pa-md">
        {{ counter }}
        <div v-for="(poke, i) in cart" :key="poke.id">
          <poke-card v-model="counter" :index="i"
            hide-add-button
            @delete="deleted"
          >
          </poke-card>
        </div>
      </div>
    </q-popup-proxy>
    <q-badge color="red" floating>{{ store.cart.length }}</q-badge>
  </q-btn>
</template>

<script setup>
import { cart, store } from 'stores/cart'

import PokeCard from 'components/PokeCard.vue'

function deleted (data) {
  console.log('DELETED...', data)
}

console.log('cart', cart)
</script>
