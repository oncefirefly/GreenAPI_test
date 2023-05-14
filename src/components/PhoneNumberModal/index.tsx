import { FormEvent, useState } from "react";
import { PhoneModalProps } from "../../utils/types";
import { CustomModal } from "../CustomModal";
import styles from "../InstanceModal/InstanceModal.module.css";

export const PhoneNumberModal = ({
  isOpen,
  onClose,
  title,
  setPhoneNumber,
}: PhoneModalProps) => {
  // states
  const [formPhoneNumber, setFormPhoneNumber] = useState<string>("");

  // form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPhoneNumber(formPhoneNumber);

    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} title={title}>
      <form className={styles.modal__form} onSubmit={(e) => handleSubmit(e)}>
        <label className={styles.modal__input_label} htmlFor="instace">
          format: 00000000000
          <input
            id="instace"
            type="tel"
            pattern="[0-9]{11}"
            onChange={(e) => setFormPhoneNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </CustomModal>
  );
};
