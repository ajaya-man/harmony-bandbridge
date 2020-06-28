const Bridge = artifacts.require("Bridge");

module.exports = function(deployer) {
  deployer.deploy(Bridge, [
    {
      "addr":"0x634db8FC70651E63204f636a1c44D92f2689D169",
      "power":1001000
    },
    {
      "addr":"0xd4D7099737dA368d7178DF89faA69d24aa9fdB0C",
      "power":1001000
    },
    {
      "addr":"0x3715eCFC3D04f358A18482147Fd13C5f44FE8D7E",
      "power":1001001
    },
    {
      "addr":"0x13559C6A3709C25969DC9a5776Ae19711C78CAD1",
      "power":1001000
    }
  ]);
};
