<template>
  <input
    type="password"
    class="form-control"
    @input="$emit('input', $event.target.value)"
    :value="value"
    aria-label="Password"
  />
</template>

<script>
  export default {
    name: 'RfPasswordInput',
    props: {
      input: String,
      value: String,
    },
  }
</script>
