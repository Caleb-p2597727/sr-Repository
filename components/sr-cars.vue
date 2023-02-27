<template>
    <div class="w-full">
        <!-- iterate through list -->

        <sr-car-summary v-for="(item, index) in list" :item="item" :index="index" :key="item.id" />
    </div>
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