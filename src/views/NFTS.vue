<template>
  <page-header pageName="Game" />
  <div v-if="this.$store.getters._getInvalidNetwork">
    <h1>Invalida Address Please Select Correct Network.</h1>
  </div>
  <div v-else>
    <div v-for="(nft, index) in this.$store.getters._getAllNfts" :key="index">
      {{ nft }}
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import web3Client from "@/helpers/web3Client";
import abi from "@/helpers/abi.json";
import Web3 from "web3";


export default {
  name: "NFTS",
  data() {
    return {
      selectedNFT: null,
    };
  },
  mounted() {
    setInterval(async () => {
      var isConnected = await this.$store.dispatch("checkIfConnected");
      if (isConnected) {
        let oopweb3 = await new web3Client();
        let networkId = await oopweb3.detectNetwork();
        if (networkId !== 3) {
          return this.$store.commit("setInvalidNetwork", true);
        } else {
          return this.$store.commit("setInvalidNetwork", false);
        }
      } else {
        this.$store.commit("setAuthStatus", false);
        this.$store.commit("setAuth", null);
        this.$store.commit("setWalletAddress", null);
        return router.push({ path: "/login" });
      }
    }, 2000);
  },
  created() {
    this.allNftsOfUser();
  },
  methods: {
    allNftsOfUser: async function () {
      let web3 = new Web3(window.ethereum);
      console.log(typeof this.$store.getters._getContractAdress)
      var contractInstance = new web3.eth.Contract(
        abi.abi,
        this.$store.getters._getContractAdress
      );
      contractInstance.methods
        .getAllTokensOfUser(this.$store.state._getWalletAddress)
        .call()
        .then(function (id_array) {
          for (let index = 0; index < id_array.length; index++) {
            const element = id_array[index];
            this.getNftDetail(element).then((detail) => {
              this.$store.commit("setAllNfts", detail);
              console.log(detail);
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getNftDetail: async function (id) {
      return new Promise(function (resolve, reject) {
        let web3 = new Web3(window.ethereum);
        var contractInstance = new web3.eth.Contract(
          abi.abi,
          this.$store.getters._getContractAdress
        );
        contractInstance.methods
          .getTokenDetails(id)
          .call()
          .then(function (details) {
            resolve(details);
          })
          .catch(function (error) {
            console.log(error);
            reject();
          });
      });
    },
  },
};
</script>