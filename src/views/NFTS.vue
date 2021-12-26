<template>
  <page-header pageName="Game" />
  <div v-if="this.$store.getters._getInvalidNetwork">
    <h1>Invalida Address Please Select Correct Network.</h1>
  </div>
  <div v-else-if="loading == true">Loading...</div>
  <div v-else>
    <h1>Nft Tokens</h1>
    <div v-for="(nft, index) in this.allNftsOfUser" :key="index">
      {{ nft.lastMine }}
    </div>
  </div>
</template>

<script>
import { init, allNfts } from "@/helpers/web3Client";
// import store from "@/store"

export default {
  name: "NFTS",
  data() {
    return {
      loading: true,
      allNftsOfUser: null,
    };
  },
  mounted: async function(){
    await init();
    this.allNftsOfUser =  await allNfts();
    this.loading = false;
  },
};
</script>