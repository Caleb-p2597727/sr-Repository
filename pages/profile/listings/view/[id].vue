

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sr-browse",
  //authorisation
  middleware: ["auth"]
});
</script>