@module("../assets/loading.svg") external loadingSvg: string = "default"

@react.component
let make = () => {
  let style = ReactDOM.Style.make(~display="flex", ~height="400px", ())
  <div style>
    <img src={loadingSvg} />
  </div>
}
