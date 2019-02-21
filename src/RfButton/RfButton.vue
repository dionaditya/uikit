<template>
  <button
    :type="nativeType"
    :class="classes"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'RfButton',

    props: {
      nativeType: {
        type: String,
        default: 'button'
      },
      type: String,
      size: String,
    },

    computed: {
      classes() {
        return [
          'btn',
          this.type ? `btn-${this.type}` : '',
          this.size ? `btn-${this.size}` : '',
        ]
      }
    }
  }
</script>
