<template>

    <div class="bg-[#3B86F8] min-h-screen w-full px-4 py-8">

        <div>
            <p class="text-4xl text-white mb-8">Sign Up</p>
        </div>


        <label for="username" class="text-white mb-2 block">Username</label>
        <input type="text" id="username" v-model="username"
            class="border border-gray-300 p-2 rounded-full h-12 mb-4 px-4 w-full">

        <label for="password" class="text-white mb-2 block">Password</label>
        <input type="password" id="password" v-model="password"
            class="border border-gray-300 p-2 rounded-full w-full h-12 mb-4 px-4">

        <label for="re-password" class="text-white mb-2 block">Re-enter Password</label>
        <input type="password" id="re-password" v-model="rePassword"
            class="border border-gray-300 p-2 rounded-full w-full h-12 mb-4 px-4">

        <button class="bg-[#0B8E00] font-bold rounded-full px-6 py-2 text-white shadow-md w-full" @click="handleSignUp">
            Create
        </button>
    </div>


</template>

<script setup>
// definePageMeta({
//     middleware: defineNuxtRouteMiddleware((to, from) => {
//         if (localStorage.getItem('user') !== null) {
//             return navigateTo('/home')
//         }
//     }),
// });

const username = ref('')
const password = ref('')
const rePassword = ref('')


const store = useUserStore()
const router = useRouter();

function handleSignUp() {
    if (password.value !== rePassword.value) {
        alert('Password tidak sama')
        return
    }

    if (store.register(username.value, password.value)) {
        router.push('/home')
    } else {
        alert('Gagal membuat akun')
    }

}
</script>