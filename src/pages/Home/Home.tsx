import React, { useEffect, useState } from 'react'

import {
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
} from 'react-native'

import { styles } from './styles'

import { Button } from '../../components/Button/Button'
import { SkillCard } from '../../components/SkillCard/SkillCard'

interface SkillData {
  id: string;
  name: string;
}

export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill() {

    if (newSkill.length > 0) {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill
      }

      setMySkills(oldState => [...oldState, data])
    }
    else Alert.alert('Insira uma nova skill!')
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
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

      <Button
        title="Add skill"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </SafeAreaView>
  );
}