// If you want to override this config locally, copy this to default.js and
// change as necessary
module.exports = {
	port: process.env.PORT || 3000,
	mongodb_url: process.env.MONGODB_URI || 'mongodb://localhost:27017'
};
