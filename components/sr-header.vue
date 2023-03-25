<template>
  <div class="relative" :class="bg">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex items-center justify-between border-b-0 border-gray-100 py-4 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <span class="sr-only">SpeedyRetals</span>
            <img class="h-8 w-auto sm:h-16" src="~/assets/sp-logo.svg" alt="sr-logo"/>
          </NuxtLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button type="button"
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false">
            <span class="sr-only">Open menu</span>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">

          <NuxtLink to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">Browse</NuxtLink>
          <NuxtLink to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">Home</NuxtLink>
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <NuxtLink to="/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Login</NuxtLink>
          <NuxtLink to="/register" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700">Register</NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
//create a new property called bg colour
//use this property to pass colour 
//property called bg
//type - string
const props = defineProps({
    bg: {
        type: String,
        default: 'bg-white'
    }
})

</script>

<style scoped></style>