<template>
  <div
    :class="!isShow ? 'col-auto': 'col-12 col-md-5'"
    class="align-items-start bg-gradient-light side-bar">
    <div v-if="!isShow" class="row text-center">
      <nav class="navbar navbar-light">
        <button
          @click="toggleSideBar"
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
    <div class="main-sidebar" v-else>
      <div class="row text-center">
        <div class="col-12 my-3">
          <img src="/logo-sm.png" width="100" height="100" alt="" class="img-fluid rounded">
        </div>
        <div class="col-12">
          <h3>Side Menu</h3 >
        </div>
      </div>
      <div class="row my-5">
        <div class="col-12 menu-heading">
          <p class="lead">Menu</p>
        </div>
        <div class="col-12 p-0 menu-body">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
              <div class="nav pl-3 flex-column nav-pills nav-child bg-primary" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Home Child</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Home 2 Child</a>
              </div>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
          </div>
        </div>
      </div>
      <div class="row py-5">
        <div class="col-12 text-center">
          <button class="btn btn-primary btn-back" @click="toggleSideBar"> < </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main-sidebar {
  animation: slide 400ms ease-in fill-mode;
}
.side-bar {
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}
.nav-link.active {
  border-radius: 0;
}
.nav-child > a {
  color: var(--gray-dark);
  &:hover {
    color: var(--white);
  }
}
.menu-heading {
  text-transform: uppercase;
}
.btn-back {
  border-radius: 100%;
  font-weight: 700;
}
@keyframes slide {
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
    name: 'RfSideBar',

    data() {
      return {
        isShow: false,
      }
    },

    methods: {
      toggleSideBar() {
        this.isShow = !this.isShow
      }
    },

    props: {
    },

    computed: {
    }
  }
</script>
