import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'

function Detail() {
  const navigation = useNavigation()
  const incident = useRoute().params.incident

  const message = `Hello ${incident.name}, I am contacting you because I\'d like to...`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Case's hero: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=number&text=${message}`)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header} >

        <Text style={styles.logo}>Be the Hero!</Text>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>

      </View>

      <View style={styles.incident}>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{`${incident.name} de ${incident.city} / ${incident.uf}`}</Text>

        <Text style={styles.incidentProperty}>Case:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={[styles.incidentValue, { marginBottom: 0 }]}>
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
        </Text>

      </View>

      <View style={styles.contactBox}>

        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case</Text>

        <Text style={styles.heroDescription}>Contact us:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

export default Detail
