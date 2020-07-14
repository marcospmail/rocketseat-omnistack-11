import React from 'react';
import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

function NewIncident() {
  return (
    <div className="new-incident-container">

      <div className="content">

        <section>
          <h1 className="logo-name">Be The Hero!</h1>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile" >
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Tìtulo do caso" />
          <textarea placeholder="Descrição" />

          <input placeholder="Valor em reais" />

          <button type="submit" className="button">Cadastrar</button>
        </form>

      </div>

    </div>
  )
}

export default NewIncident