import { createStore } from "vuex";
import wallet from "./modules/wallet";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

const store = createStore({
    modules:{
        wallet
    },
    plugins: [
        createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
    })],
})

export default store;