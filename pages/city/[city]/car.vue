<script>
//gets the whole route and puts it into variable route
const route = useRouter()

//override default layout
definePageMeta({
    layout: "sr-browse"
})

//changes head to cars in (adds dynamic [] name)
useHead({
    title: "Cars in [get location from route]",
});

//function that returns giving str in Caps
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1)
    })
}
</script>

<template>
    <div>
        <div class="mt-32 flex">
            <!--this sidebar will now be static even when we access different paths within car-->
            <Sr-sidebar></Sr-sidebar>
            <!--any other path inside of car folder will be rendered by <NuxtPage>-->
            <NuxtPage />
        </div>
    </div>
</template>



<style lang="scss" scoped></style>