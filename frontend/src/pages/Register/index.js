import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logo from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) { /*Fara o cadastro*/
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso é: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero" onClick={e => history.push('/')}/>          
          
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG!</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar a página de login
          </Link>

        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email" placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF" style={{ width:80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>

        <div id="modal-main" class="modal-container">
          <div class="modal">
            <button class="fechar">x</button>
            <h2 class="subtitulo">Cadastrado com Sucesso!</h2>
            <form>
              <p class="texto_id">Seu ID de acesso é: </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// function iniciaModal(modalId) {
//   const modal = document.getElementById(modalId)
//   modal.classList.add('mostrar')
//   modal.addEventListener('click', (e) => {
//     if(e.target.id == modalId  || e.target.className == 'fechar') {
//       modal.classList.remove('mostrar')
//     }
//   });
// }

// const cadastrar = document.querySelector('.button')
// cadastrar.addEventListener('click', () => iniciaModal('modal-main'));