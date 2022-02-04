import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

// helper
import {colors} from '../../utils/index';

const InputField = ({
  onChangeText,
  placeholder,
  value,
  error,
  errorMessage,
  secureEntry,
}: {
  onChangeText: (text: string) => void;
  placeholder?: string;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  secureEntry?: boolean;
}): JSX.Element => {
  return (
    <View style={{}}>
      <View
        style={{
          ...styles.textInputContainer,
        }}>
        <TextInput
          style={styles.inputTextContainer}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.lightGray}
          value={value}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          secureTextEntry={secureEntry}
        />
      </View>
      {error && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default InputField;
