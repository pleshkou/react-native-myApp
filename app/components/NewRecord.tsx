import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addRecord} from '../redux/actions';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export const NewRecord = () => {
  const dispatch = useDispatch();
  const recordInput = useRef<any>();
  const handleSubmit = (e: any) => {
    dispatch(addRecord(e.nativeEvent.text));
    recordInput.current.clear();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add record:</Text>
      <TextInput
        style={styles.input}
        placeholder="New record"
        ref={recordInput}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 24,
  },
});
