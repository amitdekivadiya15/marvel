import React from "react";
import { Card } from "antd";
import Images from "./Images";
const { Meta } = Card;

const MainCart = (props) => {
  const item = Images;
  return (
    <>
      <div className="my-3">
        <h3 style={{ textAlign: "center" }}>MARVEL MOVIES</h3>
      </div>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {item.map((e) => {
          const { id, img, title } = e;

          return (
            <div className="col" key={id}>
              <Card
                hoverable
                style={{ width: "240px" }}
                cover={<img alt="fantastic four" src={img} />}
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

export default MainCart;
