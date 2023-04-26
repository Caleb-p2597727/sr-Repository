<template>
  <div class="shadow border rounded-xl w-full overflow-hidden mb-5 cursor-pointer h-[200px]" >

    <div class="grid grid-cols-3 h-full">

      <NuxtImg :src="`https://fhokzwjlcbdialdbmjpq.supabase.co/storage/v1/object/public/images/${props.item.image}`" alt="" class="w-[300px] h-full" @click="handleSearch()"/>

      <div class="p-4 flex flex-col">
        <div>
          <h1 class="font-semibold text-2xl text-blue-700">{{ props.item.name }}</h1>
          <p class="text-gray-700">{{ props.item.make }}</p>
        </div>
        <h1 class="mt-auto text-xl">£{{ props.item.price }}/day</h1>
      </div>

      <div class="pt-4 pl-44">
        <!-- when image is clicked favored will turn to its booloean opposite -->
        <img class=" w-7 h-7 right-5 top-2 z-20" :src="favored ? heartFilled : heartOutline" alt="" @click="favored = !favored">
      </div>

    </div>
  </div>
</template>

<script setup>
import heartFilled from "@/assets/heartFilled.png"
import heartOutline from "@/assets/heartOutline.png"

const props = defineProps({
  item: {
    type: Object,
    // required: true
  },
  index: {
    type: Number
  }
})

// Extract the `id` from `props.item`
const id = props.item.id

const handleSearch = () => {
  const name = props.item.name
  

  navigateTo(`/car/${name}/${id}`)
}

//this is for the heart that appears next to th listing, shows its favioured by the 
const favored = useState(`favored-${id}`, () => {
  return false
})

</script>

<style lang="scss" scoped></style>