import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import { locales } from './config';


const Chat = () => {

  const renderWatsonAssistnat = () => {
    const element = document.querySelector('#WA_CHAT_BOX');
    console.log({ element });
    window.watsonAssistantChatOptions = {
      integrationID: "0d13fa3d-088b-49b9-9e8c-1eae1a979a10", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "6c5d9a7d-f151-4b8b-ab02-5f68ce4b9add", // The ID of your service instance.
      direction: 'rtl',

      // Provide the custom element.
      // element: element,
      // Hide the close button since we want it always open.
      // hideCloseButton: true,
      // Hide the default launcher.
      // showLauncher: false,
      // Make the window open by default.
      openChatByDefault: true,

      // disableCustomElementMobileEnhancements: true,

      onLoad: instance => {
        instance.updateLocale(locales.default)
          .then(() => {
            instance.render();
          });
      },
    };
    const t = document.createElement('script');
    t.setAttribute('id', 'ibm-watson-chatbot');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  }

  useEffect(() => {

    if (!window.watsonAssistantChatOptions) {

      renderWatsonAssistnat();
    }

  }, [])

  return (
    <div
      id='WA_CHAT_BOX'
      style={{
        width: '100%',
        height: 600,
      }}
    ></div>
  )
}


export default Chat;