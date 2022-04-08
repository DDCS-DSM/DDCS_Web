import * as S from "./style";

interface ImageProps {
  index: string;
}

const Image = ({ index }: ImageProps) => {
  return (
    <S.Image
      src={
        index === "Banner"
          ? "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          : "https://cdn.discordapp.com/attachments/921423896270491668/961801621715709972/bike.png"
      }
      index={index}
    ></S.Image>
  );
};

export default Image;
