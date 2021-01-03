import React,{useContext,useState} from "react";
import styled from "styled-components"
import {UserContext} from "../context/UserContext"
import Text from '../components/Text'
import {AntDesign} from "@expo/vector-icons";
import {Platform} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
export default EditProfileScreen = () =>{
    const [photoEdit,setPhotoEdit] = useState();
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
                setPhotoEdit(result.uri);
            }

        }
        catch(error) {
            console.log("Error @pickImage:", error);
        }
    }
    const EditAvatar = async () =>{
        const status = await getPermission();
        if (status !=="granted"){
            alert("asdasd");

            return
        }
        pickImage();
    };
    return(
        <Container>
            <HeaderEditProfile>
                <Text heavy medium>Update</Text>
            </HeaderEditProfile>
            <PhotoEditContainer onPress={EditAvatar}>
                {photoEdit ?(
                    <EditPhoto source={{uri: photoEdit}}/>
                ) : (
                    <DefaultProfilePhoto>
                            <AntDesign name="plus" size={24} color="#040505"/>
                    </DefaultProfilePhoto>
                )}
                <NameUserContainer>
                    <Text heavy medium>Huỳnh Nhựt Hào</Text>
                </NameUserContainer>
            </PhotoEditContainer>
            <EditNameContainer>
                <Text heavy medium>Name</Text>
                <InputName numberOfLines={1} style={{flex:1}} placeholder="New Name"/>
            </EditNameContainer>
            <EditPasswordContainer>
                <Text heavy medium>Password</Text>
                <InputPassword numberOfLines={1} style={{flex:1}} placeholder="New Password" />
            </EditPasswordContainer>
            <EditPasswordComfirmContainer>
                <Text heavy medium>Password Comfirm</Text>
                <InputPassword numberOfLines={1} style={{flex:1}} placeholder="Password Comfirm" />
            </EditPasswordComfirmContainer>

        </Container>
    )

}
const Container = styled.View`
`;
const HeaderEditProfile = styled.TouchableOpacity`
    flex-direction: row;
    padding: 20px;
    width: 95px;
`;
const PhotoEditContainer =styled.TouchableOpacity`
    shadow-opacity: 0.9;
    shadow-radius: 30px;
    shadow-color: #222222;
    width: 128px;
    margin: 0 0 0 140px;
    align-items: center;
    
`;
const EditPhoto = styled.Image`
    width: 128px;
    height: 128px;
    border-radius:64px;
    margin: 0 0 10px 0;

`;
const NameUserContainer = styled.View`
    margin: 10px 0 0 0;
`;
const EditNameContainer = styled.View`
    flex-direction: row;
    margin: 20px 0 0 20px;
`;
const EditPasswordContainer = styled.View`
    flex-direction: row;
    margin: 20px 0 0 20px;
`;
const EditPasswordComfirmContainer = styled.View`
    flex-direction: row;
    margin: 20px 0 0 20px;
`;

const InputName =styled.TextInput`
    margin: 0 90px 0 10px;
`;
const InputPassword =styled.TextInput`
    margin: 0 90px 0 10px;
`;
const DefaultProfilePhoto = styled.View`
    shadow-opacity: 1;
    shadow-radius: 30px;
    align-items: center;
`;
