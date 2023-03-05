<template>
    <div>
        <sr-about></sr-about>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "sr-browse"
})

//changes head to cars in (adds dynamic [] name)
useHead({
    title: "About SR",
});
</script>

<style  scoped>

</style>