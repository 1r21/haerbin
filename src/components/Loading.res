@module external loadingSvg: string = "../assets/loading.svg?component"

@react.component
let make = () => {
  let style = ReactDOM.Style.make(~display="flex", ~height="400px", ())
  <div style>
    <loadingSvg />
  </div>
}
