<template>
  <q-toolbar class="bg-purple text-white">
    <q-btn flat round dense icon="assignment_ind" />
    <q-toolbar-title>
      Pokedex
    </q-toolbar-title>
    <!-- <q-btn flat round dense icon="apps" class="q-mr-xs" /> -->
    <!-- <q-btn flat round dense icon="more_vert" /> -->
    <q-input placeholder="Search" dark dense standout v-model="textSearch" input-class="text-right" class="q-ml-md" />
    <!-- <input type="text" v-model="textSearch" /> -->
  </q-toolbar>
  <div class="row justify-center">
    {{ filteredPokemons.length }}
    <q-select style="width: 320px;"
    outlined v-model="pokeType" :options="types" label="Type" />
  </div>

  <div class="row q-gutter-sm q-pa-md justify-center">
    <q-card v-for="poke in filteredPokemons" :key="poke.id" class="my-card">
      <q-img :src="poke.data.sprites.other['official-artwork'].front_default">
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

      <!-- <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions> -->
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
const textSearch = ref('Hello Batch 47')

const host = 'https://pokeapi.co/api/v2/pokemon'

const pokemons = ref([])
const pokeType = ref('all')
const types = [
  'all',
  'grass',
  'water',
  'fire',
  'flying',
  'bug'
]

const filteredPokemons = computed(() => {
  if (pokeType.value === 'all') return pokemons.value
  return pokemons.value.filter(poke => {
    return poke.data.types.map(t => t.type.name).includes(pokeType.value)
  })
})

onMounted(async () => {
  // create a fetch request that will get pokemons from https://pokeapi.co/api/v2/pokemon
  pokemons.value = await getPokemons()
})

async function getPokemons () {
  const { results: pokes } = await (await fetch(host)).json()
  console.log(pokes)
  for (const pokemon of pokes) {
    pokemon.data = await getPokeData(pokemon.url)
  }
  console.log('pokemonsssss', pokes)
  return pokes
}

async function getPokeData (url) {
  return await (await fetch(url)).json()
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
