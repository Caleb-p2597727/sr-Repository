

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard v-for="message in messages" :key="message.id" :message="message"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sr-browse",
  //authorisation needed to access
  middleware: ["auth"]
});
const route = useRoute();

//fetch messages
const {data: messages} = useFetch(`/api/car/listings/${route.params.id}/message`)
</script>