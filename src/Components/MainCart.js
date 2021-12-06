import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "antd";
import Images from "./Images";
const { Meta } = Card;

const MainCart = (props) => {
  const history = useHistory();
  const item = Images;

  const routeChange = () => {
    let link = Images.link;
    let path = `/movie/${link}`;
    history.push(path);
  };

  return (
    <>
      <div className="my-3">
        <h3 style={{ textAlign: "center" }}>MARVEL MOVIES</h3>
      </div>
      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2  g-lg-5  g-md-4 g-sm-3 g-xs-2 mx-3">
        {item.map((e) => {
          const { id, img, title } = e;

          return (
            <div className="col" key={id} onClick={routeChange}>
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
