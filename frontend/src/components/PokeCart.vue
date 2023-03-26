<template>
  <q-btn flat class="bg-purple-8 q-ml-md" round dense icon="shopping_cart" >
    <q-popup-proxy>
      <q-banner>
        <template v-slot:avatar>
          <q-icon name="signal_wifi_off" color="primary" />
        </template>
        You have lost connection to the internet. This app is offline.
      </q-banner>
    </q-popup-proxy>
  </q-btn>
</template>
