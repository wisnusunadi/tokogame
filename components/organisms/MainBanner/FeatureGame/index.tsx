import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../../services/data-types";
import { getFeaturedGame } from "../../../../services/player";
import GameItem from "../../molecules/GameItem";

export default function FeatureGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);
  useEffect(() => {
    console.log(getFeatureGameList());
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem
                key={item._id}
                title={item.name}
                category={item.category.name}
                thumbnail={item.thumbnail}
                id={item._id}
              />
            );
          })}
          {/* <GameItem
            title="Super Mechs"
            category="Mobile"
            thumbnail="Thumbnail-1"
          />
          <GameItem
            title="Call of Duty: Modern"
            category="Mobile"
            thumbnail="Thumbnail-2"
          />
          <GameItem
            title="Mobile Legends"
            category="Mobile"
            thumbnail="Thumbnail-3"
          />
          <GameItem
            title="Clash of Clans"
            category="Mobile"
            thumbnail="Thumbnail-4"
          />
          <GameItem
            title="Valorant"
            category="Desktop"
            thumbnail="Thumbnail-5"
          /> */}
        </div>
      </div>
    </section>
  );
}
