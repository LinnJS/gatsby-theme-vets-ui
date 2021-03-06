import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';

const EventList = ({ events }) => {
  console.log('styled2: ', Styled);
  return (
    <>
      <h1>Upcoming Events</h1>

      <Styled.ul>
        {events.map(event => (
          <Styled.li key={event.id}>
            <strong>
              <Link to={event.slug}>{event.name}</Link>
            </strong>
            <br />
            {new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            in {event.location}
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  );
};

EventList.propTypes = {
  events: PropTypes.any,
};

export default EventList;
