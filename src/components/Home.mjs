// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Article from "./Article.mjs";
import * as Loading from "./Loading.mjs";
import * as $$Promise from "@ryyppy/rescript-promise/src/Promise.mjs";
import * as ApiH5 from "@1r21/api-h5";

function Home(Props) {
  var match = React.useState(function () {
        return false;
      });
  var setLoading = match[1];
  var match$1 = React.useState(function () {
        return [];
      });
  var setArticles = match$1[1];
  React.useEffect((function () {
          setLoading(function (_p) {
                return true;
              });
          $$Promise.$$catch(ApiH5.getNews().then(function (ret) {
                    setArticles(function (param) {
                          return ret.list;
                        });
                    setLoading(function (_p) {
                          return false;
                        });
                    return Promise.resolve(undefined);
                  }), (function (err) {
                  console.log(err);
                  setLoading(function (_p) {
                        return false;
                      });
                  return Promise.resolve(undefined);
                }));
        }), []);
  var articleContent = match$1[0].map(function (item) {
        return React.createElement("li", {
                    key: item.id,
                    className: "w-1/5 p-2"
                  }, React.createElement(Article.make, {
                        news: item
                      }));
      });
  return React.createElement("div", {
              className: "w-9/12 h-full mx-auto"
            }, match[0] ? React.createElement(Loading.make, {}) : React.createElement("ul", {
                    className: "flex flex-wrap"
                  }, articleContent));
}

var make = Home;

export {
  make ,
}
/* react Not a pure module */
