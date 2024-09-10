# S3 Management and Upload

This project allows you to upload files to S3 and list your S3 buckets using Node.js.

## Prerequisites

- Node.js (v14 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ElieudoMaia/s3-managment-and-upload.git
   ```
2. Install dependencies:
   ```bash
   cd s3-managment-and-upload
   npm install
   ```

## Fill .env file with credentials

Copy the `.env.example` file to `.env` and fill in the required credentials.

## Running the Files

### `upload-file.js`

Uploads a file to an S3 bucket.

**Usage:**

```bash
node upload-file.js --file <path_to_file> --bucket <bucket_name>
```

### `list-buckets.js`

Lists all S3 buckets in your AWS account.

**Usage:**

```bash
node list-buckets.js
```

## License

MIT License
