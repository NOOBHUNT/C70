import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,tintColor})=>
    getTabBarIcon(navigation,focused,tintColor)
  }),
tabBarOptions:{
  activeTintColor:'tomato',
  inactiveTintColor:'grey',
  tabBarIcon:({})=>{
    const routName=navigation.state.routName
   
    if(routName==='Transaction'){
      return(<Image source={require('./assets/book.png')}/>
      )}
      else  if(routName==='search'){
        return(<Image source={require('./assets/searchingbook.png')}/>
        )
      }
    
  }
}
});


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
