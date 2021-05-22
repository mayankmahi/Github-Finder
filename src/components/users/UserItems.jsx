import React from "react";
import PropTypes from 'prop-types';

const userItems = (props) => {
  const { avatar_url, login, html_url } = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

userItems.propTypes = {
    user: PropTypes.object.isRequired,
}

export default userItems;
