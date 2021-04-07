import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  auth,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  return (
    <div class='post bg-white my-1 p-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img class='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>

      <div>
        <p class='my-3' style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {text}
        </p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button onClick={e => addLike(_id)} class='btn'>
              <i class='fas fa-thumbs-up' style={{ paddingRight: '10px' }}></i>
              <span> {likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button onClick={e => removeLike(_id)} class='btn'>
              <i class='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/posts/${_id}`} class='btn btn-primary'>
              {' '}
              Discussion{' '}
              {comments.length > 0 && (
                <span class='comment-count'>{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button onClick={e => deletePost(_id)} class='btn btn-danger'>
                <i
                  className='fas fa-times'
                  style={{ fontSize: '27px', marginBottom: '6px' }}
                ></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
