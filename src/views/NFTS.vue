<template>
  <page-header pageName="Game" />
  <div v-if="this.$store.getters._getInvalidNetwork">
    <h1>Invalida Address Please Select Correct Network.</h1>
  </div>
  <div v-else-if="this.$store.getters._getError !== null">
    {{ this.$store.getters._getError }}
  </div>
  <div v-else-if="loading == true">Loading...</div>
  <div v-else>
    <h1>Nft Tokens  <button @click="mint" class="btn btn-success">Mint</button></h1>
    <div class="container">
      <div class="row">
        <div
          v-for="(nft, index) in this.allNftsOfUser"
          :key="index"
          class="col-md-4 m-2"
        >
          <h6>ID: {{ this.$store.getters._getAllNfts[index] }}</h6>
          <h6>Mining: {{ nft.mining }}</h6>
          <h6>Luck: {{ nft.luck }}</h6>
          <h6>Stamina: {{ nft.stamina }}</h6>
          <h6>Last Mine: {{ nft.lastMine }}</h6>
          <h6>Mine Cooldown: {{ nft.mineCooldown }}</h6>
          <h6>Level: {{ nft.level }}</h6>
          <h6>Experience: {{ nft.experience }}</h6>
          <button
            class="btn btn-block btn-warning"
            @click="mineReq(this.$store.getters._getAllNfts[index])"
          >
            Mine
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { init, allNfts, mine, mint } from "@/helpers/web3Client";

export default {
  name: "NFTS",
  data() {
    return {
      loading: true,
      allNftsOfUser: null,
    };
  },
  mounted: async function () {
    await init();
    this.allNftsOfUser = await allNfts();
    this.loading = false;
  },
  methods: {
    async mineReq(id) {
      this.loading = true;
      var res = await mine(id).catch((error)=>{ 
        if(error.code == 4001){
          this.loading = false;
        }
        console.log(error)
         });
      if (res !== undefined) {
        this.allNftsOfUser = await allNfts();
        this.loading = false;
      }
    },

    async mint(){
       this.loading = true;
      var res = await mint().catch((error)=>{ 
        if(error.code == 4001){
          this.loading = false;
        }
        console.log(error)
         });
      if (res) {
        this.allNftsOfUser = await allNfts();
        this.loading = false;
      }
    }
  },
};
</script>