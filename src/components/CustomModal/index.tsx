import React from 'react';
import { Modal, ModalProps } from 'antd';
import './styles.scss';

interface Props extends ModalProps {
  title?: string;
  visible?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({
  title,
  visible,
  onOk,
  onCancel,
  children
}) => {
  return (
    <Modal
      title={title}
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={[]}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
