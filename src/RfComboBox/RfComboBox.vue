<template>
  <div class="dropdown" :class="classes">
    <button
      class="btn dropdown-toggle"
      :class="btnClasses"
      type="button"
      :id="id"
      data-toggle="dropdown"
      @click="expandToggle"
      aria-haspopup="true"
      aria-expanded="false">
      {{ label }}
    </button>
    <div
      class="dropdown-menu"
      :class="expanded && 'show'"
      v-on:mouseleave="expandToggle"
      aria-labelledby="dropdownMenuButton">
      <template v-for="child in children">
        <div
          v-if="child.name === 'divider'"
          :key="child.name"
          class="dropdown-divider">
        </div>
        <h6
          v-else-if="child.type === 'header'"
          :key="child.name"
          class="dropdown-header">
          {{ child.name }}
        </h6>
        <a
          v-else
          :key="child.name"
          class="dropdown-item"
          :class="getChildClass(child)"
          @click="getChildClickEvent(child, $event)"
          :href="getChildUrl(child)">
          {{ child.name }}
        </a>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content:not(.custom) a:hover {
  text-decoration: none;
}
</style>

<script>
  export default {
    name: 'RfComboBox',

    data() {
      return {
        expanded: false,
        children: [
          {
            name: 'ComboBox Header',
            type: 'header'
          },
          {
            name: 'Link',
            link: '/',
            active: false,
            disabled: false,
          },
          {
            name: 'Active Link',
            link: '/',
            active: true,
            disabled: false,
          },
          {
            name: 'Action',
            link: '#',
            onClick: (item, $event) => alert('Action called'),
            active: false,
            disabled: false,
          },
          {
            name: 'divider'
          },
          {
            name: 'Disabled',
            link: '/disabled',
            active: false,
            disabled: true,
          }
        ]
      }
    },

    methods: {
      expandToggle() {
        this.expanded = !this.expanded
      },
      getChildUrl(child) {
        return typeof child.onClick === 'function' ? '#' : child.link;
      },
      getChildClickEvent(child, $event) {
        if (typeof child.onClick === 'function') {
          $event.preventDefault()
          return child.onClick(child, $event)
        }
        return false
      },
      getChildClass(child) {
        return [
          child.active ? 'active' : '',
          child.disabled ? 'disabled' : '',
        ]
      },
    },

    props: {
      id: String,
      type: String,
      size: String,
      label: String,
      direction: String,
    },

    computed: {
      classes() {
        return [
          this.direction === 'up' ? 'dropup' : '',
          this.direction === 'right' ? 'dropright' : '',
          this.direction === 'left' ? 'dropleft' : '',
        ]
      },
      btnClasses() {
        return [
          'btn dropdown-toggle',
          this.type ? `btn-${this.type}` : '',
          this.size ? `btn-${this.size}` : '',
        ]
      },
    }
  }
</script>
