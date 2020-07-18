import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'

import api from '../../services/api'

import styles from './styles'

function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const navigation = useNavigation()

  async function loadIncidents() {

    if (total > 0 && incidents.length === total) {
      return
    }

    loading = true

    const response = await api.get('incidents', {
      params: { page }
    })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])

    loading = false

    setPage(page + 1)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  return (
    <View style={styles.container} >

      <View style={styles.header} >

        <Text style={styles.logo}>Be the Hero!</Text>

        <Text style={styles.headerText}>Total of <Text style={styles.headerTextBold}>{total}</Text></Text>

      </View>

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>Pick one of the cases below and help save someone</Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>

            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>Case:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Value:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' })
                .format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => { navigateToDetail(incident) }} >

              <Text style={styles.detailsButtonText}>Details</Text>
              <Feather name="arrow-right" icon={16} color="#E02041" />

            </TouchableOpacity>

          </View>
        )}

      />

    </View>
  )
}

export default Incidents 
