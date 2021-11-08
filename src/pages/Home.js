import React, { useEffect, useState } from 'react'

import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native'

import { Button } from '../components/Button/Button'
import { SkillCard } from '../components/SkillCard/SkillCard'

export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) setGretting('Good morning!')
    else if (currentHour >= 12 && currentHour < 18) setGretting('Good afternoon!')
    else setGretting('Good night!')
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Welinton.</Text>

      <Text style={styles.grettings}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },

  grettings: {
    color: '#FFF',
  }
})