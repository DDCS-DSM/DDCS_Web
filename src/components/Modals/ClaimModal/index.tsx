import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";

interface ClaimModalProps {
  setClaimVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClaimModal = ({ setClaimVisible }: ClaimModalProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer>();

  useEffect(() => {
    inputRef.current?.focus();

    const close = (e: any) => {
      if (e.keyCode === 27) {
        setClaimVisible(false);
        window.removeEventListener("keydown", close);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setClaimVisible, ]);

  const readFile = () => {
    setPreviewImage("");
    const fReader = new FileReader();
    if (fileRef.current && fileRef.current.files)
      fReader.readAsDataURL(fileRef.current.files[0]);
    fReader.onloadend = (event: ProgressEvent<FileReader>) => {
      if (event && event.target && event.target.result)
        setPreviewImage(event.target.result);
    };
  };

  return (
    <S.Filter>
      <S.Background>
        <S.Close onClick={() => setClaimVisible(false)}>✕</S.Close>
        <S.Title>택배 수령 인증</S.Title>
        <S.Wrapper>
          <S.UploadFileWrapper>
            <S.UploadFileInput
              onChange={() => readFile()}
              ref={fileRef}
              id="uploadfile"
              type="file"
              accept="image/*"
            />
            <S.UploadFileLabel previewImg={previewImage} htmlFor="uploadfile">
              사진 업로드
            </S.UploadFileLabel>
          </S.UploadFileWrapper>
          <S.Input ref={inputRef} placeholder="택배 내용물 이름" />
          <S.Button>인증하기</S.Button>
        </S.Wrapper>
      </S.Background>
    </S.Filter>
  );
};

export default ClaimModal;
