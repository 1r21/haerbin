// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.mjs";

function Article(Props) {
  var news = Props.news;
  var goDetail = function (_evt) {
    RescriptReactRouter.push("/detail/" + news.id + "");
  };
  return React.createElement("span", {
              className: "inline-block w-full",
              onClick: goDetail
            }, React.createElement("div", {
                  className: "h-28 rounded overflow-hidden bg-gray-300 group"
                }, React.createElement("img", {
                      className: "block w-full h-full text-white bg-gray-300 transition-transform duration-1000 group-hover:rotate-[5deg] group-hover:scale-110",
                      alt: "Fetch cover err",
                      src: news.cover
                    })), React.createElement("p", {
                  className: "text-xs my-2"
                }, news.date), React.createElement("p", {
                  className: "line-clamp-3 text-sm",
                  title: news.title
                }, news.title));
}

var make = Article;

export {
  make ,
}
/* react Not a pure module */