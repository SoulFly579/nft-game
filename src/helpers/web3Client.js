import abi from "./abi.json"
import Web3 from "web3"
import store from "@/store"

let contract;

let web3;

let isInitialized = false;

export const init = async ()=> {
    let provider = window.ethereum;

	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				store.commit("setWalletAddress",accounts[0])
				console.log(`Selected account is ${store.getters._getWalletAddress}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			store.commit("setWalletAddress",accounts[0])
			console.log(`Selected account changed to ${store.getters._getWalletAddress}`);
		});

        window.ethereum.on("networkChanged",()=>{
            detectNetwork().then(()=>{
            })
        })
	}

	web3 = new Web3(provider);

	await detectNetwork();

    contract = new web3.eth.Contract(
		abi.abi,
		store.getters._getContractAdress
	);

	isInitialized = true;
}
export const getUserBalance = async () => {
	if (!isInitialized) {
		await init();
	}
    return await web3.eth.getBalance(store.getters._getWalletAddress).then((balance)=>{ return Web3.utils.fromWei(balance); })
};


export const detectNetwork = async() => {
    const networkId = await web3.eth.net.getId();

    if(networkId !== 3){
        throw new Error('Wrong network. Please check your network...');
    }

    return networkId;
}

export const allNfts = async()=>{

    if (!isInitialized) {
		await init();
	}


	// .then( async(id_array)=>{
	// 	store.commit("setAllNfts", id_array)
	// 	return await getAllNftDataFromArray(id_array)
    // });

    var id_array = await contract.methods.getAllTokensOfUser(store.getters._getWalletAddress).call()
	store.commit("setAllNfts", id_array)
	return await getAllNftDataFromArray(id_array)
}

export const getAllNftDataFromArray = async(id_array)=>{
	if (!isInitialized) {
		await init();
	}

	if(store.getters.allNfts === null){
		await allNfts()
	}

	var all_nfts = [];

	for (let index = 0; index < id_array.length; index++) {
        const element = id_array[index];
        await getNftDetail(element).then(detail => {
            all_nfts.push(detail);
        });
    }

	return all_nfts;
}

export const getNftDetail = async(id)=> {
	return new Promise(function(resolve) {
		contract.methods
                .getTokenDetails(id)
                .call()
                .then(function(details) {
                    console.log(details);
                    resolve(details);
                })
                .catch(function(error) {
                    console.log(error);
                });
			})
}

