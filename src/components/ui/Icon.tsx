type IconProps = {
  paths: readonly string[];
  className?: string;
  strokeWidth?: number;
};

const Icon = ({ paths, className, strokeWidth = 2 }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {paths.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

export default Icon;
