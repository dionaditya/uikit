<template>
  <div :class="classes">
    <input class="form-check-input" type="radio" :name="name" :id="id" :value="value" :disabled="disabled" :checked="checked">
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
  export default {
    name: 'RfRadio',

    props: {
      name: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      inline: {
        type: Boolean,
        default: false,
      }
    },

    computed: {
      classes() {
        const classes = ['form-check']
        if (this.inline) classes.push('form-check-inline')
        return classes
      }
    }
  }
</script>
