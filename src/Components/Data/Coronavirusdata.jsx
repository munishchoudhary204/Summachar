import React from "react";
import img1 from "../../Assets/All/1.jpg";
import img2 from "../../Assets/All/2.jpg";
import img3 from "../../Assets/All/3.jpg";
import img4 from "../../Assets/All/4.jpg";
import PagesLayout from "../PagesLayout";

const data = [
  {
    imgsrc: img1,
    time: "2021-09-16T20:24:30+00:00",
  },
  {
    imgsrc: img2,
    time: "2021-09-16T20:24:30+00:00",
  },
  {
    imgsrc: img3,
    time: "2021-09-17T20:24:30+00:00",
  },
  {
    imgsrc: img4,
    time: "2021-09-15T20:24:30+00:00",
  },
];

const Coronavirusdata = () => {
  return (
    <>
      <PagesLayout datas={data} />
    </>
  );
};

export default Coronavirusdata;
