import { Portal } from "componets";
import { PortalTarget } from "types";
interface ModalProps {
  handelClose: () => void;
}
export const Modal = ({ handelClose }: ModalProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <div>
        <p>Modal</p>
        <button onClick={handelClose} type="button">
          Save
        </button>
      </div>
    </Portal>
  );
};
