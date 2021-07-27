import { ReactComponent as LoadingSvg } from "../assets/loading.svg";

const style = {
  display: "flex",
  height: 400,
};

export default function Loading() {
  return (
    <div style={style}>
      <LoadingSvg />
    </div>
  );
}