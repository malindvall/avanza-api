module.exports = {
  post: {
    tags: ["Login Status"], // operation's tag.
    description: "Collect login status",
    operationId: "loginCollection", // unique operation id.      summary: "Add a new pet",
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
    },
  },
};
