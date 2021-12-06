import React from "react";
import Citem from "./Citem";
import { Card } from "antd";
const { Meta } = Card;

const Comics = (props) => {
  return (
    <>
      <div className="my-3">
        <h2 style={{ textAlign: "center" }}>NOVEMBER 29: NEW REALEASES</h2>
      </div>
      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2  g-lg-5  g-md-4 g-sm-3 g-xs-2 mx-3">
        {Citem.map((elem) => {
          const { id, img, title } = elem;

          return (
            <div className="col" key={id}>
              <Card
                hoverable
                style={{ width: "240px" }}
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

export default Comics;
