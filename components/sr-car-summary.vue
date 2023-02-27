<template>
    <div class="flex">
        <p>{{ props.item.id}}</p>
        <p>{{ props.item.name }}</p>
        <p>{{ props.item.make }}</p>
        <p>{{ props.item.price }}</p>
        <button @click="handleSearch()"> Go</button>
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