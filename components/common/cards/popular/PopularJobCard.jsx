import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import {checkImageURL} from '../../../../utils/index';
import styles from './popularjobcard.style';

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {

  return (
    <TouchableOpacity
        style={styles.container(selectedJob, item.item)}
        onPress={() =>handleCardPress(item.item)}
    >
        <TouchableOpacity
            style={styles.logoContainer(selectedJob, item.item)}
        >
            <Image
                source={{uri: checkImageURL(item.item.employer_logo)
                    ? item.item.employer_logo
                    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }}
                resizeMode="contain"
                style={styles.logoImage}
            />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.item.employer_name}</Text>
        <View style={styles.infoContainer}>
            <Text style={styles.jobName(selectedJob, item.item)} numberOfLines={1}>
                {item.item.job_title}
            </Text>
            <Text style={styles.location}>{item.item.job_country}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard