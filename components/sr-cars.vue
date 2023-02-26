<template>
    
    <sr-car-summary v-for="(item, index) in list" :item="item" :index="index" :key="item.id" />
</template>

<script setup>

const props = defineProps({
    list: {
        type: Array,
        required: true
    }
})

</script>

<style lang="scss" scoped></style>