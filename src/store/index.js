import { createStore } from "vuex";
import wallet from "./modules/wallet";

const store = createStore({
    modules:{
        wallet
    }
})

export default store;