import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/Detalhes.css";
import Comentarios from "../components/Comentarios";

const Detalhes = () => {
  const { id } = useParams();
  const [dados, setDados] = useState({});

  useEffect(() => {
    fetch(`https://colab2-eight.vercel.app/usuarios/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="card">
        <img
          src={dados.foto_usuario}
          alt="Imagem de perfil"
          className="img-fluid"
        />
        <div className="card-content">
          <h3 className="fw-bold">
            <br /> {dados.nome_usuario}
          </h3>

          <p className="fw-bold">
            {dados.preciso_ser_ajudado
              ? dados.preciso_ser_ajudado
              : dados.habilidades}
          </p>

          <div className="btn-detalhes">
            {dados.preciso_ser_ajudado ? (
              <button className="btn btn-primary btn-contact">Ajudar</button>
            ) : (
              <button className="btn btn-success btn-contact">
                Entrar em contato
              </button>
            )}
          </div>
          <div className="comentarios">
          <Comentarios id_usuario={dados.id_usuario} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
