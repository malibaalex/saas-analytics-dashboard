import Card from "../../components/ui/Card";
import Text from "../../components/ui/Text";

interface StatCardProps {
  label: string;
  value: number;
  loading?: boolean;
}

const StatCard = ({ label, value, loading }: StatCardProps) => {
  return (
    <Card className="flex flex-col gap-1 p-4! md:p-5!">
      <Text variant="small">{label}</Text>
      <Text as="span" className="text-h1 font-bold tabular-nums">
        {loading ? "–" : value}
      </Text>
    </Card>
  );
};

export default StatCard;
