<template>
  <ul class="navbar-nav navbar-dark bg-gradient-primary rf-sidebar col-12 col-md-5 px-3">
    <a href="" class="rf-sidebar-brand d-flex align-items-center justify-content-center my-5">
      <div class="rf-sidebar-brand-icon"><img src="/logo.png" width="30" height="30" alt=""></div>
      <div class="rf-sidebar-brand-text mx-3">Refactory UI</div>
    </a>
    <hr class="rf-sidebar-divider my-0">
    <!-- <h6 class="rf-sidebar-heading my-0 pt-2">Home</h6> -->
    <li class="nav-item dropdown active pl-3">
      <a href="" class="nav-link">Dashboard</a>
      <div class="dropdown-menu show" aria-labelledby="navbarDropdown">
          <a class="dropdown-item active" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item disabled" href="#">Something else here</a>
        </div>
    </li>
    <hr class="rf-sidebar-divider my-0">
    <h6 class="rf-sidebar-heading my-0 pt-2">Interface</h6>
    <li class="nav-item pl-3">
      <a href="" class="nav-link">Component</a>
    </li>
    <li class="nav-item pl-3">
      <a href="" class="nav-link">Utilities</a>
    </li>
    <hr class="rf-sidebar-divider my-0">
  </ul>
</template>
<style lang="scss">
.rf-sidebar {
  color: var(--white);
}
.rf-sidebar-brand-text {
  color: var(--white);
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
</style>
<script>
  export default {
    name: 'RfSideBar',

    data() {
      return {
      }
    },

    methods: {
    },

    props: {
    },

    computed: {
    }
  }
</script>
