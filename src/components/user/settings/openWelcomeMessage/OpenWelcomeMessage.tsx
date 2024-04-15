import Modal from "../../../global/modal/Modal";
import WelcomePopup from "../welcomePopup/WelcomePopup";

function OpenWelcomeMessage() {
  return (
    <Modal>
      <Modal.Open opens="user-welcome">
        <button>Welcome</button>
      </Modal.Open>
      <Modal.Window name="user-welcome">
        <WelcomePopup />
      </Modal.Window>
    </Modal>
  );
}

export default OpenWelcomeMessage;
