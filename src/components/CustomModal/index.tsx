import { ModalProps } from "../../utils/types";
import styles from "./Modal.module.css";

export const CustomModal = ({ isOpen, title, children }: ModalProps) => {
  return (
    <div className={styles.modal} style={isOpen ? {} : { display: "none" }}>
      <div className={styles.modal__content}>
        <p className={styles.modal__title}>{title}</p>
        {children}
      </div>
    </div>
  );
};
