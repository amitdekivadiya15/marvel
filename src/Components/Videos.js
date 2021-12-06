import React from "react";
import Trailers from "./Trailers";
import { Card } from "antd";
const { Meta } = Card;

const Videos = (props) => {
  const data = Trailers;
  return (
    <>
      <div className="my-3">
        <h2 style={{ textAlign: "center" }}>TRENDING VIDEOS</h2>
      </div>
      <div className="row mx-3">
        {data.map((elem) => {
          const { id, src, title, uniqueTitle } = elem;

          return (
            <div className="col my-3" key={id}>
              <Card
                hoverable
                style={{ width: "400px" }}
                cover={
                  <iframe
                    width="560"
                    height="315"
                    src={src}
                    title={uniqueTitle}
                  ></iframe>
                }
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

export default Videos;
