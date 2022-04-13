import * as S from "./style";

const Banner = require("../../assets/png/banner.png");
const Bike = require("../../assets/png/bike.png");

interface ImageProps {
  index: string;
}

const Image = ({ index }: ImageProps) => {
  return (
    <S.Image src={index === "Banner" ? Banner : Bike} index={index}></S.Image>
  );
};

export default Image;
