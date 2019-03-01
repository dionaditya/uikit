<template>
  <nav :class="classes">
    <a v-if="this.brand || this.logo" class="navbar-brand mb-0 h1" href="#">
      <img v-if="this.logo" :src="this.logo" width="30" height="30" alt="">
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
      <slot name="collapse"></slot>
      <!-- <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul> -->
    </div>
    <slot></slot>
  </nav>
</template>
<style lang="scss" scoped>
.content:not(.custom) a:hover {
  text-decoration: none;
}
.navbar-collapse > ul {
  display: flex;
  flex-direction: column;
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
    },

    data() {
      return {
        isCollapse: false,
      }
    },

    methods: {
      toggle() {
        this.isCollapse = !this.isCollapse
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
