import abi from "./abi.json"
import Web3 from "web3"
import store from "@/store"
import router from "@/router"

let contract;

let web3;

let isInitialized = false;

export const init = async ()=> {
    let provider = window.ethereum;
	
	if (typeof provider !== 'undefined') {
		store.dispatch("connect")
		window.ethereum.on('accountsChanged', function (accounts) {
			if(accounts[0] !== undefined) {
				store.commit("setError",null)
				store.commit("setWalletAddress",accounts[0])
				console.log(`Selected account changed to ${store.getters._getWalletAddress}`);
			}else{
				store.commit("setWalletAddress","");
				// store.commit("setError","Please to be sure, your wallet connected.")
				store.commit("setAuthStatus",false)
				router.push({path:"/login"})
			}
		
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
	console.log(networkId);

    if(networkId !== 3){
		store.commit("setInvalidNetwork",true);
        throw new Error('Wrong network. Please check your network...');
    }
	store.commit("setInvalidNetwork",false);

    return networkId;
}

export const allNfts = async()=>{

    if (!isInitialized) {
		await init();
	}
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

export const mine = async(id)=> {
	if (!isInitialized) {
		await init();
	}

	if(store.getters.allNfts === null){
		await allNfts() 
	}

	return await contract.methods.mine(id).send({from:store.getters._getWalletAddress}).on("error",(error)=>{console.log(error)})

}

export const randomDwarf = ()=> {
    var mining = Math.floor(Math.random() * 10);
    var luck = Math.floor(Math.random() * 10);
    var stamina = Math.floor(Math.random() * 50);
    var mineCooldown = Math.floor(Math.random() * 30);
    return { mining, luck, stamina, mineCooldown };
}

export const mint = async()=>{
	
	if (!isInitialized) {
		await init();
	}

	var dwarf = randomDwarf();
	var res = await contract.methods
		.mint(dwarf.mining, dwarf.luck, dwarf.stamina, dwarf.mineCooldown)
		.send({
			from: store.getters._getWalletAddress
		})
		.catch(function(error) {
			console.log(error);
		});

		return res
	}