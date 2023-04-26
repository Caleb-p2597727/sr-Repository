

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <!-- Bind the value of the 'state' reactive variable to the input field so that it updates automatically as the user types -->
    <!-- Use the value of the 'name' prop as the name attribute for the input field -->
    <input
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
});

//  Define an 'emits' object with one property: 'changeInput', which is an event emitted when the input field changes
const emits = defineEmits(["changeInput"]); 
// Define a reactive variable called 'state' with an initial value of an empty string
const state = ref("");
const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>