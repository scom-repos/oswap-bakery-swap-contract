import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./BakeryMaster.json";
export interface IDeployParams {bake:string;devAddr:string;bakeStartBlock:number|BigNumber;startBlock:number|BigNumber;bonusEndBlock:number|BigNumber;bonusBeforeBulkBlockSize:number|BigNumber;bonusBeforeCommonDifference:number|BigNumber;bonusEndCommonDifference:number|BigNumber}
export interface IAddParams {allocPoint:number|BigNumber;pair:string;withUpdate:boolean}
export interface IDepositParams {pair:string;amount:number|BigNumber}
export interface IGetTotalRewardInfoParams {from:number|BigNumber;to:number|BigNumber}
export interface IGetTotalRewardInfoInSameCommonDifferenceParams {from:number|BigNumber;to:number|BigNumber;bakeInitBlock:number|BigNumber;bulkBlockSize:number|BigNumber;commonDifference:number|BigNumber}
export interface IPendingBakeParams {pair:string;user:string}
export interface IPoolUserInfoMapParams {param1:string;param2:string}
export interface ISetParams {pair:string;allocPoint:number|BigNumber;withUpdate:boolean}
export interface IWithdrawParams {pair:string;amount:number|BigNumber}
export class BakeryMaster extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.bake,params.devAddr,this.wallet.utils.toString(params.bakeStartBlock),this.wallet.utils.toString(params.startBlock),this.wallet.utils.toString(params.bonusEndBlock),this.wallet.utils.toString(params.bonusBeforeBulkBlockSize),this.wallet.utils.toString(params.bonusBeforeCommonDifference),this.wallet.utils.toString(params.bonusEndCommonDifference)], options);
    }
    parseDepositEvent(receipt: TransactionReceipt): BakeryMaster.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): BakeryMaster.DepositEvent{
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.EmergencyWithdrawEvent[]{
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e=>this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event: Event): BakeryMaster.EmergencyWithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryMaster.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): BakeryMaster.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.WithdrawEvent[]{
        return this.parseEvents(receipt, "Withdraw").map(e=>this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event: Event): BakeryMaster.WithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    accBakePerShareMultiple: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    add: {
        (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IAddParams, options?: TransactionOptions) => Promise<string>;
    }
    bake: {
        (options?: TransactionOptions): Promise<string>;
    }
    bakeBonusEndBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    bakeStartBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    bonusBeforeBulkBlockSize: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    bonusBeforeCommonDifference: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    bonusEndBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    bonusEndBulkBlockSize: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    bonusEndCommonDifference: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IDepositParams, options?: TransactionOptions) => Promise<string>;
    }
    dev: {
        (devAddr:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (devAddr:string, options?: TransactionOptions) => Promise<void>;
        txData: (devAddr:string, options?: TransactionOptions) => Promise<string>;
    }
    devAddr: {
        (options?: TransactionOptions): Promise<string>;
    }
    emergencyWithdraw: {
        (pair:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pair:string, options?: TransactionOptions) => Promise<void>;
        txData: (pair:string, options?: TransactionOptions) => Promise<string>;
    }
    existsPool: {
        (pair:string, options?: TransactionOptions): Promise<boolean>;
    }
    getTotalRewardInfo: {
        (params: IGetTotalRewardInfoParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getTotalRewardInfoInSameCommonDifference: {
        (params: IGetTotalRewardInfoInSameCommonDifferenceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    massUpdatePools: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
        txData: (options?: TransactionOptions) => Promise<string>;
    }
    maxRewardBlockNumber: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    pendingBake: {
        (params: IPendingBakeParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    poolAddresses: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    poolInfoMap: {
        (param1:string, options?: TransactionOptions): Promise<{allocPoint:BigNumber,lastRewardBlock:BigNumber,accBakePerShare:BigNumber,exists:boolean}>;
    }
    poolLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    poolUserInfoMap: {
        (params: IPoolUserInfoMapParams, options?: TransactionOptions): Promise<{amount:BigNumber,rewardDebt:BigNumber}>;
    }
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
        txData: (options?: TransactionOptions) => Promise<string>;
    }
    set: {
        (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: ISetParams, options?: TransactionOptions) => Promise<string>;
    }
    startBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalAllocPoint: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
        txData: (newOwner:string, options?: TransactionOptions) => Promise<string>;
    }
    updatePool: {
        (pair:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pair:string, options?: TransactionOptions) => Promise<void>;
        txData: (pair:string, options?: TransactionOptions) => Promise<string>;
    }
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IWithdrawParams, options?: TransactionOptions) => Promise<string>;
    }
    private assign(){
        let accBakePerShareMultiple_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('accBakePerShareMultiple',[],options);
            return new BigNumber(result);
        }
        this.accBakePerShareMultiple = accBakePerShareMultiple_call
        let bake_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('bake',[],options);
            return result;
        }
        this.bake = bake_call
        let bakeBonusEndBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bakeBonusEndBlock',[],options);
            return new BigNumber(result);
        }
        this.bakeBonusEndBlock = bakeBonusEndBlock_call
        let bakeStartBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bakeStartBlock',[],options);
            return new BigNumber(result);
        }
        this.bakeStartBlock = bakeStartBlock_call
        let bonusBeforeBulkBlockSize_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bonusBeforeBulkBlockSize',[],options);
            return new BigNumber(result);
        }
        this.bonusBeforeBulkBlockSize = bonusBeforeBulkBlockSize_call
        let bonusBeforeCommonDifference_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bonusBeforeCommonDifference',[],options);
            return new BigNumber(result);
        }
        this.bonusBeforeCommonDifference = bonusBeforeCommonDifference_call
        let bonusEndBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bonusEndBlock',[],options);
            return new BigNumber(result);
        }
        this.bonusEndBlock = bonusEndBlock_call
        let bonusEndBulkBlockSize_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bonusEndBulkBlockSize',[],options);
            return new BigNumber(result);
        }
        this.bonusEndBulkBlockSize = bonusEndBulkBlockSize_call
        let bonusEndCommonDifference_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('bonusEndCommonDifference',[],options);
            return new BigNumber(result);
        }
        this.bonusEndCommonDifference = bonusEndCommonDifference_call
        let devAddr_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('devAddr',[],options);
            return result;
        }
        this.devAddr = devAddr_call
        let existsPool_call = async (pair:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('existsPool',[pair],options);
            return result;
        }
        this.existsPool = existsPool_call
        let getTotalRewardInfoParams = (params: IGetTotalRewardInfoParams) => [this.wallet.utils.toString(params.from),this.wallet.utils.toString(params.to)];
        let getTotalRewardInfo_call = async (params: IGetTotalRewardInfoParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getTotalRewardInfo',getTotalRewardInfoParams(params),options);
            return new BigNumber(result);
        }
        this.getTotalRewardInfo = getTotalRewardInfo_call
        let getTotalRewardInfoInSameCommonDifferenceParams = (params: IGetTotalRewardInfoInSameCommonDifferenceParams) => [this.wallet.utils.toString(params.from),this.wallet.utils.toString(params.to),this.wallet.utils.toString(params.bakeInitBlock),this.wallet.utils.toString(params.bulkBlockSize),this.wallet.utils.toString(params.commonDifference)];
        let getTotalRewardInfoInSameCommonDifference_call = async (params: IGetTotalRewardInfoInSameCommonDifferenceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getTotalRewardInfoInSameCommonDifference',getTotalRewardInfoInSameCommonDifferenceParams(params),options);
            return new BigNumber(result);
        }
        this.getTotalRewardInfoInSameCommonDifference = getTotalRewardInfoInSameCommonDifference_call
        let maxRewardBlockNumber_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('maxRewardBlockNumber',[],options);
            return new BigNumber(result);
        }
        this.maxRewardBlockNumber = maxRewardBlockNumber_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let pendingBakeParams = (params: IPendingBakeParams) => [params.pair,params.user];
        let pendingBake_call = async (params: IPendingBakeParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('pendingBake',pendingBakeParams(params),options);
            return new BigNumber(result);
        }
        this.pendingBake = pendingBake_call
        let poolAddresses_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('poolAddresses',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.poolAddresses = poolAddresses_call
        let poolInfoMap_call = async (param1:string, options?: TransactionOptions): Promise<{allocPoint:BigNumber,lastRewardBlock:BigNumber,accBakePerShare:BigNumber,exists:boolean}> => {
            let result = await this.call('poolInfoMap',[param1],options);
            return {
                allocPoint: new BigNumber(result.allocPoint),
                lastRewardBlock: new BigNumber(result.lastRewardBlock),
                accBakePerShare: new BigNumber(result.accBakePerShare),
                exists: result.exists
            };
        }
        this.poolInfoMap = poolInfoMap_call
        let poolLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('poolLength',[],options);
            return new BigNumber(result);
        }
        this.poolLength = poolLength_call
        let poolUserInfoMapParams = (params: IPoolUserInfoMapParams) => [params.param1,params.param2];
        let poolUserInfoMap_call = async (params: IPoolUserInfoMapParams, options?: TransactionOptions): Promise<{amount:BigNumber,rewardDebt:BigNumber}> => {
            let result = await this.call('poolUserInfoMap',poolUserInfoMapParams(params),options);
            return {
                amount: new BigNumber(result.amount),
                rewardDebt: new BigNumber(result.rewardDebt)
            };
        }
        this.poolUserInfoMap = poolUserInfoMap_call
        let startBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('startBlock',[],options);
            return new BigNumber(result);
        }
        this.startBlock = startBlock_call
        let totalAllocPoint_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalAllocPoint',[],options);
            return new BigNumber(result);
        }
        this.totalAllocPoint = totalAllocPoint_call
        let addParams = (params: IAddParams) => [this.wallet.utils.toString(params.allocPoint),params.pair,params.withUpdate];
        let add_send = async (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('add',addParams(params),options);
            return result;
        }
        let add_call = async (params: IAddParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('add',addParams(params),options);
            return;
        }
        let add_txData = async (params: IAddParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('add',addParams(params),options);
            return result;
        }
        this.add = Object.assign(add_send, {
            call:add_call
            , txData:add_txData
        });
        let depositParams = (params: IDepositParams) => [params.pair,this.wallet.utils.toString(params.amount)];
        let deposit_send = async (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deposit',depositParams(params),options);
            return result;
        }
        let deposit_call = async (params: IDepositParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deposit',depositParams(params),options);
            return;
        }
        let deposit_txData = async (params: IDepositParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('deposit',depositParams(params),options);
            return result;
        }
        this.deposit = Object.assign(deposit_send, {
            call:deposit_call
            , txData:deposit_txData
        });
        let dev_send = async (devAddr:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('dev',[devAddr],options);
            return result;
        }
        let dev_call = async (devAddr:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('dev',[devAddr],options);
            return;
        }
        let dev_txData = async (devAddr:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('dev',[devAddr],options);
            return result;
        }
        this.dev = Object.assign(dev_send, {
            call:dev_call
            , txData:dev_txData
        });
        let emergencyWithdraw_send = async (pair:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('emergencyWithdraw',[pair],options);
            return result;
        }
        let emergencyWithdraw_call = async (pair:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('emergencyWithdraw',[pair],options);
            return;
        }
        let emergencyWithdraw_txData = async (pair:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('emergencyWithdraw',[pair],options);
            return result;
        }
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call:emergencyWithdraw_call
            , txData:emergencyWithdraw_txData
        });
        let massUpdatePools_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('massUpdatePools',[],options);
            return result;
        }
        let massUpdatePools_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('massUpdatePools',[],options);
            return;
        }
        let massUpdatePools_txData = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('massUpdatePools',[],options);
            return result;
        }
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call:massUpdatePools_call
            , txData:massUpdatePools_txData
        });
        let renounceOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership',[],options);
            return result;
        }
        let renounceOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('renounceOwnership',[],options);
            return;
        }
        let renounceOwnership_txData = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('renounceOwnership',[],options);
            return result;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
            , txData:renounceOwnership_txData
        });
        let setParams = (params: ISetParams) => [params.pair,this.wallet.utils.toString(params.allocPoint),params.withUpdate];
        let set_send = async (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('set',setParams(params),options);
            return result;
        }
        let set_call = async (params: ISetParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('set',setParams(params),options);
            return;
        }
        let set_txData = async (params: ISetParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('set',setParams(params),options);
            return result;
        }
        this.set = Object.assign(set_send, {
            call:set_call
            , txData:set_txData
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        let transferOwnership_txData = async (newOwner:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('transferOwnership',[newOwner],options);
            return result;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
            , txData:transferOwnership_txData
        });
        let updatePool_send = async (pair:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updatePool',[pair],options);
            return result;
        }
        let updatePool_call = async (pair:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updatePool',[pair],options);
            return;
        }
        let updatePool_txData = async (pair:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('updatePool',[pair],options);
            return result;
        }
        this.updatePool = Object.assign(updatePool_send, {
            call:updatePool_call
            , txData:updatePool_txData
        });
        let withdrawParams = (params: IWithdrawParams) => [params.pair,this.wallet.utils.toString(params.amount)];
        let withdraw_send = async (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',withdrawParams(params),options);
            return result;
        }
        let withdraw_call = async (params: IWithdrawParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdraw',withdrawParams(params),options);
            return;
        }
        let withdraw_txData = async (params: IWithdrawParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('withdraw',withdrawParams(params),options);
            return result;
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
            , txData:withdraw_txData
        });
    }
}
export module BakeryMaster{
    export interface DepositEvent {user:string,poolAddress:string,amount:BigNumber,_event:Event}
    export interface EmergencyWithdrawEvent {user:string,poolAddress:string,amount:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface WithdrawEvent {user:string,poolAddress:string,amount:BigNumber,_event:Event}
}