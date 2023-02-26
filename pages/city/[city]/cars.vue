

<template>
    <div>
        <div class="mt-32 flex">
            <!--this sidebar will now be static even when we access different paths within car-->
            <Sr-sidebar></Sr-sidebar>
            <!--any other path inside of car folder will be rendered by <NuxtPage>-->
            <sr-cars :list="listByCity" />
        </div>
    </div>
</template>

<script setup>
//override default layout
definePageMeta({
    layout: "sr-browse"
})

//changes head to cars in (adds dynamic [] name)
useHead({
    title: "Cars in [get location from route]",
});

//gets the whole route and puts it into variable route
const route = useRoute()

let city = route.path.split("/")[2]
//imports list of cars from composable/useCars.js
const cars = useCars()

//filters...
const listByCity = cars.filter((obj) => {
    return (obj.city).toLowerCase( ) == city;
})


</script>



<style lang="scss" scoped></style>