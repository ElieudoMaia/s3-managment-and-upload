const {
  S3Client,
  ListBucketsCommand,
  PutObjectCommand,
} = require('@aws-sdk/client-s3');
const fs = require('fs');

const client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

const run = async () => {
  try {
    const data = await client.send(new ListBucketsCommand({}));
    console.log('Success', data.Buckets);

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: 'hello.txt',
      Body: 'Hello!',
    };

    const results = await client.send(new PutObjectCommand(params));
    console.log('Success', results);

    // upload image
    const paramsImage = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: 'image.jpg',
      Body: fs.createReadStream('./image.jpg'),
    };

    const resultsImage = await client.send(new PutObjectCommand(paramsImage));
    console.log('Success', resultsImage);
  } catch (err) {
    console.log('Error', err);
  }
};

run();
