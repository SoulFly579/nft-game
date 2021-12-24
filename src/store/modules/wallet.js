import Cookie from 'js-cookie'
import router from '../../router';

export default {
    state: {
        authData: {},
        walletAddress: "",
        authToken: "",
        isLoggedIn: false,
        error: null,
    },


    getters: {
        _isLoggedIn: state => state.isLoggedIn,
        _getAuthData(state) {
            var authData = state.authData
            return authData
        },
        _getAccount: state => state.account,
        _getError: state => state.error,
    },

    mutations: {
        setAuth(state, payload) {
            state.authData = payload.user
            state.authToken = payload.token
        },
        setAuthStatus(state, status) {
            state.isLoggedIn = status;
        },
        setWalletAddress(state, account) {
            state.walletAddress = account;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    actions: {
        async loginUser({ commit }, payload) {
            //TODO: buraları kontrol et

            Cookie.set("nft-game-token", payload.token, { secure: true, expires: 1 })

            commit('setAuth', payload);
            commit('setAuthStatus', true);

            router.push({ path: "/" })
        },
        async connect({ commit, dispatch }, connect) {
            try {
                const { ethereum } = window;
                if (!ethereum) {
                    commit("setError", "Metamask not installed!");
                    return;
                }
                if (!(await dispatch("checkIfConnected")) && connect) {
                    await dispatch("requestAccess");
                }
            } catch (error) {
                commit("setError", "Account request refused.");
            }
        },
        //TODO:bak buraya
        async switchNetwork() {
            try {
                const { ethereum } = window;
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x4" }],
                });
                return 1;
            } catch (switchError) {
                return 0;
            }
        },
        async checkIfConnected({ commit }) {
            const { ethereum } = window;
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length !== 0) {
                commit("setWalletAddress", accounts[0]);
                commit("setAuthStatus", true);
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
            commit("setWalletAddress", accounts[0]);
            commit("setAuthStatus", true);
        },
    }
}