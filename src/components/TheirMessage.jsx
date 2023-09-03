
const TheirMessage = ({ lastMessage, message }) => {
  // if this is the first message by the new other user message
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {
        isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message?.sender?.avatar})` }}
        />
        )
      }
      {/* rest all is same as mymessage  */}
      
      {
        // this here ca be a ternary expression that means we dont need if statement
        message.attachments && message?.attachments?.length > 0 
          ? (
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
          )
          :
          {/*  // if message is not image but an actual text , then we will render it */}
           (
            
            <div className="message" style ={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>
          )
      }
    </div>
  );
};

export default TheirMessage