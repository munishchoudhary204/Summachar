import React from "react";
import img1 from "../../Assets/All/1.jpg";
import img2 from "../../Assets/All/2.jpg";
import img3 from "../../Assets/All/3.jpg";
import img4 from "../../Assets/All/4.jpg";
import img5 from "../../Assets/All/5.jpg";
import img6 from "../../Assets/All/6.jpg";
import img7 from "../../Assets/All/7.jpg";
import img8 from "../../Assets/All/8.jpg";
import img9 from "../../Assets/All/9.jpg";
import img10 from "../../Assets/All/10.jpg";
import img11 from "../../Assets/All/11.jpg";
import img12 from "../../Assets/All/12.jpg";
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
  {
    imgsrc: img5,
    time: "2021-09-15T20:24:30+00:00",
  },
  {
    imgsrc: img6,
    time: "2021-09-17T20:24:30+00:00",
  },
  {
    imgsrc: img7,
    time: "2021-09-16T20:24:30+00:00",
  },
  {
    imgsrc: img8,
    time: "2021-09-17T20:24:30+00:00",
  },
  {
    imgsrc: img9,
    time: "2021-09-16T20:24:30+00:00",
  },
  {
    imgsrc: img10,
    time: "2021-09-16T20:24:30+00:00",
  },
  {
    imgsrc: img11,
    time: "2021-09-16T20:24:30+00:00",
  },
  {
    imgsrc: img12,
    time: "2021-09-17T20:24:30+00:00",
  },
];

const Alldata = () => {
  return (
    <>
      <PagesLayout datas={data} />
    </>
  );
};

export default Alldata;
