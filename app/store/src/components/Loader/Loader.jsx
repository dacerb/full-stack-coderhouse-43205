import React, { useState, useEffect } from 'react';

import './Loader.css'

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const Loader = () => (
        <div className='content d-flex justify-content-center align-items-center mt-5 content_loader'>
            <div class="spinner-border loader_logo_container align-middle " role="status">
                <img className="loader_logo" src="../assets/sonor.png" alt="logo sonor" />
            </div>
        </div>
  );

  useEffect(() => {
    // Simular una carga de datos asincrónica
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return <div>{isLoading ? Loader() : children}</div>;
};

export default Loader;