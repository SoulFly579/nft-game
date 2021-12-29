import router from '../../router';

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
            localStorage.setItem("wallet", accounts[0])
            commit("setWalletAddress", accounts[0]);
            commit("setAuthStatus", true);
        },
    }
}