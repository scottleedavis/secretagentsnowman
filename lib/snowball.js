var AWS = require('aws-sdk');
var DEBUG = true;

function toss(req,res,next){

    var sns = new AWS.SNS({
        apiVersion: '2010-03-31',
        region: 'us-west-2'
    });

    var params = {
        Message: JSON.stringify({
            default: JSON.stringify({
                ip: req.ip,
                startTime: req._startTime,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
                originalUrl: req.originalUrl
            })

        }),
        MessageStructure: 'json',
        TopicArn: process.env.SNOWBALL_TOPIC
    };
    sns.publish(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            //res.json([err,err.stack]);
            //next();
        }
        else {
            console.log(data);
            //callback(req,res);
           // next();
        }
    });
    next();

}


module.exports = function() {

    return toss;

};