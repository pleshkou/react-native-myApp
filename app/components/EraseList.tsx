import {useDispatch} from 'react-redux';
import {removeRecord} from '../redux/actions';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export const EraseList = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(removeRecord())}>
        <Text style={styles.text}>Delete checked</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 50,
  },
  text: {
    fontSize: 24,
  },
});
