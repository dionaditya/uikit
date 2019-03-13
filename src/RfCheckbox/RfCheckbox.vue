<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :id="idName | slug"
    />
    <label
      v-if=""
      :for="idName | slug"
      class="form-check-label"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import slug from '../utils/slug'

  export default {
    name: 'RfCheckbox',
    props: {
      input: String,
      value: String,
    },

    filters: {
      slug: (text) => slug(text),
    },

    computed: {
      idName() {
        return this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text
          ? this.$slots.default[0].text
          : ''
      },
    },
  }
</script>
