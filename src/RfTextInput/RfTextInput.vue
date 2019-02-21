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
    name: 'RfIcon',
    props: {
      input: String,
      value: String,
    }
  }
</script>
