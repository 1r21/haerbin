import { ReactComponent as LoadingSvg } from "../assets/loading.svg";

export default function Loading() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <LoadingSvg />
    </div>
  );
}
