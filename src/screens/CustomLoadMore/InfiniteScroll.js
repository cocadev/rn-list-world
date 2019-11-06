import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default class InfiniteScroll extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: "", page: 1 };
        console.disableYellowBox = true;
    }

    componentDidMount() {
        this.makeRequest();
    }

    makeRequest = () => {
        const { page } = this.state;
        const url = 'https://tutorialsha.com/api/users?page=${page}';

        axios.get(url)
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: [...this.state.data, ...res.data.data],
                })
            })
    }

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1,
        }, () => {
            this.makeRequest();
        })
    }

    renderFooter = () => {
        return (
            <View style={styles.headerBg}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    renderItem(item) {
        const { id, first_name, last_name, email, avatar } = item.item;
        return (
            <View style={styles.itemView}>
                <View style={styles.imgContainer}>
                    <Image style={styles.imageStyle}
                        source={{ uri: avatar }}
                    />
                </View>

                <View style={styles.itemInfo}>
                    <Text style={styles.name}>
                        {first_name + ' ' + last_name}
                    </Text>
                    <Text numberOfLines={1}>{email}</Text>
                </View>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={item => item.id}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={100}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    itemView: {
        flex: 1,
        width,
        borderBottomWidth: 0.5,
        borderColor: '#cdcdcd',
        borderStyle: 'solid',
        paddingHorizontal: 12,
        flexDirection: 'row',
    },
    imgContainer: {
        flex: 0,
        borderColor: '#f4f4f4',
        borderWidth: 1.5,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemInfo: {
        flex: 1,
        marginHorizontal: 10,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18,
        color: '#ff0000',
        textAlign: 'left',
    },
    imageStyle: {
        height: 50,
        width: 50,
    }
});