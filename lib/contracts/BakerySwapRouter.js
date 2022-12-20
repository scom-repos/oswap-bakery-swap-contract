"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakerySwapRouter = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const BakerySwapRouter_json_1 = __importDefault(require("./BakerySwapRouter.json"));
class BakerySwapRouter extends eth_contract_1.Contract {
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
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.reserveIn), this.wallet.utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path];
        let getAmountsIn_call = async (params, options) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.path];
        let getAmountsOut_call = async (params, options) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let quoteParams = (params) => [this.wallet.utils.toString(params.amountA), this.wallet.utils.toString(params.reserveA), this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params, options) => {
            let result = await this.call('quote', quoteParams(params), options);
            return new eth_contract_1.BigNumber(result);
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
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB),
                liquidity: new eth_contract_1.BigNumber(result.liquidity)
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
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountBNB: new eth_contract_1.BigNumber(result.amountBNB),
                liquidity: new eth_contract_1.BigNumber(result.liquidity)
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
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
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
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountBNB: new eth_contract_1.BigNumber(result.amountBNB)
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
            return new eth_contract_1.BigNumber(result);
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
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountBNB: new eth_contract_1.BigNumber(result.amountBNB)
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
            return new eth_contract_1.BigNumber(result);
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
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
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
            return result.map(e => new eth_contract_1.BigNumber(e));
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
            return result.map(e => new eth_contract_1.BigNumber(e));
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
            return result.map(e => new eth_contract_1.BigNumber(e));
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
            return result.map(e => new eth_contract_1.BigNumber(e));
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
            return result.map(e => new eth_contract_1.BigNumber(e));
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
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.BakerySwapRouter = BakerySwapRouter;
BakerySwapRouter._abi = BakerySwapRouter_json_1.default.abi;
