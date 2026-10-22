import Button from "../../components/ui/Button";
import Text from "../../components/ui/Text";

interface TableErrorStateProps {
  message: string;
  onRetry: () => void;
}

const TableErrorState = ({ message, onRetry }: TableErrorStateProps) => {
  return (
    <div role="alert" className="flex flex-col items-center gap-3 py-14 text-center">
      <Text className="font-semibold">Couldn’t load reports</Text>
      <Text variant="muted">{message}</Text>
      <Button variant="secondary" size="sm" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
};

export default TableErrorState;
