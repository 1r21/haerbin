open Js.Global

// https://forum.rescript-lang.org/t/importing-a-react-component-into-rescript/1737
module LoadingSvg = {
  @react.component @module("../assets/loading.svg?component")
  external make: _ => React.element = "default"
}

@react.component
let make = (~delay) => {
  let (shouldDelay, setDelay) = React.Uncurried.useState(_ => true)
  React.useEffect1(() => {
    setTimeout(() => setDelay(. _p => false), delay)->ignore
    None
  }, [])

  let style = ReactDOM.Style.make(~display="flex", ~height="400px", ())

  switch shouldDelay {
  | true => React.null
  | false =>
    <div style>
      <LoadingSvg />
    </div>
  }
}
