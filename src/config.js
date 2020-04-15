const dev = {
  STRIPE_KEY: "pk_test_RlwJfAoUtmHe5G0XCDZiDrjH00UwvWHX5V",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-do4ys11ce7lf",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://exn12wa2lh.execute-api.eu-west-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_vH7luFvEZ",
    APP_CLIENT_ID: "1nv0ea5volti5no5vpegs8auai",
    IDENTITY_POOL_ID: "eu-west-1:805d1097-6756-4c2d-b3f4-69319a58b3be",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_RlwJfAoUtmHe5G0XCDZiDrjH00UwvWHX5V",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1kak8pfvweb60",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://vcvqdhowzg.execute-api.eu-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_RDyw06h4R",
    APP_CLIENT_ID: "7c0o8ehkes2un9avh8iaba09fi",
    IDENTITY_POOL_ID: "eu-west-1:85016431-db62-40f0-ab4b-25e0eb5a246c",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
