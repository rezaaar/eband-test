<template>
    <div class="bg-[#3B86F8] min-h-screen">
        <Navigation />
        <div class="mx-auto px-4 pt-2 pb-8 w-full">
            <h1 class="text-2xl text-white font-bold">Halaman admin</h1>

            <section v-if="!isSelectingGate">
                <h1 class="text-white mb-6">Daftar Penerbangan</h1>

                <div>
                    <div class="relative overflow-x-auto shadow rounded-3xl">
                        <table class="w-full text-sm text-left rtl:text-right bg-white ">
                            <thead class="text-xs uppercase ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Maskapai
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Kode Penerbangan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Terminal
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Gate
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="flight in flights" class="border-b">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        {{ flight.airline }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ flight.flightCode }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ flight.terminal }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ flight.gate }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" @click="selectFlight(flight.id)"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Atur
                                            Gate</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>


            <section v-else>

                <div>
                    <h1 class="text-white mb-6">Pilih Gate</h1>
                    <div class="grid grid-cols-5 gap-4">
                        <div v-for="number in 20" class="bg-white p-4 rounded-xl text-center" @click="handleSetGate(number)">
                            {{ number }}
                        </div>
                    </div>

                </div>
            </section>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
    middleware: defineNuxtRouteMiddleware((to, from) => {
        if (localStorage.getItem('admin')) {
            return navigateTo('/login')
        }
    }),
})

const store = useFlightStore()
const flights = store.getFlightData

const selectedFlight = ref(null)
const isSelectingGate = ref(false)

const router = useRouter()

function selectFlight(id) {
    isSelectingGate.value = true
    selectedFlight.value = id
}

function handleSetGate(number) {
    isSelectingGate.value = false
    store.setGate(number, selectedFlight.value)
}

</script>

<style></style>