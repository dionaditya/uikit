<template>
  <nav :class="classes">
    <a v-if="this.brand || this.logo" class="navbar-brand mb-0 h1" href="#">
      <img v-if="this.logo" :src="$withBase(this.logo)" width="30" height="30" alt="">
      {{ this.brand }}
    </a>
    <span v-if="this.text" class="navbar-text">{{ this.text }}</span>
    <button
      @click="toggle"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      :aria-expanded="isCollapse"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="isCollapse && 'show'" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto align-items-end">
          <li
            v-for="item in children"
            class="nav-item"
            :class="item.children && item.children.length > 0 && 'dropdown'"
            :key="item.name"
          >
            <a
              :class="getNavItemClasses(item)"
              :href="getNavItemLink(item)"
              @click="getNavItemClickEvent(item, $event)"
            >
              <img v-if="Boolean(item.image)" :src="$withBase(item.image)" :alt="item.name" class="dropdown-image rounded">
              <template v-else>{{item.name}}</template>
            </a>
            <div class="dropdown-menu dropdown-menu-right ml-auto" :class="item.showDropdown && 'show'" v-if="item.children && item.children.length > 0">
              <template v-for="dropdownItem in item.children">
                <div
                  v-if="dropdownItem.name === 'divider'"
                  :key="dropdownItem.name"
                  class="dropdown-divider"></div>
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
      <slot name="collapse"></slot>
    </div>
    <slot></slot>
  </nav>
</template>
<style lang="scss">
.dropdown-image {
  max-width: 2.5em;
  max-height: 2.5em;
}
.content:not(.custom) a:hover {
  text-decoration: none;
}
.collapse.show {
  width: 100%;
  position: absolute;
  top: 4rem;
  left: 0;
  padding: 1rem;
  background: var(--light);
  animation: fadein 400ms ease-in;
  .dropdown-menu {
    background-color: transparent;
    border: none;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<script>
  export default {
    name: 'RfNavbar',

    props: {
      expand: {
        type: String,
        default: 'lg',
      },
      scheme: {
        type: String,
        default: 'light'
      },
      bg: {
        type: String,
        default: 'light'
      },
      brand: '',
      logo: '',
      text: '',
      children: {
        type: Array,
        default: () => ([]),
      },
    },

    data() {
      return {
        isCollapse: false,
      }
    },

    methods: {
      toggle() {
        this.isCollapse = !this.isCollapse
      },
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
          Boolean(dropdown) && dropdown.addEventListener('mouseleave', () => {
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
      classes: function() {
        return [
          'navbar',
          this.expand && `navbar-expand-${this.expand}`,
          this.scheme && `navbar-${this.scheme}`,
          this.bg && `bg-${this.bg}`,
        ]
      }
    }
  }
</script>
