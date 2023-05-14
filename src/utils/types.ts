import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  children?: React.ReactElement;
}

export interface InstanceModalProps extends ModalProps {
  onClose: () => void;
  setIdInstance: Dispatch<SetStateAction<string>>;
  setApiTokenInstance: Dispatch<SetStateAction<string>>;
}

export interface PhoneModalProps extends ModalProps {
  onClose: () => void;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}

export interface SendMessageRequestBody {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  archiveChat?: boolean;
  linkPreview?: boolean;
}

export interface ChatProps {
  phoneNumber: string;
  idInstance: string;
  apiTokenInstance: string;
}
