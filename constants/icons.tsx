import { Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
  accueil: (props: any) => <Ionicons name="home" size={24} {...props} />,
  favourite: (props: any) => <Ionicons name="heart" size={24} {...props} />,
  myCart: (props: any) => <Ionicons name="bag" size={24} {...props} />,
  notification: (props: any) => (
    <Ionicons name="notifications" size={24} {...props} />
  ),
  profile: (props: any) => <Ionicons name="person" size={24} {...props} />,
};
