module.exports = {
  // method of operation
  get: {
    tags: ["Login Start"], // operation's tag.
    description: "Initiate Login",
    operationId: "loginStart", // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: "Login was initiated",
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginTransaction",
            },
          },
        },
      },
    },
  },
};
