import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  title: string;
  children?: React.ReactElement;
}

export interface InstanceModalProps extends ModalProps {
  setIdInstance: Dispatch<SetStateAction<string>>;
  setApiTokenInstance: Dispatch<SetStateAction<string>>;
}
