import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';


const ListItem = ({ singleMedia }) => {
    if (!singleMedia) {
        return null; 
    }


    return (
            <TouchableOpacity style={styles.itemContainer}>
                    <Image
                    style={{ width: 150, height: 250 }}
                    source={{ uri: singleMedia.thumbnails.w160}}
                    />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{singleMedia.title}</Text>
                            <Text style={styles.descrip}>{singleMedia.description}</Text>
                        </View>
        </TouchableOpacity>
      );
    }

    ListItem.propTypes = {
        singleMedia: PropTypes.object,
      };   


      const styles = StyleSheet.create({
        itemContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'grey',
          borderBottomWidth: 1,
          padding: 15,
          marginBottom: 5,
          
        },

        textContainer: {
          marginLeft: 5,
          flex: 1,
        },
        title: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        descrip: {
          flex: 1,
        },
      });
    

export default ListItem;

