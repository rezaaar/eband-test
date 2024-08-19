<template>
  <div class="bg-[#3B86F8] text-white min-h-screen">
    <Navigation class="bg-[#3B86F8]" />

    <div class="container mx-auto px-4 py-2 min-h-screen w-full">
      <h3 class="text-2xl mb-4">Penerbangan anda</h3>

      <div v-for="flight in flightData" class="mb-8">
        <div class="bg-white rounded-3xl p-6">
          <img :src="`/${flight.airline}Plane.png`" class="m-auto" alt="">
        </div>

        <div class="bg-[#42D83F] p-4 rounded-3xl mt-4 text-center text-3xl space-y-2">
          <h3 class="uppercase">{{ flight.airline }}</h3>
          <h1 class=" uppercase">{{ flight.flightCode }}</h1>
          <p class="">TERMINAL {{ flight.terminal }}</p>
          <p class="text-2xl">{{ getFlightAirport(flight) }}</p>
          <h3 class="text-24xl">GATE {{ flight.gate }}</h3>
          <h3 class="">{{ flight.time }}</h3>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: defineNuxtRouteMiddleware((to, from) => {
//     if (localStorage.getItem('user') === null) {
//       return navigateTo('/login')
//     }
//   }),
// });


const store = useFlightStore()

const flightData = store.getFlightData

function getFlightAirport(flight) {
  if (flight.from == 'CGK') {
    return 'SOEKARNO-HATTA INTERNATIONAL AIRPORT'
  } else if (flight.from == 'DPS') {
    return 'I GUSTI NGURAH RAI INTERNATIONAL AIRPORT'
  } else if (flight.from == 'SUB') {
    return 'JUANDA INTERNATIONAL AIRPORT'
  }

}

</script>

<style></style>