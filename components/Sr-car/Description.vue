<template>
    <div class="mt-5">
        <p class="mb-10">
            {{ props.description }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
  }
})
</script>

<style lang="scss" scoped></style>