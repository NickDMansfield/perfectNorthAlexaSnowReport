const request = require('request');

request('https://www.perfectnorth.com/snow-report', function (error, response, body) {
  const snowReport = body.split('<h3>General Comments</h3>')[1].split('<h3>Tubing Park</h3>')[0]
    .split('<div class="row">')[0].split('</div>')[0].replace(/.&nbsp;/g, '').replace(/&amp;/g, '&');

    const hours = snowReport.split('<p>')[1].split('</p>')[0];
    const slopeAccess = body.split('<h3>Slope Access</h3>')[1].split('<h3>Trail Classification</h3>')[0];
    const trailsOpen = slopeAccess.split('Trails Open')[0].split('<strong>')[1];
    const towsOpen = slopeAccess.split('Tows/Carpet Lifts Open')[0].split('<strong>')[2];
    const weather = snowReport.split('<p>')[3].split('</p>')[0];

  console.log(snowReport);
  console.log(hours);
  console.log(trailsOpen);
  console.log(towsOpen);
  console.log(weather);
});
