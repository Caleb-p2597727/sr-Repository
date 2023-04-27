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
    <!-- Display all listings using ListingCard component -->
    <div class="shadow rounded p-3 mt-5">
        <!-- all cars within listings are displayed -->
      <ListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
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


useHead({
    title: "Listed cars",
});


// Get current user
const user = useSupabaseUser();

// Fetch listings data for the current user
const {data:listings, refresh} = await useFetch(
  `/api/car/listings/user/${user.value.id}`
)

const handleDelete = async(id) => {
  // Delete listing from backend
  await $fetch(`/api/car/listings/${id}`,{  
    method: "delete"
  });
  // Remove deleted listing from listings data
  listings.value = listings.value.filter((listing) => listing.id !== id);
  
}

</script>
