@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  switch url.path {
  | list{} => <Home />
  | list{"detail", id} => <Detail id />
  | _ => React.null
  }
}
