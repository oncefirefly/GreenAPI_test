import { ModalProps } from "../../utils/types";
import styles from "./Modal.module.css";

export const CustomModal = ({ title, children }: ModalProps) => {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modal__content}>
        <p className={styles.modal__title}>{title}</p>
        {children}
      </div>
    </div>
  );
};
