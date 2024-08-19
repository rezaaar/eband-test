<template>

    <div class="bg-[#3B86F8] min-h-screen w-full px-4 py-8">

        <div>
            <p class="text-4xl text-white mb-8">Sign In</p>
        </div>


        <label for="username" class="text-white mb-2 block">Username</label>
        <input type="text" id="username" v-model="username"
            class="border border-gray-300 p-2 rounded-full h-12 mb-4 px-4 w-full">

        <label for="password" class="text-white mb-2 block">Password</label>
        <input type="password" id="password" v-model="password"
            class="border border-gray-300 p-2 rounded-full w-full h-12 mb-4 px-4">

        <button class="bg-[#0B8E00] font-bold rounded-full px-6 py-2 text-white shadow-md w-full" @click="handleLogin">
            LOGIN
        </button>
        <button class="underline text-blue-50 w-full text-center mt-4" @click="handleRegister">
            Daftar akun
        </button>
    </div>


</template>

<script setup>
// definePageMeta({
//   middleware: defineNuxtRouteMiddleware((to, from) => {
//     if (localStorage.getItem('user') !== null) {
//       return navigateTo('/home') 
//     }
//   }),
// });

const username = ref('')
const password = ref('')

const store = useUserStore()
const router = useRouter();

function handleRegister() {
    router.push('/new-user')
}

function handleLogin() {
    if(username.value === '' || password.value === '') {
        alert('Username atau password tidak boleh kosong')
        return
    }

    if(store.login(username.value, password.value)) {
        if (username.value === 'admin') {
            localStorage.setItem('admin', true)
            router.push('/admin')
        } else {
            router.push('/home')
        }
    } else {
        alert('Username atau password salah')
    }
    
}
</script>