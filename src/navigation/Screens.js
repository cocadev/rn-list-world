import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/User/Login';
import HeightUnequalExample from '../screens/LargeList/HeightUnequalExample';
import {HeightEqualExample} from '../screens/LargeList/HeightEqualExample';
import { MessageExample } from '../screens/LargeList/MessageExample';
import { ContactExample } from '../screens/LargeList/ContactExample';
import { MenuListExample } from '../screens/LargeList/MenuListExample';
import { RefreshAndLoadingExample } from '../screens/LargeList/RefreshAndLoadingExample';
import { IntensiveSectionExample } from '../screens/LargeList/IntensiveSectionExample';
import { ChatExample } from '../screens/LargeList/ChatExample';
import { FlatListExample } from '../screens/LargeList/FlatListExample';
import { StickyFormExample } from '../screens/LargeList/StickyFormExample';
import { WaterfallListExample } from '../screens/LargeList/WaterfallListExample';
import { PictureExample } from '../screens/LargeList/PictureExample';
import AutoLoadRefresh from '../screens/CustomLoadMore/AutoLoadRefresh';
import LoadMore from '../screens/CustomLoadMore/LoadMore';
import InfiniteScroll from '../screens/CustomLoadMore/InfiniteScroll';
import FastImageExample from '../screens/FastImage/FastImageExamples';
import FastImageGrid from '../screens/FastImage/FastImageGrid';
import DefaultImageGrid from '../screens/FastImage/DefaultImageGrid';
import DraggableScreen from '../screens/Draggable/draggable';
import GridListScreen from '../screens/react-native-grid-list/GridListScreen';
import GridSimple from '../screens/react-native-grid-list/GridSimple';

const LoginNavigator = createStackNavigator({

  Login: { screen: LoginScreen, navigationOptions: () => ({ header: null })},
  HeightUnequalExample: { screen: HeightUnequalExample, navigationOptions: () => ({ header: null })},
  HeightEqualExample: { screen: HeightEqualExample, navigationOptions: () => ({ header: null })},
  MessageExample: { screen: MessageExample, navigationOptions: () => ({ header: null })},
  ContactExample: { screen: ContactExample, navigationOptions: () => ({ header: null })},
  MenuListExample: { screen: MenuListExample, navigationOptions: () => ({ header: null })},
  RefreshAndLoadingExample: { screen: RefreshAndLoadingExample, navigationOptions: () => ({ header: null })},
  IntensiveSectionExample: { screen: IntensiveSectionExample, navigationOptions: () => ({ header: null })},
  ChatExample: { screen: ChatExample, navigationOptions: () => ({ header: null })},
  FlatListExample: { screen: FlatListExample, navigationOptions: () => ({ header: null })},
  StickyFormExample: { screen: StickyFormExample, navigationOptions: () => ({ header: null })},
  WaterfallListExample: { screen: WaterfallListExample, navigationOptions: () => ({ header: null })},
  PictureExample: { screen: PictureExample, navigationOptions: () => ({ header: null })},

  AutoLoadRefresh: { screen: AutoLoadRefresh, navigationOptions: () => ({ header: null })},
  LoadMore: { screen: LoadMore, navigationOptions: () => ({ header: null })},
  InfiniteScroll: { screen: InfiniteScroll, navigationOptions: () => ({ header: null })},

  FastImageExample: { screen: FastImageExample, navigationOptions: () => ({ header: null })},
  FastImageGrid: { screen: FastImageGrid, navigationOptions: () => ({ header: null })},
  DefaultImageGrid: { screen: DefaultImageGrid, navigationOptions: () => ({ header: null })},

  DraggableScreen: { screen: DraggableScreen, navigationOptions: () => ({ header: null })},
  GridListScreen: { screen: GridListScreen, navigationOptions: () => ({ header: null })},
  GridSimple: { screen: GridSimple, navigationOptions: () => ({ header: null })},


});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Login: LoginNavigator,
  }),
);

export default AppContainer;
