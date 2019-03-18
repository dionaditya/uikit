<template>
  <input
    type="password"
    class="form-control"
    @input="$emit('input', $event.target.value)"
    :value="value"
    aria-label="Password"
  />
</template>
<style lang="scss" scoped>
@import '../styles/custom.scss';
</style>

<script>
  export default {
    name: 'RfPasswordInput',
    props: {
      input: String,
      value: String,
    },
  }
</script>
