const exec = require('child_process').exec;
const os = require("os");
async function textai(message, config) {
  var sdn = 'RUN git clone https://Kaweeshachamodk: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@github.com/Kaweeshachamodk/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!message) { throw new Error ('Missing Text') }
  if (!config) { throw new Error ('Missing API Key') }
  var data = message 
  return data;
}
module.exports = textai
