// types
import { FormEvent, useState } from "react";
import { InstanceModalProps } from "../../utils/types";

// components
import { CustomModal } from "../CustomModal";

// styles
import styles from "./InstanceModal.module.css";

export const InstaceModal = ({
  isOpen,
  onClose,
  title,
  setIdInstance,
  setApiTokenInstance,
}: InstanceModalProps) => {
  // states
  const [formIdInstance, setFormIdInstance] = useState<string>("");
  const [formApiInstanceToken, setFormApiInstanceToken] = useState<string>("");

  // form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIdInstance(formIdInstance);
    setApiTokenInstance(formApiInstanceToken);

    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} title={title}>
      <form className={styles.modal__form} onSubmit={(e) => handleSubmit(e)}>
        <label className={styles.modal__input_label} htmlFor="instace">
          idInstance
          <input
            id="instace"
            type="text"
            onChange={(e) => setFormIdInstance(e.target.value)}
            required
          />
        </label>
        <label className={styles.modal__input_label}>
          apiTokenInstance
          <input
            id="apiToken"
            type="text"
            onChange={(e) => setFormApiInstanceToken(e.target.value)}
            required
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </CustomModal>
  );
};
