import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../pages/Home.css'

const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://colab2-eight.vercel.app/usuarios')
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      });
  }, []);

  return (
    <div className='container-content'>
      {dados.map((item) => (
        <Card key={item.id_usuario} data={item} />
      ))}
    </div>
  );
};

export default Home;
