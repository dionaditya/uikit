<template>
  <input
    type="text"
    class="form-control"
    @input="$emit('input', $event.target.value)"
    :value="value"
  />
</template>

<script>
  export default {
    name: 'RfTextInput',
    props: {
      input: String,
      value: String,
    }
  }
</script>
