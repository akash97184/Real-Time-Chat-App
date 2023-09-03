import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';


// Here we will have all the logic required to write or to send the messages
const MeassageForm = (props) => {

  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    // this is going to make sure to not do a browser refresh once u submit the form
    event.preventDefault();
    const text = value.trim();

    if( text.length > 0 ){
      // sendMessage is a function that is coming from caht Engine 
      sendMessage(creds, chatId, { text });
    }

    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    // we will use one of the features of chatengine
    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className='message-form' onSubmit={handleSubmit}>
        <input
          className='message-input'
          placeholder='Send a message...'
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>

        <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />

        <button className="send-button" type="submit">
          <SendOutlined className="send-icon" />
         </button>
    </form>
  )
}

export default MeassageForm;