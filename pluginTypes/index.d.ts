/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.json.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
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
    export class BEP20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): BEP20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): BEP20.ApprovalEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): BEP20.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): BEP20.OwnershipTransferredEvent;
        parseTransferEvent(receipt: TransactionReceipt): BEP20.TransferEvent[];
        decodeTransferEvent(event: Event): BEP20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        getOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
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
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module BEP20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
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
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/BakeryMaster.json.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/BakeryMaster.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/BakeryMaster.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/BakeryMaster.ts" {
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
    export class BakeryMaster extends _Contract {
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
        };
        dev: {
            (devAddr: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (devAddr: string, options?: TransactionOptions) => Promise<void>;
        };
        devAddr: {
            (options?: TransactionOptions): Promise<string>;
        };
        emergencyWithdraw: {
            (pair: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (pair: string, options?: TransactionOptions) => Promise<void>;
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
        };
        set: {
            (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetParams, options?: TransactionOptions) => Promise<void>;
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
        };
        updatePool: {
            (pair: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (pair: string, options?: TransactionOptions) => Promise<void>;
        };
        withdraw: {
            (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module BakeryMaster {
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
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/BakerySwapRouter.json.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/BakerySwapRouter.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/BakerySwapRouter.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/BakerySwapRouter.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WBNB: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityBNBParams {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountBNBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        reserveIn: number | BigNumber;
        reserveOut: number | BigNumber;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        reserveIn: number | BigNumber;
        reserveOut: number | BigNumber;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
    }
    export interface IQuoteParams {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityBNBParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountBNBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountBNBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityBNBWithPermitParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountBNBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountBNBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityWithPermitParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISwapBNBForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactBNBForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForBNBParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactBNBParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export class BakerySwapRouter extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WBNB: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                liquidity: BigNumber;
            }>;
        };
        addLiquidityBNB: {
            (params: IAddLiquidityBNBParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityBNBParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountBNB: BigNumber;
                liquidity: BigNumber;
            }>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        quote: {
            (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        removeLiquidityBNB: {
            (params: IRemoveLiquidityBNBParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityBNBParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountBNB: BigNumber;
            }>;
        };
        removeLiquidityBNBSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        removeLiquidityBNBWithPermit: {
            (params: IRemoveLiquidityBNBWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityBNBWithPermitParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountBNB: BigNumber;
            }>;
        };
        removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        removeLiquidityWithPermit: {
            (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        swapBNBForExactTokens: {
            (params: ISwapBNBForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapBNBForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactBNBForTokens: {
            (params: ISwapExactBNBForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactBNBForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactBNBForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
        };
        swapExactTokensForBNB: {
            (params: ISwapExactTokensForBNBParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForBNBParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactTokensForBNBSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
        };
        swapTokensForExactBNB: {
            (params: ISwapTokensForExactBNBParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactBNBParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/BakeryToken.json.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/BakeryToken.json.ts" {
    const _default_3: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/BakeryToken.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/BakeryToken.ts" {
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
    export class BakeryToken extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
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
        };
        delegate: {
            (delegatee: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (delegatee: string, options?: TransactionOptions) => Promise<void>;
        };
        delegateBySig: {
            (params: IDelegateBySigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDelegateBySigParams, options?: TransactionOptions) => Promise<void>;
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
        };
        mint: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<boolean>;
        };
        mintTo: {
            (params: IMintToParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintToParams, options?: TransactionOptions) => Promise<void>;
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
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module BakeryToken {
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
}
/// <amd-module name="@scom/oswap-bakery-swap-contract/contracts/index.ts" />
declare module "@scom/oswap-bakery-swap-contract/contracts/index.ts" {
    export { BEP20 } from "@scom/oswap-bakery-swap-contract/contracts/@BakeryProject/bakery-swap-lib/contracts/token/BEP20/BEP20.ts";
    export { BakeryMaster } from "@scom/oswap-bakery-swap-contract/contracts/BakeryMaster.ts";
    export { BakerySwapRouter } from "@scom/oswap-bakery-swap-contract/contracts/BakerySwapRouter.ts";
    export { BakeryToken } from "@scom/oswap-bakery-swap-contract/contracts/BakeryToken.ts";
}
/// <amd-module name="@scom/oswap-bakery-swap-contract" />
declare module "@scom/oswap-bakery-swap-contract" {
    export * as Contracts from "@scom/oswap-bakery-swap-contract/contracts/index.ts";
}
