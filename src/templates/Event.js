import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from './components/Layout';
import Event from './components/Event';

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM D, YYYY")
      endDate(formatString: "MMMM D, YYYY")
      location
      slug
    }
  }
`;

const EventsTemplate = ({ data: { event } }) => {
  return (
    <Layout>
      <Event {...event} />
    </Layout>
  );
};

EventsTemplate.propTypes = {
  data: PropTypes.shape({
    event: PropTypes.any,
  }),
};

export default EventsTemplate;
