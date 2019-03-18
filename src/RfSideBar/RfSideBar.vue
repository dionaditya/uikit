<template>
  <ul class="navbar-nav navbar-dark bg-gradient-primary rf-sidebar col-auto px-3" :class="collapse ? 'rf-sidebar-collapse' : ''">
    <a href="" class="rf-sidebar-brand d-flex align-items-center justify-content-center my-5">
      <div class="rf-sidebar-brand-icon"><img src="/logo.png" width="30" height="30" alt=""></div>
      <div class="rf-sidebar-brand-text mx-3">Refactory UI</div>
    </a>
    <template v-for="header in menu">
    <hr :key="`${header.name}-divider`" class="rf-sidebar-divider my-0">
    <h6 v-if="header.name" :key="`${header.name}-text`" class="rf-sidebar-heading my-0 pt-2">{{header.name}}</h6>
    <li
      v-for="children in header.children"
      :key="`${header.name}-${children.name}`"
      :class="getStatusClass(children)"
      class="nav-item">
      <a
        @click="getClickHandler(children, $event)"
        :href="getUrl(children)"
        class="nav-link"
        :class="getStatusClass(children)">
        <fa :icon="children.faIcon ? children.faIcon : 'circle'" />
        <span>{{children.name}}</span>
      </a>
      <div
        v-if="haveChild(children)"
        class="dropdown-menu"
        :class="children.active ? 'show' : ''"
        :aria-labelledby="haveChild(children) && 'navbarDropdown'">
        <template v-for="child in children.children">
          <div
            v-if="child.name === 'divider'"
            :key="child.name"
            class="dropdown-divider"
          ></div>
          <a
            v-else
            :key="child.name"
            @click="getClickHandler(child, $event)"
            class="dropdown-item"
            :class="getStatusClass(child)"
            :href="getUrl(child)">
              <fa :icon="child.faIcon"/>
              <span>{{child.name}}</span>
            </a>
        </template>
      </div>
    </li>
    </template>
    <div class="rf-sidebar-btn d-flex justify-content-center align-items-center my-5">
      <button @click="collapseToggle" class="btn btn-outline-light"><fa :icon="`chevron-${collapse ? 'right' : 'left'}`"/></button>
    </div>
  </ul>
</template>
<style lang="scss" scoped>
@import '../styles/custom.scss';
.rf-sidebar {
  transition: all 400ms ease-in-out;
  color: var(--white) !important;
}
.rf-sidebar-brand-text {
  color: var(--white) !important;
}
.nav-item {
  &.active {
    & > a {
      opacity: 1;
    }
  }
  a {
    color: var(--white);
    opacity: 0.7;
    &:hover {
      border-color: transparent !important;
      opacity: 1;
    }
    svg {
      margin: 0 0.5em;
    }
  }
  .dropdown-menu {
    background: none;
    border: none;
  }
  .dropdown-item {
    color: var(--white);
    &.active {
      background: none;
      opacity: 1;
    }
    &:hover {
      background: none;
    }
  }
  .dropdown-divider {
    border-color: var(--gray-dark);
    opacity: 0.2;
  }
}
.rf-sidebar-heading {
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.4;
}
.rf-sidebar-divider {
  width: 100%;
}
.rf-sidebar-btn {
  button {
    color: var(--white);
    font-size: 1.5rem;
    &:hover {
      color: var(--primary);
    }
  }
}
.rf-sidebar-collapse {
  animation: collapse alternate 400ms ease-in;
  li, a {
    width: 2rem;
  }
  .dropdown-menu {
    display: none;
  }
  .rf-sidebar-heading {
    display: none;
  }
  .rf-sidebar-brand-text {
    display: none;
  }
  a > span {
    display: none;
  }
  .nav-item {
    padding: 0 !important;
  }
}
@keyframes collapse {
  from {
    width: 200px;
  }
  to {
    width: 80px;
  }
}
</style>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
export default {
  name: 'RfSideBar',

  data() {
    return {
      collapse: false
    }
  },

  created() {
    this.collapse = this.defaultCollapse
  },

  components: {
    'fa': FontAwesomeIcon,
  },

  methods: {
    haveChild(item) {
      return item.children && item.children.length > 0
    },
    getStatusClass(item) {
      const classes = []
      if (item.active && !this.haveChild(item)) classes.push('active')
      if (item.disabled) classes.push('disabled')
      if (this.haveChild(item)) classes.push('dropdown')
      return classes
    },
    getUrl(item) {
      if (item.onClick && typeof item.onClick === 'function') {
        return '#'
      }
      if (item.children && item.children.length > 0) {
        return '#'
      }
      return item.link
    },
    getClickHandler(item, $event) {
      if (item.onClick && typeof item.onClick === 'function') {
        $event.preventDefault()
        return item.onClick(item, $event)
      }
      if (item.children && item.children.length > 0) {
        $event.preventDefault()
        item.active = ! item.active
        if (item.active) this.collapse = false
        return false
      }
      return false
    },
    collapseToggle() {
      this.collapse = ! this.collapse
    },
  },

  props: {
    defaultCollapse: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: () => ([])
    },
  },

  computed: {
  }
}
</script>
