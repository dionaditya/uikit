<template>
  <button
    :type="nativeType"
    :class="classes"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
</style>

<script>
  export default {
    name: 'RfButton',

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

    computed: {
      classes() {
        return [
          'btn',
          this.type ? this.outline ? `btn-outline-${this.type}` : `btn-${this.type}` : '',
          this.size ? `btn-${this.size}` : '',
          this.block ? `btn-block` : ``,
        ]
      }
    }
  }
</script>
