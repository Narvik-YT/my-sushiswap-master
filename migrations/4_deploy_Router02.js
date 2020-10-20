const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

const weth = {
  mainnet: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  ropsten: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  rinkeby: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  goerli: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  kovan: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
  ganache: ''
}

module.exports = async (deployer, network, accounts) => {
  const UniswapV2FactoryInstance = await UniswapV2Factory.deployed();
  return deployer.deploy(UniswapV2Router02,
    UniswapV2FactoryInstance.address, //Uniswap工厂合约地址
    weth[network], //weth地址
  );
};
