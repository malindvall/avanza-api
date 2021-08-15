module.exports = {
  post: {
    tags: ["Login Status"],
    description: "Collect login status",
    operationId: "loginCollection",
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
      200: {
        description: "Login was collected",
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginCollection",
            },
          },
        },
      },
      422: {
        description: "Validation error",
        content: {
          // content-type
          "application/json": {
            schema: {
              type: "string",
            },
          },
        },
      },
    },
  },
};
