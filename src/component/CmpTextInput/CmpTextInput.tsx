import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './style';
import global from '../../../helpers/global';

interface CmpTextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  error?: string;
  [key: string]: any;
}

const CmpTextInput: React.FC<CmpTextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error && styles.inputContainerError,
        ]}>
        <TextInput
          returnKeyType="done"
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={global.color.secondary}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default CmpTextInput;
