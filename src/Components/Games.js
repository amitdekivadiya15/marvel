import React from "react";
import Gitem from "./Gitem";
import { Card } from "antd";
const { Meta } = Card;

const Games = () => {
  const game = Gitem;
  return (
    <>
      <div className="my-3">
        <h2 style={{ textAlign: "center" }}>ALL GAMES</h2>
      </div>
      <div className="row mx-3">
        {game.map((elem) => {
          const { id, img, title } = elem;

          return (
            <div className="col my-3" key={id}>
              <Card
                hoverable
                style={{ width: "300px" }}
                cover={<img alt="games" src={img} />}
              >
                <Meta description={title} style={{ fontWeight: "bold" }} />
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Games;
