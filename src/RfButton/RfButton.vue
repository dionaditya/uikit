<template>
  <button
    :type="type"
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
