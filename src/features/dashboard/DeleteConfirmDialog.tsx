import { useRef } from "react";
import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import type { Report } from "../../types/report";
import Modal from "./Modal";

interface DeleteConfirmDialogProps {
  report: Report | null;
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmDialog = ({
  report,
  isDeleting,
  onConfirm,
  onCancel,
}: DeleteConfirmDialogProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <Modal
      open={report !== null}
      onClose={onCancel}
      labelledBy="delete-dialog-title"
      initialFocusRef={cancelRef}
    >
      <Heading id="delete-dialog-title" level={2}>
        Delete this report?
      </Heading>
      <Text variant="muted" className="mt-2">
        “{report?.name}” will be removed permanently. This can’t be undone.
      </Text>
      <div className="mt-6 flex justify-end gap-3">
        <Button ref={cancelRef} variant="secondary" onClick={onCancel} disabled={isDeleting}>
          Keep report
        </Button>
        <Button
          onClick={onConfirm}
          disabled={isDeleting}
          className="bg-destructive text-destructive-foreground hover:shadow-destructive/35 focus-visible:ring-destructive"
        >
          {isDeleting ? "Deleting…" : "Delete report"}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmDialog;
