import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({ commentsWithId, deleteComment }) => (
  <>
    <h2>Comment</h2>
    {commentsWithId && commentsWithId.map((comment) => (
      <React.Fragment key={comment.id}>
        <p>
          {comment.text}
        </p>
        <button
          type="button"
          onClick={() => {
            deleteComment(comment.id);
          }}
        >
          Delete
        </button>
      </React.Fragment>
    ))}
  </>
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
