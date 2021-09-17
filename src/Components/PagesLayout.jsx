import { React, useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const PagesLayout = (datas) => {
  // console.log(data);
  const [groupArrays, setgroupArrays] = useState([]);

  var sortBy = (function () {
    var toString = Object.prototype.toString,
      // default parser function
      parse = function (x) {
        return x;
      },
      // gets the item to be sorted
      getItem = function (x) {
        var isObject = x != null && typeof x === "object";
        var isProp = isObject && this.prop in x;
        return this.parser(isProp ? x[this.prop] : x);
      };

    /**
     * Sorts an array of elements.
     *
     * @param {Array} array: the collection to sort
     * @param {Object} cfg: the configuration options
     * @property {String}   cfg.prop: property name (if it is an Array of objects)
     * @property {Boolean}  cfg.desc: determines whether the sort is descending
     * @property {Function} cfg.parser: function to parse the items to expected type
     * @return {Array}
     */
    return function sortby(array, cfg) {
      if (!(array instanceof Array && array.length)) return [];
      if (toString.call(cfg) !== "[object Object]") cfg = {};
      if (typeof cfg.parser !== "function") cfg.parser = parse;
      cfg.desc = !!cfg.desc ? -1 : 1;
      return array.sort(function (a, b) {
        a = getItem.call(cfg, a);
        b = getItem.call(cfg, b);
        return cfg.desc * (a < b ? -1 : +(a > b));
      });
    };
  })();

  useEffect(() => {
    console.log(datas.datas);
    const groups = datas.datas.reduce((groups, imag) => {
      const date = imag.time;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(imag);
      return groups;
    }, {});

    const groupArray = Object.keys(groups).map((date) => {
      return {
        date,
        images: groups[date],
      };
    });

    setgroupArrays(sortBy(groupArray, { prop: "date" }).reverse());
  }, []);

  function dateCheck(x) {
    var d = x.split("T")[0];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    const yesterday = yyyy + "-" + mm + "-" + (dd - 1);

    console.log(d);
    console.log(today);

    if (today === d) {
      return <h6> Today</h6>;
    } else if (yesterday === d) {
      return <h6>Yesterday</h6>;
    } else {
      return <h6>{d}</h6>;
    }
  }

  return (
    <>
      <Container className="mt-3">
        {groupArrays.map((item, index) => (
          <>
            <div key={index}>
              {dateCheck(item.date)}
              <div className="mt-3">
                <Row xs={2} md={3} lg={4} className="g-4">
                  {item.images.map((c, i) => (
                    <Col>
                      <Card>
                        <Card.Img variant="top" height="260px" src={c.imgsrc} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              <br />
            </div>
          </>
        ))}
      </Container>
    </>
  );
};

export default PagesLayout;
