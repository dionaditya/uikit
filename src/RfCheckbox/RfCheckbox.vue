<template>
  <div>
    <input
      type="checkbox"
      class="form-control"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :id="label | slug"
      :aria-label="label"
    />
    <label v-if="label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
  import slug from '../utils/slug'

  export default {
    name: 'RfCheckbox',
    props: {
      input: String,
      value: String,
      id: String,
      label: String,
    },

    filters: {
      slug: (text) => slug(text),
    },
  }
</script>
