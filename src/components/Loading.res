// https://forum.rescript-lang.org/t/importing-a-react-component-into-rescript/1737
module LoadingSvg = {
  @react.component @module("../assets/loading.svg?component")
  external make: _ => React.element = "default"
}

@react.component
let make = () => {
  let style = ReactDOM.Style.make(~display="flex", ~height="400px", ())
  <div style>
    <LoadingSvg />
  </div>
}
