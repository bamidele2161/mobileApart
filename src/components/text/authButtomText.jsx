import { View, Text } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { color } from "../../color";

const AuthButtomText = ({ question, bottomLink, onPress }) => {
  return (
    <Container>
      <Question>{question}</Question>
      <Link onPress={onPress}>{bottomLink}</Link>
    </Container>
  );
};

export default AuthButtomText;

const Container = styled.View({
  flexDirection: "row",
  justifyContent: "center",
  display: "flex",
  gap: 4,
});
const Question = styled.Text({
  fontSize: 12,
});
const Link = styled.Text({
  fontSize: 12,
  color: color.primaryColor,
});
