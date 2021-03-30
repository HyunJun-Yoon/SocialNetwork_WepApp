import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <Fragment>
      <div class='profile-about bg-white p-2'>
        {bio && (
          <Fragment>
            <h2>{name.trim().split(' ')[0]}'s Bio</h2>
            <p>{bio}</p>
            <div class='line'></div>
          </Fragment>
        )}

        <h2>Skill Set</h2>
        <div class='skills'>
          {skills.map((skill, index) => (
            <div className='p-1' key={index}>
              <i className='fas fa-check'></i> {skill}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
