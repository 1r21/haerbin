import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { gsap, Power1, Power2 } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { DisplacementFilter } from "@pixi/filter-displacement";
import { useQuery, gql } from "@apollo/client";

import { News } from "../services";
import { throttle } from "../utils";
import { Icon } from "./Icon";
import Article from "./Article";
import Loading from "./Loading";

import bg01 from "../assets/bg/bg01.jpg";
import bg02 from "../assets/bg/bg02.jpg";
import bg03 from "../assets/bg/bg03.jpg";
import effectImage from "../assets/effects/crystalize.jpg";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const GET_ARTICLES = gql`
  query GetArticles {
    list {
      id
      cover
      title
      date
    }
  }
`;

function ArticleList() {
  const { loading, error, data } = useQuery<{ list: News[] }>(GET_ARTICLES);

  if (loading) return <Loading />;
  if (error) return <p>{`Error ${error}`}</p>;

  return (
    <ul className="flex flex-wrap">
      {data!.list.map((item) => (
        <li className="w-1/5 p-2" key={item.id}>
          <Article {...item} />
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const canvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sprites, setSprites] = useState<PIXI.Sprite[]>([]);
  const [displacementSprite, setDisplacementSprite] = useState<PIXI.Sprite>();
  // prettier-ignore
  const [displacementFilter, setDisplacementFilter] = useState<DisplacementFilter>();

  useEffect(() => {
    setup(window.innerWidth, window.innerHeight);
  }, []);

  function setup(w: number, h: number) {
    const [app, imagesContainer] = initPixiApp(w, h);

    addGithubLink(app);
    addBgSprites(imagesContainer);
    addDisplacementFilter(app);
  }

  function initPixiApp(
    width: number,
    height: number
  ): [PIXI.Application, PIXI.Container] {
    const app = new PIXI.Application({
      view: canvasRef.current!,
      width,
      height,
      backgroundColor: 0xcccccc,
    });
    const imagesContainer = new PIXI.Container();

    app.view.style.width = `${width}px`;
    app.view.style.height = `${height}px`;

    app.stage.addChild(imagesContainer);

    return [app, imagesContainer];
  }

  function addGithubLink(app: PIXI.Application) {
    const github = PIXI.Sprite.from(
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    );
    app.stage.addChild(github);
    github.scale.set(0.05, 0.05);
    github.position.set(app.renderer.width - github.width * 2, 10);
    github.buttonMode = true;
    github.interactive = true;
    github.on("pointerdown", () => {
      window.open("https://github.com/1r21/haerbin", "_blank");
    });
  }

  function addBgSprites(container: PIXI.Container) {
    [bg01, bg02, bg03].forEach((bs, index) => {
      const texture = PIXI.Texture.from(bs);
      const image = new PIXI.Sprite(texture);
      if (index !== 0) {
        gsap.set(image, { alpha: 0 });
      }
      container.addChild(image);
    });
    setSprites(container.children as PIXI.Sprite[]);
  }

  function addDisplacementFilter(app: PIXI.Application) {
    const displacementSprite = PIXI.Sprite.from(effectImage);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;
    displacementSprite.scale.x = 2;
    displacementSprite.scale.y = 2;

    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );
    displacementFilter.scale.x = 0;
    displacementFilter.scale.y = 0;

    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];

    setDisplacementSprite(displacementSprite);
    setDisplacementFilter(displacementFilter);
  }

  function slideHandle(index: number) {
    const tl = gsap.timeline({
      onComplete() {
        setCurrentIndex(index);
      },
      onUpdate() {
        displacementSprite!.rotation += tl.progress() * 0.02;
        displacementSprite!.scale.set(tl.progress() * 3);
      },
    });

    tl.clear();

    tl.to(displacementFilter!.scale, {
      x: 300,
      y: 300,
      duration: 1,
      ease: Power1.easeOut,
    })
      .to(
        sprites[currentIndex],
        { alpha: 0, duration: 0.5, ease: Power2.easeOut },
        0.2
      )
      .to(
        sprites[index],
        { alpha: 1, duration: 0.5, ease: Power2.easeOut },
        0.3
      )
      .to(
        displacementFilter!.scale,
        { x: 0, y: 0, duration: 1, ease: Power2.easeOut },
        0.3
      );
  }

  return (
    <div className="w-9/12 h-full mx-auto">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 right-0 bottom-0 -z-10"
      />
      <div className="fixed left-0 right-0 top-1/2 flex justify-between -z-10 -translate-y-1/2">
        <span
          className="p-2 cursor-pointer"
          onClick={() => {
            if (currentIndex > 0 && currentIndex < sprites.length) {
              slideHandle(currentIndex - 1);
            } else {
              slideHandle(sprites.length - 1);
            }
          }}
        >
          <Icon type="left" color="#fff" />
        </span>
        <span
          className="p-2 cursor-pointer"
          onClick={() => {
            if (currentIndex < sprites.length - 1) {
              slideHandle(currentIndex + 1);
            } else {
              slideHandle(0);
            }
          }}
        >
          <Icon type="right" color="#fff" />
        </span>
      </div>
      <ArticleList />
    </div>
  );
}
