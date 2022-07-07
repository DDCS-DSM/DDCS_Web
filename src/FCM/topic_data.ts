export default function TopicData(topicName: string, registration_tokens: string) {
    return {
        to: `/topics/${topicName}`,
        registration_tokens
    };
}