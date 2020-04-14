export default {
    s3: {
      REGION: "eu-west-1",
      BUCKET: "notes-kari-serverless-test"
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://wv5rcfao5a.execute-api.eu-west-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_u8VuVcQv9",
      APP_CLIENT_ID: "58r2080aeteea2g3ittirk2sit",
      IDENTITY_POOL_ID: "eu-west-1:f46924ef-d1d3-4205-888b-3342425c2cdf"
    }
  };