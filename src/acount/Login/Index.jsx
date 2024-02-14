import React, { useState } from 'react';
import './Style.css';
import QRCode from 'qrcode.react';
import logo from '../../assets/LogoRed.png';
// import LogoBlue from '../../assets/LogoBlue.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Iniciar sesión con correo electrónico:', email, 'y contraseña:', password);
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <div>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
            <div className='cont-qr'>
                <div className="qr-container">
                    <QRCode
                        value={Math.random().toString(36).substring(2, 150)}
                        bgColor='#0000'
                        fgColor='#f36767'
                        size={512}
                        imageSettings={{ src: logo, x: null, y: null, height: 100, width: 100, excavate: true }}
                        renderAs="svg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
