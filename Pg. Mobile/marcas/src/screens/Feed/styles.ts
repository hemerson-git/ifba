import styled from "styled-components/native";

type ContainerProps = {
  center?: boolean;
};

export const Container = styled.View`
  min-height: 100%;
  flex: 1;
  justify-content: ${({ center }: ContainerProps) =>
    center ? "center" : "flex-start"};

  align-items: ${({ center }: ContainerProps) =>
    center ? "center" : "flex-start"};
`;
