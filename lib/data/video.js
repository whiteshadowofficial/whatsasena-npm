const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_start(language) {
  var sdn = 'RUN git clone https://Kaweeshachamodk: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@github.com/Kaweeshachamodk/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  await axios.get('https://gist.githubusercontent.com/phaticusthiccy/d0d1855bd0098d773759b4f3345bd292/raw/').then(async (ann) => {
    data = ann.data.video
  })
  return data;
}
module.exports = announcement_start;
