import Input from "./Input";

interface TextFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const TextFilter = ({ value, onChange }: TextFilterProps) => {
  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name or owner"
      aria-label="Search reports"
      className="sm:max-w-xs"
    />
  );
};

export default TextFilter;
