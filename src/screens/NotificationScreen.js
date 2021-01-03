import React from "react";
import styled from "styled-components";
import Text from "../components/Text"
import {Entypo, Ionicons} from "@expo/vector-icons";
export default HomeScreen = () =>{
    return(
        <Container>
            <HeaderNotification>
                <Ionicons name="help-circle-outline" size={30}/>
                <Text large heavy>Help & Suport</Text>
            </HeaderNotification>
            <NotificationNew>
                <HelpCenterContainer>
                    <Ionicons name="help-buoy-outline" size={24}/>
                    <Text medium margin="0 0 0 8px">Help Center</Text>
                </HelpCenterContainer>
                <HelpCenterContainer>
                    <Ionicons name="help-buoy-outline" size={24}/>
                    <Text medium margin="0 0 0 8px">Help Center</Text>
                </HelpCenterContainer>
            </NotificationNew>
        </Container>
    )
}
const Container = styled.View`
    background-color:#ebecf3;
    height: 100%;
`;
const HeaderNotification = styled.View`
    padding: 10px;
    flex-direction: row;
`;
const NotificationNew = styled.TouchableOpacity``;
const InfoContainer = styled.View`
    padding: 10px;
    flex-direction: row;
    backgroundColor: #ffffff;
    margin:10px 0 0 0;
`;
const HelpCenterContainer = styled.TouchableOpacity`
    flex-direction: row;
    margin: 16px 16px 0 16px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 8px;
    height: 20%;
`;
const AvatarPhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;
const ActionUser = styled.Text``;