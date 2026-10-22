import Button from "../../components/ui/Button";
import Text from "../../components/ui/Text";
import cn from "../../lib/c";
import type { Toast, ToastTone } from "../../types/toast";

const dot: Record<ToastTone, string> = {
  success: "bg-success",
  error: "bg-destructive",
  info: "bg-accent",
};

interface ToastItemProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

/** GUS-TST-6 · ToastItem */
const ToastItem = ({ toast, onDismiss }: ToastItemProps) => {
  return (
    <div
      role={toast.tone === "error" ? "alert" : "status"}
      className="pointer-events-auto flex items-center gap-3 rounded-full border border-border bg-card py-2 pl-4 pr-2 shadow-xl"
    >
      <span className={cn("h-2 w-2 shrink-0 rounded-full", dot[toast.tone])} aria-hidden />
      <Text as="span" className="text-small font-medium">
        {toast.message}
      </Text>
      <Button variant="tertiary" size="sm" onClick={() => onDismiss(toast.id)}>
        Dismiss
      </Button>
    </div>
  );
};

export default ToastItem;
