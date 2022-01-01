import store from '..';
import router from '../../router';
import { localStorageRead,localStorageWrite } from "@/helpers/localStorageFunction"

export default {
    state: {
        walletAddress: "",
        isLoggedIn: false,
        error: null,
        balanceOfUser: null,
        invalidNetwork: false,
        contractAdress: '0x1085842ccC3A522570B38796f42C1985c0Bf8b2c',
        allNfts: null,
    },


    getters: {
        _isLoggedIn: state => state.isLoggedIn,
        _getWalletAddress: state => state.walletAddress,
        _getBalanceOfUser: state => state.balanceOfUser,
        _getError: state => state.error,
        _getInvalidNetwork: state => state.invalidNetwork,
        _getAllNfts: state => state.allNfts,
        _getContractAdress: state => state.contractAdress,
    },

    mutations: {
        setAuthStatus(state, status) {
            state.isLoggedIn = status;
        },
        setWalletAddress(state, account) {
            state.walletAddress = account;
        },
        setError(state, error) {
            state.error = error;
        },
        setInvalidNetwork(state, status) {
            state.invalidNetwork = status
        },
        setBalanceOfUser(state, payload) {
            state.balanceOfUser = payload.balance;
        },
        setAllNfts(state, payload) {
            state.allNfts = payload
        }
    },
    actions: {
        async connect({ commit, dispatch }, connect) {
            try {
                const { ethereum } = window;
                if (!ethereum) {
                    commit("setError", "Metamask not installed!");
                    return;
                }
                if (!(await dispatch("checkIfConnected"))) {
                    if (connect) {
                        var result = await dispatch("requestAccess");
                        console.log("result ", result)
                        router.push({ path: "/game" })
                    }
                }else{
                    router.push({path:"/game"})
                }
            } catch (error) {
                commit("setError", "Account request refused.");
            }
        },
        async checkIfConnected({ commit }) {
            const { ethereum } = window;
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length !== 0) {
                if(store.getters._isLoggedIn == false){
                    if(localStorageRead("wallet")){
                        var result = store.dispatch("wantPassword",accounts[0])
                        if(!result){
                            return false;
                        }
                     }else{
                        store.dispatch("saveUser",accounts[0])
                     }
                }
                commit("setWalletAddress", accounts[0]);
                return 1;
            } else {
                return 0;
            }
        },
        async requestAccess({ commit }) {
            const { ethereum } = window;
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            if(localStorageRead("wallet")){
                store.dispatch("wantPassword",accounts[0])
            }else{
                store.dispatch("saveUser",accounts[0])
            }
            commit("setWalletAddress", accounts[0]);
        },
        /* eslint-disable no-unused-vars */




        async wantPassword({commit},payload){
            var password = prompt("Password: ")
            localStorageWrite("wallet",payload)
            if(password == localStorageRead("password")){
                commit("setAuthStatus", true);
                return true;
            }else{
                return false;
            }

        },
        async saveUser({commit},payload){
            var password = prompt("Create Password: ")
            localStorageWrite("wallet",payload)
            localStorageWrite("password",password)
            commit("setAuthStatus", true);
            return true;
        }

        /* eslint-enable no-unused-vars */
    }
}