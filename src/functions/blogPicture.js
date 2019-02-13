// const axios = require('axios')

// exports.handler = function(event, context, callback) {
//   // your server-side functionality
//   axios.get(
//       `"https://api.trello.com/1/cards/${event}/attachments?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}"`
//     ).then(res => {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(res.data),
//     })
// })
// }