
<template>
    <div>
        <!-- CAR DETAIL PAGE -->
        <div>
            <!-- the url from car.url is not displaying not sure why -->
            <Sr-carDetail  :image="car.image" :model=car.name :seats=car.numberOfSeats :rate="car.price" :miles="car.miles" ></Sr-carDetail>
        </div>
        <SrCarAttributes :features="car.features"></SrCarAttributes>
        <Sr-carDescription :description="car.description"></Sr-carDescription>
        
        <SrCarContact></SrCarContact>
    </div>
    <!-- CAR DETAIL PAGE   -->
</template>

<script setup>
//override default layout
definePageMeta({
    layout: "sr-browse"
})

//gets the whole route and puts it into variable route
const route = useRoute()
//we grab the data and call it car
const {data: car} = await useFetchCar(route.params.id);

useHead({
    title: route.params.name
})

</script>




<style lang="scss" scoped></style>