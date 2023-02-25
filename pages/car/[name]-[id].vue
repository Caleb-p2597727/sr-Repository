<script setup>
const route = useRoute()
useHead({
    title: "route name"
})

//override default layout
definePageMeta({
    layout: "sr-browse"
})

</script>

<template>
    <div>
        <!-- CAR DETAIL PAGE -->
        <div>
            <Sr-carDetail></Sr-carDetail>
        </div>
        <SrCarAttributes></SrCarAttributes>
        <Sr-carDescription></Sr-carDescription>
        <SrCarContact></SrCarContact>
    </div>
    <!-- CAR DETAIL PAGE   -->
</template>



<style lang="scss" scoped></style>