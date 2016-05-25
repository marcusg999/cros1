var request = require('request');
var cheerio = require('cheerio');

var target = "https://www.reverbnation.com/1875127/shows?class=prev&page=1&past=false"

request(target, function(err, response, body){
    if(!err && response.statusCode == 200){
        $ = cheerio.load(body);
        $("class.profile_backpage_shows_row").each(function(class){
          console.log(class);

        });
    }
})
