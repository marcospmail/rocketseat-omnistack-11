import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

function Logon() {
  return (
    <div className="logon-container">
      <h1 className="logo-name">Be The Hero!</h1>

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="Sua ID" />
        <button type="submit" className="button">Entrar</button>

        <Link className="back-link" to="/register" >
          <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
        </Link>

      </form>

    </div>
  )
}

export default Logon