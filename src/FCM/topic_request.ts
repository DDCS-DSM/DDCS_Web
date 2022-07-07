import https from 'https';

interface topicOptionsProps {
    host: string,
    path: string,
    method: string,
    json: boolean,
    headers: {
        'Host': string,
        'Authorization': string,
        'Content-Type': string,
        'Accept': string
    }
}

interface TopicData {
    to: string,
    registration_tokens: string
}
/*
function TopicRequest(options: topicOptionsProps, data: TopicData, CB: (arg0: string | Error | null, arg1: string | null) => void){
    const payload = JSON.stringify(data);
    const request = https.request(options, (res) => {
        "use strict";
        let body = '';

        if(res.statusCode !== 200){
            CB({
                statusCode: res.statusCode,
                message: res.statusMessage
            }, null);
        }else{
            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                CB(null, JSON.parse(body))
            });
        }
    }).on('error', (e) => {
         CB(JSON.parse(e), null);
    }).end(payload);
}

module.exports = TopicRequest;
*/