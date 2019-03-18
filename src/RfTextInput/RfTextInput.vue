<template>
  <input
    type="text"
    class="form-control"
    @input="$emit('input', $event.target.value)"
    :value="value"
  />
</template>
<style lang="scss" scoped>
@import '../styles/custom.scss';
</style>

<script>
  export default {
    name: 'RfTextInput',
    props: {
      input: String,
      value: String,
    }
  }
</script>
