import * as S from "./styles";

const Banner = require("../../assets/images/banner.png");
const Bike = require("../../assets/images/bike.png");

interface ImageProps {
  index: string;
}

const Image = ({ index }: ImageProps) => {
  return (
    <S.Image src={index === "Banner" ? Banner : Bike} index={index}></S.Image>
  );
};

export default Image;
