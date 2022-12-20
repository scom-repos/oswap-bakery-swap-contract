import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./BakeryToken.json";
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface ICheckpointsParams {param1:string;param2:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IDelegateBySigParams {delegatee:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface IGetPriorVotesParams {account:string;blockNumber:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintToParams {to:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class BakeryToken extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: number|BigNumber|TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): BakeryToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): BakeryToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseDelegateChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateChangedEvent[]{
        return this.parseEvents(receipt, "DelegateChanged").map(e=>this.decodeDelegateChangedEvent(e));
    }
    decodeDelegateChangedEvent(event: Event): BakeryToken.DelegateChangedEvent{
        let result = event.data;
        return {
            delegator: result.delegator,
            fromDelegate: result.fromDelegate,
            toDelegate: result.toDelegate,
            _event: event
        };
    }
    parseDelegateVotesChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateVotesChangedEvent[]{
        return this.parseEvents(receipt, "DelegateVotesChanged").map(e=>this.decodeDelegateVotesChangedEvent(e));
    }
    decodeDelegateVotesChangedEvent(event: Event): BakeryToken.DelegateVotesChangedEvent{
        let result = event.data;
        return {
            delegate: result.delegate,
            previousBalance: new BigNumber(result.previousBalance),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryToken.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): BakeryToken.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): BakeryToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): BakeryToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    DELEGATION_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    }
    DOMAIN_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    }
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    }
    balanceOf: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    checkpoints: {
        (params: ICheckpointsParams, options?: TransactionOptions): Promise<{fromBlock:BigNumber,votes:BigNumber}>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    delegate: {
        (delegatee:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (delegatee:string, options?: TransactionOptions) => Promise<void>;
    }
    delegateBySig: {
        (params: IDelegateBySigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDelegateBySigParams, options?: TransactionOptions) => Promise<void>;
    }
    delegates: {
        (delegator:string, options?: TransactionOptions): Promise<string>;
    }
    getCurrentVotes: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    getOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    getPriorVotes: {
        (params: IGetPriorVotesParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    mint: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<boolean>;
    }
    mintTo: {
        (params: IMintToParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintToParams, options?: TransactionOptions) => Promise<void>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    nonces: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    numCheckpoints: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let DELEGATION_TYPEHASH_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('DELEGATION_TYPEHASH',[],options);
            return result;
        }
        this.DELEGATION_TYPEHASH = DELEGATION_TYPEHASH_call
        let DOMAIN_TYPEHASH_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('DOMAIN_TYPEHASH',[],options);
            return result;
        }
        this.DOMAIN_TYPEHASH = DOMAIN_TYPEHASH_call
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params),options);
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let checkpointsParams = (params: ICheckpointsParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let checkpoints_call = async (params: ICheckpointsParams, options?: TransactionOptions): Promise<{fromBlock:BigNumber,votes:BigNumber}> => {
            let result = await this.call('checkpoints',checkpointsParams(params),options);
            return {
                fromBlock: new BigNumber(result.fromBlock),
                votes: new BigNumber(result.votes)
            };
        }
        this.checkpoints = checkpoints_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let delegates_call = async (delegator:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('delegates',[delegator],options);
            return result;
        }
        this.delegates = delegates_call
        let getCurrentVotes_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getCurrentVotes',[account],options);
            return new BigNumber(result);
        }
        this.getCurrentVotes = getCurrentVotes_call
        let getOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getOwner',[],options);
            return result;
        }
        this.getOwner = getOwner_call
        let getPriorVotesParams = (params: IGetPriorVotesParams) => [params.account,this.wallet.utils.toString(params.blockNumber)];
        let getPriorVotes_call = async (params: IGetPriorVotesParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getPriorVotes',getPriorVotesParams(params),options);
            return new BigNumber(result);
        }
        this.getPriorVotes = getPriorVotes_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let nonces_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('nonces',[param1],options);
            return new BigNumber(result);
        }
        this.nonces = nonces_call
        let numCheckpoints_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('numCheckpoints',[param1],options);
            return new BigNumber(result);
        }
        this.numCheckpoints = numCheckpoints_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.spender,this.wallet.utils.toString(params.amount)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params),options);
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
        let delegate_send = async (delegatee:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('delegate',[delegatee],options);
            return result;
        }
        let delegate_call = async (delegatee:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('delegate',[delegatee],options);
            return;
        }
        this.delegate = Object.assign(delegate_send, {
            call:delegate_call
        });
        let delegateBySigParams = (params: IDelegateBySigParams) => [params.delegatee,this.wallet.utils.toString(params.nonce),this.wallet.utils.toString(params.expiry),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let delegateBySig_send = async (params: IDelegateBySigParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('delegateBySig',delegateBySigParams(params),options);
            return result;
        }
        let delegateBySig_call = async (params: IDelegateBySigParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('delegateBySig',delegateBySigParams(params),options);
            return;
        }
        this.delegateBySig = Object.assign(delegateBySig_send, {
            call:delegateBySig_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let mint_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let mint_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('mint',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let mintToParams = (params: IMintToParams) => [params.to,this.wallet.utils.toString(params.amount)];
        let mintTo_send = async (params: IMintToParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mintTo',mintToParams(params),options);
            return result;
        }
        let mintTo_call = async (params: IMintToParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('mintTo',mintToParams(params),options);
            return;
        }
        this.mintTo = Object.assign(mintTo_send, {
            call:mintTo_call
        });
        let renounceOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership',[],options);
            return result;
        }
        let renounceOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('renounceOwnership',[],options);
            return;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
        });
        let transferParams = (params: ITransferParams) => [params.recipient,this.wallet.utils.toString(params.amount)];
        let transfer_send = async (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params),options);
            return result;
        }
        let transfer_call = async (params: ITransferParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params),options);
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.sender,params.recipient,this.wallet.utils.toString(params.amount)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
    }
}
export module BakeryToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface DelegateChangedEvent {delegator:string,fromDelegate:string,toDelegate:string,_event:Event}
    export interface DelegateVotesChangedEvent {delegate:string,previousBalance:BigNumber,newBalance:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}