import React, { Component } from 'react';
import { View, Text, Image, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class AutoLoadRefresh extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            loading: false, // user list loading
            isRefreshing: false, //for pull to refresh
            data: [], //user list
            error: ''
        }
    }

    componentDidMount() {
        this.fetchUser(this.page)
    }

    fetchUser(page) {
        const url = `https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`;
        this.setState({ loading: true })
        axios.get(url)
            .then(res => {
                this.setState({
                    loading: false,
                    data: this.state.data.concat(res.data.items)
                })
            })
            .catch(error => {
                this.setState({ loading: false, error: 'Something just went wrong' })
            });
    }

    onRefresh() {
        this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
        const url = `https://api.stackexchange.com/2.2/users?page=1&order=desc&sort=reputation&site=stackoverflow`;
        axios.get(url)
            .then(res => {

                this.setState({
                    isRefreshing: false,
                    data: res.data.items
                })

            })
            .catch(error => {
                this.setState({ isRefreshing: false, error: 'Something just went wrong' }) // false isRefreshing flag for disable pull to refresh
            });
    }

    render() {
        if (this.state.loading && this.page === 1) {
            return (
                <View style={{ width: '100%', height: '100%' }}>
                    <ActivityIndicator
                        size='large'
                        style={{ color: '#000' }}
                    />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                    renderItem={({ item }) => this.renderReportItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListFooterComponent={this.renderFooter.bind(this)}
                    onEndReachedThreshold={0.4}
                    onEndReached={this.handleLoadMore.bind(this)}
                />
            </View>
        );
    }

    renderReportItem = (item) => {
        return (
            <View style={{
                flexDirection: 'row',
                padding: 15,
                alignItems: 'center'
            }}>
                <Image
                    source={{ uri: item.profile_image }}
                    style={{
                        height: 50,
                        width: 50,
                        marginRight: 10
                    }} />
                <Text
                    style={{
                        fontSize: 18,
                        alignItems: 'center',
                        color: '#65A7C5',
                    }}>
                    {item.display_name}
                </Text>
                <View style={{ flex: 1}}>
                    <Text style={{ textAlign: 'right', fontSize: 20, marginRight: 12}}>{item.location}</Text>
                </View>
            </View>
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!this.state.loading) return null;
        return (
            <ActivityIndicator
                size='large'
                style={{ color: '#000' }}
            />
        );
    };

    handleLoadMore = () => {
        if (!this.state.loading) {
            this.page = this.page + 1; // increase page by 1
            this.fetchUser(this.page); // method for API call 
        }
    };
}