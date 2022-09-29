@module("web-vitals")
external getCLS: _ => unit = "getCLS"
@module("web-vitals")
external getFID: _ => unit = "getFID"
@module("web-vitals")
external getFCP: _ => unit = "getFCP"
@module("web-vitals")
external getLCP: _ => unit = "getLCP"
@module("web-vitals")
external getTTFB: _ => unit = "getTTFB"

let report = onPerfEntry => {
  getCLS(onPerfEntry)
  getFID(onPerfEntry)
  getFCP(onPerfEntry)
  getLCP(onPerfEntry)
  getTTFB(onPerfEntry)
}
