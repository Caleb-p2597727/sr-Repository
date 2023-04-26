<template>
  <div>
    <!-- changed bg colour of header with this layout -->
    <sr-header bg="bg-sky-100"></sr-header> 
    <!-- included div in layout   -->
    <div class="mx-6 mt-4 max-w-9xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 ">
      <!-- other html that is rendered goes here -->
      <slot />
    </div>
    <SrFooter />
  </div>
</template>

<script>

</script>

