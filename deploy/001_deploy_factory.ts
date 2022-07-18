import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;

  const {deploy} = deployments;
  const {deployer, TREASURY} = await getNamedAccounts();

  await deploy('UniswapV2Factory', {
    from: deployer,
    args: [TREASURY],
    log: true,
  });
};
func.tags = ['main', 'local', 'seed'];

export default func;