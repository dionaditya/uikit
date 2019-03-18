<template>
  <div
    :class="classes"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@import '../styles/custom.scss';
</style>

<script>
  export default {
    name: 'RfContainer',

    props: {
      fluid: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classes() {
        return [
          this.fluid ? 'container-fluid' : 'container',
        ]
      }
    }
  }
</script>
