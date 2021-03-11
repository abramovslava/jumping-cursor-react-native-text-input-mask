import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

const App = () => {
  const [value, setValue] = useState('');

  const onChangeText = useCallback(
    (formatted: string) => setValue(formatted),
    [],
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TextInputMask
            value={value}
            onChangeText={onChangeText}
            mask={'+1 ([000]) [000] [00] [00]'}
            style={styles.input}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    margin: 20,
  },
});

export default App;
