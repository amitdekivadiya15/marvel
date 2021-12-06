import React from "react";
import Titem from "./Titem";
import { Card } from "antd";
const { Meta } = Card;
const TvShows = (props) => {
  const show = Titem;
  return (
    <>
      <div className="my-3">
        <h2 style={{ textAlign: "center" }}>MARVEL ON DISNEY+</h2>
      </div>
      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2  g-lg-5  g-md-4 g-sm-3 g-xs-2 mx-3">
        {show.map((elem) => {
          const { id, img, title } = elem;

          return (
            <div className="col" key={id}>
              <Card
                hoverable
                style={{ width: "200px" }}
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

export default TvShows;
