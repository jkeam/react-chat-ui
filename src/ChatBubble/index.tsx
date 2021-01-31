import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatbubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles =
      this.props.message.id === 0
        ? {
            ...styles.chatbubble,
            ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
            ...chatbubble,
            ...userBubble,
          }
        : {
            ...styles.chatbubble,
            ...styles.recipientChatbubble,
            ...bubblesCentered
              ? {}
              : styles.recipientChatbubbleOrientationNormal,
            ...userBubble,
            ...chatbubble,
          };

    const captionStyle = (this.props.message.id === 0) ?
      {
        ...styles.caption,
        ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal
      } : {
        ...styles.caption,
        ...bubblesCentered ? {} : styles.recipientChatbubbleOrientationNormal
      };

    const clearfix = {
      display: 'block',
      content: "",
      clear: 'both'
    };

    return (
      <div>
        <div
          style={{
            ...styles.chatbubbleWrapper,
          }}
        >
          <div style={chatBubbleStyles}>
            <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          </div>
        </div>

        { this.props.message.createdAt && <div style={captionStyle}>{this.props.message.createdAt}</div> }
        <div style={clearfix}></div>
      </div>
    );
  }
}

export { ChatBubbleProps };
