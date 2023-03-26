<template>
  <q-btn flat class="bg-purple-8 q-ml-md" round dense icon="shopping_cart" >
    <q-popup-proxy>
      <div class="column">
        <poke-card v-for="poke in state.searchedPokemons" :key="poke.id" :poke="poke">
        </poke-card>
      </div>
    </q-popup-proxy>
    <q-badge color="red" floating>{{ cart.length }}</q-badge>
  </q-btn>
</template>

<script setup>
import { cart } from 'stores/cart'

import PokeCard from 'components/PokeCard.vue'
console.log('cart', cart)
</script>
