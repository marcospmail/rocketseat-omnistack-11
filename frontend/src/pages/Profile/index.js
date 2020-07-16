import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

function Profile() {
  const [incidents, setIncidents] = useState([])

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(({ data }) => {
      setIncidents(data)
    })
  }, [ongId])

  async function handleDeleteincident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(i => i.id !== id))

    } catch(err) {
      alert('Failed to delete incident')
    }
  }

  function handleLogout() {
    localStorage.clear()

    history.push('/')
  }

  return (

    <div className="profile-container">

      <header>
        <h1 className="logo-name">Be The Hero!</h1>

        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">Register new case</Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <div className="profile-content">
        <h1>Cases</h1>

        <ul>

          {incidents.map(i => (
            <li key={i.id}>
              <strong>TITLE:</strong>
              <p>{i.title}</p>

              <strong>DESCRIPTION:</strong>
              <p>{i.description}</p>

              <strong>VALUE:</strong>
              <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(i.value) }</p>

              <button type="button" onClick={() => handleDeleteincident(i.id)} >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}

        </ul>

      </div>

    </div>
  )
}

export default Profile