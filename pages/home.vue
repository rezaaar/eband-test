<script setup>
import { ref, useFcmTopic, useFcm } from '#imports'

// definePageMeta({
//     middleware: defineNuxtRouteMiddleware((to, from) => {
//         if (userStore.getUser() === null) {
//             return navigateTo('/login')
//         }
//     }),
// });

const { send, subscribe } = useFcmTopic()
const { onMessage, getToken } = useFcm()
const userStore = useUserStore()
const router = useRouter();
const store = useFlightStore()
var token = await getToken()
const user = userStore.getUser

var nearestFlight = store.getNearestFlight
var flightData = store.getFlightData

const getNearestFlightDateTime = () => {
    return nearestFlight !== null ? new Date(`${nearestFlight.date} ${nearestFlight.time}`) : null
}

var isFlight = nearestFlight != null

const hour = ref(0)
const minute = ref(0)

const timer = setInterval(() => {
    const dateNow = new Date().getTime()
    var remainingTime = new Date(getNearestFlightDateTime()).getTime() - dateNow

    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var secods = Math.floor((remainingTime % (1000 * 60)) / 1000);

    hour.value = hours
    minute.value = minutes

    if (hour.value == nearestFlight.reminder && minute.value == 1 && secods == 0) {
        sendNotification()
    }

    if (remainingTime < 0) {

        nearestFlight = store.getNearestFlight

        if (nearestFlight == null) {
            clearInterval(timer)
            isFlight = false
        }
    }
    
}, 1000);

const getFormatedDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

onMessage(payload => {
    console.log('Message received', payload)
    console.log('Message sent');
})

async function sendMessage() {
    send({
        topic: 'reminder',
        payload: {
            notification: {
                title: 'Flight Reminder',
                body: 'Your flight is about to depart in hours',
            },
            data: {
                ok: 'true',
            },
        },
        authorization: 'Bearer ' + token
    })

    console.log(token);

}

function sendNotification() {
    if (!('Notification' in window)) {
        alert('Notification API not supported!');
        return;
    }

    try {
        var notification = new Notification('Flight Reminder', {
            body: 'Your flight is about to depart in ' + nearestFlight.reminder + ' hours!',
        });
    } catch (err) {
        alert('Notification error: ' + err);
    }
}


// function sendNotification(hour) {

//     if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
//         alert('Notification not supported!');
//         return;
//     }

//     try {
//         navigator.serviceWorker.getRegistration()
//             .then((reg) => reg.showNotification("Flight Reminder - Your flight is about to depart in " + hour + " hours!"))
//             .catch((err) => alert('Service Worker registration error: ' + err));
//     } catch (err) {
//         alert('Notification API error: ' + err);
//     }

// }

function goToFlightData() {
    isFlight ? router.push('/flight') : router.push('/add-flight')
}

onMounted(() => {
    subscribe({ topic: 'reminder' })
})

</script>

<template>
    <div class="bg-white min-h-screen">
        <div class="bg-[#b6d3ff] absolute w-full h-1/4 z-0"></div>

        <Navigation class="relative z-10" :hide-back="true" />

        <div class="container mx-auto px-4 py-2 min-h-screen w-full relative z-10">
            <div>
                <div class="flex justify-between">
                    <div>
                        <h3 class="text-3xl">Hi, {{ user.username }} </h3>
                        <p class="text-xl">Personal Dashboard</p>
                    </div>

                    <!-- <div class="flex items-end">
                        <button class="text-[#FF3B3B] py-2 px-4 rounded-full" @click="handleLogout">
                            Logout
                        </button>
                    </div> -->
                </div>


                <div class="bg-[#3B86F8] p-8 rounded-3xl text-center text-white space-y-2 mt-2" @click="goToFlightData">
                    <div v-if="isFlight">
                        <h3 class="text-xl">PENERBANGAN ANDA</h3>
                        <h1 class="text-4xl uppercase">{{ nearestFlight.from }} - {{ nearestFlight.to }}</h1>
                        <p class="text-xl">{{ getFormatedDate(nearestFlight.date) }}</p>
                        <p class="text-xl">{{ nearestFlight.flightCode }} - {{ nearestFlight.time }} WIB</p>
                        <h3 class="text-4xl">GATE {{ nearestFlight.gate }}</h3>
                    </div>

                    <div v-else>
                        <h3 class="text-4xl">Tidak ada jadwal penerbangan</h3>
                    </div>

                </div>

                <div class="bg-[#1000CA] p-8 rounded-3xl text-center text-white space-y-2 my-4" @click="sendMessage">
                    <h3 class="text-2xl">WAKTU TERSISA</h3>
                    <h1 v-if="isFlight" class="text-3xl uppercase">{{ hour }} JAM {{ minute }} MENIT</h1>
                    <h1 v-else class="text-3xl uppercase">-</h1>
                </div>

                <div class="mt-4">
                    <NuxtLink
                        class="bg-[#5539FF] hover:bg-[#4939b3] text-white font-bold py-2 px-4 rounded-full block w-full text-center"
                        to="/add-flight">
                        Tambah Penerbangan
                    </NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>