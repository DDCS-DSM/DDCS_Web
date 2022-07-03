import * as S from "./styles";

interface ClaimModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const ClaimModal = ({ setModalState }: ClaimModalProps) => {
  return (
    <S.Filter>
      <S.Background>
        <S.Close onClick={() => setModalState("")}>←</S.Close>
        <S.Title>택배 수령 인증</S.Title>
        <S.Wrapper>
          <S.UploadFileWrapper>
            <S.UploadFileInput id="uploadfile" type="file" />
            <S.UploadFileLabel htmlFor="uploadfile">
              사진 업로드
            </S.UploadFileLabel>
          </S.UploadFileWrapper>
          <S.Input placeholder="택배 내용물 이름" />
          <S.Button>인증하기</S.Button>
        </S.Wrapper>
      </S.Background>
    </S.Filter>
  );
};

export default ClaimModal;
