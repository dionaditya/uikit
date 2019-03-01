<template>
  <div
    :class="classes"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>
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
