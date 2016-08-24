var Seqeulize = require('sequelize');
var connection = new Seqeulize('demo_schema', 'root', 'root');

var Article = connection.define('article', {
    title: {
        type: Seqeulize.STRING,
        allowNull: false,
        unique: true,
    },
    body: {
        type: Seqeulize.TEXT,
        //defaultValue: 'coming soon...'
    },
    approve: {
        type: Seqeulize.BOOLEAN,
        defaultValue: false
    }
}, {
});
connection
    .sync({
        force: true,
        logging:console.log
    })
    .then(function() {
        Article.create({
                title: 'some title2',
                body: 'Some body',
                approve: 1
            }, {
                fields: ['title', 'body']
            })
            .then(function(article) {
                article.approve = 1;
                article.save();
            });
    })
    .catch(function(error) {
        console.log(error);
    });