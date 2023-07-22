import {View, SafeAreaView, Text, Image, TouchableOpacity, TextInput, Platform} from "react-native";
import {Stack, useRouter} from "expo-router";

import {COLORS, FONT, SIZES} from "../constants";
import {useState} from "react";


const Auth = () => {
    const router = useRouter();
    const [openKeyboard, setOpenKeyboard] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    justifyContent: Platform.OS === 'ios' && openKeyboard ? 'start':'center',
                    alignItems: 'center',
                    marginTop: Platform.OS === 'ios' && openKeyboard ? 20: 0
                }}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{width: 100, height: 100, margin: 5}}
                />
                <View
                    style={{
                        width: '80%',
                        height: '40%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <View style={{
                        backgroundColor: COLORS.white,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: 50,
                        width: '100%',
                        marginBottom: 10
                    }}>
                        <TextInput
                            style={{
                                fontFamily: FONT.regular,
                                width: "100%",
                                height: "100%",
                                paddingHorizontal: SIZES.medium
                            }}
                            onFocus={() => setOpenKeyboard(true)}
                            onEndEditing={() => setOpenKeyboard(false)}
                            placeholder='Введите логин'
                        />
                    </View>
                    <View style={{
                        backgroundColor: COLORS.white,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: 50,
                        width: '100%',
                        marginBottom: 10
                    }}>
                        <TextInput
                            style={{
                                fontFamily: FONT.regular,
                                width: "100%",
                                height: "100%",
                                paddingHorizontal: SIZES.medium
                        }}
                            onFocus={() => setOpenKeyboard(true)}
                            onEndEditing={() => setOpenKeyboard(false)}
                            placeholder='Введите пароль'
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#EE4B5A",
                            height: 50,
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: SIZES.medium,
                            marginTop: 10
                        }}
                        onPress={() => router.replace('/home')}
                    >
                        <Text style={{
                            fontSize: SIZES.medium,
                            color: COLORS.white,
                            fontFamily: FONT.bold,
                        }}>
                            Войти
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Auth;