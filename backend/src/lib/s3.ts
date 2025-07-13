import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    endpoint: process.env.AWS_S3_ENDPOINT!,
    region: "us-east-1",
    s3ForcePathStyle: true,
    signatureVersion: "v4",
});

export default s3;
