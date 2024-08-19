<template>
  <div class="bg-[#3B86F8] min-h-screen">
    <Navigation />
    <div class="mx-auto px-4 pt-2 pb-8 w-full">
      <h1 class="text-2xl text-white font-bold">Tambahkan penerbangan</h1>
      <section v-if="state == stateEnum.AIRLINE">
        <h1 class="text-white mb-6">Pilih maskapai</h1>

        <div class="space-y-12">

          <div class="bg-white flex items-center justify-center p-4 rounded-lg" @click="selectAirline('citilink')">
            <img src="/citilinkLogo.png" alt="">
          </div>

          <div class="bg-white flex items-center justify-center p-4 rounded-lg" @click="selectAirline('garuda')">
            <img src="/garudaLogo.png" alt="">
          </div>

          <div class="bg-white flex items-center justify-center p-4 rounded-lg" @click="selectAirline('lion air')">
            <img src="/lionLogo.png" alt="">
          </div>

        </div>

      </section>

      <section v-else-if="state == stateEnum.FLIGHTDATA">
        <h1 class="text-white mb-6">Masukan detail penerbangan</h1>

        <div>
          <div class="flex flex-col">
            <label for="tanggal" class="text-white mb-2 block">Tanggal</label>
            <input type="date" v-model="inputData.date" id="tanggal"
              class="border border-gray-300 p-2 rounded-full h-12 mb-4 px-4 w-full block">


            <div class="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label for="jam-terbang" class="block text-white mb-2">Jam Terbang</label>
                <input type="time" v-model="inputData.time" id="jam-terbang"
                  class="border border-gray-300 p-2 rounded-full px-4 w-full h-12">
              </div>

              <div>
                <label for="kode-penerbangan" class="block text-white mb-2">Kode Penerbangan</label>
                <input type="text" id="kode-penerbangan" v-model="inputData.flightCode"
                  class="border border-gray-300 p-2 rounded-full px-4 w-full h-12" placeholder="AB123">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label for="asal" class="block text-white mb-2">Asal</label>
                <select id="asal" v-model="inputData.from" class="border border-gray-300 rounded-full px-4 w-full h-12">
                  <option value="" disabled></option>
                  <option>CGK</option>
                  <option>SUB</option>
                </select>
              </div>

              <div>
                <label for="tujuan" class="block text-white mb-2">Tujuan</label>
                <select id="tujuan" v-model="inputData.to" class="border border-gray-300 rounded-full px-4 w-full h-12">
                  <option value="" disabled></option>
                  <option>CGK</option>
                  <option>SUB</option>
                </select>
              </div>
            </div>

            <label for="terminal" class="text-white mb-2">Terminal</label>
            <input type="number" placeholder="1" v-model="inputData.terminal" id="terminal"
              class="border border-gray-300 p-2 rounded-full h-12 mb-4 px-4">

            <label class="text-white mb-2">Pengingat (Jam)</label>
            <button class="border border-gray-300 bg-gray-50 p-2 rounded-full h-12 mb-4 px-4 text-left"
              @click="goToTimer">{{ inputData.reminder }} Jam</button>
          </div>

          <button class="px-4 py-2 text-white bg-blue-800 w-full block rounded-full mt-4"
            @click="handleAdd">SIMPAN</button>
        </div>

      </section>

      <section v-else-if="state == stateEnum.TIMER">
        <h1 class="text-white mb-6">Pengingat waktu penerbangan</h1>

        <div class="bg-white p-8 text-center rounded-lg mb-6 text-blue-900" @click="setTimer(6)">
          <h1 class="text-6xl font-bold">6</h1>
          <h3 class="text-4xl font-bold">Jam</h3>
        </div>

        <div class="bg-white p-8 text-center rounded-lg mb-6 text-blue-900" @click="setTimer(3)">
          <h1 class="text-6xl font-bold">3</h1>
          <h3 class="text-4xl font-bold">Jam</h3>
        </div>

        <div class="bg-white p-8 text-center rounded-lg mb-6 text-blue-900" @click="setTimer(1)">
          <h1 class="text-6xl font-bold">1</h1>
          <h3 class="text-4xl font-bold">Jam</h3>
        </div>

      </section>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// definePageMeta({
//   middleware: defineNuxtRouteMiddleware((to, from) => {
//     if (localStorage.getItem('user') === null) {
//       return navigateTo('/login') 
//     }
//   }),
// });

// import { useFlightStore } from '../store/flights'

const stateEnum = {
  AIRLINE: 'AIRLINE',
  FLIGHTDATA: 'FLIGHTDATA',
  TIMER: 'TIMER',
}

const store = useFlightStore()
const router = useRouter()
const state = ref(stateEnum.AIRLINE)

const inputData = ref({
  id: '',
  date: '',
  time: '',
  flightCode: '',
  from: '',
  to: '',
  terminal: '',
  reminder: 6,
  airline: '',
  gate: '',
})



function selectAirline(airline) {
  inputData.value.airline = airline
  state.value = stateEnum.FLIGHTDATA
}

function goToTimer() {
  state.value = stateEnum.TIMER
}

function setTimer(time) {
  inputData.value.reminder = time
  state.value = stateEnum.FLIGHTDATA
}

function handleAdd() {
  inputData.value.id = Math.random().toString(36).substr(2, 9)
  store.addFlight(inputData.value)
  console.log('scucceee');

  router.push('/home')
}
</script>

<style></style>