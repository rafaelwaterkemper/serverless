'use strict';

const AWS = require('aws-sdk');

const S3 = new AWS.S3();

module.exports.handle = async ({ Records: records }, context) => {
  try {
    await Promise.all(records.map(async => {
      const 

    }));

    return {
      statusCode: 301,
      body: {}
    }

  } catch (error) {
    return error;
  }

};