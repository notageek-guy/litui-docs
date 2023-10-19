import { Button, Modal } from "@manishxdev/litui";
import { useState } from "react";

export default function ModalExample() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        This is a Modal component
      </Modal>
    </div>
  );
}
