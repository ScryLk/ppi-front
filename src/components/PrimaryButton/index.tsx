import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe useNavigation
import { StyledComponent } from "nativewind";

interface PrimaryButtonProps {
    onPress: () => void;
}

export default function PrimaryButton({ onPress }: PrimaryButtonProps) {
    return (
        <View className="flex-1 justify-end mt-32">
            <StyledComponent component={TouchableOpacity} >
                <TouchableOpacity className="h-14 bg-primary w-80 rounded-md items-center justify-center" onPress={onPress}>
                    <Text className="text-white font-medium font-Principal text-md">
                        Avançar
                    </Text>
                </TouchableOpacity>
            </StyledComponent>
        </View>
    );
}

export function SelectButton() {
    return (
        <View className="flex-1 justify-end">
            <StyledComponent component={TouchableOpacity} >
                <TouchableOpacity className="h-14 bg-primary w-80 rounded-md items-center mb-10 justify-center">
                    <Text className="text-white font-medium font-Principal text-md">
                        Selecionar
                    </Text>
                </TouchableOpacity>
            </StyledComponent>
        </View>
    );
}