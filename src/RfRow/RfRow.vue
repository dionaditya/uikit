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
    name: 'RfRow',

    props: {

    },

    computed: {
      classes() {
        return [
          'row'
        ]
      }
    }
  }
</script>
