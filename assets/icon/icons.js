import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <AntDesign name="home" size={22} {...props} />,
    maps: (props)=> <Feather name="compass" size={22} {...props} />,
    notification: (props)=> <AntDesign name="notification" size={22} {...props} />,
    profile: (props)=> <AntDesign name="user" size={22} {...props} />,
}