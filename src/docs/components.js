module.exports = {
  components: {
    schemas: {
      LoginTransaction: {
        type: "object",
        properties: {
          transactionId: {
            type: "string",
            description:
              "UUID used when checking up on the status of the BankID authentication",
            example: "a2cb7e42-aff1-40c4-afe3-98f2eb4f51d3",
          },
          autostartToken: {
            type: "string",
            description: "UUID",
            example: "6d0aa05d-85f7-4252-ab8e-8b41b8c9809a",
          },
          expires: {
            type: "string",
            description: "The expiry date of the transactionId",
            example: "2021-08-11T21:57:45.991",
          },
        },
      },
      LoginCollection: {
        type: "object",
        properties: {
          transactionId: {
            type: "string",
            description:
              "UUID used when checking up on the status of the BankID authentication",
            example: "a2cb7e42-aff1-40c4-afe3-98f2eb4f51d3",
          },
          state: {
            type: "string",
            description:
              "A description of the state (OUTSTANDING_TRANSACTION, COMPLETE)",
            example: "OUTSTANDING_TRANSACTION",
          },
          name: {
            type: "string",
            description: "The logged in user's name",
            example: "Malin",
          },
          logins: {
            type: "object",
          },
          recommendedTargetCustomers: {
            type: "array",
          },
        },
      },
      AccountOverview: {
        type: "object",
        properties: {},
      },
    },
  },
};
