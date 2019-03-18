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
    name: 'RfCol',

    props: {

    },

    computed: {
      classes() {
        return [
          'col'
        ]
      }
    }
  }
</script>
