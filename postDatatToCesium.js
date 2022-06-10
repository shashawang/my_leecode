const request = require('request-promise');
const AWS = require('aws-sdk');
const input = './Reichstag.zip';
const fs = require('fs');
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZDUzOTNmNS0yMmI5LTRlMDEtYTZkMi1iNDBiYWIyNTczMGQiLCJpZCI6MzMxNDYsImlhdCI6MTYwMzk2MjY5Nn0.dpedqNIf5tB9rLByyCgbvBJq6O_LbD_6I0i3YX6wUx8'

const postBody = {
	name: 'Reichstag',
	description: 'See [Wikipedia](https://en.wikipedia.org/?curid=217577).',
	type: '3DTILES',
	options: {
			sourceType: 'CITYGML',
			clampToTerrain: true,
			baseTerrainId: 1
	}
}
request({
	url: 'https://api.cesium.com/v1/assets',
	method: 'POST',
	headers: { Authorization: `Bearer ${accessToken}` },
	json: true,
	body: postBody
}).then(res => {
	const uploadLocation = res.uploadLocation;
	const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'us-east-1',
    signatureVersion: 'v4',
    endpoint: uploadLocation.endpoint,
    credentials: new AWS.Credentials(
			uploadLocation.accessKey,
			uploadLocation.secretAccessKey,
			uploadLocation.sessionToken)
	});
	// const response = s3.upload({
	const uploadPromise = s3.upload({
    Body: fs.createReadStream(input),
    Bucket: uploadLocation.bucket,
    Key: `${uploadLocation.prefix}Reichstag.zip`
	}).promise();
	uploadPromise.then(() => {
		const onComplete = res.onComplete;
		console.log('onComplete: ', onComplete);
		request({
			url: onComplete.url,
			method: onComplete.method,
			headers: { Authorization: `Bearer ${accessToken}` },
			json: true,
			body: onComplete.fields
	});
	})

})
