import React, { useState, useEffect } from 'react';
import '../components/comentario.css';

const Comentarios = ({ id_usuario }) => {
  const [comentario, setComentario] = useState('');
  const [comentariosSalvos, setComentariosSalvos] = useState([]);

  useEffect(() => {
    // Recuperar comentários do localStorage
    const comentarios = localStorage.getItem(`comentarios_${id_usuario}`);
    if (comentarios) {
      setComentariosSalvos(JSON.parse(comentarios));
    }
  }, [id_usuario]);

  const handleInputChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSalvarComentario = () => {
    if (comentario) {
      const novoComentario = {
        id: Date.now(),
        texto: comentario,
      };

      const novosComentarios = [...comentariosSalvos, novoComentario];
      setComentariosSalvos(novosComentarios);

      // Salvar no localStorage
      localStorage.setItem(`comentarios_${id_usuario}`, JSON.stringify(novosComentarios));

      setComentario('');
    }
  };

  return (
    <div className="coment">
      <input type="text" value={comentario} onChange={handleInputChange} />
      <button className="btn btn-info" onClick={handleSalvarComentario}>
        Salvar Comentário
      </button>

      <ul>
        {comentariosSalvos.map((comentario) => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
