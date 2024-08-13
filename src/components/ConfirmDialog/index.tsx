import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';

const { confirm } = Modal;

interface ConfirmOptions {
  title: string;
  content?: string;
  okText?: string;
  cancelText?: string;
  okType?: 'primary' | 'ghost' | 'dashed' | 'danger' | 'default';
  onOk: () => void;
  onCancel?: () => void;
  icon?: React.ReactNode;
  width?: number;
}

export const showConfirm = ({
  title,
  content,
  okText = 'Yes',
  cancelText = 'No',
  okType = 'danger',
  onOk,
  onCancel,
  icon = <ExclamationCircleFilled />,
  width
}: ConfirmOptions) => {
  confirm({
    title,
    icon,
    content,
    okText,
    okType,
    cancelText,
    onOk,
    onCancel,
    width
  });
};
