module.exports = {
  networks: {
    development: {
      host: "testrpc.lifeme.sh",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4600000
    }
  }
};
