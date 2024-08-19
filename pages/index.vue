<script setup>
const router = useRouter();
const store = useUserStore()

function handleStart() {
    if(store.getUser !== null) {
        router.push('/home')
    } else {
        router.push('/login')
    }
}
</script>

<template>
    <div
        class="space-y-12 bg-gradient-to-b from-[#3B86F8] to-[#234F92] min-h-screen w-full grid place-content-center text-center">
        <div>
            <h1 class="text-5xl text-white">eband</h1>
            <p class="text-2xl text-white">Aplikasi Bandara</p>
        </div>
        <img src="/logo.png" alt="">

            <button class="bg-[#0B8E00] font-bold rounded-full px-6 py-2 text-white shadow-md" @click=handleStart()>
                KLIK UNTUK MULAI!
            </button>

    </div>
</template>