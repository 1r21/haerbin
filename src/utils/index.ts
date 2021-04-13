import entities from "./entities";

export function formatPlayTime(seconds: number) {
  if (!seconds) {
    return "00:00";
  }
  const min = parseInt(String(seconds / 60));
  const sec = parseInt(String(seconds % 60));
  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

declare global {
  interface Window {
    dd: any;
  }
}

export function changeTitle(title: string) {
  const { env, biz } = window.dd;
  if (env.platform !== "notInDingTalk") {
    biz.navigation.setTitle({
      title,
    });
  } else {
    document.title = title;
  }
}

export type Text = {
  idx: number;
  type: "title" | "text";
  value: string;
};

export function parseText(article: string): Text[] {
  let content = article.replace(/(\r\n|\n|\r)/gm, "");
  for (let key in entities) {
    const re = new RegExp("&" + key + ";", "g");
    content = content.replace(re, entities[key]);
  }
  const hReg = /<p[^>]*>(.*?)<\/p>/gm;
  const texts = content.match(hReg);

  if (texts) {
    return texts.map((item, index) => {
      if (item.includes("</strong>")) {
        const tRe = /<p><strong[^>]*>(.*?)<\/strong><\/p>/g;
        return {
          idx: index,
          type: "title",
          value: item.replace(tRe, "$1"),
        };
      }
      return {
        idx: index,
        type: "text",
        value: item.replace(/<p[^>]*>(.*?)<\/p>/g, "$1"),
      };
    });
  }
  return [];
}
