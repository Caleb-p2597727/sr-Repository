
<template>
    <div>
        <!-- CAR DETAIL PAGE -->
        <div>
            <Sr-carDetail :image="car.url" :model=car.name :seats=car.seats :rate="car.price" :miles="car.miles" ></Sr-carDetail>
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

let id = route.path.split("/")[3]

useHead({
    title: route.params.name
})

const cars = useCars()

//filters...
const car = cars.find((obj) => {
    return obj.id == id;
})

console.log(car.price)
</script>




<style lang="scss" scoped></style>