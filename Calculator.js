import React, { useState } from "react";

export default ({ name }) => {
  const [data, setData] = useState({
    days: 0,
    last: 0,
    current: 0,
    limitedDebt: 0,
    additionalDebt: 0,
    debt: 0
  });

  const calculate = () => {
    var minus = data.current - data.last;

    if (minus < 0) return 0;

    var avgUsed = minus / 20;

    var limitedResult = 9.863 * data.days * 0.07;

    if (minus <= 300) {
      setData({
        ...data,
        limitedDebt: limitedResult.toFixed(2),
        debt: limitedResult.toFixed(2)
      });
      return limitedResult.toFixed(2);
    }

    var additional = (avgUsed * data.days - 9.863 * data.days) * 0.11;
    setData({
      ...data,
      limitedDebt: limitedResult.toFixed(2),
      additionalDebt: additional.toFixed(2),
      debt: (limitedResult + additional).toFixed(2)
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form
            onSubmit={e => {
              e.preventDefault();
              calculate();
            }}
          >
            <div className="form-row align-items-center">
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Son ödənmiş sərfiyyat"
                  onChange={e => {
                    setData({ ...data, last: e.target.value });
                  }}
                  value={data.last || ""}
                />
              </div>
              <div className="col-auto">
                <div className="input-group mb-2">
                  <input
                    type="number"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Cari sərfiyyat"
                    onChange={e => {
                      setData({ ...data, current: e.target.value });
                    }}
                    value={data.current || ""}
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="input-group mb-2">
                  <input
                    type="number"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Gün sayı"
                    onChange={e => {
                      setData({ ...data, days: e.target.value });
                    }}
                    value={data.days || ""}
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Hesabla
                </button>
              </div>
            </div>
          </form>
          <p id="debt-p">
            {"Məbləğ:  "}
            <b>{data.debt} ₼</b>
          </p>

          <p>
            <i>
              {"Limitli:  "}
              <b>{data.limitedDebt} ₼</b>
              <br />
              {"Limitsiz:  "}
              <b>{data.additionalDebt} ₼</b>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};
