

<template>
  <div class="rounded shadow mt-20">
    <h1 v-if="!messages">Loading...</h1>
    <!-- If there are messages, display them using the CarMessageCard component -->
    <CarMessageCard v-if="messages && messages.length" v-for="message in messages" :key="message.id" :message="message"/>
    <!-- If there are no messages, display this message instead -->
    <h1 v-else class="text-red-600">This car has no enquires</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sr-browse",
  //authorisation needed to access
  middleware: ["auth"]
});

useHead({
    title: "Enquiries",
});
const route = useRoute();

//fetch messages
const {data: messages} = useFetch(`/api/car/listings/${route.params.id}/message`)
</script>