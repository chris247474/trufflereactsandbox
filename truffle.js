module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 4600000
    },
    local: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 4600000
    }
  }
};
