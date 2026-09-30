import { assets } from "../../assets/assets";

function RatingStars({rating}) {
  return (
    <>
      {Array(5).fill(0).map((_, idx) => (
        <img key={idx} src={rating > idx ? assets.starIconFilled : assets.starIconOutlined} alt="Icon" />
      ))}
    </>
  );
}

export default RatingStars;
