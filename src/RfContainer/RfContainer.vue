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
