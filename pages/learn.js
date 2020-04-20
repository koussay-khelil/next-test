import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import LEARN_QUERY from "../apollo/queries/learn/learn";
import Header from '../components/header'
import Cursus from '../components/cursus'
import Day from '../components/day'
import Community from '../components/community'
import Plateform from '../components/plateform'
import LearningMethod from '../components/learningMethod'
import Places from '../components/places'
import Apply from '../components/apply'

const Learn = () => {
  const router = useRouter();
  return (
    <Query query={LEARN_QUERY} id={router.query.id}>
      {({ data: { learn } }) => {
        return (
          <div>
            <div className="learn-page-container">
              <Header data={learn} />
              <Cursus data={learn} />
              <Day data={learn} />
              <Community data={learn} />
              <Plateform data={learn} />
            </div>
            <div className="learning-method-container">
             <LearningMethod data={learn} />
             <Places data={learn} />
             <Apply data={learn} />
            </div>
            {/* <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={process.env.API_URL + learn.image.url}
              data-srcset={process.env.API_URL + learn.image.url}
              data-uk-img
            >
              <h1>{learn.title}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={learn.description} />
              </div>
            </div> */}
          </div>
        );
      }}
    </Query>
  );
};

export default Learn;
