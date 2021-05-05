import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Comments } from '../Comments/Comments';

export const CommentForm = () => {
  const [commentText, setCommentText] = useState('');
  const [commentsWithId, setCommentsWithId] = useState([]);

  const addComment = (comment) => {
    setCommentsWithId([...commentsWithId, { id: uniqid(), text: comment }]);
  };

  const deleteComment = (commentId) => {
    const filterComments = commentsWithId.filter((comment) => comment.id !== commentId);
    setCommentsWithId(filterComments);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!commentText) {
      return;
    }

    addComment(commentText);
    setCommentText('');
  };

  return (
    <div className="card__comment-form comment-form">
      <form
        className="comment-form__form"
        onSubmit={handlerSubmit}
      >
        <textarea
          className="comment-form__textarea"
          name="commentText"
          value={commentText}
          onChange={(event) => {
            setCommentText(event.target.value);
          }}
        />
        <button
          className="comment-form__button"
          type="submit"
        >
          Push Comment
        </button>
      </form>
      <Comments
        commentsWithId={commentsWithId}
        deleteComment={deleteComment}
      />
    </div>
  );
};
