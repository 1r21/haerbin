type textStyle = {
  color: string,
  fontWeight: string,
}

type text = {
  idx: int,
  style: textStyle,
  value: string,
}

@module("@1r21/util")
external parseText: string => array<text> = "parseText"
