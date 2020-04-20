import gql from "graphql-tag";

const LEARNS_QUERY = gql`
  query Learns {
    learns {
      id
      title
      description
      red_title
      route
      image{
          url
      }
      arrow{
        url
      }
      hackerspace{
        title
        description
        hackerspace_one{
          url
        }
        hackerspace_two{
          url
        }
        hackerspace_three{
          url
        }
      }
      learn_section{
        section{
          title
          description
          day_gmc{
            url
          }
        }
      }
    }
  }
`;

export default LEARNS_QUERY;
