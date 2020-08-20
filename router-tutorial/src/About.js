import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  console.log(query);
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>About</h1>
      <p>This is exercise project that practices react-router.</p>
      {detail && <p>Additional infromation is blah blah...</p>}
    </div>
  );
};

export default About;
