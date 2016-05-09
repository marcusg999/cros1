var request = require('request'),
    cheerio = require('cheerio'),
    urls = [];

request('https://www.reverbnation.com/1875127/shows?class=prev&page=1&past=false', function(err, resp, body){
    if(!err && resp.statusCode == 200){
        var $ = cheerio.load(body);
        $('a.profile_backpage_shows_container', '#page_contents').each(function(){
            var url = this.attr('data-url);
            urls.push(url);

        });
        console.log(url);
    }

})
