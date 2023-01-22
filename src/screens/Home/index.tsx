import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export type ParticipantType = {
  id: number;
  name: string;
}

export function Home() {
  const [participants, setParticipants] = useState<ParticipantType[]>([])
  const [newParticipantName, setNewParticipantName] = useState("")

  function handleAddParticipant() {    
    if(participants.some(participant => participant.name === newParticipantName)) {
      Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
    }

    const newParticipant = {
      id: Math.ceil(Math.random() * 1000),
      name: newParticipantName,
    }

    setParticipants(prevState => [...prevState, newParticipant])
    setNewParticipantName('')
  }

  function handleRemoveParticipant(id: number) {
    Alert.alert("Remover", `Remover o participante`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants(state => state.filter(participant => participant.id !== id))
          Alert.alert("Deletado!")
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 21 de Janeiro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipantName}
          value={newParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={participants}
        keyExtractor={key => String(key.id)}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            participant={item}
            onRemove={handleRemoveParticipant}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => 
          <Participant
            key={participant.id}
            participant={participant}
            onRemove={handleRemoveParticipant}
          />
        )}
      </ScrollView> */}
    </View>
  )
}