<template>
    <div class="mt-10">
        <Img :src="`https://fhokzwjlcbdialdbmjpq.supabase.co/storage/v1/object/public/images/${props.image}`" class="w-full" alt="" />
        <h1 class="mt-10 text-4xl">{{ props.model }} </h1>
        <NuxtLink class="py-8 text-xl underline" to="/hostProfile">
          Host: Caleb

          </NuxtLink>
        <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
            <div class="flex">
                <p class="mr-2">{{props.seats}} seat/s</p>
                <p class="mr-2">|</p>
                <p class="mr-2">{{props.miles}} miles</p>
            </div>
            <div>
                <p class="font-bold text-2xl">£{{ props.rate }}/d</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    // required: true
  },
  model: {
    type: String,
  },
  seats: {
    type: Number,
  },
  miles: {
    type: Number,
 
  },
  rate: {
    type: Number,

  },
})

</script>

<style lang="scss" scoped></style>