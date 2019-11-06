//This is an example of React Native 
//FlatList Pagination to Load More Data dynamically - Infinite List
import React, { Component } from 'react';
//import react in our code.

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  ActivityIndicator,
} from 'react-native';
//import all the components we are going to use.

export default class ButtonMore extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      //Loading state used while loading the data for the first time
      serverData: [],
      //Data Source for the FlatList
      fetching_from_server: false,
      //Loading state used while loading more data
    };
    this.offset = 0;
    //Index of the offset to load from web API
  }
 
  componentDidMount() {
    //fetch('http://aboutreact.com/demo/getpost.php?offset=' + this.offset)
    fetch('https://www.doviz.com/api/v1/currencies/all/latest')
      .then(response => response.json())
      .then(responseJson => {
       responseJson = responseJson.slice((this.offset*12),((this.offset+1)*12)-1)
                 console.log("offset : "+this.offset);

         console.log(responseJson.slice((this.offset*12),((this.offset+1)*12)-1));
      //Successful response from the API Call 
        this.offset = this.offset + 1;
        //After the response increasing the offset for the next API call.
        this.setState({
         // serverData: [...this.state.serverData, ...responseJson.results],
         serverData: [...this.state.serverData, ...responseJson],
          //adding the new data with old one available in Data Source of the List
          loading: false,
          //updating the loading state to false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
 
  loadMoreData = () => {
  //On click of Load More button We will call the web API again
    this.setState({ fetching_from_server: true }, () => { 
      //fetch('http://aboutreact.com/demo/getpost.php?offset=' + this.offset)
      fetch('https://www.doviz.com/api/v1/currencies/all/latest')
          .then(response => response.json())
          .then(responseJson => {
           responseJson = responseJson.slice((this.offset*12),((this.offset+1)*12)-1)
            console.log("offset Load : "+this.offset);
          console.log(responseJson);
          //Successful response from the API Call 
            this.offset = this.offset + 1;
            
            //After the response increasing the offset for the next API call.
            this.setState({
              //serverData: [...this.state.serverData, ...responseJson.results],
              serverData: [...this.state.serverData, ...responseJson],
              fetching_from_server: false,
              //updating the loading state to false
            });
          })
          .catch(error => {
            console.error(error);
          });
    });
  };

  renderFooter() {
    return (
    //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.loadMoreData}
          //On Click of button calling loadMoreData function to load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Loading</Text>
          {this.state.fetching_from_server ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index}
            data={this.state.serverData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.text}>
                  {item.currency}
                  {'.'} 
                  {item.code}
                </Text>
              </View>
            )}
            onEndReached={this.loadMoreData}
            onEndReachedThreshold ={0.1}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={this.renderFooter.bind(this)}
            //Adding Load More button as footer component
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  item: {
    padding: 10,height:80
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});