import Web3 from "web3";
import abi from "./abi.json"

class web3Client {

    constructor() {
        this.provider = window.ethereum
        this.web3Client = new Web3(this.provider);
    }

    static getAbi(){
        return abi
    }

    async detectNetwork(){
        var networkId = await this.web3Client.eth.net.getId()
        if(networkId !== 3){
            return false;
        }
        return networkId;
    }

}

export default web3Client;
