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
    outlined v-model="state.pokeType" :options="types" label="Type" />
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
import { ref, onMounted, computed, reactive } from 'vue'
const textSearch = ref('')

const host = 'https://pokeapi.co/api/v2/pokemon'

const pokemons = ref([])

const state = reactive({
  pokeType: 'all',
  pokemons
})
const types = [
  'all',
  'grass',
  'water',
  'fire',
  'flying',
  'bug'
]

const filteredPokemons = computed(() => {
  if (state.pokeType === 'all' && !textSearch.value) return state.pokemons
  if (state.pokeType === 'all') return state.pokemons.filter(p => p.name.includes(textSearch.value))
  return state.pokemons.filter(poke => {
    return poke.data.types.map(t => t.type.name).includes(state.pokeType) && poke.name.includes(textSearch.value)
  })
})

onMounted(async () => {
  // create a fetch request that will get pokemons from https://pokeapi.co/api/v2/pokemon
  state.pokemons = await getPokemons()
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
