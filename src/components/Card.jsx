import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/card.css';

const Card = (props) => {
  const { data } = props;

  return (
    <div className="card">
      <img src={data.foto_usuario} alt="Imagem de perfil" />
     
     <div className='pad'>
     <h4>{data.nome_usuario}</h4>
     {data.ajudador ? (
           <p style={{color:"red"}}><span style={{color:"#294380"}}> Habilidades:</span>{data.habilidades.substr(0, 70) + "..."}</p> 
          ) : (
            <p style={{ color: "#294380", }}>
              <span style={{ color:"red"}}>Preciso ser ajudado:</span> {data.preciso_ser_ajudado.substr(0,70)}
            </p>
          )}
    
          <div className='btn'>
          <Link to={`/detalhes/${data.id_usuario}`} className="btn btn-primary">
                  Detalhes
                </Link>
            
          </div>

     </div>
          
    </div>
  );
};

export default Card;
