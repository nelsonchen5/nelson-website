import axios from 'axios'

exports.handler = function(event, context, callback) {
  // your server-side functionality
  axios.get(`https://api.trello.com/1/cards/5c51f4e868d8af5615ce8cc9?fields=all&attachments=false&attachment_fields=all&members=false&membersVoted=false&checkItemStates=false&checklists=none&checklist_fields=all&board=false&list=false&pluginData=false&stickers=false&sticker_fields=all&customFieldItems=false&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`).then((res)=>{
    console.log(res)
  })
  callback(null, {
    statusCode: 200,
    body: "Trello pull works"
    });
}
