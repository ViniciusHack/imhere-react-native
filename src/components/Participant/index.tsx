import { Text, TouchableOpacity, View } from "react-native";
import { ParticipantType } from "../../screens/Home";
import { participantStyles } from "./styles";

interface ParticipantProps {
  participant: ParticipantType;
  onRemove: (participantId: string) => void;
}

export function Participant({ participant, onRemove }: ParticipantProps) {
  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}>{participant.name}</Text>

      <TouchableOpacity
          style={participantStyles.button}
          onPress={() => onRemove(participant.id)}
        >
          <Text style={participantStyles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}