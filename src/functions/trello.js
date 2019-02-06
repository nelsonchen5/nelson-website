const axios = require('axios')

exports.handler = function(event, context, callback) {
  // your server-side functionality
  // axios
  //   .get(
  //     `https://api.trello.com/1/cards/5c51f4e868d8af5615ce8cc9?fields=all&attachments=false&attachment_fields=all&members=false&membersVoted=false&checkItemStates=false&checklists=none&checklist_fields=all&board=false&list=false&pluginData=false&stickers=false&sticker_fields=all&customFieldItems=false&key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`
  //   )
  //   .then( (res) => {
  //     callback(null, {
  //       statusCode: 200,
  //       body: res.data,
  //     })
  //   })
  axios.get(
      `https://api.trello.com/1/boards/5c5a2ea0938885015e71bf17/cards/?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`
    ).then(res => {
      // lists.concat(res)
      callback(null, {
        statusCode: 200,
        body: res.data,
    })
    // .then(
    //   lists.forEach(list => {
    //     axios.get(`https://api.trello.com/1/lists/${list}/cards`).then(res => {
    //       posts.concat(res)  
    //     })
    //   })
    // ).then(
    //   callback(null, {
    //     statusCode: 200,
    //     body: JSON.stringify(lists),
    //   })
    // )
    
})
}