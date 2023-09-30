import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/RouteStackParamList";
import { BottomNavbar } from "../components/BottomNavBar";

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const MainScreen: React.FC<MainScreenProps> = () => { 

    return <BottomNavbar />;
};


export default MainScreen;