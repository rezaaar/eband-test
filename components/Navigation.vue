<template>
  <div>
    <div class="flex w-full justify-between px-2 py-4">
      <div class="w-4 cursor-pointer" @click="back" v-if="!hideBack">
        <img class="fill-white" src="/back.svg">
      </div>

      <div class="w-4" v-else></div>


      <h1>eband</h1>

      <div>
        <button class="text-[#FF3B3B] py-2 px-4 rounded-full" @click="handleLogout">
            Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

const userStore = useUserStore()

function handleLogout() {
    userStore.logout()
    router.push('/login')
}

const props = defineProps({
  hideBack: Boolean
})

function back() {
  console.log(route.path);
  router.back()
}

</script>

<style></style>