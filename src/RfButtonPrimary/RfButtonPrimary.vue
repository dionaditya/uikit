<template>
  <button
    :type="nativeType"
    class="btn btn-primary"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<style lang="sass" scoped>
@import '../styles/custom.scss';
</style>

<script>
  export default {
    name: 'RfButtonPrimary',

    props: {
      nativeType: {
        type: String,
        default: 'button'
      },
      type: String,
      outline: Boolean,
      size: String,
      block: Boolean
    },
  }
</script>
