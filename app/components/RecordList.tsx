import {useSelector, useDispatch} from 'react-redux';
import {toggleRecord} from '../redux/actions';
import {View, Text, StyleSheet} from 'react-native';
import {Record} from '../redux/actions';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const RecordList = () => {
  const dispatch = useDispatch();
  const records: any = useSelector(store => store);

  console.log(records);
  return (
    <View style={styles.container}>
      {records.map((record: Record) => (
        <View style={styles.record}>
          <BouncyCheckbox
            isChecked={record.checked}
            disableBuiltInState={true}
            onPress={() => dispatch(toggleRecord(record.key))}
          />
          <Text style={styles.text}>{record.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'flex-start',
    marginBottom: 20,
    padding: 10,
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
  },
  record: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
});
