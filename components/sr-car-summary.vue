<template>
  <div class="shadow border rounded-xl w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  @click="handleSearch()">
    <div class="flex h-full">
      <img :src="props.item.url" alt="" class="w-[300px] h-full">
      <div class="p-4 flex flex-col">
        <div>
        
        <h1 class="font-semibold text-2xl text-blue-700">{{ props.item.name }}</h1>
        <p class="text-gray-700">{{ props.item.make }}</p>
        
        </div>
        <h1 class="mt-auto text-xl">£{{ props.item.price }}/day</h1>
    </div>
    <div>
      
    </div>
  </div>
  </div>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
    // required: true
  },
  index: {
    type: Number
  }
})

const handleSearch = () => {
    const name = props.item.name
    const id = props.item.id

    navigateTo(`/car/${name}/${id}`)
}

</script>

<style lang="scss" scoped>

</style>