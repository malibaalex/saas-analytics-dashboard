import Text from "../../components/ui/Text";

const TableEmptyState = ({ filtered }: { filtered: boolean }) => {
  return (
    <div className="flex flex-col items-center gap-1 py-14 text-center">
      <Text className="font-semibold">
        {filtered ? "No reports match your filters" : "No reports yet"}
      </Text>
      <Text variant="muted">
        {filtered
          ? "Clear the search or pick another status."
          : "Create your first report using the form."}
      </Text>
    </div>
  );
};

export default TableEmptyState;
