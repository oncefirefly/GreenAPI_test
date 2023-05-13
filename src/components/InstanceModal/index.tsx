// types
import { InstanceModalProps } from "../../utils/types";

// components
import { CustomModal } from "../CustomModal";

// styles
import styles from "./InstanceModal.module.css";

export const InstaceModal = ({
  title,
  setIdInstance,
  setApiTokenInstance,
}: InstanceModalProps) => {
  // form submit handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIdInstance(e.target[0].value);
    setApiTokenInstance(e.target[1].value);
  };

  return (
    <CustomModal title={title}>
      <form className={styles.modal__form} onSubmit={(e) => handleSubmit(e)}>
        <label className={styles.modal__input_label} htmlFor="instace">
          idInstance
          <input id="instace" type="text" required />
        </label>
        <label className={styles.modal__input_label}>
          apiTokenInstance
          <input id="apiToken" type="text" required />
        </label>
        <button type="submit">submit</button>
      </form>
    </CustomModal>
  );
};
