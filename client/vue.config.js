//  To tell Vue to send all request to the API routes to your node/express server
module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}