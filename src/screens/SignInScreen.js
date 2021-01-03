import React,{useState} from "react"
import styled from 'styled-components'
import Text from '../components/Text'

export default SignInScreen = ({navigation}) =>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [loading,setLoading] = useState(false);
    return(
        <Container>
            <Main>
                <Text title semi center>Welcome to Social App</Text>
            </Main>

            <Auth>
                <AuthContainer>
                    <AuthTitle>
                        Email Address
                    </AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus={true}
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
                    secureTextEntry={true}
                    onChangeText={password =>setPassword(password.trim())}
                    value={password}
                    />
                </AuthContainer>
            </Auth>

            <SignInContainer disable={loading}>
                {loading ?(
                    <Loading/>
                ) : (
                <Text bold center color="white">
                    Sign In
                </Text>
                )}
                
            </SignInContainer>

            <SignUp onPress={() => navigation.navigate("SignUp")}>
                <Text small center>
                    Create Account ?{" "} <Text bold color="#00716F">Sign Up</Text>
                </Text>
            </SignUp>

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
    margin: 192px 0px 0px 0px;
`;
const Auth = styled.View`
    margin: 64px 32px 32px;
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
const SignInContainer = styled.TouchableOpacity`
    margin: 0 10px 0 10px;
    height: 48px;
    justify-content: center;
    background-color: #00716F;
    border-radius: 30px;
`;
const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#FFFFF",
    size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
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