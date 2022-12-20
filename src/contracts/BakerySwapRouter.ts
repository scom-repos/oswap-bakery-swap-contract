import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./BakerySwapRouter.json";
export interface IDeployParams {factory:string;WBNB:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IAddLiquidityBNBParams {token:string;amountTokenDesired:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountOutParams {amountIn:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityBNBParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityBNBWithPermitParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityWithPermitParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface ISwapBNBForExactTokensParams {amountOut:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactBNBForTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForBNBParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactBNBParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export class BakerySwapRouter extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factory,params.WBNB], options);
    }
    WBNB: {
        (options?: TransactionOptions): Promise<string>;
    }
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
    }
    addLiquidityBNB: {
        (params: IAddLiquidityBNBParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityBNBParams, options?: number|BigNumber|TransactionOptions) => Promise<{amountToken:BigNumber,amountBNB:BigNumber,liquidity:BigNumber}>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    quote: {
        (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    removeLiquidityBNB: {
        (params: IRemoveLiquidityBNBParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBParams, options?: TransactionOptions) => Promise<{amountToken:BigNumber,amountBNB:BigNumber}>;
    }
    removeLiquidityBNBSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    removeLiquidityBNBWithPermit: {
        (params: IRemoveLiquidityBNBWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBWithPermitParams, options?: TransactionOptions) => Promise<{amountToken:BigNumber,amountBNB:BigNumber}>;
    }
    removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    swapBNBForExactTokens: {
        (params: ISwapBNBForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapBNBForExactTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber[]>;
    }
    swapExactBNBForTokens: {
        (params: ISwapExactBNBForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactBNBForTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber[]>;
    }
    swapExactBNBForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    swapExactTokensForBNB: {
        (params: ISwapExactTokensForBNBParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForBNBParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    }
    swapExactTokensForBNBSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    }
    swapTokensForExactBNB: {
        (params: ISwapTokensForExactBNBParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactBNBParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    }
    private assign(){
        let WBNB_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('WBNB',[],options);
            return result;
        }
        this.WBNB = WBNB_call
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.reserveIn),this.wallet.utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.reserveIn),this.wallet.utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [this.wallet.utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [this.wallet.utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let quoteParams = (params: IQuoteParams) => [this.wallet.utils.toString(params.amountA),this.wallet.utils.toString(params.reserveA),this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params),options);
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.amountADesired),this.wallet.utils.toString(params.amountBDesired),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params),options);
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityBNBParams = (params: IAddLiquidityBNBParams) => [params.token,this.wallet.utils.toString(params.amountTokenDesired),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountBNBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let addLiquidityBNB_send = async (params: IAddLiquidityBNBParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityBNB',addLiquidityBNBParams(params),options);
            return result;
        }
        let addLiquidityBNB_call = async (params: IAddLiquidityBNBParams, options?: number|BigNumber|TransactionOptions): Promise<{amountToken:BigNumber,amountBNB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidityBNB',addLiquidityBNBParams(params),options);
            return {
                amountToken: new BigNumber(result.amountToken),
                amountBNB: new BigNumber(result.amountBNB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidityBNB = Object.assign(addLiquidityBNB_send, {
            call:addLiquidityBNB_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params),options);
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let removeLiquidityBNBParams = (params: IRemoveLiquidityBNBParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountBNBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidityBNB_send = async (params: IRemoveLiquidityBNBParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNB',removeLiquidityBNBParams(params),options);
            return result;
        }
        let removeLiquidityBNB_call = async (params: IRemoveLiquidityBNBParams, options?: TransactionOptions): Promise<{amountToken:BigNumber,amountBNB:BigNumber}> => {
            let result = await this.call('removeLiquidityBNB',removeLiquidityBNBParams(params),options);
            return {
                amountToken: new BigNumber(result.amountToken),
                amountBNB: new BigNumber(result.amountBNB)
            };
        }
        this.removeLiquidityBNB = Object.assign(removeLiquidityBNB_send, {
            call:removeLiquidityBNB_call
        });
        let removeLiquidityBNBSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountBNBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidityBNBSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNBSupportingFeeOnTransferTokens',removeLiquidityBNBSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let removeLiquidityBNBSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityBNBSupportingFeeOnTransferTokens',removeLiquidityBNBSupportingFeeOnTransferTokensParams(params),options);
            return new BigNumber(result);
        }
        this.removeLiquidityBNBSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityBNBSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityBNBWithPermitParams = (params: IRemoveLiquidityBNBWithPermitParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountBNBMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityBNBWithPermit_send = async (params: IRemoveLiquidityBNBWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNBWithPermit',removeLiquidityBNBWithPermitParams(params),options);
            return result;
        }
        let removeLiquidityBNBWithPermit_call = async (params: IRemoveLiquidityBNBWithPermitParams, options?: TransactionOptions): Promise<{amountToken:BigNumber,amountBNB:BigNumber}> => {
            let result = await this.call('removeLiquidityBNBWithPermit',removeLiquidityBNBWithPermitParams(params),options);
            return {
                amountToken: new BigNumber(result.amountToken),
                amountBNB: new BigNumber(result.amountBNB)
            };
        }
        this.removeLiquidityBNBWithPermit = Object.assign(removeLiquidityBNBWithPermit_send, {
            call:removeLiquidityBNBWithPermit_call
        });
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountBNBMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens',removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens',removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params),options);
            return new BigNumber(result);
        }
        this.removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params: IRemoveLiquidityWithPermitParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params),options);
            return result;
        }
        let removeLiquidityWithPermit_call = async (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call:removeLiquidityWithPermit_call
        });
        let swapBNBForExactTokensParams = (params: ISwapBNBForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapBNBForExactTokens_send = async (params: ISwapBNBForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapBNBForExactTokens',swapBNBForExactTokensParams(params),options);
            return result;
        }
        let swapBNBForExactTokens_call = async (params: ISwapBNBForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapBNBForExactTokens',swapBNBForExactTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.swapBNBForExactTokens = Object.assign(swapBNBForExactTokens_send, {
            call:swapBNBForExactTokens_call
        });
        let swapExactBNBForTokensParams = (params: ISwapExactBNBForTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactBNBForTokens_send = async (params: ISwapExactBNBForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactBNBForTokens',swapExactBNBForTokensParams(params),options);
            return result;
        }
        let swapExactBNBForTokens_call = async (params: ISwapExactBNBForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapExactBNBForTokens',swapExactBNBForTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactBNBForTokens = Object.assign(swapExactBNBForTokens_send, {
            call:swapExactBNBForTokens_call
        });
        let swapExactBNBForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactBNBForTokensSupportingFeeOnTransferTokens',swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactBNBForTokensSupportingFeeOnTransferTokens',swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params),options);
            return;
        }
        this.swapExactBNBForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactBNBForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactBNBForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForBNBParams = (params: ISwapExactTokensForBNBParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForBNB_send = async (params: ISwapExactTokensForBNBParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForBNB',swapExactTokensForBNBParams(params),options);
            return result;
        }
        let swapExactTokensForBNB_call = async (params: ISwapExactTokensForBNBParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForBNB',swapExactTokensForBNBParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForBNB = Object.assign(swapExactTokensForBNB_send, {
            call:swapExactTokensForBNB_call
        });
        let swapExactTokensForBNBSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForBNBSupportingFeeOnTransferTokens',swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactTokensForBNBSupportingFeeOnTransferTokens',swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params),options);
            return;
        }
        this.swapExactTokensForBNBSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForBNBSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForBNBSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params),options);
            return;
        }
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactBNBParams = (params: ISwapTokensForExactBNBParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactBNB_send = async (params: ISwapTokensForExactBNBParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactBNB',swapTokensForExactBNBParams(params),options);
            return result;
        }
        let swapTokensForExactBNB_call = async (params: ISwapTokensForExactBNBParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactBNB',swapTokensForExactBNBParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactBNB = Object.assign(swapTokensForExactBNB_send, {
            call:swapTokensForExactBNB_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
    }
}