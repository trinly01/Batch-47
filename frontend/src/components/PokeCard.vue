<template>
  <q-card class="my-card">
    <q-img style="height: 100px;" :src="poke.data.sprites.other['official-artwork'].front_default">
      <div class="absolute-bottom">
        <div class="text-h6">{{ poke.name }}</div>
        <div class="text-subtitle2 row">
          <div v-for="t in poke.data.types" :key="t.type.name">
            <q-chip
            class="text-white"
            :class="{
              'bg-red': t.type.name === 'fire',
              'bg-green': t.type.name === 'grass',
              'bg-purple': t.type.name === 'poison',
              'bg-blue': t.type.name === 'water',
              'bg-white text-grey-9': t.type.name === 'flying'
            }">{{ t.type.name }}</q-chip>
          </div>
        </div>
      </div>
    </q-img>

    <q-card-actions class="justify-end">
      <q-btn v-if="!props.hideAddButton" @click="addToCart" color="deep-orange" icon="add_shopping_cart">Add to cart</q-btn>
      <div v-else class="row">
        <q-input type="number" label="quantity" v-model="poke.quantity" ></q-input>
        <q-btn round icon="delete" color="red" @click="remove"></q-btn>
      </div>
      <q-btn flat @click="emit('update:modelValue', props.modelValue + 1)">-{{ props.modelValue }}-</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { cart, store } from 'stores/cart.js'
import { reactive, nextTick, toRaw, onMounted } from 'vue'

const props = defineProps({
  poke: Object,
  index: Number,
  hideAddButton: {
    type: Boolean,
    default: false
  },
  modelValue: Number
})

onMounted(() => {
  console.log('props', props)
})

const emit = defineEmits(['delete', 'update:modelValue'])

async function remove () {
  console.log('props.index', props.index)
  const cartTemp = toRaw(cart)
  console.log('cartTemp', cartTemp)
  cartTemp.splice(props.index, 1)
  console.log('cart', cartTemp)
  store.cart = cartTemp
  await nextTick()
  emit('delete', props.poke)
}

const poke = reactive(props.poke)

function addToCart () {
  cart.push({ ...props.poke, quantity: 1 })
}
</script>
<style scoped>
.my-card {
  width: 250px;
  /* width: 250px;
  max-width: 250px; */
}
</style>
