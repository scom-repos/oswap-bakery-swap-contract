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
        let addLiquidity_txData = async (params, options) => {
            let result = await this.txData('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call,
            txData: addLiquidity_txData
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
        let addLiquidityBNB_txData = async (params, options) => {
            let result = await this.txData('addLiquidityBNB', addLiquidityBNBParams(params), options);
            return result;
        };
        this.addLiquidityBNB = Object.assign(addLiquidityBNB_send, {
            call: addLiquidityBNB_call,
            txData: addLiquidityBNB_txData
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
        let removeLiquidity_txData = async (params, options) => {
            let result = await this.txData('removeLiquidity', removeLiquidityParams(params), options);
            return result;
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call,
            txData: removeLiquidity_txData
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
        let removeLiquidityBNB_txData = async (params, options) => {
            let result = await this.txData('removeLiquidityBNB', removeLiquidityBNBParams(params), options);
            return result;
        };
        this.removeLiquidityBNB = Object.assign(removeLiquidityBNB_send, {
            call: removeLiquidityBNB_call,
            txData: removeLiquidityBNB_txData
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
        let removeLiquidityBNBSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('removeLiquidityBNBSupportingFeeOnTransferTokens', removeLiquidityBNBSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.removeLiquidityBNBSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityBNBSupportingFeeOnTransferTokens_call,
            txData: removeLiquidityBNBSupportingFeeOnTransferTokens_txData
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
        let removeLiquidityBNBWithPermit_txData = async (params, options) => {
            let result = await this.txData('removeLiquidityBNBWithPermit', removeLiquidityBNBWithPermitParams(params), options);
            return result;
        };
        this.removeLiquidityBNBWithPermit = Object.assign(removeLiquidityBNBWithPermit_send, {
            call: removeLiquidityBNBWithPermit_call,
            txData: removeLiquidityBNBWithPermit_txData
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
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens', removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call,
            txData: removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_txData
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
        let removeLiquidityWithPermit_txData = async (params, options) => {
            let result = await this.txData('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
            return result;
        };
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call: removeLiquidityWithPermit_call,
            txData: removeLiquidityWithPermit_txData
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
        let swapBNBForExactTokens_txData = async (params, options) => {
            let result = await this.txData('swapBNBForExactTokens', swapBNBForExactTokensParams(params), options);
            return result;
        };
        this.swapBNBForExactTokens = Object.assign(swapBNBForExactTokens_send, {
            call: swapBNBForExactTokens_call,
            txData: swapBNBForExactTokens_txData
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
        let swapExactBNBForTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactBNBForTokens', swapExactBNBForTokensParams(params), options);
            return result;
        };
        this.swapExactBNBForTokens = Object.assign(swapExactBNBForTokens_send, {
            call: swapExactBNBForTokens_call,
            txData: swapExactBNBForTokens_txData
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
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactBNBForTokensSupportingFeeOnTransferTokens', swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.swapExactBNBForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactBNBForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactBNBForTokensSupportingFeeOnTransferTokens_call,
            txData: swapExactBNBForTokensSupportingFeeOnTransferTokens_txData
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
        let swapExactTokensForBNB_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForBNB', swapExactTokensForBNBParams(params), options);
            return result;
        };
        this.swapExactTokensForBNB = Object.assign(swapExactTokensForBNB_send, {
            call: swapExactTokensForBNB_call,
            txData: swapExactTokensForBNB_txData
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
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForBNBSupportingFeeOnTransferTokens', swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForBNBSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForBNBSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForBNBSupportingFeeOnTransferTokens_call,
            txData: swapExactTokensForBNBSupportingFeeOnTransferTokens_txData
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
        let swapExactTokensForTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call,
            txData: swapExactTokensForTokens_txData
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
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call,
            txData: swapExactTokensForTokensSupportingFeeOnTransferTokens_txData
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
        let swapTokensForExactBNB_txData = async (params, options) => {
            let result = await this.txData('swapTokensForExactBNB', swapTokensForExactBNBParams(params), options);
            return result;
        };
        this.swapTokensForExactBNB = Object.assign(swapTokensForExactBNB_send, {
            call: swapTokensForExactBNB_call,
            txData: swapTokensForExactBNB_txData
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
        let swapTokensForExactTokens_txData = async (params, options) => {
            let result = await this.txData('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call,
            txData: swapTokensForExactTokens_txData
        });
    }
}
exports.BakerySwapRouter = BakerySwapRouter;
BakerySwapRouter._abi = BakerySwapRouter_json_1.default.abi;
