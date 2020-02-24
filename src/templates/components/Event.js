import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from 'theme-ui';

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const getDate = (date, { day = true, month = true, year = true } = {}) => {
    return date.toLocaleString('en-US', {
      day: day ? 'numeric' : undefined,
      month: month ? 'long' : undefined,
      year: year ? 'numeric' : undefined,
    });
  };

  const isOneDay = start.toDateString() === end.toDateString();

  return (
    <>
      <time dateTime={start.toISOString()}>{getDate(start, { year: isOneDay })}</time>

      {!isOneDay && (
        <>
          -<time dateTime={end}>{getDate(end, { month: start.getMonth() !== end.getMonth() })}</time>
        </>
      )}
    </>
  );
};

EventDate.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

const Event = ({ name, location, url, startDate, endDate }) => {
  return (
    <div>
      <Styled.h1>
        {name} ({location})
      </Styled.h1>
      <Styled.p>
        <EventDate startDate={startDate} endDate={endDate} />
      </Styled.p>
      <Styled.p>
        Website: <a href={url}>{url}</a>
      </Styled.p>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  url: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default Event;
