import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/RouteStackParamList';
import {FlatList, Image, Text, View} from 'react-native';
import colors from '../../public/theme/colors';
import {DATA} from '../models/DummyLoremIpsum';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowUpCircle,
  MessageSquare,
  Share,
  Share2,
} from 'react-native-feather';
import FloatingButton from '../components/Button/FloatingButton';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
      }}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View
            style={{
              height: 483,
              marginBottom: 10,
              flexDirection: 'column',
              backgroundColor: colors.white,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row', flex: 1, height: 64}}>
              <Image
                style={{height: 40, width: 40, borderRadius: 40 / 2}}
                source={require('../assets/images/default_profile.jpg')}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{color: colors.black, fontSize: 14, marginBottom: 5}}>
                  {item.username}
                </Text>

                <Text style={{fontSize: 12}}>{item.date}</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text numberOfLines={5} style={{color: colors.black, fontSize: 14, padding: 1} }>
                {item.text}
              </Text>
            </View>

            <Image
              style={{width: '100%', height: '70%'}}
              source={require('../assets/images/default_feed.jpg')}
            />

            <View
              style={{
                flexDirection: 'row',
                height: 48,
                marginTop:10,
                padding: 10,
                alignContent: 'space-between'
              }}>
              <View style={{flexDirection: 'row'}}>
                <Share2 stroke={colors.grey[400]} style={{marginEnd: 10}} />
                <MessageSquare stroke={colors.grey[400]} />
              </View>
            </View>
          </View>
        )}
        numColumns={1}
        keyExtractor={item => item.id.toString()}
      />
      <FloatingButton/>
    </SafeAreaView>
  );
};

export default HomeScreen;
