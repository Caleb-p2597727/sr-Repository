<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="w-9 h-9 bg-sky-400 flex justify-center items-center text-white rounded-full font-bold cursor-pointer"
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
        <!-- all cars within listings are displayed -->
      <ListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sr-browse",
  //authorisation
  middleware: ["auth"]
});

//uses listings data
const { listings } = useCars();


</script>
