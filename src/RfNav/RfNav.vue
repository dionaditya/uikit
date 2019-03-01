<template>
  <ul :class="navclasses">
    <li class="nav-item" :class="item.children && item.children.length > 0 && 'dropdown'" v-for="item in children" :key="item.name">
      <a
        :href="getNavItemLink(item)"
        :class="getNavItemClasses(item)"
        :tabindex="item.disabled ? '-1' : undefined"
        :data-toggle="item.children && item.children.length > 0 ? 'dropdown' : undefined"
        :aria-haspopup="item.children && item.children.length > 0 ? 'true': undefined"
        :aria-expanded="item.children && item.children.length > 0 ? 'false': undefined"
        :aria-disabled="item.disabled ? 'true' : undefined"
        @click="getNavItemClickEvent(item, $event)"
      >{{ Boolean(item.name) ? item.name : item.link }}</a>
      <div class="dropdown-menu" :class="item.showDropdown && 'show'" v-if="item.children && item.children.length > 0">
        <template
          v-for="dropdownItem in item.children"
        >
          <div
            v-if="dropdownItem.name === 'divider'"
            :key="dropdownItem.name"
            class="dropdown-divider"
          ></div>
          <a
            v-else
            :key="dropdownItem.name"
            class="dropdown-item"
            :href="dropdownItem.link"
            @click="getNavItemClickEvent(dropdownItem, $event)"
          >{{ dropdownItem.name }}</a>
        </template>
      </div>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.content:not(.custom) a:hover {
  text-decoration: none;
}
</style>

<script>
  export default {
    name: 'RfNav',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      children: {
        type: Array,
        default: () => ([]),
      },
      direction: {
        type: String,
        default: ''
      },
      extend: {
        type: String,
        default: ''
      }
    },

    methods: {
      getNavItemClasses(item) {
        const classes = ['nav-link']
        if (item.active) classes.push('active')
        if (item.disabled) classes.push('disabled')
        if (item.children && item.children.length > 0) classes.push('dropdown-toggle')
        return classes
      },
      getNavItemLink(item) {
        return typeof item.onClick === 'function' ? '#' : item.link
      },
      getNavItemClickEvent(item, $event) {
        if (item.children && item.children.length > 0) {
          event.preventDefault()
          item.showDropdown = !item.showDropdown
          const dropdown = $event.target.nextElementSibling
          dropdown.addEventListener('mouseleave', () => {
            item.showDropdown = false
            dropdown.removeEventListener('mouseleave', this)
          })
          return true
        }
        if (typeof item.onClick === 'function') {
          event.preventDefault()
          return item.onClick(item, $event)
        }
        return null
      }
    },

    computed: {
      navclasses() {
        return [
          'nav',
          this.direction === 'vertical' ? 'flex-column' : '',
          this.type === 'tabs' && 'nav-tabs',
          this.type === 'pills' && 'nav-pills',
          this.extend === 'fill' && 'nav-fill',
          this.extend === 'justified' && 'nav-justified',
        ]
      }
    }
  }
</script>
