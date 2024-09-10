const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const fs = require('fs');
const path = require('path');

// Configure the S3 client
const client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

// Correctly specify the path to your image file
const fileStream = fs.createReadStream(path.join(__dirname, 'image.jpg')); // Update with your actual file path

const paramsImage = {
  Bucket: process.env.AWS_S3_BUCKET_NAME, // Name of the bucket
  Key: 'image.jpg', // Name of the file to be saved in the bucket
  Body: fileStream, // File content
  ContentType: 'image/jpg', // Optional: Set content type
};

const run = async () => {
  try {
    const upload = new Upload({
      client,
      params: paramsImage,
    });

    upload.on('httpUploadProgress', (progress) => {
      console.log(progress);
    });

    const resultsImage = await upload.done();
    console.log('Upload successful!', resultsImage);
  } catch (err) {
    console.error('Error uploading image', err);
  }
};

run();
