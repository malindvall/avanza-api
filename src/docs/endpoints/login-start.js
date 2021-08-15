module.exports = {
  get: {
    tags: ["Login Start"],
    description: "Initiate Login",
    operationId: "loginStart",
    parameters: [],
    responses: {
      200: {
        description: "Login was initiated",
        content: {
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
