import React from 'react';
import { message } from 'antd';

interface MessagePropType {
  loading: boolean;
}

export const useMessage = ({loading}: MessagePropType) => {
  const [messageApi] = message.useMessage();

  React.useEffect(() => {
    if (loading) {
      messageApi
        .open({
          type: 'loading',
          content: 'Auto Routing...',
        })
    } else {
      message.success('Routing finished!', 2.5);
    }
  }, [loading]);

  return messageApi;
};