import React,{useState} from "react";
import {View, StyleSheet} from "react-native";
import styled from "styled-components";
import Text from "../components/Text"
import {Entypo, Ionicons,AntDesign} from "@expo/vector-icons";
import {Platform} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default HomeScreen = () =>{
    const [photoImage,setPhotoImage] = useState();
    const getPermission = async () =>{
        if (Platform.OS !== 'web'){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            
            return status;
        }
    };
    const pickImage = async () =>{
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect: [1,1],
                quality: 0.5
            })
            if(!result.cancelled){
                setPhotoImage(result.uri);
            }

        }
        catch(error) {
            console.log("Error @pickImage:", error);
        }
    }
    const addPhotoImage = async () =>{
        const status = await getPermission();
        if (status !=="granted"){
            alert("asdasd");

            return
        }
        pickImage();
    };
    return(
        <Container>
            <HeaderPost>
                <Text medium heavy>Post</Text>
            </HeaderPost>
            <StatusUserContainer>
                <AvatarUser source={require("../../assets/user.png")} />
                <StatusInput autoFocus={true} multiline={true} numberOfLines={4} style={{flex:1}} placeholder="ban dang nghi gi ?" />
                
            </StatusUserContainer>
            <PhotoImageContainer onPress={addPhotoImage}>
                {photoImage ? (
                    <PhotoImage  source={{uri: photoImage}}/>
                ) : (
                    <DefaultProfilePhoto>
                        <AntDesign name="plus" size={24} color="#040505"/>
                    </DefaultProfilePhoto>
                )}
                
            </PhotoImageContainer>
        </Container>
    )
}
const Container = styled.View``;

const HeaderPost = styled.TouchableOpacity`
    flex-direction: row;
    padding: 20px;
    width:74px;
`;
const AvatarUser = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin: 10px 0 0 10px;
`;
const StatusInput = styled.TextInput`
    margin:0 0 0 10px;
     
`;
const PhotoImageContainer =styled.TouchableOpacity`
    margin-horizontal: 32px;
    margin:32px 0 0 0;
    height: 150px;
`;
const PhotoImage = styled.Image`
    width: 100%;
    height: 100%;
`;
const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content:center;
    flex: 1;
`;

const StatusUserContainer = styled.View`
    flex-direction: row;    
`;