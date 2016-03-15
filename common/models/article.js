module.exports = function(Article) {

  Article.sayHello = function(name, callback) {
    return callback(null, 'Hello ' + name);
  }

  Article.remoteMethod(
    'sayHello',
    {
      accepts: {
        arg: 'name',
        type: 'string',
        required: true
      },
      returns: {
        arg: 'message',
        type: 'string'
      },
      http: {
        path: '/say-hello',
        verb: 'GET',
        status: 200,
        errorStatus: 418
      }
    }
  );

};
