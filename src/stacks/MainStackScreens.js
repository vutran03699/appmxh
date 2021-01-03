import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import PostScreen from '../screens/PostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function Root (){
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen  name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        </Stack.Navigator>
    )
}
export default MainStackScreen = () => {
    const MainStack = createBottomTabNavigator()
    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: "#222222",
            paddingBottom:12,
            
        }
    }
    const screenOptions = (({route})=>({
        tabBarIcon: ({focused}) =>{
            let iconName = "ios-home";

            switch(route.name) {
                case "Home":
                    iconName = "ios-home"
                    
                    break;
                case "Message":
                    iconName = "ios-chatbox"
                    break;
                case "Notification":
                    iconName = "ios-menu"
                    break;
                case "Profile":
                    iconName = "ios-person"
                    break;
                default:
                    iconName = "ios-home"
            }
            if(route.name ==="Post") {
                return(
                    <Ionicons name="ios-add-circle" size={48} color="#23a8d9"
                    style={{shadowColor:"#23a8d9" , marginTop:10,shadowOffset:{width:0,height:10},shadowRadius:10}}/>
                )
            }
            return <Ionicons name={iconName} style={{marginTop:10}} size={24} color={focused ? "#ffffff" : "#666666"}/>;
        }
    }))
    return(
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="Message" component={MessageScreen}/>
            <MainStack.Screen name="Post" component={PostScreen}/>
            <MainStack.Screen name="Profile" component={Root}/>
            <MainStack.Screen name="Notification" component={NotificationScreen}/>
        </MainStack.Navigator>
    )
}