import React from "react";
import Articles from "../components/articles";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import LEARNS_QUERY from "../apollo/queries/learn/learns";
import Learns from "../components/learns";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Testing GoMyCode Website</h1>
          {/* <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query> */}
          {console.dir(LEARNS_QUERY)}
          <Query query={LEARNS_QUERY}>
            {({ data: { learns } }) => {
              return <Learns learns={learns} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
