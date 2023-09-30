import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../../public/theme/colors';
import {Edit, Edit2, Edit3} from 'react-native-feather';

const FloatingButton = () => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: colors.FAB[100],
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        position: 'absolute',
        top: 670,
        right: 20,
        height: 50,
        backgroundColor: colors.tahiti[500],
        borderRadius: 100,
      }}
      onPress={() => {}}>
      <Edit2 stroke={colors.white} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
