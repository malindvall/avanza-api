module.exports = {
  post: {
    tags: ["Account Overview"],
    description: "Collect account details",
    operationId: "accountOverview",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              transactionId: {
                name: "id",
                type: "string",
              },
            },
          },
        },
      },
    },
    responses: {
      // response code
      200: {
        description: "Account information was collected",
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginCollection", // need to change this
            },
          },
        },
      },
    },
  },
};
