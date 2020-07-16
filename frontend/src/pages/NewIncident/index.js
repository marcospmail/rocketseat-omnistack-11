import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(e) {
    e.preventDefault()

    try {
      const data = { title, description, value}

      await api.post('incidents', data, { 
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')

    } catch(err) {
      alert('Failed to register new incident')
    }
  }

  return (
    <div className="new-incident-container">

      <div className="content">

        <section>
          <h1 className="logo-name">Be The Hero!</h1>

          <h1>Register new case</h1>
          <p>Describe your case briefly to find a hero to help you.</p>

          <Link className="back-link" to="/profile" >
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />

          <input placeholder="Value (in BRL)" value={value} onChange={e => setValue(e.target.value)} />

          <button type="submit" className="button">Cadastrar</button>
        </form>

      </div>

    </div>
  )
}

export default NewIncident