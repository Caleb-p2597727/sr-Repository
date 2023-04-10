

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
  middleware: [
    function(to, from){
      const user = useSupabaseUser()
      if(user.value) {
        return
      }
      return navigateTo("/logger")
    }
  ]
});
</script>