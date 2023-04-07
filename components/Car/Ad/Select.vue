

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-sky-500 mb-1 text-sm">{{ title }}</label>
    <select
      name=""
      id=""
      class="p-2 border w-100 rounded"
      @change="onChange"
      v-model="state"
    >
      <option             
        v-for="(options, index) in listOfCarMakes"
        :key="index"
        :value="index">
        {{ options}}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  options: Array,
});

const listOfCarMakes = useCarMakes();

const emits = defineEmits(["changeInput"]);
//two way binding
const state = ref("");

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>