import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({ commentsWithId, deleteComment }) => (
  <div className="card__comments comments">
    <h2 className="comments__title">Comments</h2>
    {commentsWithId && commentsWithId.map((comment) => (
      <div
        className="comments__body"
        key={comment.id}
      >
        <p className="comments__text">
          {comment.text}
        </p>
        <button
          className="comments__button"
          type="button"
          onClick={() => {
            deleteComment(comment.id);
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

Comments.propTypes = {
  commentsWithId: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  deleteComment: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  commentsWithId: [],
};
