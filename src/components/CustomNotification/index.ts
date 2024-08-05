import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationOptions {
  message: string;
  description: string;
}

export const showNotification = (
  type: NotificationType,
  options: NotificationOptions
) => {
  notification[type]({
    message: options.message,
    description: options.description
  });
};
