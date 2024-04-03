import {
  ContainerDiv,
  SignatureP,
  TextP,
  TitleH2,
} from './TimerWarning.styled';

export default function TimerWarning() {
  return (
    <ContainerDiv>
      <TitleH2>Hello  Fitflow twam!</TitleH2>

      <TextP>
        In our free hosting world, occasionally your request might take a little
        longer after inactivity.
      </TextP>

      <SignatureP>
        Best regards,
        <br /> The FiFlex team 
      </SignatureP>
    </ContainerDiv>
  );
}
