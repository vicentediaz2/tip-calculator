import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [totalCuenta, setTotalCuenta] = useState('');
  const [porcentajePropina, setPorcentajePropina] = useState('');
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const calcularPropina = () => {
      const total = parseFloat(totalCuenta);
      const propina = parseFloat(porcentajePropina);
  
      if (isNaN(total) || isNaN(propina)) {
        setResultado(0);
        return;
      }
  
      const totalConPropina = total + (total * propina) / 100;
      setResultado(totalConPropina.toFixed(2));
    };
  
    calcularPropina();
  }, [totalCuenta, porcentajePropina]);
  

  return (
    <div className='Tarjeta'>
      <p className='Tarjeta-titulo1'>Calculadora de Propinas</p>
      <p className='Tarjeta-titulo2'>Total a Pagar</p>
      <div className="Tarjeta-cuadro-txt">
        <span className="a" id="basic-addon1">$</span>
        <input
          name='txt_total'
          type="text"
          className="Tarjeta-input"
          placeholder="35990"
          aria-label="Total_Cuenta"
          value={totalCuenta}
          onChange={(e) => setTotalCuenta(e.target.value)}
        />
      </div>
      <p className='Tarjeta-titulo2'>Propina</p>
      <div className="Tarjeta-cuadro-txt">
        <span className="a" id="basic-addon1">%</span>
        <input
          name='txt_propina'
          type="text"
          className="Tarjeta-input"
          placeholder="10"
          aria-label="Propina"
          value={porcentajePropina}
          onChange={(e) => setPorcentajePropina(e.target.value)}
        />
      </div>
      <p className='Tarjeta-titulo2'>Total: $<span id="resultado">{resultado}</span></p>
    </div>
  );
}

export default App;