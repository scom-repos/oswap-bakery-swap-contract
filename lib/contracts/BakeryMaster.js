"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakeryMaster = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const BakeryMaster_json_1 = __importDefault(require("./BakeryMaster.json"));
class BakeryMaster extends eth_contract_1.Contract {
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
            amount: new eth_contract_1.BigNumber(result.amount),
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
            amount: new eth_contract_1.BigNumber(result.amount),
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
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    assign() {
        let accBakePerShareMultiple_call = async (options) => {
            let result = await this.call('accBakePerShareMultiple', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.accBakePerShareMultiple = accBakePerShareMultiple_call;
        let bake_call = async (options) => {
            let result = await this.call('bake', [], options);
            return result;
        };
        this.bake = bake_call;
        let bakeBonusEndBlock_call = async (options) => {
            let result = await this.call('bakeBonusEndBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bakeBonusEndBlock = bakeBonusEndBlock_call;
        let bakeStartBlock_call = async (options) => {
            let result = await this.call('bakeStartBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bakeStartBlock = bakeStartBlock_call;
        let bonusBeforeBulkBlockSize_call = async (options) => {
            let result = await this.call('bonusBeforeBulkBlockSize', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bonusBeforeBulkBlockSize = bonusBeforeBulkBlockSize_call;
        let bonusBeforeCommonDifference_call = async (options) => {
            let result = await this.call('bonusBeforeCommonDifference', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bonusBeforeCommonDifference = bonusBeforeCommonDifference_call;
        let bonusEndBlock_call = async (options) => {
            let result = await this.call('bonusEndBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bonusEndBlock = bonusEndBlock_call;
        let bonusEndBulkBlockSize_call = async (options) => {
            let result = await this.call('bonusEndBulkBlockSize', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bonusEndBulkBlockSize = bonusEndBulkBlockSize_call;
        let bonusEndCommonDifference_call = async (options) => {
            let result = await this.call('bonusEndCommonDifference', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
        };
        this.getTotalRewardInfo = getTotalRewardInfo_call;
        let getTotalRewardInfoInSameCommonDifferenceParams = (params) => [this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.to), this.wallet.utils.toString(params.bakeInitBlock), this.wallet.utils.toString(params.bulkBlockSize), this.wallet.utils.toString(params.commonDifference)];
        let getTotalRewardInfoInSameCommonDifference_call = async (params, options) => {
            let result = await this.call('getTotalRewardInfoInSameCommonDifference', getTotalRewardInfoInSameCommonDifferenceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getTotalRewardInfoInSameCommonDifference = getTotalRewardInfoInSameCommonDifference_call;
        let maxRewardBlockNumber_call = async (options) => {
            let result = await this.call('maxRewardBlockNumber', [], options);
            return new eth_contract_1.BigNumber(result);
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
            return new eth_contract_1.BigNumber(result);
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
                allocPoint: new eth_contract_1.BigNumber(result.allocPoint),
                lastRewardBlock: new eth_contract_1.BigNumber(result.lastRewardBlock),
                accBakePerShare: new eth_contract_1.BigNumber(result.accBakePerShare),
                exists: result.exists
            };
        };
        this.poolInfoMap = poolInfoMap_call;
        let poolLength_call = async (options) => {
            let result = await this.call('poolLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.poolLength = poolLength_call;
        let poolUserInfoMapParams = (params) => [params.param1, params.param2];
        let poolUserInfoMap_call = async (params, options) => {
            let result = await this.call('poolUserInfoMap', poolUserInfoMapParams(params), options);
            return {
                amount: new eth_contract_1.BigNumber(result.amount),
                rewardDebt: new eth_contract_1.BigNumber(result.rewardDebt)
            };
        };
        this.poolUserInfoMap = poolUserInfoMap_call;
        let startBlock_call = async (options) => {
            let result = await this.call('startBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.startBlock = startBlock_call;
        let totalAllocPoint_call = async (options) => {
            let result = await this.call('totalAllocPoint', [], options);
            return new eth_contract_1.BigNumber(result);
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
        let add_txData = async (params, options) => {
            let result = await this.txData('add', addParams(params), options);
            return result;
        };
        this.add = Object.assign(add_send, {
            call: add_call,
            txData: add_txData
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
        let deposit_txData = async (params, options) => {
            let result = await this.txData('deposit', depositParams(params), options);
            return result;
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call,
            txData: deposit_txData
        });
        let dev_send = async (devAddr, options) => {
            let result = await this.send('dev', [devAddr], options);
            return result;
        };
        let dev_call = async (devAddr, options) => {
            let result = await this.call('dev', [devAddr], options);
            return;
        };
        let dev_txData = async (devAddr, options) => {
            let result = await this.txData('dev', [devAddr], options);
            return result;
        };
        this.dev = Object.assign(dev_send, {
            call: dev_call,
            txData: dev_txData
        });
        let emergencyWithdraw_send = async (pair, options) => {
            let result = await this.send('emergencyWithdraw', [pair], options);
            return result;
        };
        let emergencyWithdraw_call = async (pair, options) => {
            let result = await this.call('emergencyWithdraw', [pair], options);
            return;
        };
        let emergencyWithdraw_txData = async (pair, options) => {
            let result = await this.txData('emergencyWithdraw', [pair], options);
            return result;
        };
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call: emergencyWithdraw_call,
            txData: emergencyWithdraw_txData
        });
        let massUpdatePools_send = async (options) => {
            let result = await this.send('massUpdatePools', [], options);
            return result;
        };
        let massUpdatePools_call = async (options) => {
            let result = await this.call('massUpdatePools', [], options);
            return;
        };
        let massUpdatePools_txData = async (options) => {
            let result = await this.txData('massUpdatePools', [], options);
            return result;
        };
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call: massUpdatePools_call,
            txData: massUpdatePools_txData
        });
        let renounceOwnership_send = async (options) => {
            let result = await this.send('renounceOwnership', [], options);
            return result;
        };
        let renounceOwnership_call = async (options) => {
            let result = await this.call('renounceOwnership', [], options);
            return;
        };
        let renounceOwnership_txData = async (options) => {
            let result = await this.txData('renounceOwnership', [], options);
            return result;
        };
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call: renounceOwnership_call,
            txData: renounceOwnership_txData
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
        let set_txData = async (params, options) => {
            let result = await this.txData('set', setParams(params), options);
            return result;
        };
        this.set = Object.assign(set_send, {
            call: set_call,
            txData: set_txData
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        let transferOwnership_txData = async (newOwner, options) => {
            let result = await this.txData('transferOwnership', [newOwner], options);
            return result;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call,
            txData: transferOwnership_txData
        });
        let updatePool_send = async (pair, options) => {
            let result = await this.send('updatePool', [pair], options);
            return result;
        };
        let updatePool_call = async (pair, options) => {
            let result = await this.call('updatePool', [pair], options);
            return;
        };
        let updatePool_txData = async (pair, options) => {
            let result = await this.txData('updatePool', [pair], options);
            return result;
        };
        this.updatePool = Object.assign(updatePool_send, {
            call: updatePool_call,
            txData: updatePool_txData
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
        let withdraw_txData = async (params, options) => {
            let result = await this.txData('withdraw', withdrawParams(params), options);
            return result;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call,
            txData: withdraw_txData
        });
    }
}
exports.BakeryMaster = BakeryMaster;
BakeryMaster._abi = BakeryMaster_json_1.default.abi;
