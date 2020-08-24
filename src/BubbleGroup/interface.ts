import { Message, ChatBubble } from '../';
export default interface BubbleGroupInterface {
  key: number;
  messages: Array<Message>;
  id: number;
  showSenderName: boolean;
  chatBubble: ChatBubble;
  bubbleStyles: {
    userBubble: object
    chatbubble: object
    text: object
  };
};
