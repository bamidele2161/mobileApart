import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import {
  InputWrapper,
  Container,
  ToggleText,
  ToggleTextContainer,
  TextInputWrapper,
} from "./style";

const PrimaryInput = ({
  placeholder,
  label,
  password,
  value,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [active, setActive] = useState(false);

  return (
    <>
      {!password ? (
        <InputWrapper>
          {label && <Text style={{ color: "#3E3E3E" }}>{label}</Text>}
          <Container
            border={active ? "1px solid #9403fc" : "1px solid #c9c9c9"}
          >
            <TextInputWrapper
              onBlur={() => setActive(false)}
              onFocus={() => setActive(true)}
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
            />
          </Container>
        </InputWrapper>
      ) : (
        <InputWrapper>
          {label && <Text style={{ color: "#3E3E3E" }}>{label}</Text>}
          <Container
            border={active ? "1px solid #9403fc" : "1px solid #c9c9c9"}
          >
            <TextInputWrapper
              onBlur={() => setActive(false)}
              onFocus={() => setActive(true)}
              placeholder={placeholder}
              secureTextEntry={showPassword}
              onChangeText={onChangeText}
              value={value}
            />

            <ToggleTextContainer onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <ToggleText>Show</ToggleText>
              ) : (
                <ToggleText>Hide</ToggleText>
              )}
            </ToggleTextContainer>
          </Container>
        </InputWrapper>
      )}
    </>
  );
};

export default PrimaryInput;
