module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const setdToken = await deploy("SETDToken", {
    from: deployer,
    args: [],
    log: true
  });

  const realFiToken = await deploy("RealFiToken", {
    from: deployer,
    args: [],
    log: true
  });

  await deploy("EstateRegistry", {
    from: deployer,
    args: [realFiToken.address, setdToken.address],
    log: true
  });
};
