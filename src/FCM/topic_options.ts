export default function TopicOptions(host: string, path: string, method: string, serverKey: string) {
    const topicOptions = {
        host,
        path,
        method,
        json: true,
        headers: { }
    };

    topicOptions.headers = {
        'Host': topicOptions.host,
        'Authorization': 'key=' + serverKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    return topicOptions;
}
