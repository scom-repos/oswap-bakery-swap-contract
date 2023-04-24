import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    bake: string;
    devAddr: string;
    bakeStartBlock: number | BigNumber;
    startBlock: number | BigNumber;
    bonusEndBlock: number | BigNumber;
    bonusBeforeBulkBlockSize: number | BigNumber;
    bonusBeforeCommonDifference: number | BigNumber;
    bonusEndCommonDifference: number | BigNumber;
}
export interface IAddParams {
    allocPoint: number | BigNumber;
    pair: string;
    withUpdate: boolean;
}
export interface IDepositParams {
    pair: string;
    amount: number | BigNumber;
}
export interface IGetTotalRewardInfoParams {
    from: number | BigNumber;
    to: number | BigNumber;
}
export interface IGetTotalRewardInfoInSameCommonDifferenceParams {
    from: number | BigNumber;
    to: number | BigNumber;
    bakeInitBlock: number | BigNumber;
    bulkBlockSize: number | BigNumber;
    commonDifference: number | BigNumber;
}
export interface IPendingBakeParams {
    pair: string;
    user: string;
}
export interface IPoolUserInfoMapParams {
    param1: string;
    param2: string;
}
export interface ISetParams {
    pair: string;
    allocPoint: number | BigNumber;
    withUpdate: boolean;
}
export interface IWithdrawParams {
    pair: string;
    amount: number | BigNumber;
}
export declare class BakeryMaster extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseDepositEvent(receipt: TransactionReceipt): BakeryMaster.DepositEvent[];
    decodeDepositEvent(event: Event): BakeryMaster.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): BakeryMaster.EmergencyWithdrawEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryMaster.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): BakeryMaster.OwnershipTransferredEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): BakeryMaster.WithdrawEvent;
    accBakePerShareMultiple: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    add: {
        (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IAddParams, options?: TransactionOptions) => Promise<string>;
    };
    bake: {
        (options?: TransactionOptions): Promise<string>;
    };
    bakeBonusEndBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    bakeStartBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    bonusBeforeBulkBlockSize: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    bonusBeforeCommonDifference: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    bonusEndBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    bonusEndBulkBlockSize: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    bonusEndCommonDifference: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IDepositParams, options?: TransactionOptions) => Promise<string>;
    };
    dev: {
        (devAddr: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (devAddr: string, options?: TransactionOptions) => Promise<void>;
        txData: (devAddr: string, options?: TransactionOptions) => Promise<string>;
    };
    devAddr: {
        (options?: TransactionOptions): Promise<string>;
    };
    emergencyWithdraw: {
        (pair: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pair: string, options?: TransactionOptions) => Promise<void>;
        txData: (pair: string, options?: TransactionOptions) => Promise<string>;
    };
    existsPool: {
        (pair: string, options?: TransactionOptions): Promise<boolean>;
    };
    getTotalRewardInfo: {
        (params: IGetTotalRewardInfoParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getTotalRewardInfoInSameCommonDifference: {
        (params: IGetTotalRewardInfoInSameCommonDifferenceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    massUpdatePools: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
        txData: (options?: TransactionOptions) => Promise<string>;
    };
    maxRewardBlockNumber: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pendingBake: {
        (params: IPendingBakeParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    poolAddresses: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    poolInfoMap: {
        (param1: string, options?: TransactionOptions): Promise<{
            allocPoint: BigNumber;
            lastRewardBlock: BigNumber;
            accBakePerShare: BigNumber;
            exists: boolean;
        }>;
    };
    poolLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    poolUserInfoMap: {
        (params: IPoolUserInfoMapParams, options?: TransactionOptions): Promise<{
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
        txData: (options?: TransactionOptions) => Promise<string>;
    };
    set: {
        (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: ISetParams, options?: TransactionOptions) => Promise<string>;
    };
    startBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalAllocPoint: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
    };
    updatePool: {
        (pair: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pair: string, options?: TransactionOptions) => Promise<void>;
        txData: (pair: string, options?: TransactionOptions) => Promise<string>;
    };
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IWithdrawParams, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
export declare module BakeryMaster {
    interface DepositEvent {
        user: string;
        poolAddress: string;
        amount: BigNumber;
        _event: Event;
    }
    interface EmergencyWithdrawEvent {
        user: string;
        poolAddress: string;
        amount: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        poolAddress: string;
        amount: BigNumber;
        _event: Event;
    }
}
