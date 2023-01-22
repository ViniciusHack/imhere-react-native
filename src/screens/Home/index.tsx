import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export type Participant = {
  id: string;
  name: string;
}

export function Home() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [newParticipantData, setNewParticipantData] = useState("")

  function handleAddParticipant() {
    // setParticipants()
    return console.log("Adicionado")
  }

  function handleRemoveParticipant(id: string) {
    
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
          onChange={(e) => {}}
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
        keyExtractor={key => key.id}
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