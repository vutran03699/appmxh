import React,{useState} from "react"
import styled from 'styled-components'
import {AntDesign} from '@expo/vector-icons'
import Text from '../components/Text'


export default SignUpScreen = ({navigation}) =>{
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [loading,setLoading] = useState(false);
   
    return(
        <Container>
            <Main>
                <Text title semi center>Sign Up</Text>
            </Main>
            <Auth>
            <AuthContainer>
                    <AuthTitle>
                        username
                    </AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus={true}
                    onChangeText={username =>setUsername(username.trim())}
                    value={username}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>
                        Email Address
                    </AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    key-boardType="email-address"
                    onChangeText={email =>setEmail(email.trim())}
                    value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>
                        Password
                    </AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    key-boardType="email-address"
                    secureTextEntry={true}
                    onChangeText={password =>setPassword(password.trim())}
                    value={password}
                    />
                </AuthContainer>
            </Auth>

            <SignUpContainer disable={loading}>
                {loading ?(
                    <Loading/>
                ) : (
                <Text bold center color="white">
                    Sign Up
                </Text>
                )}
                
            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate("SignIn")}>
                <Text small center>
                    Already have account ?{" "} <Text bold color="#00716F">Sign In</Text>
                </Text>
            </SignIn>

            <HeaderGraphic>
                <RightCircle/>
                <LeftCircle/> 
            </HeaderGraphic>
            <StatusBar barStyle="light-content"/>
        </Container>
    )
}
const Container = styled.View`
    flex: 1;
`;
const Main = styled.View`
    margin: 160px 0px 0px;
`;
const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    margin: 16px 0 0 0 ;
    overflow: hidden;
`;
const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content:center;
    flex: 1;
`;
const ProfilePhoto = styled.Image`
    flex: 1;
`;

const Auth = styled.View`
    margin: 10px 32px 32px;
`;

const AuthContainer = styled.View`
    margin: 0px 0px 32px 0px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
`;

const AuthField = styled.TextInput`
    border-bottom-width: 0.5px;;
    height: 48px;
`;
const SignUpContainer = styled.TouchableOpacity`
    margin 0 10px 0 10px;
    height: 48px;
    justify-content: center;
    background-color: #00716F;
    border-radius: 30px;
`;
const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#FFFFF",
    size: "small",
}))``;

const SignIn = styled.TouchableOpacity`
    margin: 16px 0px 0px 0px;
`;

const HeaderGraphic =styled.View`
    position: absolute;
    width:100%;
    top: -50px
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #00716F;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #23A6D5;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px
`;
const StatusBar = styled.StatusBar`
`;