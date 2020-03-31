import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #efefef;
`;

export const Header = styled.View`
  background-color: #077ed8;
  align-items: center;
  height: 40px;
  margin-top: 0px;
  margin-bottom: 10px
  border-bottom-width: 2;
  border-color: #036dbd;
`;

export const TitleHeader = styled.Text`
  color: #fff;
  margin-top: 7px;
`;

export const Div = styled.View`
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #f7f7f7;
  margin: 6px;
  padding: 10px;
  border-radius: 25px;
  border: 1px;
  border-color: #dbdbdb;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #dbddde;
  bottom: 20px;
  margin: 40px;
  padding: 8px;
  align-items: center;
  border: 1px;
  border-radius: 5px;
  border-bottom-width: 2px;
  border-color: #cacaca;
`;

export const AddText = styled.Text`
  color: #3a3a3a;
  font-size: 18px;
`;

export const Title = styled.Text`
  align-items: center;
  font-size: 20px;
  bottom: 23px;
  color: #c9c9c9;
`;

export const TodoDiv = styled.View`
  background-color: #f7f7f7;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  border: 1px;
  border-bottom-width: 2px;
  border-color: #dbdbdb;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  margin-left: 5px;
`;

export const ButtonDiv = styled.View`
  flex-direction: row;
`;

export const RemoveButton = styled.TouchableOpacity`
  background-color: #f7f7f7;
  left: 10px;
  padding: 10px;
  margin-right: 11px;
  border: 1px;
  border-color: #cb2020;
`;

export const RemoveText = styled.Text`
  color: #cb2020;
`;

export const EditButton = styled.TouchableOpacity`
  background-color: #f7f7f7;
  padding: 10px;
  border: 1px;
  border-color: #0aab45;
`;

export const EditText = styled.Text`
  color: #0aab45;
`;
