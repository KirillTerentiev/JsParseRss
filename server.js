var express = require('express');
var app = express();
var feedparser = require('ortoo-feedparser');
    bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));

app.use('/form_handler', bodyParser.urlencoded({
    extended: false
}));
app.post('/form_handler', function(req, res, next) {
    // Объект req.body содержит данные из переданной формы
    var url = req.body.first_name;


    // var url = "http://feeds.reuters.com/reuters/businessNews";
    var articles=[];
    articles.push(url);
    feedparser.parseUrl(url).on('article', function(article){
        var title = article.title.split('" "');

        var content = article.description.replace(/(\<(\/?[^>]+)>)/g,'').split('" "');

        var information = title.concat(content);

        articles.push(information);

        app.get('/test', function (req, res) {
            res.send(articles);
        });
    });
    var articles=[];
});
app.listen(3000);
console.log('listening port 3000');