import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

function Register() {
  return (
    <div className="register-container">

      <div className="content">

        <section>
          <h1 className="logo-name">Be The Hero!</h1>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/" >
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="button">Cadastrar</button>

        </form>


      </div>
    </div>
  )
}

export default Register