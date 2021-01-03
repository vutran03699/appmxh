import React,{useContext,useState} from "react";
import styled from "styled-components"
import {UserContext} from "../context/UserContext"
import user from '../../assets/user.png'
import Text from '../components/Text'
import {AntDesign} from "@expo/vector-icons";
import {Platform} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'


export default ProfileScreen = ({navigation}) =>{
    const [photoAvatar,setAvatar] = useState();
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
                setAvatar(result.uri);
            }

        }
        catch(error) {
            console.log("Error @pickImage:", error);
        }
    }
    const addPhotoAvatar = async () =>{
        const status = await getPermission();
        if (status !=="granted"){
            alert("asdasd");

            return
        }
        pickImage();
    };
    return(
        <Container>
            <ProfilePhotoContainer onPress={addPhotoAvatar}>
                {photoAvatar ?(
                    <ProfilePhoto source={{uri: photoAvatar}}/>
                ) : (
                    <DefaultProfilePhoto>
                        <AntDesign name="plus" size={24} color="#040505"/>
                    </DefaultProfilePhoto>
                )}
                
            </ProfilePhotoContainer>

            <Text  bold medium margin="16px 0 32px 0">Huỳnh Nhựt Hào</Text>

            <StatsContainer>
                <StatContainer>
                    <Text large light>21</Text>
                    <Text small bold color="#c2c4cd">Posts</Text>
                </StatContainer>
                <StatContainer>
                    <Text large light>98</Text>
                    <Text small bold color="#c2c4cd">Followers</Text>
                </StatContainer>
                <StatContainer>
                    <Text large light>21</Text>
                    <Text small bold color="#c2c4cd">Following</Text>
                </StatContainer>
            </StatsContainer>
            <EditProfile onPress={() => navigation.navigate('EditProfile')}>
                    <Text medium bold color="#23a8d9">Edit Profile</Text>
            </EditProfile>

            <Logout>
                <Text medium bold color="#23a8d9">Log Out</Text>
            </Logout>
        </Container>
    )
}
const Container = styled.View`
    align-items: center;
    margin: 64px 0 0 0;
    flex: 1;
`;
const ProfilePhotoContainer = styled.TouchableOpacity`
    shadow-opacity: 0.9;
    shadow-radius: 30px;
    shadow-color: #222222;
`;
const ProfilePhoto = styled.Image`
    width: 128px;
    height: 128px;
    border-radius:64px;
`;
const StatsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 32px;
    flex: 1
`;
const StatContainer = styled.View`
    align-items: center;
    flex: 1
`;
const DefaultProfilePhoto =styled.View`

`;
const EditProfile = styled.TouchableOpacity`
    margin: 0 0 32px 0;
`;
const Logout = styled.TouchableOpacity`
    margin: 0 0 32px 0;
`;