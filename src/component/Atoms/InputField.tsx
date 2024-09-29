import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../../helpers/scaling';
import global from '../../../helpers/global';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  error?: string;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
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

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(12),
  },
  label: {
    fontSize: scaleFontSize(16),
    fontFamily: global.getFontFamily('600'),
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: global.color.border,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: verticalScale(5),
    backgroundColor: global.color.background,
  },
  inputContainerFocused: {
    borderColor: global.color.success,
  },
  inputContainerError: {
    borderColor: global.color.error,
  },
  input: {
    flex: 1,
    fontSize: global.fontSize.f16,
    fontFamily: global.getFontFamily('500'),
    paddingVertical: verticalScale(5),
  },
  errorText: {
    color: global.color.error,
    fontSize: global.fontSize.f12,
    fontFamily: global.getFontFamily('400'),
    marginTop: 5,
  },
});

export default InputField;
