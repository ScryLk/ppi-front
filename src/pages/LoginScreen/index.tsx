import { View, Image, Text, Button } from "react-native";
import BackButton from "../../components/Buttons";
import EmailInput from "../../components/LoginInputs";
import { PasswordInput } from "../../components/LoginInputs";
import { LoginButton } from "../../components/LoginInputs";

const Figure = require("../../assets/images/login.png");

export default function LoginScreen() {
    return (
        <View className="flex-1 items-center justify-center mb-60">
            <Image source={Figure} />
            <Text className="font-bold text-2xl mt-10">Acesse sua conta</Text>
            <EmailInput />
            <PasswordInput />
            <LoginButton/>
        </View>
     
    )
}