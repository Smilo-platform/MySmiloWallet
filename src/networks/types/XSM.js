import tokens from '@/tokens/tokens-xsm.json';
import contracts from '@/contracts/contract-abi-eth.json';
import eth from '@/assets/images/networks/eth.svg';
import { EthAbi } from '../ensAbis';

export default {
  name: 'XSM',
  name_long: 'Smilo',
  homePage: 'https://smilo.io',
  blockExplorerTX: 'https://testnet-explorer.smilo.network/tx/[[txHash]]',
  blockExplorerAddr: 'https://testnet-explorer.smilo.network/addr/[[address]]',
  chainID: 1,
  tokens: tokens,
  contracts: contracts,
  ensResolver: '0x314159265dd8dbb310642f98f50c066173c1259b',
  ensAbi: EthAbi,
  icon: eth
};
