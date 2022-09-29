%%raw("import './assets/index.css'")

switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<App />, root)
| None => () // do nothing
}

WebVitals.report(Js.log)
