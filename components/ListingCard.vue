
<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="`https://fhokzwjlcbdialdbmjpq.supabase.co/storage/v1/object/public/images/${listing.image}`" alt="" class="w-80 mr-3 h-44" />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">£{{ listing.price }}/day</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-sky-400 mr-4"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p class="text-red-400 cursor-pointer" @click="emits('deleteClick', listing.id)">Delete</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  listing: Object,
});

const emits = defineEmits(['deleteClick'])
</script>

84690144707690?t=2023-04-22T00%3A22%3A20.804Z