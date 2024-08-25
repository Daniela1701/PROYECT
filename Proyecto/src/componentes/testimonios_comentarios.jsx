
import React, { useState } from 'react';

// Componente de comentario individual
function Comment({ text }) {
  return <div>{text}</div>;
}

// Componente principal de la sección de comentarios
function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Handler para actualizar el estado del nuevo comentario
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  // Handler para agregar un nuevo comentario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // Limpiar el campo de entrada
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleChange}
          placeholder="Write a comment..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Add Comment</button>
      </form>
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} text={comment} />
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default CommentsSection;