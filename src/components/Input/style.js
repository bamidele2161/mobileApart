import styled from "styled-components/native";

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Container = styled.View`
  border: ${(props) => props.border};
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 15px;
`;
export const TextInputWrapper = styled.TextInput`
  width: 80%;
  border: none;
`;
export const ToggleText = styled.Text`
  font-size: 12px;
`;
export const ToggleTextContainer = styled.TouchableOpacity``;
