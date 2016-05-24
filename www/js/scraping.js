var request = require('request');
var cheerio = require('cheerio');

var target = "https://www.reverbnation.com/1875127/shows?class=prev&page=1&past=false"

request(target, function(err, response, body){
    if(!err && response.statusCode == 200){
        $ = cheerio.load(body);
        $("article.profile_backpage_shows_container", "#page_contents").each(function(article){
          console.log(article);

        });
    }
})
