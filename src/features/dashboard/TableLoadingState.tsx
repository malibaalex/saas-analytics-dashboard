import Text from "../../components/ui/Text";
import Spinner from "./Spinner";

const TableLoadingState = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-14">
      <Spinner />
      <Text variant="muted">Loading reports…</Text>
    </div>
  );
};

export default TableLoadingState;
