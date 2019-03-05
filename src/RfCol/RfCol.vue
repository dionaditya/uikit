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
