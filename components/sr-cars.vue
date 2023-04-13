<template>
    <div class="w-full">
        <!-- iterate through list -->
        <img class="flex w-7 right-5 top-2 z-20" :src="heartOutline" alt="">

        <sr-car-summary v-for="(item, index) in cars" :item="item" :index="index" :key="item.id" />
    </div>
</template>

<script setup>


const props = defineProps({
    cars: {
        type: Array,
        required: true
    }
})


</script>

<style lang="scss" scoped></style>