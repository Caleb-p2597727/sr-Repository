
<template>
    <div>
        <!-- CAR DETAIL PAGE -->
        <div>
            <Sr-carDetail :image="car.url" :model=car.name :seats=car.seats :rate="car.price" :miles="car.miles" ></Sr-carDetail>
        </div>
        <SrCarAttributes></SrCarAttributes>
        <Sr-carDescription description="hello"></Sr-carDescription>
        <div class="flex"></div>
        <SrCarContact></SrCarContact>
    </div>
    <!-- CAR DETAIL PAGE   -->
</template>

<script setup>
useHead({
    title: "route name"
})

//override default layout
definePageMeta({
    layout: "sr-browse"
})

//gets the whole route and puts it into variable route
const route = useRoute()

let id = route.path.split("/")[3]

const cars = useCars()

//filters...
const car = cars.find((obj) => {
    return obj.id == id;
})

console.log(car.price)
</script>




<style lang="scss" scoped></style>