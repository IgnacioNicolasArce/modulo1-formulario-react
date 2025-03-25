// src/RegisterForm.jsx
import React from 'react';
import './App.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form>
        <div className="nombre-apellido">
          <div className="nombre">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="apellido">
            <label htmlFor="lastname">Apellido:</label>
            <input type="text" id="lastname" name="lastname" />
          </div>
        </div>

        <div className="correo-contrasena">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
          
          <div className="telefono">
            <label htmlFor="phone">Número de teléfono:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          
          <label htmlFor="password">Contraseña:</label>
          <div className='input-password'>
            <input type={showPassword ? 'text' : 'password'} id="password" name="password" />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash className='eye-icon' /> : <FaEye className='eye-icon' />}
            </span>
          </div>

          <label htmlFor="confirm-password">Confirmar contraseña:</label>
          <div className='input-container'>
            <input type={showConfirmPassword ? 'text' : 'password'} id="confirm-password" name="confirm-password" />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash className='eye-icon' /> : <FaEye className='eye-icon' />}
            </span>
          </div>
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
