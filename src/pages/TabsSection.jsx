import React, { useState } from "react";

function TabsSection({ openState, setOpenState, date }) {
  return (
    <section className=" secOne flexCenterCenter  ">
      <div className="timeLineWrap">
        {date.map((elDate) => (
          <React.Fragment key={elDate.id}>
            <div className={` verticalLineDot flexAliCenter`}>
              <span
                className={`spanLine ${openState === elDate.id ? "active" : " "}`}
              ></span>
              <span
                className={`dot ${openState === elDate.id ? "active" : " "}`}
              ></span>
            </div>

            <div className="flexColumnCenterCentr">
              <button
                className={`dot ${openState === elDate.id ? "active" : " "} btn`}
                onClick={() => {
                  setOpenState(openState === elDate.id ? null : elDate.id);
                }}
              >
                {elDate.title}
              </button>

              {openState === elDate.id ? <p>{elDate.text}</p> : ""}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default TabsSection;
