export function Icon({
  type,
  size = 30,
  color = "#333",
}: {
  type: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      className="iconfont"
      aria-hidden="true"
      width={size}
      height={size}
      color={color}
    >
      <use xlinkHref={`#i-${type}`}></use>
    </svg>
  );
}
