define("@scom/bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b506040516200148e3803806200148e833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040525050506000620001b16200023c60201b60201c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35081516200021090600490602085019062000241565b5080516200022690600590602084019062000241565b50506006805460ff1916601217905550620002e3565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028457805160ff1916838001178555620002b4565b82800160010185558215620002b4579182015b82811115620002b457825182559160200191906001019062000297565b50620002c2929150620002c6565b5090565b6200023e91905b80821115620002c25760008155600101620002cd565b61119b80620002f36000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063893d20e811610097578063a457c2d711610066578063a457c2d71461031e578063a9059cbb14610357578063dd62ed3e14610390578063f2fde38b146103cb57610100565b8063893d20e8146102c05780638da5cb5b146102f157806395d89b41146102f9578063a0712d681461030157610100565b8063313ce567116100d3578063313ce5671461022c578063395093511461024a57806370a0823114610283578063715018a6146102b657610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101cf57806323b872dd146101e9575b600080fd5b61010d6103fe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb6004803603604081101561019857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104b2565b604080519115158252519081900360200190f35b6101d76104cf565b60408051918252519081900360200190f35b6101bb600480360360608110156101ff57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104d5565b61023461057c565b6040805160ff9092168252519081900360200190f35b6101bb6004803603604081101561026057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610585565b6101d76004803603602081101561029957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105e6565b6102be61060e565b005b6102c861070e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102c861071d565b61010d610739565b6101bb6004803603602081101561031757600080fd5b50356107b8565b6101bb6004803603604081101561033457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610864565b6101bb6004803603604081101561036d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108df565b6101d7600480360360408110156103a657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166108f3565b6102be600480360360208110156103e157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661092b565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b5050505050905090565b60006104c66104bf6109c8565b84846109cc565b50600192915050565b60035490565b60006104e2848484610b13565b610572846104ee6109c8565b61056d856040518060600160405280602881526020016110ae6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600260205260408120906105396109c8565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610ce616565b6109cc565b5060019392505050565b60065460ff1690565b60006104c66105926109c8565b8461056d85600260006105a36109c8565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610d9716565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6106166109c8565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461069f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600061071861071d565b905090565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60058054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104a85780601f1061047d576101008083540402835291602001916104a8565b60006107c26109c8565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461084b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61085c6108566109c8565b83610e12565b506001919050565b60006104c66108716109c8565b8461056d8560405180606001604052806025815260200161111f602591396002600061089b6109c8565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610ce616565b60006104c66108ec6109c8565b8484610b13565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b6109336109c8565b60005473ffffffffffffffffffffffffffffffffffffffff9081169116146109bc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6109c581610f45565b50565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610a38576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110646024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806111446022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061103f6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610beb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806110fc6023913960400191505060405180910390fd5b610c3b816040518060600160405280602681526020016110d66026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902054919063ffffffff610ce616565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600160205260408082209390935590841681522054610c7d908263ffffffff610d9716565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610d8f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d54578181015183820152602001610d3c565b50505050905090810190601f168015610d815780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610e0b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e9457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600354610ea7908263ffffffff610d9716565b60035573ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054610ee0908263ffffffff610d9716565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8116610fb1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806110886026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737342455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220de1f15736f456fd807f6be9a445084306c7a333e5b3e4e154d2bc89ad843e73f64736f6c63430006060033"
    };
});
define("@scom/bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.json.ts"], function (require, exports, eth_contract_1, BEP20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BEP20 = void 0;
    class BEP20 extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, BEP20_json_1.default.abi, BEP20_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        parseOwnershipTransferredEvent(receipt) {
            return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
        }
        decodeOwnershipTransferredEvent(event) {
            let result = event.data;
            return {
                previousOwner: result.previousOwner,
                newOwner: result.newOwner,
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.decimals = decimals_call;
            let getOwner_call = async (options) => {
                let result = await this.call('getOwner', [], options);
                return result;
            };
            this.getOwner = getOwner_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mint_send = async (amount, options) => {
                let result = await this.send('mint', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let mint_call = async (amount, options) => {
                let result = await this.call('mint', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let renounceOwnership_send = async (options) => {
                let result = await this.send('renounceOwnership', [], options);
                return result;
            };
            let renounceOwnership_call = async (options) => {
                let result = await this.call('renounceOwnership', [], options);
                return;
            };
            this.renounceOwnership = Object.assign(renounceOwnership_send, {
                call: renounceOwnership_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
        }
    }
    exports.BEP20 = BEP20;
    BEP20._abi = BEP20_json_1.default.abi;
});
define("@scom/bakery-swap-contract/contracts/BakeryMaster.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/bakery-swap-contract/contracts/BakeryMaster.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract BakeryToken", "name": "_bake", "type": "address" }, { "internalType": "address", "name": "_devAddr", "type": "address" }, { "internalType": "uint256", "name": "_bakeStartBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusBeforeBulkBlockSize", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusBeforeCommonDifference", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndCommonDifference", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "poolAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "poolAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "poolAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" },
            { "inputs": [], "name": "accBakePerShareMultiple", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "address", "name": "_pair", "type": "address" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "bake", "outputs": [{ "internalType": "contract BakeryToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bakeBonusEndBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bakeStartBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bonusBeforeBulkBlockSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bonusBeforeCommonDifference", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bonusEndBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bonusEndBulkBlockSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bonusEndCommonDifference", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_devAddr", "type": "address" }], "name": "dev", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "devAddr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }], "name": "existsPool", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getTotalRewardInfo", "outputs": [{ "internalType": "uint256", "name": "totalReward", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }, { "internalType": "uint256", "name": "_bakeInitBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bulkBlockSize", "type": "uint256" }, { "internalType": "uint256", "name": "_commonDifference", "type": "uint256" }], "name": "getTotalRewardInfoInSameCommonDifference", "outputs": [{ "internalType": "uint256", "name": "totalReward", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "maxRewardBlockNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingBake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolAddresses", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "poolInfoMap", "outputs": [{ "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "accBakePerShare", "type": "uint256" }, { "internalType": "bool", "name": "exists", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "poolUserInfoMap", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_pair", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "6080604052600060025564e8d4a51000600b553480156200001f57600080fd5b5060405162002a4138038062002a4183398181016040526101008110156200004657600080fd5b508051602082015160408301516060840151608085015160a086015160c087015160e09097015195969495939492939192909160006200008e6001600160e01b036200028516565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600c80546001600160a01b03199081166001600160a01b038b811691909117909255600d805490911691891691909117905560018690556003859055600484905560058390556009829055600a81905562000140848662000289602090811b620019eb17901c565b600681905550620001ff600654620001ac6200016f600554600654620002dc60201b62001b141790919060201c565b620001d4600554620001d4620001e8600954620001d46001620001c0600554620001ac6003546004546200028960201b620019eb1790919060201c565b620002dc60201b62001b141790919060201c565b6200028960201b620019eb1790919060201c565b6200032660201b62001aa11790919060201c565b6001546200028960201b620019eb1790919060201c565b600781905550620002736200025c62000245600162000231600a54600754620002dc60201b62001b141790919060201c565b6200038460201b62001a2d1790919060201c565b6006546200032660201b62001aa11790919060201c565b6003546200038460201b62001a2d1790919060201c565b60085550620004e39650505050505050565b3390565b6000620002d383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250620003df60201b60201c565b90505b92915050565b6000620002d383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200047a60201b60201c565b6000826200033757506000620002d6565b828202828482816200034557fe5b0414620002d35760405162461bcd60e51b815260040180806020018281038252602181526020018062002a206021913960400191505060405180910390fd5b600082820183811015620002d3576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115620004725760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620004365781810151838201526020016200041c565b50505050905090810190601f168015620004645780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183620004cc5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315620004365781810151838201526020016200041c565b506000838581620004d957fe5b0495945050505050565b61252d80620004f36000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c8063715018a61161010f578063b0de262e116100a2578063ebfe436311610071578063ebfe43631461058f578063f2fde38b14610597578063f3fef3a3146105ca578063feb21b9c14610603576101f0565b8063b0de262e1461056f578063c97ab21a14610577578063cedbcf271461057f578063da09c72c14610587576101f0565b806393190c96116100de57806393190c9614610522578063a2edfe3c1461052a578063a55b920714610532578063a5f8d4e614610567576101f0565b8063715018a6146104835780637b46c54f1461048b5780638d88a90e146104be5780638da5cb5b146104f1576101f0565b8063349e2cc61161018757806361235c7b1161015657806361235c7b146103c6578063630b5ba11461040d5780636cc75a0c146104155780636ff1c9bc14610450576101f0565b8063349e2cc61461030e57806334ace4171461033157806347e7ef241461038557806348cd4cb1146103be576101f0565b806317caf6f1116101c357806317caf6f1146102b55780631aed6553146102bd5780631eaaa045146102c55780632d3f7fcb14610306576101f0565b8063081e3eda146101f55780630b1391941461020f578063114b338b146102525780631218c5981461025a575b600080fd5b6101fd610620565b60408051918252519081900360200190f35b6102506004803603606081101561022557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013590604001351515610626565b005b6101fd61078e565b61028d6004803603602081101561027057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610794565b6040805194855260208501939093528383019190915215156060830152519081900360800190f35b6101fd6107be565b6101fd6107c4565b610250600480360360608110156102db57600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff602082013516906040013515156107ca565b6101fd6109e8565b6101fd6004803603604081101561032457600080fd5b50803590602001356109ee565b61036c6004803603604081101561034757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610a65565b6040805192835260208301919091528051918290030190f35b6102506004803603604081101561039b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a89565b6101fd610bd8565b6103f9600480360360208110156103dc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610bde565b604080519115158252519081900360200190f35b610250610c0c565b6101fd6004803603604081101561042b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c5d565b6102506004803603602081101561046657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e45565b610250610ee7565b610250600480360360208110156104a157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610fe7565b610250600480360360208110156104d457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112b3565b6104f9611380565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101fd61139c565b6101fd6113a2565b6101fd600480360360a081101561054857600080fd5b50803590602081013590604081013590606081013590608001356113a8565b6101fd611722565b6104f9611728565b6101fd611744565b6101fd61174a565b6104f9611750565b6101fd61176c565b610250600480360360208110156105ad57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611772565b610250600480360360408110156105e057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561180c565b6104f96004803603602081101561061957600080fd5b50356119b3565b600e5490565b61062e6119e7565b60005473ffffffffffffffffffffffffffffffffffffffff9081169116146106b757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b80156106c5576106c5610c0c565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600f60205260409020600381015460ff1661075d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f706f6f6c206e6f74206578697374730000000000000000000000000000000000604482015290519081900360640190fd5b80546002546107839185916107779163ffffffff6119eb16565b9063ffffffff611a2d16565b600255919091555050565b600a5481565b600f6020526000908152604090208054600182015460028301546003909301549192909160ff1684565b60025481565b60045481565b6107d26119e7565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461085b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b801561086957610869610c0c565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f60205260409020600381015460ff161561090257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f706f6f6c20616c72656164792065786973747300000000000000000000000000604482015290519081900360640190fd5b6000600354431161091557600354610917565b435b60025490915061092d908663ffffffff611a2d16565b60029081559482556001808301919091556000948201859055600390910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682179055600e80549182018155909352507fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd90910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60055481565b60006004548211610a1357610a0c83836001546005546009546113a8565b9050610a5f565b6004548310610a2f57610a0c8383600754600654600a546113a8565b610a5c610a4760045484600754600654600a546113a8565b610777856004546001546005546009546113a8565b90505b92915050565b60106020908152600092835260408084209091529082529020805460019091015482565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020908152604080832060108352818420338552909252909120610aca84610fe7565b805415610b28576000610b148260010154610b08600b54610afc87600201548760000154611aa190919063ffffffff16565b9063ffffffff611b1416565b9063ffffffff6119eb16565b90508015610b2657610b263382611b56565b505b610b5073ffffffffffffffffffffffffffffffffffffffff851633308663ffffffff611d5916565b8054610b62908463ffffffff611a2d16565b808255600b546002840154610b8092610afc9163ffffffff611aa116565b600182015560408051848152905173ffffffffffffffffffffffffffffffffffffffff86169133917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f629181900360200190a350505050565b60035481565b73ffffffffffffffffffffffffffffffffffffffff166000908152600f602052604090206003015460ff1690565b600e5460005b81811015610c5957610c51600e8281548110610c2a57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16610fe7565b600101610c12565b5050565b6000610c6761245c565b5073ffffffffffffffffffffffffffffffffffffffff83166000908152600f602090815260409182902082516080810184528154815260018201549281019290925260028101549282019290925260039091015460ff16151560608201819052610cd5576000915050610a5f565b73ffffffffffffffffffffffffffffffffffffffff808516600081815260106020908152604080832094881683529381528382208585015185517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152955191959094926370a0823192602480840193829003018186803b158015610d5f57600080fd5b505afa158015610d73573d6000803e3d6000fd5b505050506040513d6020811015610d8957600080fd5b5051602085015190915043118015610da057508015155b8015610db157506008548460200151105b15610e17576000610dc68560200151436109ee565b90506000610de7600254610afc886000015185611aa190919063ffffffff16565b9050610e12610e0584610afc600b5485611aa190919063ffffffff16565b859063ffffffff611a2d16565b935050505b6001830154600b548454610e3a9291610b0891610afc908763ffffffff611aa116565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116600081815260106020908152604080832033808552925290912080549092610e8b92909163ffffffff611df416565b8054604080519182525173ffffffffffffffffffffffffffffffffffffffff84169133917ff24ef89f38eadc1bde50701ad6e4d6d11a2dc24f7cf834a486991f38833285049181900360200190a3600080825560019091015550565b610eef6119e7565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610f7857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f60205260409020600381015460ff161580611024575080600101544311155b1561102f57506112b0565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b15801561109f57600080fd5b505afa1580156110b3573d6000803e3d6000fd5b505050506040513d60208110156110c957600080fd5b50519050806110df5750436001909101556112b0565b6008548260010154106110f35750506112b0565b60006111038360010154436109ee565b90506000611124600254610afc866000015485611aa190919063ffffffff16565b600c54600d5491925073ffffffffffffffffffffffffffffffffffffffff9081169163449a52f8911661115e84606463ffffffff611b1416565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156111c757600080fd5b505af11580156111db573d6000803e3d6000fd5b5050600c54604080517f449a52f800000000000000000000000000000000000000000000000000000000815230600482015260248101869052905173ffffffffffffffffffffffffffffffffffffffff909216935063449a52f8925060448082019260009290919082900301818387803b15801561125857600080fd5b505af115801561126c573d6000803e3d6000fd5b5050505061129d61128c84610afc600b5485611aa190919063ffffffff16565b60028601549063ffffffff611a2d16565b6002850155505043600190920191909155505b50565b600d5473ffffffffffffffffffffffffffffffffffffffff16331461133957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f6465763a207775743f0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600d80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60075481565b600b5481565b60006003548510806113bc57508560085411155b156113c957506000611719565b6003548610156113d95760035495505b8460085410156113e95760085494505b60006114406000611415866114096003548b6119eb90919063ffffffff16565b9063ffffffff611e8116565b11611421576000611424565b60015b60ff1661077786610afc6003548b6119eb90919063ffffffff16565b9050600181101561144f575060015b600061149a600061146f876114096003548d6119eb90919063ffffffff16565b1161147b57600061147e565b60015b60ff1661077787610afc6003548d6119eb90919063ffffffff16565b905060018110156114a9575060015b818114156114fe576114f56114e56114d8866114cc86600163ffffffff6119eb16565b9063ffffffff611aa116565b889063ffffffff6119eb16565b6114cc898b63ffffffff6119eb16565b92505050611719565b6000611522611513878463ffffffff611aa116565b6003549063ffffffff611a2d16565b9050600061154a61151361153d86600163ffffffff6119eb16565b899063ffffffff611aa116565b905089896115956115766115698a6114cc8a600163ffffffff6119eb16565b8c9063ffffffff6119eb16565b6114cc8585116115865785611588565b845b849063ffffffff6119eb16565b965081841180156115a65750808411155b15611605576116026115f56115e5600088116115c35760006115d8565b6115d88b6114cc8a600163ffffffff6119eb16565b8d9063ffffffff6119eb16565b6114cc878663ffffffff6119eb16565b889063ffffffff611a2d16565b96505b508890508787848411156117115783600061162a84610afc848a63ffffffff6119eb16565b905060018111156116e057600061166761165a6114d887610afc886114cc6003548f6119eb90919063ffffffff16565b869063ffffffff611aa116565b905060006116ad6116a0611693876114cc6001610b088c610afc6003548d6119eb90919063ffffffff16565b899063ffffffff6119eb16565b879063ffffffff611aa116565b90506116d76116ca6002610afc6116a0868663ffffffff611a2d16565b8d9063ffffffff611a2d16565b9b50505061170e565b61170b6116fe61165a6114d8866114cc8e600263ffffffff6119eb16565b8b9063ffffffff611a2d16565b99505b50505b505050505050505b95945050505050565b60085481565b600c5473ffffffffffffffffffffffffffffffffffffffff1681565b60095481565b60065481565b600d5473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b61177a6119e7565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461180357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6112b081611ec3565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f602090815260408083206010835281842033855290925290912080548311156118b457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f77697468647261773a206e6f7420676f6f640000000000000000000000000000604482015290519081900360640190fd5b6118bd84610fe7565b60006118e88260010154610b08600b54610afc87600201548760000154611aa190919063ffffffff16565b905080156118fa576118fa3382611b56565b831561193b578154611912908563ffffffff6119eb16565b825561193b73ffffffffffffffffffffffffffffffffffffffff8616338663ffffffff611df416565b600b546002840154835461195a9291610afc919063ffffffff611aa116565b600183015560408051858152905173ffffffffffffffffffffffffffffffffffffffff87169133917f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb9181900360200190a35050505050565b600e81815481106119c057fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b3390565b6000610a5c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611fbc565b600082820183811015610a5c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600082611ab057506000610a5f565b82820282848281611abd57fe5b0414610a5c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806124d76021913960400191505060405180910390fd5b6000610a5c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061206d565b600c54604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015611bc757600080fd5b505afa158015611bdb573d6000803e3d6000fd5b505050506040513d6020811015611bf157600080fd5b5051905080821115611cab57600c54604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b158015611c7957600080fd5b505af1158015611c8d573d6000803e3d6000fd5b505050506040513d6020811015611ca357600080fd5b50611d549050565b600c54604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b158015611d2757600080fd5b505af1158015611d3b573d6000803e3d6000fd5b505050506040513d6020811015611d5157600080fd5b50505b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052611dee9085906120ec565b50505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052611d549084906120ec565b6000610a5c83836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f00000000000000008152506121c4565b73ffffffffffffffffffffffffffffffffffffffff8116611f2f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806124b16026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008184841115612065576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561202a578181015183820152602001612012565b50505050905090810190601f1680156120575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836120d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815283516024840152835190928392604490910191908501908083836000831561202a578181015183820152602001612012565b5060008385816120e257fe5b0495945050505050565b606061214e826040518060400160405280602081526020017f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122409092919063ffffffff16565b805190915015611d545780806020019051602081101561216d57600080fd5b5051611d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612487602a913960400191505060405180910390fd5b6000818361222d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815283516024840152835190928392604490910191908501908083836000831561202a578181015183820152602001612012565b5082848161223757fe5b06949350505050565b606061224f8484600085612257565b949350505050565b606061226285612423565b6122cd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061233757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016122fa565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612399576040519150601f19603f3d011682016040523d82523d6000602084013e61239e565b606091505b509150915081156123b257915061224f9050565b8051156123c25780518082602001fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815286516024840152865187939192839260440191908501908083836000831561202a578181015183820152602001612012565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061224f575050151592915050565b6040518060800160405280600081526020016000815260200160008152602001600015158152509056fe5361666542455032303a204245503230206f7065726174696f6e20646964206e6f7420737563636565644f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212201ecf266a96dbb5f66034e776822843f9cf7dc6df2bc12c4d14b123ab5f7bce4364736f6c63430006060033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77"
    };
});
define("@scom/bakery-swap-contract/contracts/BakeryMaster.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/bakery-swap-contract/contracts/BakeryMaster.json.ts"], function (require, exports, eth_contract_2, BakeryMaster_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BakeryMaster = void 0;
    class BakeryMaster extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, BakeryMaster_json_1.default.abi, BakeryMaster_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.bake, params.devAddr, this.wallet.utils.toString(params.bakeStartBlock), this.wallet.utils.toString(params.startBlock), this.wallet.utils.toString(params.bonusEndBlock), this.wallet.utils.toString(params.bonusBeforeBulkBlockSize), this.wallet.utils.toString(params.bonusBeforeCommonDifference), this.wallet.utils.toString(params.bonusEndCommonDifference)], options);
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                poolAddress: result.poolAddress,
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        parseEmergencyWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
        }
        decodeEmergencyWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                poolAddress: result.poolAddress,
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        parseOwnershipTransferredEvent(receipt) {
            return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
        }
        decodeOwnershipTransferredEvent(event) {
            let result = event.data;
            return {
                previousOwner: result.previousOwner,
                newOwner: result.newOwner,
                _event: event
            };
        }
        parseWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
        }
        decodeWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                poolAddress: result.poolAddress,
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        assign() {
            let accBakePerShareMultiple_call = async (options) => {
                let result = await this.call('accBakePerShareMultiple', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.accBakePerShareMultiple = accBakePerShareMultiple_call;
            let bake_call = async (options) => {
                let result = await this.call('bake', [], options);
                return result;
            };
            this.bake = bake_call;
            let bakeBonusEndBlock_call = async (options) => {
                let result = await this.call('bakeBonusEndBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bakeBonusEndBlock = bakeBonusEndBlock_call;
            let bakeStartBlock_call = async (options) => {
                let result = await this.call('bakeStartBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bakeStartBlock = bakeStartBlock_call;
            let bonusBeforeBulkBlockSize_call = async (options) => {
                let result = await this.call('bonusBeforeBulkBlockSize', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bonusBeforeBulkBlockSize = bonusBeforeBulkBlockSize_call;
            let bonusBeforeCommonDifference_call = async (options) => {
                let result = await this.call('bonusBeforeCommonDifference', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bonusBeforeCommonDifference = bonusBeforeCommonDifference_call;
            let bonusEndBlock_call = async (options) => {
                let result = await this.call('bonusEndBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bonusEndBlock = bonusEndBlock_call;
            let bonusEndBulkBlockSize_call = async (options) => {
                let result = await this.call('bonusEndBulkBlockSize', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bonusEndBulkBlockSize = bonusEndBulkBlockSize_call;
            let bonusEndCommonDifference_call = async (options) => {
                let result = await this.call('bonusEndCommonDifference', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.bonusEndCommonDifference = bonusEndCommonDifference_call;
            let devAddr_call = async (options) => {
                let result = await this.call('devAddr', [], options);
                return result;
            };
            this.devAddr = devAddr_call;
            let existsPool_call = async (pair, options) => {
                let result = await this.call('existsPool', [pair], options);
                return result;
            };
            this.existsPool = existsPool_call;
            let getTotalRewardInfoParams = (params) => [this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.to)];
            let getTotalRewardInfo_call = async (params, options) => {
                let result = await this.call('getTotalRewardInfo', getTotalRewardInfoParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.getTotalRewardInfo = getTotalRewardInfo_call;
            let getTotalRewardInfoInSameCommonDifferenceParams = (params) => [this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.to), this.wallet.utils.toString(params.bakeInitBlock), this.wallet.utils.toString(params.bulkBlockSize), this.wallet.utils.toString(params.commonDifference)];
            let getTotalRewardInfoInSameCommonDifference_call = async (params, options) => {
                let result = await this.call('getTotalRewardInfoInSameCommonDifference', getTotalRewardInfoInSameCommonDifferenceParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.getTotalRewardInfoInSameCommonDifference = getTotalRewardInfoInSameCommonDifference_call;
            let maxRewardBlockNumber_call = async (options) => {
                let result = await this.call('maxRewardBlockNumber', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.maxRewardBlockNumber = maxRewardBlockNumber_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let pendingBakeParams = (params) => [params.pair, params.user];
            let pendingBake_call = async (params, options) => {
                let result = await this.call('pendingBake', pendingBakeParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.pendingBake = pendingBake_call;
            let poolAddresses_call = async (param1, options) => {
                let result = await this.call('poolAddresses', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.poolAddresses = poolAddresses_call;
            let poolInfoMap_call = async (param1, options) => {
                let result = await this.call('poolInfoMap', [param1], options);
                return {
                    allocPoint: new eth_contract_2.BigNumber(result.allocPoint),
                    lastRewardBlock: new eth_contract_2.BigNumber(result.lastRewardBlock),
                    accBakePerShare: new eth_contract_2.BigNumber(result.accBakePerShare),
                    exists: result.exists
                };
            };
            this.poolInfoMap = poolInfoMap_call;
            let poolLength_call = async (options) => {
                let result = await this.call('poolLength', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.poolLength = poolLength_call;
            let poolUserInfoMapParams = (params) => [params.param1, params.param2];
            let poolUserInfoMap_call = async (params, options) => {
                let result = await this.call('poolUserInfoMap', poolUserInfoMapParams(params), options);
                return {
                    amount: new eth_contract_2.BigNumber(result.amount),
                    rewardDebt: new eth_contract_2.BigNumber(result.rewardDebt)
                };
            };
            this.poolUserInfoMap = poolUserInfoMap_call;
            let startBlock_call = async (options) => {
                let result = await this.call('startBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.startBlock = startBlock_call;
            let totalAllocPoint_call = async (options) => {
                let result = await this.call('totalAllocPoint', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.totalAllocPoint = totalAllocPoint_call;
            let addParams = (params) => [this.wallet.utils.toString(params.allocPoint), params.pair, params.withUpdate];
            let add_send = async (params, options) => {
                let result = await this.send('add', addParams(params), options);
                return result;
            };
            let add_call = async (params, options) => {
                let result = await this.call('add', addParams(params), options);
                return;
            };
            this.add = Object.assign(add_send, {
                call: add_call
            });
            let depositParams = (params) => [params.pair, this.wallet.utils.toString(params.amount)];
            let deposit_send = async (params, options) => {
                let result = await this.send('deposit', depositParams(params), options);
                return result;
            };
            let deposit_call = async (params, options) => {
                let result = await this.call('deposit', depositParams(params), options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
            let dev_send = async (devAddr, options) => {
                let result = await this.send('dev', [devAddr], options);
                return result;
            };
            let dev_call = async (devAddr, options) => {
                let result = await this.call('dev', [devAddr], options);
                return;
            };
            this.dev = Object.assign(dev_send, {
                call: dev_call
            });
            let emergencyWithdraw_send = async (pair, options) => {
                let result = await this.send('emergencyWithdraw', [pair], options);
                return result;
            };
            let emergencyWithdraw_call = async (pair, options) => {
                let result = await this.call('emergencyWithdraw', [pair], options);
                return;
            };
            this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
                call: emergencyWithdraw_call
            });
            let massUpdatePools_send = async (options) => {
                let result = await this.send('massUpdatePools', [], options);
                return result;
            };
            let massUpdatePools_call = async (options) => {
                let result = await this.call('massUpdatePools', [], options);
                return;
            };
            this.massUpdatePools = Object.assign(massUpdatePools_send, {
                call: massUpdatePools_call
            });
            let renounceOwnership_send = async (options) => {
                let result = await this.send('renounceOwnership', [], options);
                return result;
            };
            let renounceOwnership_call = async (options) => {
                let result = await this.call('renounceOwnership', [], options);
                return;
            };
            this.renounceOwnership = Object.assign(renounceOwnership_send, {
                call: renounceOwnership_call
            });
            let setParams = (params) => [params.pair, this.wallet.utils.toString(params.allocPoint), params.withUpdate];
            let set_send = async (params, options) => {
                let result = await this.send('set', setParams(params), options);
                return result;
            };
            let set_call = async (params, options) => {
                let result = await this.call('set', setParams(params), options);
                return;
            };
            this.set = Object.assign(set_send, {
                call: set_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let updatePool_send = async (pair, options) => {
                let result = await this.send('updatePool', [pair], options);
                return result;
            };
            let updatePool_call = async (pair, options) => {
                let result = await this.call('updatePool', [pair], options);
                return;
            };
            this.updatePool = Object.assign(updatePool_send, {
                call: updatePool_call
            });
            let withdrawParams = (params) => [params.pair, this.wallet.utils.toString(params.amount)];
            let withdraw_send = async (params, options) => {
                let result = await this.send('withdraw', withdrawParams(params), options);
                return result;
            };
            let withdraw_call = async (params, options) => {
                let result = await this.call('withdraw', withdrawParams(params), options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
        }
    }
    exports.BakeryMaster = BakeryMaster;
    BakeryMaster._abi = BakeryMaster_json_1.default.abi;
});
define("@scom/bakery-swap-contract/contracts/BakerySwapRouter.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/bakery-swap-contract/contracts/BakerySwapRouter.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WBNB", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "inputs": [], "name": "WBNB", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityBNB", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityBNB", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityBNBSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountBNB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityBNBWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBNBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountBNB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapBNBForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactBNBForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactBNBForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForBNB", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForBNBSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactBNB", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
            { "stateMutability": "payable", "type": "receive" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b50604051620056d4380380620056d4833981810160405260408110156200003757600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61554d62000187600039806101ac5280610f995280611388528061147052806114f15280611c1b5280611e295280611f1452806120b0528061226052806122f552806125e35280612679528061282c52806128c15280612aa05280612b755280612fea528061316e528061323e528061335a528061358d52806135c8528061387152806138c752806138fb528061397c525080610e005280610e395280610f77528061113c528061123a5280611530528061195f5280611d0d5280611ef2528061219652806123345280612519528061275f52806129005280612c825280612f145280612f3d528061344c52806136f652806138a552806142be5280614301528061443d528061461e5280614e155280614ef65280614f76525061554d6000f3fe60806040526004361061018f5760003560e01c80638dd95002116100d6578063d06ca61f1161007f578063e058848811610059578063e058848814610ca4578063e8e3370014610d04578063eaaed44214610d91576101d5565b8063d06ca61f14610aa3578063d46d2f8314610b5a578063d67b571e14610bff576101d5565b8063b7e65949116100b0578063b7e65949146109c4578063baa2abde14610a24578063c45a015514610a8e576101d5565b80638dd95002146108bd5780639cf68911146108fb578063ad615dec1461098e576101d5565b80635c11d795116101385780638332a963116101125780638332a9631461074f57806385f8c259146107e25780638803dbee14610818576101d5565b80635c11d795146105855780635d616c5b1461062a578063685a0a34146106cf576101d5565b806334a0772d1161016957806334a0772d146103cd57806338ed17391461044d57806350e27df3146104f2576101d5565b8063054d50d4146101da5780631f00ca74146102225780632195995c14610329576101d5565b366101d5573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101d357fe5b005b600080fd5b3480156101e657600080fd5b50610210600480360360608110156101fd57600080fd5b5080359060208101359060400135610de4565b60408051918252519081900360200190f35b34801561022e57600080fd5b506102d96004803603604081101561024557600080fd5b8135919081019060408101602082013564010000000081111561026757600080fd5b82018360208201111561027957600080fd5b8035906020019184602083028401116401000000008311171561029b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610df9945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156103155781810151838201526020016102fd565b505050509050019250505060405180910390f35b34801561033557600080fd5b506103b4600480360361016081101561034d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff6101008201351690610120810135906101400135610e2f565b6040805192835260208301919091528051918290030190f35b3480156103d957600080fd5b506103b460048036036101408110156103f157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e08201351690610100810135906101200135610f6d565b34801561045957600080fd5b506102d9600480360360a081101561047057600080fd5b81359160208101359181019060608101604082013564010000000081111561049757600080fd5b8201836020820111156104a957600080fd5b803590602001918460208302840111640100000000831117156104cb57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356110c5565b6101d36004803603608081101561050857600080fd5b8135919081019060408101602082013564010000000081111561052a57600080fd5b82018360208201111561053c57600080fd5b8035906020019184602083028401116401000000008311171561055e57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611316565b34801561059157600080fd5b506101d3600480360360a08110156105a857600080fd5b8135916020810135918101906060810160408201356401000000008111156105cf57600080fd5b8201836020820111156105e157600080fd5b8035906020019184602083028401116401000000008311171561060357600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356118bc565b34801561063657600080fd5b506102d9600480360360a081101561064d57600080fd5b81359160208101359181019060608101604082013564010000000081111561067457600080fd5b82018360208201111561068657600080fd5b803590602001918460208302840111640100000000831117156106a857600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611b92565b3480156106db57600080fd5b5061021060048036036101408110156106f357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e08201351690610100810135906101200135611eea565b6102d96004803603608081101561076557600080fd5b8135919081019060408101602082013564010000000081111561078757600080fd5b82018360208201111561079957600080fd5b803590602001918460208302840111640100000000831117156107bb57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff813516906020013561203c565b3480156107ee57600080fd5b506102106004803603606081101561080557600080fd5b5080359060208101359060400135612495565b34801561082457600080fd5b506102d9600480360360a081101561083b57600080fd5b81359160208101359181019060608101604082013564010000000081111561086257600080fd5b82018360208201111561087457600080fd5b8035906020019184602083028401116401000000008311171561089657600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356124a2565b3480156108c957600080fd5b506108d26125e1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102d96004803603608081101561091157600080fd5b8135919081019060408101602082013564010000000081111561093357600080fd5b82018360208201111561094557600080fd5b8035906020019184602083028401116401000000008311171561096757600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612605565b34801561099a57600080fd5b50610210600480360360608110156109b157600080fd5b5080359060208101359060400135612a1b565b3480156109d057600080fd5b50610210600480360360c08110156109e757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a00135612a28565b348015610a3057600080fd5b506103b4600480360360e0811015610a4757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c00135612c08565b348015610a9a57600080fd5b506108d2612f12565b348015610aaf57600080fd5b506102d960048036036040811015610ac657600080fd5b81359190810190604081016020820135640100000000811115610ae857600080fd5b820183602082011115610afa57600080fd5b80359060200191846020830284011164010000000083111715610b1c57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550612f36945050505050565b348015610b6657600080fd5b506101d3600480360360a0811015610b7d57600080fd5b813591602081013591810190606081016040820135640100000000811115610ba457600080fd5b820183602082011115610bb657600080fd5b80359060200191846020830284011164010000000083111715610bd857600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612f63565b348015610c0b57600080fd5b506102d9600480360360a0811015610c2257600080fd5b813591602081013591810190606081016040820135640100000000811115610c4957600080fd5b820183602082011115610c5b57600080fd5b80359060200191846020830284011164010000000083111715610c7d57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356132d1565b348015610cb057600080fd5b506103b4600480360360c0811015610cc757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a00135613514565b348015610d1057600080fd5b50610d736004803603610100811015610d2857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e00135613667565b60408051938452602084019290925282820152519081900360600190f35b610d73600480360360c0811015610da757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356137f6565b6000610df1848484613b22565b949350505050565b6060610e267f00000000000000000000000000000000000000000000000000000000000000008484613c46565b90505b92915050565b6000806000610e5f7f00000000000000000000000000000000000000000000000000000000000000008f8f613de9565b9050600087610e6e578c610e90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b158015610f2c57600080fd5b505af1158015610f40573d6000803e3d6000fd5b50505050610f538f8f8f8f8f8f8f612c08565b809450819550505050509b509b9950505050505050505050565b6000806000610fbd7f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000613de9565b9050600087610fcc578c610fee565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b15801561108a57600080fd5b505af115801561109e573d6000803e3d6000fd5b505050506110b08e8e8e8e8e8e613514565b909f909e509c50505050505050505050505050565b6060814281101561113757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6111957f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613ed492505050565b915086826001845103815181106111a857fe5b60200260200101511015611207576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061544f602c913960400191505060405180910390fd5b6112cc8686600081811061121757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336112b27f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061126657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061129057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16613de9565b856000815181106112bf57fe5b6020026020010151614025565b61130b828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506141f5915050565b509695505050505050565b804281101561138657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16858560008181106113ca57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461146957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f42616b65727953776170526f757465723a20494e56414c49445f504154480000604482015290519081900360640190fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156114d657600080fd5b505af11580156114ea573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6115867f00000000000000000000000000000000000000000000000000000000000000008989600081811061155c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061129057fe5b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156115f057600080fd5b505af1158015611604573d6000803e3d6000fd5b505050506040513d602081101561161a57600080fd5b505161162257fe5b600086867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061165257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156116eb57600080fd5b505afa1580156116ff573d6000803e3d6000fd5b505050506040513d602081101561171557600080fd5b505160408051602089810282810182019093528982529293506117579290918a918a9182918501908490808284376000920191909152508992506143e6915050565b8761185b8289897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061178a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561182357600080fd5b505afa158015611837573d6000803e3d6000fd5b505050506040513d602081101561184d57600080fd5b50519063ffffffff61471016565b10156118b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061544f602c913960400191505060405180910390fd5b5050505050505050565b804281101561192c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6119918585600081811061193c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361198b7f00000000000000000000000000000000000000000000000000000000000000008989600081811061155c57fe5b8a614025565b600085857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106119c157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611a5a57600080fd5b505afa158015611a6e573d6000803e3d6000fd5b505050506040513d6020811015611a8457600080fd5b50516040805160208881028281018201909352888252929350611ac69290918991899182918501908490808284376000920191909152508892506143e6915050565b8661185b8288887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611af957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561182357600080fd5b60608142811015611c0457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611c6957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611d0857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f42616b65727953776170526f757465723a20494e56414c49445f504154480000604482015290519081900360640190fd5b611d667f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613ed492505050565b91508682600184510381518110611d7957fe5b60200260200101511015611dd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061544f602c913960400191505060405180910390fd5b611de88686600081811061121757fe5b611e27828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152503092506141f5915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d83600185510381518110611e7357fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611eb157600080fd5b505af1158015611ec5573d6000803e3d6000fd5b5050505061130b8483600185510381518110611edd57fe5b6020026020010151614752565b600080611f387f00000000000000000000000000000000000000000000000000000000000000008d7f0000000000000000000000000000000000000000000000000000000000000000613de9565b9050600086611f47578b611f69565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c48101879052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b15801561200557600080fd5b505af1158015612019573d6000803e3d6000fd5b5050505061202b8d8d8d8d8d8d612a28565b9d9c50505050505050505050505050565b606081428110156120ae57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660008181106120f257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461219157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f42616b65727953776170526f757465723a20494e56414c49445f504154480000604482015290519081900360640190fd5b6121ef7f000000000000000000000000000000000000000000000000000000000000000088888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613c4692505050565b915034826000815181106121ff57fe5b6020026020010151111561225e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806153406028913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0836000815181106122a757fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156122da57600080fd5b505af11580156122ee573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6123607f00000000000000000000000000000000000000000000000000000000000000008989600081811061155c57fe5b8460008151811061236d57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156123de57600080fd5b505af11580156123f2573d6000803e3d6000fd5b505050506040513d602081101561240857600080fd5b505161241057fe5b61244f828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506141f5915050565b8160008151811061245c57fe5b602002602001015134111561248b5761248b338360008151811061247c57fe5b60200260200101513403614752565b5095945050505050565b6000610df184848461488a565b6060814281101561251457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6125727f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613c4692505050565b9150868260008151811061258257fe5b60200260200101511115611207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806153406028913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6060814281101561267757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660008181106126bb57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461275a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f42616b65727953776170526f757465723a20494e56414c49445f504154480000604482015290519081900360640190fd5b6127b87f000000000000000000000000000000000000000000000000000000000000000034888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613ed492505050565b915086826001845103815181106127cb57fe5b6020026020010151101561282a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061544f602c913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061287357fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156128a657600080fd5b505af11580156128ba573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61292c7f00000000000000000000000000000000000000000000000000000000000000008989600081811061155c57fe5b8460008151811061293957fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156129aa57600080fd5b505af11580156129be573d6000803e3d6000fd5b505050506040513d60208110156129d457600080fd5b50516129dc57fe5b61248b828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506141f5915050565b6000610df18484846149ae565b60008142811015612a9a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b612ac9887f00000000000000000000000000000000000000000000000000000000000000008989893089612c08565b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051919450612b7392508a91879173ffffffffffffffffffffffffffffffffffffffff8416916370a0823191602480820192602092909190829003018186803b158015612b4257600080fd5b505afa158015612b56573d6000803e3d6000fd5b505050506040513d6020811015612b6c57600080fd5b5051614a8e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015612be657600080fd5b505af1158015612bfa573d6000803e3d6000fd5b5050505061130b8483614752565b6000808242811015612c7b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6000612ca87f00000000000000000000000000000000000000000000000000000000000000008c8c613de9565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b158015612d2957600080fd5b505af1158015612d3d573d6000803e3d6000fd5b505050506040513d6020811015612d5357600080fd5b5050604080517f89afcb4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b158015612dc657600080fd5b505af1158015612dda573d6000803e3d6000fd5b505050506040513d6040811015612df057600080fd5b50805160209091015190925090506000612e0a8e8e614c6b565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1614612e47578183612e4a565b82825b90975095508a871015612ea8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806154286027913960400191505060405180910390fd5b89861015612f01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806154016027913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060610e267f00000000000000000000000000000000000000000000000000000000000000008484613ed4565b8042811015612fd357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001685857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061303857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146130d757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f42616b65727953776170526f757465723a20494e56414c49445f504154480000604482015290519081900360640190fd5b6130e78585600081811061193c57fe5b6131258585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152503092506143e6915050565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b1580156131b557600080fd5b505afa1580156131c9573d6000803e3d6000fd5b505050506040513d60208110156131df57600080fd5b505190508681101561323c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061544f602c913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156132af57600080fd5b505af11580156132c3573d6000803e3d6000fd5b505050506118b28482614752565b6060814281101561334357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106133a857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461344757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f42616b65727953776170526f757465723a20494e56414c49445f504154480000604482015290519081900360640190fd5b6134a57f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613c4692505050565b915086826000815181106134b557fe5b60200260200101511115611dd8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806153406028913960400191505060405180910390fd5b600080824281101561358757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6135b6897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a612c08565b90935091506135c6898685614a8e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561363957600080fd5b505af115801561364d573d6000803e3d6000fd5b5050505061365b8583614752565b50965096945050505050565b600080600083428110156136dc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6136ea8c8c8c8c8c8c614dbe565b9094509250600061371c7f00000000000000000000000000000000000000000000000000000000000000008e8e613de9565b905061372a8d338388614025565b6137368c338387614025565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156137b557600080fd5b505af11580156137c9573d6000803e3d6000fd5b505050506040513d60208110156137df57600080fd5b5051949d939c50939a509198505050505050505050565b6000806000834281101561386b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f42616b65727953776170526f757465723a204558504952454400000000000000604482015290519081900360640190fd5b6138998a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c614dbe565b909450925060006138eb7f00000000000000000000000000000000000000000000000000000000000000008c7f0000000000000000000000000000000000000000000000000000000000000000613de9565b90506138f98b338388614025565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561396157600080fd5b505af1158015613975573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015613a2157600080fd5b505af1158015613a35573d6000803e3d6000fd5b505050506040513d6020811015613a4b57600080fd5b5051613a5357fe5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015613ad257600080fd5b505af1158015613ae6573d6000803e3d6000fd5b505050506040513d6020811015613afc57600080fd5b5051925034841015613b1457613b1433853403614752565b505096509650969350505050565b6000808411613b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061538e602c913960400191505060405180910390fd5b600083118015613b8c5750600082115b613be1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154ef6029913960400191505060405180910390fd5b6000613bf5856103e563ffffffff6150bf16565b90506000613c09828563ffffffff6150bf16565b90506000613c2f83613c23886103e863ffffffff6150bf16565b9063ffffffff61513216565b9050808281613c3a57fe5b04979650505050505050565b6060600282511015613cb957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42616b657279537761704c6962726172793a20494e56414c49445f5041544800604482015290519081900360640190fd5b815167ffffffffffffffff81118015613cd157600080fd5b50604051908082528060200260200182016040528015613cfb578160200160208202803683370190505b5090508281600183510381518110613d0f57fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b8015613de157600080613d7c87866001860381518110613d5b57fe5b6020026020010151878681518110613d6f57fe5b60200260200101516151a6565b91509150613d9e848481518110613d8f57fe5b6020026020010151838361488a565b846001850381518110613dad57fe5b602090810291909101015250507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01613d3f565b509392505050565b6000806000613df88585614c6b565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527fe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6060600282511015613f4757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42616b657279537761704c6962726172793a20494e56414c49445f5041544800604482015290519081900360640190fd5b815167ffffffffffffffff81118015613f5f57600080fd5b50604051908082528060200260200182016040528015613f89578160200160208202803683370190505b5090508281600081518110613f9a57fe5b60200260200101818152505060005b6001835103811015613de157600080613fdf87868581518110613fc857fe5b6020026020010151878660010181518110613d6f57fe5b91509150614001848481518110613ff257fe5b60200260200101518383613b22565b84846001018151811061401057fe5b60209081029190910101525050600101613fa9565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061410357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016140c6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614165576040519150601f19603f3d011682016040523d82523d6000602084013e61416a565b606091505b5091509150818015614198575080511580614198575080806020019051602081101561419557600080fd5b50515b6141ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806154cb6024913960400191505060405180910390fd5b505050505050565b60005b60018351038110156143e05760008084838151811061421357fe5b602002602001015185846001018151811061422a57fe5b60200260200101519150915060006142428383614c6b565b509050600087856001018151811061425657fe5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461429e578260006142a2565b6000835b91509150600060028a510388106142b957886142fa565b6142fa7f0000000000000000000000000000000000000000000000000000000000000000878c8b600201815181106142ed57fe5b6020026020010151613de9565b90506143277f00000000000000000000000000000000000000000000000000000000000000008888613de9565b73ffffffffffffffffffffffffffffffffffffffff16636d9a640a8484846040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156143b557600080fd5b505af11580156143c9573d6000803e3d6000fd5b5050600190990198506141f8975050505050505050565b50505050565b60005b600183510381101561470b5760008084838151811061440457fe5b602002602001015185846001018151811061441b57fe5b60200260200101519150915060006144338383614c6b565b50905060006144637f00000000000000000000000000000000000000000000000000000000000000008585613de9565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156144b157600080fd5b505afa1580156144c5573d6000803e3d6000fd5b505050506040513d60608110156144db57600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905060008073ffffffffffffffffffffffffffffffffffffffff8a811690891614614525578284614528565b83835b915091506145ad828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561182357600080fd5b95506145ba868383613b22565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146145fe57826000614602565b6000835b91509150600060028c51038a10614619578a61464d565b61464d7f0000000000000000000000000000000000000000000000000000000000000000898e8d600201815181106142ed57fe5b90508573ffffffffffffffffffffffffffffffffffffffff16636d9a640a8484846040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156146de57600080fd5b505af11580156146f2573d6000803e3d6000fd5b50506001909b019a506143e99950505050505050505050565b505050565b6000610e2683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061528e565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b602083106147c957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161478c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461482b576040519150601f19603f3d011682016040523d82523d6000602084013e614830565b606091505b505090508061470b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061547b6023913960400191505060405180910390fd5b60008084116148e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061549e602d913960400191505060405180910390fd5b6000831180156148f45750600082115b614949576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154ef6029913960400191505060405180910390fd5b600061496d6103e8614961868863ffffffff6150bf16565b9063ffffffff6150bf16565b905060006149876103e5614961868963ffffffff61471016565b90506149a4600182848161499757fe5b049063ffffffff61513216565b9695505050505050565b6000808411614a08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806153ba6026913960400191505060405180910390fd5b600083118015614a185750600082115b614a6d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154ef6029913960400191505060405180910390fd5b82614a7e858463ffffffff6150bf16565b81614a8557fe5b04949350505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b60208310614b6457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101614b27565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614bc6576040519150601f19603f3d011682016040523d82523d6000602084013e614bcb565b606091505b5091509150818015614bf9575080511580614bf95750808060200190516020811015614bf657600080fd5b50515b614c6457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415614cf3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806153686026913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610614d2d578284614d30565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216614db757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42616b657279537761704c6962726172793a205a45524f5f4144445245535300604482015290519081900360640190fd5b9250929050565b604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015287811660248301529151600092839283927f00000000000000000000000000000000000000000000000000000000000000009092169163e6a4390591604480820192602092909190829003018186803b158015614e5e57600080fd5b505afa158015614e72573d6000803e3d6000fd5b505050506040513d6020811015614e8857600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161415614f6e57604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152898116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b158015614f4157600080fd5b505af1158015614f55573d6000803e3d6000fd5b505050506040513d6020811015614f6b57600080fd5b50505b600080614f9c7f00000000000000000000000000000000000000000000000000000000000000008b8b6151a6565b91509150816000148015614fae575080155b15614fbe578793508692506150b2565b6000614fcb8984846149ae565b9050878111615038578581101561502d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806154016027913960400191505060405180910390fd5b8894509250826150b0565b60006150458984866149ae565b90508981111561505157fe5b878110156150aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806154286027913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b6000826150ce57506000610e29565b828202828482816150db57fe5b0414610e26576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806153e06021913960400191505060405180910390fd5b600082820183811015610e2657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008060006151b58585614c6b565b5090506000806151c6888888613de9565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561520b57600080fd5b505afa15801561521f573d6000803e3d6000fd5b505050506040513d606081101561523557600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff8781169084161461527c57808261527f565b81815b90999098509650505050505050565b60008184841115615337576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156152fc5781810151838201526020016152e4565b50505050905090810190601f1680156153295780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe42616b65727953776170526f757465723a204558434553534956455f494e5055545f414d4f554e5442616b657279537761704c6962726172793a204944454e544943414c5f41444452455353455342616b657279537761704c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e5442616b657279537761704c6962726172793a20494e53554646494349454e545f414d4f554e54536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7742616b65727953776170526f757465723a20494e53554646494349454e545f425f414d4f554e5442616b65727953776170526f757465723a20494e53554646494349454e545f415f414d4f554e5442616b65727953776170526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a20424e425f5452414e534645525f4641494c454442616b657279537761704c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c454442616b657279537761704c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220a839d3caf2957f62f45a816aad35bfb945ce7034e182f04c6683242a43d48b1d64736f6c63430006060033"
    };
});
define("@scom/bakery-swap-contract/contracts/BakerySwapRouter.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/bakery-swap-contract/contracts/BakerySwapRouter.json.ts"], function (require, exports, eth_contract_3, BakerySwapRouter_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BakerySwapRouter = void 0;
    class BakerySwapRouter extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, BakerySwapRouter_json_1.default.abi, BakerySwapRouter_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.factory, params.WBNB], options);
        }
        assign() {
            let WBNB_call = async (options) => {
                let result = await this.call('WBNB', [], options);
                return result;
            };
            this.WBNB = WBNB_call;
            let factory_call = async (options) => {
                let result = await this.call('factory', [], options);
                return result;
            };
            this.factory = factory_call;
            let getAmountInParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveIn), this.wallet.utils.toString(params.reserveOut)];
            let getAmountIn_call = async (params, options) => {
                let result = await this.call('getAmountIn', getAmountInParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.getAmountIn = getAmountIn_call;
            let getAmountOutParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.reserveIn), this.wallet.utils.toString(params.reserveOut)];
            let getAmountOut_call = async (params, options) => {
                let result = await this.call('getAmountOut', getAmountOutParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.getAmountOut = getAmountOut_call;
            let getAmountsInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path];
            let getAmountsIn_call = async (params, options) => {
                let result = await this.call('getAmountsIn', getAmountsInParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.getAmountsIn = getAmountsIn_call;
            let getAmountsOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.path];
            let getAmountsOut_call = async (params, options) => {
                let result = await this.call('getAmountsOut', getAmountsOutParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.getAmountsOut = getAmountsOut_call;
            let quoteParams = (params) => [this.wallet.utils.toString(params.amountA), this.wallet.utils.toString(params.reserveA), this.wallet.utils.toString(params.reserveB)];
            let quote_call = async (params, options) => {
                let result = await this.call('quote', quoteParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.quote = quote_call;
            let addLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.amountADesired), this.wallet.utils.toString(params.amountBDesired), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline)];
            let addLiquidity_send = async (params, options) => {
                let result = await this.send('addLiquidity', addLiquidityParams(params), options);
                return result;
            };
            let addLiquidity_call = async (params, options) => {
                let result = await this.call('addLiquidity', addLiquidityParams(params), options);
                return {
                    amountA: new eth_contract_3.BigNumber(result.amountA),
                    amountB: new eth_contract_3.BigNumber(result.amountB),
                    liquidity: new eth_contract_3.BigNumber(result.liquidity)
                };
            };
            this.addLiquidity = Object.assign(addLiquidity_send, {
                call: addLiquidity_call
            });
            let addLiquidityBNBParams = (params) => [params.token, this.wallet.utils.toString(params.amountTokenDesired), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountBNBMin), params.to, this.wallet.utils.toString(params.deadline)];
            let addLiquidityBNB_send = async (params, options) => {
                let result = await this.send('addLiquidityBNB', addLiquidityBNBParams(params), options);
                return result;
            };
            let addLiquidityBNB_call = async (params, options) => {
                let result = await this.call('addLiquidityBNB', addLiquidityBNBParams(params), options);
                return {
                    amountToken: new eth_contract_3.BigNumber(result.amountToken),
                    amountBNB: new eth_contract_3.BigNumber(result.amountBNB),
                    liquidity: new eth_contract_3.BigNumber(result.liquidity)
                };
            };
            this.addLiquidityBNB = Object.assign(addLiquidityBNB_send, {
                call: addLiquidityBNB_call
            });
            let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline)];
            let removeLiquidity_send = async (params, options) => {
                let result = await this.send('removeLiquidity', removeLiquidityParams(params), options);
                return result;
            };
            let removeLiquidity_call = async (params, options) => {
                let result = await this.call('removeLiquidity', removeLiquidityParams(params), options);
                return {
                    amountA: new eth_contract_3.BigNumber(result.amountA),
                    amountB: new eth_contract_3.BigNumber(result.amountB)
                };
            };
            this.removeLiquidity = Object.assign(removeLiquidity_send, {
                call: removeLiquidity_call
            });
            let removeLiquidityBNBParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountBNBMin), params.to, this.wallet.utils.toString(params.deadline)];
            let removeLiquidityBNB_send = async (params, options) => {
                let result = await this.send('removeLiquidityBNB', removeLiquidityBNBParams(params), options);
                return result;
            };
            let removeLiquidityBNB_call = async (params, options) => {
                let result = await this.call('removeLiquidityBNB', removeLiquidityBNBParams(params), options);
                return {
                    amountToken: new eth_contract_3.BigNumber(result.amountToken),
                    amountBNB: new eth_contract_3.BigNumber(result.amountBNB)
                };
            };
            this.removeLiquidityBNB = Object.assign(removeLiquidityBNB_send, {
                call: removeLiquidityBNB_call
            });
            let removeLiquidityBNBSupportingFeeOnTransferTokensParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountBNBMin), params.to, this.wallet.utils.toString(params.deadline)];
            let removeLiquidityBNBSupportingFeeOnTransferTokens_send = async (params, options) => {
                let result = await this.send('removeLiquidityBNBSupportingFeeOnTransferTokens', removeLiquidityBNBSupportingFeeOnTransferTokensParams(params), options);
                return result;
            };
            let removeLiquidityBNBSupportingFeeOnTransferTokens_call = async (params, options) => {
                let result = await this.call('removeLiquidityBNBSupportingFeeOnTransferTokens', removeLiquidityBNBSupportingFeeOnTransferTokensParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.removeLiquidityBNBSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBSupportingFeeOnTransferTokens_send, {
                call: removeLiquidityBNBSupportingFeeOnTransferTokens_call
            });
            let removeLiquidityBNBWithPermitParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountBNBMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
            let removeLiquidityBNBWithPermit_send = async (params, options) => {
                let result = await this.send('removeLiquidityBNBWithPermit', removeLiquidityBNBWithPermitParams(params), options);
                return result;
            };
            let removeLiquidityBNBWithPermit_call = async (params, options) => {
                let result = await this.call('removeLiquidityBNBWithPermit', removeLiquidityBNBWithPermitParams(params), options);
                return {
                    amountToken: new eth_contract_3.BigNumber(result.amountToken),
                    amountBNB: new eth_contract_3.BigNumber(result.amountBNB)
                };
            };
            this.removeLiquidityBNBWithPermit = Object.assign(removeLiquidityBNBWithPermit_send, {
                call: removeLiquidityBNBWithPermit_call
            });
            let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountBNBMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
            let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send = async (params, options) => {
                let result = await this.send('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens', removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params), options);
                return result;
            };
            let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call = async (params, options) => {
                let result = await this.call('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens', removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send, {
                call: removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call
            });
            let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
            let removeLiquidityWithPermit_send = async (params, options) => {
                let result = await this.send('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
                return result;
            };
            let removeLiquidityWithPermit_call = async (params, options) => {
                let result = await this.call('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
                return {
                    amountA: new eth_contract_3.BigNumber(result.amountA),
                    amountB: new eth_contract_3.BigNumber(result.amountB)
                };
            };
            this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
                call: removeLiquidityWithPermit_call
            });
            let swapBNBForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapBNBForExactTokens_send = async (params, options) => {
                let result = await this.send('swapBNBForExactTokens', swapBNBForExactTokensParams(params), options);
                return result;
            };
            let swapBNBForExactTokens_call = async (params, options) => {
                let result = await this.call('swapBNBForExactTokens', swapBNBForExactTokensParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.swapBNBForExactTokens = Object.assign(swapBNBForExactTokens_send, {
                call: swapBNBForExactTokens_call
            });
            let swapExactBNBForTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapExactBNBForTokens_send = async (params, options) => {
                let result = await this.send('swapExactBNBForTokens', swapExactBNBForTokensParams(params), options);
                return result;
            };
            let swapExactBNBForTokens_call = async (params, options) => {
                let result = await this.call('swapExactBNBForTokens', swapExactBNBForTokensParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.swapExactBNBForTokens = Object.assign(swapExactBNBForTokens_send, {
                call: swapExactBNBForTokens_call
            });
            let swapExactBNBForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapExactBNBForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
                let result = await this.send('swapExactBNBForTokensSupportingFeeOnTransferTokens', swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), options);
                return result;
            };
            let swapExactBNBForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
                let result = await this.call('swapExactBNBForTokensSupportingFeeOnTransferTokens', swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), options);
                return;
            };
            this.swapExactBNBForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactBNBForTokensSupportingFeeOnTransferTokens_send, {
                call: swapExactBNBForTokensSupportingFeeOnTransferTokens_call
            });
            let swapExactTokensForBNBParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapExactTokensForBNB_send = async (params, options) => {
                let result = await this.send('swapExactTokensForBNB', swapExactTokensForBNBParams(params), options);
                return result;
            };
            let swapExactTokensForBNB_call = async (params, options) => {
                let result = await this.call('swapExactTokensForBNB', swapExactTokensForBNBParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.swapExactTokensForBNB = Object.assign(swapExactTokensForBNB_send, {
                call: swapExactTokensForBNB_call
            });
            let swapExactTokensForBNBSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapExactTokensForBNBSupportingFeeOnTransferTokens_send = async (params, options) => {
                let result = await this.send('swapExactTokensForBNBSupportingFeeOnTransferTokens', swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params), options);
                return result;
            };
            let swapExactTokensForBNBSupportingFeeOnTransferTokens_call = async (params, options) => {
                let result = await this.call('swapExactTokensForBNBSupportingFeeOnTransferTokens', swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params), options);
                return;
            };
            this.swapExactTokensForBNBSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForBNBSupportingFeeOnTransferTokens_send, {
                call: swapExactTokensForBNBSupportingFeeOnTransferTokens_call
            });
            let swapExactTokensForTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapExactTokensForTokens_send = async (params, options) => {
                let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
                return result;
            };
            let swapExactTokensForTokens_call = async (params, options) => {
                let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
                call: swapExactTokensForTokens_call
            });
            let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
                let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
                return result;
            };
            let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
                let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
                return;
            };
            this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
                call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
            });
            let swapTokensForExactBNBParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapTokensForExactBNB_send = async (params, options) => {
                let result = await this.send('swapTokensForExactBNB', swapTokensForExactBNBParams(params), options);
                return result;
            };
            let swapTokensForExactBNB_call = async (params, options) => {
                let result = await this.call('swapTokensForExactBNB', swapTokensForExactBNBParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.swapTokensForExactBNB = Object.assign(swapTokensForExactBNB_send, {
                call: swapTokensForExactBNB_call
            });
            let swapTokensForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline)];
            let swapTokensForExactTokens_send = async (params, options) => {
                let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
                return result;
            };
            let swapTokensForExactTokens_call = async (params, options) => {
                let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
                return result.map(e => new eth_contract_3.BigNumber(e));
            };
            this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
                call: swapTokensForExactTokens_call
            });
        }
    }
    exports.BakerySwapRouter = BakerySwapRouter;
    BakerySwapRouter._abi = BakerySwapRouter_json_1.default.abi;
});
define("@scom/bakery-swap-contract/contracts/BakeryToken.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/bakery-swap-contract/contracts/BakeryToken.json.ts'/> 
    exports.default = {
        "abi": [
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [], "name": "DELEGATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "DOMAIN_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint256", "name": "votes", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "delegator", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCurrentVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPriorVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mintTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "600b60809081526a2130b5b2b93caa37b5b2b760a91b60a052610100604052600460c09081526342414b4560e01b60e0526000620000456001600160e01b03620000d016565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000a4906004906020850190620000d5565b508051620000ba906005906020840190620000d5565b50506006805460ff191660121790555062000177565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200011857805160ff191683800117855562000148565b8280016001018555821562000148579182015b82811115620001485782518255916020019190600101906200012b565b50620001569291506200015a565b5090565b620000d291905b8082111562000156576000815560010162000161565b6123b480620001876000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063782d6fe1116100f9578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e1461062f578063e7a324dc1461066a578063f1127ed814610672578063f2fde38b146106d1576101b9565b8063a9059cbb1461056f578063b4b5ea57146105a8578063c3cda520146105db576101b9565b80638da5cb5b116100d35780638da5cb5b1461050957806395d89b4114610511578063a0712d6814610519578063a457c2d714610536576101b9565b8063782d6fe1146104955780637ecebe00146104ce578063893d20e814610501576101b9565b806339509351116101665780635c19a95c116101405780635c19a95c146103db5780636fcfff451461040e57806370a082311461045a578063715018a61461048d576101b9565b8063395093511461030b578063449a52f814610344578063587cde1e1461037f576101b9565b806320606b701161019757806320606b70146102a257806323b872dd146102aa578063313ce567146102ed576101b9565b806306fdde03146101be578063095ea7b31461023b57806318160ddd14610288575b600080fd5b6101c6610704565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102005781810151838201526020016101e8565b50505050905090810190601f16801561022d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102746004803603604081101561025157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107b8565b604080519115158252519081900360200190f35b6102906107d6565b60408051918252519081900360200190f35b6102906107dc565b610274600480360360608110156102c057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107f7565b6102f561089e565b6040805160ff9092168252519081900360200190f35b6102746004803603604081101561032157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108a7565b61037d6004803603604081101561035a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610908565b005b6103b26004803603602081101561039557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109d9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61037d600480360360208110156103f157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a04565b6104416004803603602081101561042457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a11565b6040805163ffffffff9092168252519081900360200190f35b6102906004803603602081101561047057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a29565b61037d610a51565b610290600480360360408110156104ab57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610b51565b610290600480360360208110156104e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e1b565b6103b2610e2d565b6103b2610e3c565b6101c6610e58565b6102746004803603602081101561052f57600080fd5b5035610ed7565b6102746004803603604081101561054c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f83565b6102746004803603604081101561058557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ffe565b610290600480360360208110156105be57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611012565b61037d600480360360c08110156105f157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101359060408101359060ff6060820135169060808101359060a001356110ae565b6102906004803603604081101561064557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661140a565b610290611442565b6106b16004803603604081101561068857600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff1661145d565b6040805163ffffffff909316835260208301919091528051918290030190f35b61037d600480360360208110156106e757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661148a565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107ae5780601f10610783576101008083540402835291602001916107ae565b820191906000526020600020905b81548152906001019060200180831161079157829003601f168201915b5050505050905090565b60006107cc6107c5611524565b8484611528565b5060015b92915050565b60035490565b6040518060436121cf82396043019050604051809103902081565b600061080484848461166f565b61089484610810611524565b61088f856040518060600160405280602881526020016121816028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526002602052604081209061085b611524565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61184216565b611528565b5060019392505050565b60065460ff1690565b60006107cc6108b4611524565b8461088f85600260006108c5611524565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6118f316565b610910611524565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461099957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6109a38282611967565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600760205260408120546109d5921683611a9a565b5050565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600760205260409020541690565b610a0e3382611c8c565b50565b60096020526000908152604090205463ffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b610a59611524565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610ae257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000438210610bab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806122386027913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604090205463ffffffff1680610be65760009150506107d0565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff860181168552925290912054168310610cab5773ffffffffffffffffffffffffffffffffffffffff841660009081526008602090815260408083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9490940163ffffffff168352929052206001015490506107d0565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832083805290915290205463ffffffff16831015610cf35760009150506107d0565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b8163ffffffff168163ffffffff161115610dd757600282820363ffffffff16048103610d436120fa565b5073ffffffffffffffffffffffffffffffffffffffff8716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610db2576020015194506107d09350505050565b805163ffffffff16871115610dc957819350610dd0565b6001820392505b5050610d19565b5073ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610e37610e3c565b905090565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60058054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107ae5780601f10610783576101008083540402835291602001916107ae565b6000610ee1611524565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610f6a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610f7b610f75611524565b83611967565b506001919050565b60006107cc610f90611524565b8461088f856040518060600160405280602581526020016122a86025913960026000610fba611524565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61184216565b60006107cc61100b611524565b848461166f565b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604081205463ffffffff168061104a5760006110a7565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86011684529091529020600101545b9392505050565b600060405180806121cf60439139604301905060405180910390206110d1610704565b805190602001206110e0611d53565b30604051602001808581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405160208183030381529060405280519060200120905060006040518080612323603a91396040805191829003603a01822060208084019190915273ffffffffffffffffffffffffffffffffffffffff8c1683830152606083018b905260808084018b90528251808503909101815260a0840183528051908201207f190100000000000000000000000000000000000000000000000000000000000060c085015260c2840187905260e2808501829052835180860390910181526101028501808552815191840191909120600091829052610122860180865281905260ff8c1661014287015261016286018b905261018286018a9052935191965092945091926001926101a280830193927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08301929081900390910190855afa15801561127e573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611315576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806122126026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a60205260409020805460018101909155891461139a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123016022913960400191505060405180910390fd5b874211156113f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806121a96026913960400191505060405180910390fd5b6113fd818b611c8c565b505050505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b60405180603a6123238239603a019050604051809103902081565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b611492611524565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461151b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610a0e81611d57565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316611594576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806121376024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611600576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061235d6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166116db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806121126025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611747576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806122856023913960400191505060405180910390fd5b6117978160405180606001604052806026815260200161225f6026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902054919063ffffffff61184216565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602052604080822093909355908416815220546117d9908263ffffffff6118f316565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156118eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118b0578181015183820152602001611898565b50505050905090810190601f1680156118dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156110a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82166119e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6003546119fc908263ffffffff6118f316565b60035573ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054611a35908263ffffffff6118f316565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611ad65750600081115b15611c875773ffffffffffffffffffffffffffffffffffffffff831615611bb35773ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604081205463ffffffff169081611b30576000611b8d565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87011684529091529020600101545b90506000611ba1828563ffffffff611e5016565b9050611baf86848484611e92565b5050505b73ffffffffffffffffffffffffffffffffffffffff821615611c875773ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604081205463ffffffff169081611c08576000611c65565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87011684529091529020600101545b90506000611c79828563ffffffff6118f316565b905061140285848484611e92565b505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526007602052604081205490911690611cc084610a29565b73ffffffffffffffffffffffffffffffffffffffff85811660008181526007602052604080822080547fffffffffffffffffffffffff000000000000000000000000000000000000000016898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611d4d828483611a9a565b50505050565b4690565b73ffffffffffffffffffffffffffffffffffffffff8116611dc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061215b6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006110a783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611842565b6000611eb6436040518060600160405280603481526020016122cd60349139612082565b905060008463ffffffff16118015611f2a575073ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901811685529252909120548282169116145b15611f925773ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901168452909152902060010182905561202b565b60408051808201825263ffffffff8084168252602080830186815273ffffffffffffffffffffffffffffffffffffffff8a166000818152600884528681208b861682528452868120955186549086167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000918216178755925160019687015590815260099092529390208054928801909116919092161790555b6040805184815260208101849052815173ffffffffffffffffffffffffffffffffffffffff8816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b60008164010000000084106120f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156118b0578181015183820152602001611898565b509192915050565b60408051808201909152600080825260208201529056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737342455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542414b453a3a64656c656761746542795369673a207369676e61747572652065787069726564454950373132446f6d61696e28737472696e67206e616d652c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742942414b453a3a64656c656761746542795369673a20696e76616c6964207369676e617475726542414b453a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656442455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42414b453a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747342414b453a3a64656c656761746542795369673a20696e76616c6964206e6f6e636544656c65676174696f6e28616464726573732064656c6567617465652c75696e74323536206e6f6e63652c75696e74323536206578706972792942455032303a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220c0c716e6ece7ab9546a64dfa336b5ae3ca2a239b8ddc7984dcd7d244a75b2a5a64736f6c63430006060033"
    };
});
define("@scom/bakery-swap-contract/contracts/BakeryToken.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/bakery-swap-contract/contracts/BakeryToken.json.ts"], function (require, exports, eth_contract_4, BakeryToken_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BakeryToken = void 0;
    class BakeryToken extends eth_contract_4.Contract {
        constructor(wallet, address) {
            super(wallet, address, BakeryToken_json_1.default.abi, BakeryToken_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_4.BigNumber(result.value),
                _event: event
            };
        }
        parseDelegateChangedEvent(receipt) {
            return this.parseEvents(receipt, "DelegateChanged").map(e => this.decodeDelegateChangedEvent(e));
        }
        decodeDelegateChangedEvent(event) {
            let result = event.data;
            return {
                delegator: result.delegator,
                fromDelegate: result.fromDelegate,
                toDelegate: result.toDelegate,
                _event: event
            };
        }
        parseDelegateVotesChangedEvent(receipt) {
            return this.parseEvents(receipt, "DelegateVotesChanged").map(e => this.decodeDelegateVotesChangedEvent(e));
        }
        decodeDelegateVotesChangedEvent(event) {
            let result = event.data;
            return {
                delegate: result.delegate,
                previousBalance: new eth_contract_4.BigNumber(result.previousBalance),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseOwnershipTransferredEvent(receipt) {
            return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
        }
        decodeOwnershipTransferredEvent(event) {
            let result = event.data;
            return {
                previousOwner: result.previousOwner,
                newOwner: result.newOwner,
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_4.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let DELEGATION_TYPEHASH_call = async (options) => {
                let result = await this.call('DELEGATION_TYPEHASH', [], options);
                return result;
            };
            this.DELEGATION_TYPEHASH = DELEGATION_TYPEHASH_call;
            let DOMAIN_TYPEHASH_call = async (options) => {
                let result = await this.call('DOMAIN_TYPEHASH', [], options);
                return result;
            };
            this.DOMAIN_TYPEHASH = DOMAIN_TYPEHASH_call;
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let checkpointsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let checkpoints_call = async (params, options) => {
                let result = await this.call('checkpoints', checkpointsParams(params), options);
                return {
                    fromBlock: new eth_contract_4.BigNumber(result.fromBlock),
                    votes: new eth_contract_4.BigNumber(result.votes)
                };
            };
            this.checkpoints = checkpoints_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.decimals = decimals_call;
            let delegates_call = async (delegator, options) => {
                let result = await this.call('delegates', [delegator], options);
                return result;
            };
            this.delegates = delegates_call;
            let getCurrentVotes_call = async (account, options) => {
                let result = await this.call('getCurrentVotes', [account], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.getCurrentVotes = getCurrentVotes_call;
            let getOwner_call = async (options) => {
                let result = await this.call('getOwner', [], options);
                return result;
            };
            this.getOwner = getOwner_call;
            let getPriorVotesParams = (params) => [params.account, this.wallet.utils.toString(params.blockNumber)];
            let getPriorVotes_call = async (params, options) => {
                let result = await this.call('getPriorVotes', getPriorVotesParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.getPriorVotes = getPriorVotes_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let nonces_call = async (param1, options) => {
                let result = await this.call('nonces', [param1], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.nonces = nonces_call;
            let numCheckpoints_call = async (param1, options) => {
                let result = await this.call('numCheckpoints', [param1], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.numCheckpoints = numCheckpoints_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let delegate_send = async (delegatee, options) => {
                let result = await this.send('delegate', [delegatee], options);
                return result;
            };
            let delegate_call = async (delegatee, options) => {
                let result = await this.call('delegate', [delegatee], options);
                return;
            };
            this.delegate = Object.assign(delegate_send, {
                call: delegate_call
            });
            let delegateBySigParams = (params) => [params.delegatee, this.wallet.utils.toString(params.nonce), this.wallet.utils.toString(params.expiry), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
            let delegateBySig_send = async (params, options) => {
                let result = await this.send('delegateBySig', delegateBySigParams(params), options);
                return result;
            };
            let delegateBySig_call = async (params, options) => {
                let result = await this.call('delegateBySig', delegateBySigParams(params), options);
                return;
            };
            this.delegateBySig = Object.assign(delegateBySig_send, {
                call: delegateBySig_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mint_send = async (amount, options) => {
                let result = await this.send('mint', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let mint_call = async (amount, options) => {
                let result = await this.call('mint', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let mintToParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let mintTo_send = async (params, options) => {
                let result = await this.send('mintTo', mintToParams(params), options);
                return result;
            };
            let mintTo_call = async (params, options) => {
                let result = await this.call('mintTo', mintToParams(params), options);
                return;
            };
            this.mintTo = Object.assign(mintTo_send, {
                call: mintTo_call
            });
            let renounceOwnership_send = async (options) => {
                let result = await this.send('renounceOwnership', [], options);
                return result;
            };
            let renounceOwnership_call = async (options) => {
                let result = await this.call('renounceOwnership', [], options);
                return;
            };
            this.renounceOwnership = Object.assign(renounceOwnership_send, {
                call: renounceOwnership_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
        }
    }
    exports.BakeryToken = BakeryToken;
    BakeryToken._abi = BakeryToken_json_1.default.abi;
});
define("@scom/bakery-swap-contract/contracts/index.ts", ["require", "exports", "@scom/bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.ts", "@scom/bakery-swap-contract/contracts/BakeryMaster.ts", "@scom/bakery-swap-contract/contracts/BakerySwapRouter.ts", "@scom/bakery-swap-contract/contracts/BakeryToken.ts"], function (require, exports, BEP20_1, BakeryMaster_1, BakerySwapRouter_1, BakeryToken_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BakeryToken = exports.BakerySwapRouter = exports.BakeryMaster = exports.BEP20 = void 0;
    Object.defineProperty(exports, "BEP20", { enumerable: true, get: function () { return BEP20_1.BEP20; } });
    Object.defineProperty(exports, "BakeryMaster", { enumerable: true, get: function () { return BakeryMaster_1.BakeryMaster; } });
    Object.defineProperty(exports, "BakerySwapRouter", { enumerable: true, get: function () { return BakerySwapRouter_1.BakerySwapRouter; } });
    Object.defineProperty(exports, "BakeryToken", { enumerable: true, get: function () { return BakeryToken_1.BakeryToken; } });
});
define("@scom/bakery-swap-contract", ["require", "exports", "@scom/bakery-swap-contract/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Contracts = void 0;
    ///<amd-module name='@scom/bakery-swap-contract'/> 
    exports.Contracts = Contracts;
});
