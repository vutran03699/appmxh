import React,{useContext, useEffect} from "react";
import styled from 'styled-components'
import Text from "../components/Text"
import LottieView from 'lottie-react-native'
import { UserContext } from "../context/UserContext";
export default LoadingScreen = () =>{
    const [_,setUser] = useContext(UserContext)
    useEffect(() =>{
        setTimeout(async () => {
            setUser((state) => ({...state, isLoggedIn:false}));
        }, 1500)
    })
    return(
        <Container>
            <Text title color="#FFFFFF">Social App</Text>

            <LottieView 
            source = {require("../../assets/loadingAnimation.json")}
            autoPlay={true}
            loop={true}
            style={{width:100}}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color:#222222;
`;
