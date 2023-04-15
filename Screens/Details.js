import React from "react";
import {Text, View, SafeAreaView, FlatList} from "react-native";
import {COLORS, SIZES, FONTS, SHADOWS} from "../constants";
import { RectButton, FocusStatusBar, DetailsDesc, DetailsBid, DetailsHeader} from "../components";
import {SubInfo} from "../components/SubInfo";

const Details = ({route, navigation}) => {
    // console.log(route)
    const {bids} = route.params;
    const data = route.params;
    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                paddingVertical: SIZES.font,
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.5)',
                zIndex:1
            }}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
            </View>
            <FlatList
                data={bids}
                renderItem={({item}) => <DetailsBid bid={item}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:SIZES.extraLarge *3 }}
                ListHeaderComponent={() =>  (<React.Fragment>
                    <DetailsHeader data={data} navigation={navigation}/>
                    <SubInfo/>
                    <View style={{padding:SIZES.font}}>
                        <DetailsDesc data={data}/>
                        {bids.length > 0 && (
                            <Text style={{
                                fontSize:SIZES.font,
                                fontFamily:FONTS.semiBold,
                                color:COLORS.primary
                            }}>
                                Current bids
                            </Text>
                        )}
                    </View>
                </React.Fragment>)}
            />

        </SafeAreaView>
    );
}

export default Details;