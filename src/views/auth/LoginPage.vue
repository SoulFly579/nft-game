<template>
  <page-header pageName="Login" />
  <div class="login-section padding-top padding-bottom">
    <div class="container">
      <div class="row g-5 align-items-center flex-md-row-reverse">
        <div class="col-lg-5">
          <div class="account-wrapper">
            <h3 class="title">Sign In</h3>
            <form class="account-form" @submit.prevent="connect">
              <p>
                If you want to continue to game, please connect your wallet
                first.
              </p>
              <div class="form-group">
                <button class="d-block default-btn move-top" type="submit">
                  <span>Signin Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="account-img">
            <img src="assets/images/account/01.png" alt="shape-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginPage",
  methods: {
    async connect() {
      await this.$store.dispatch("connect", true);
    },
  },
  async mounted() {
    await this.$store.dispatch("connect", false);
  },
};
</script>