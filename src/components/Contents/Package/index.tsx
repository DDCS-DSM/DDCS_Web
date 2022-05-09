import * as S from "./styles";
import { box } from "../../../assets/images";

interface PackageContentProps {
  company: string;
  presentee: string;
  date: string;
}

const PackageContent = ({ company, presentee, date }: PackageContentProps) => {
  return (
    <S.Package>
      <S.Icon src={box} />
      <S.Instance>{company}</S.Instance>
      <S.Instance>{presentee}</S.Instance>
      <S.Instance>{date}</S.Instance>
    </S.Package>
  );
};

export default PackageContent;
