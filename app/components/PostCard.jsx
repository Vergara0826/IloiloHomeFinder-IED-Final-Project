import { StyleSheet,
View,
TouchableOpacity,
Image,
Text,
 } from "react-native";

import { useNavigation } from '@react-navigation/native';

function PostCard ({ data }) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.push('postDetails',
        {
            data: data
        })}>
            <View style={styles.container}>

                <Image 
                    style={{height: 160,
                            width: '100%',
                            borderRadius: 20}}
                    source={{uri:data?.thumbnail}}/>

                <View style={styles.textsContainer}>

                    <View style={{ alignItems: 'center', marginBottom: 20 }}> 
                        <Text style={styles.postTitle} numberOfLines={1}>{data?.title}</Text>
                        <Text style={styles.postLocation}>{data.address}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <Text style={styles.price}>{`Php ${data?.rentPrice}`}</Text>
                        <Text style={styles.monthly}>monthly</Text>
                    </View>

                </View>            

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 12
    },
    textsContainer: {
        justifyContent: 'space-between',
        padding: 12,
        flexDirection:'row',
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 10,
    },
    postTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "black",
        alignSelf: 'flex-start',
        width: 250,
    },
    postLocation: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "grey",
        alignSelf: 'flex-start'
    },
    price: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontSize: 18,
        color: "teal",
    },
    monthly: {
        alignSelf: 'flex-end',
        fontSize: 12,
        fontWeight: 'bold',
        color: "grey",
    },

});
export default PostCard;