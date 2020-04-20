import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const Learns = ({ learns }) => {
  const leftLearnsCount = Math.ceil(learns.length / 5);
  const leftLearns = learns.slice(0, leftLearnsCount);
  const rightLearns = learns.slice(leftLearnsCount, learns.length);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftLearns.map((learn, i) => {
            return <Card article={learn} key={`learn__${learn.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightLearns.map((learn, i) => {
              return <Card article={learn} key={`learn__${learn.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learns;
