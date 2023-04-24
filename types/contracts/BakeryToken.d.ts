import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface ICheckpointsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IDelegateBySigParams {
    delegatee: string;
    nonce: number | BigNumber;
    expiry: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IGetPriorVotesParams {
    account: string;
    blockNumber: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintToParams {
    to: string;
    amount: number | BigNumber;
}
export interface ITransferParams {
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export declare class BakeryToken extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): BakeryToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): BakeryToken.ApprovalEvent;
    parseDelegateChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateChangedEvent[];
    decodeDelegateChangedEvent(event: Event): BakeryToken.DelegateChangedEvent;
    parseDelegateVotesChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateVotesChangedEvent[];
    decodeDelegateVotesChangedEvent(event: Event): BakeryToken.DelegateVotesChangedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryToken.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): BakeryToken.OwnershipTransferredEvent;
    parseTransferEvent(receipt: TransactionReceipt): BakeryToken.TransferEvent[];
    decodeTransferEvent(event: Event): BakeryToken.TransferEvent;
    DELEGATION_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    DOMAIN_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
    };
    balanceOf: {
        (account: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    checkpoints: {
        (params: ICheckpointsParams, options?: TransactionOptions): Promise<{
            fromBlock: BigNumber;
            votes: BigNumber;
        }>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        txData: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
    };
    delegate: {
        (delegatee: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (delegatee: string, options?: TransactionOptions) => Promise<void>;
        txData: (delegatee: string, options?: TransactionOptions) => Promise<string>;
    };
    delegateBySig: {
        (params: IDelegateBySigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDelegateBySigParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IDelegateBySigParams, options?: TransactionOptions) => Promise<string>;
    };
    delegates: {
        (delegator: string, options?: TransactionOptions): Promise<string>;
    };
    getCurrentVotes: {
        (account: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    getOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    getPriorVotes: {
        (params: IGetPriorVotesParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        txData: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
    };
    mint: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<boolean>;
        txData: (amount: number | BigNumber, options?: TransactionOptions) => Promise<string>;
    };
    mintTo: {
        (params: IMintToParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintToParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IMintToParams, options?: TransactionOptions) => Promise<string>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    nonces: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    numCheckpoints: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
        txData: (options?: TransactionOptions) => Promise<string>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
export declare module BakeryToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface DelegateChangedEvent {
        delegator: string;
        fromDelegate: string;
        toDelegate: string;
        _event: Event;
    }
    interface DelegateVotesChangedEvent {
        delegate: string;
        previousBalance: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
