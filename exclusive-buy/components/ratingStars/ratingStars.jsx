import { rankStar } from "../itemCard/itemCardIcons"

export default function RatingStars({ rating }) {
  const ratingNum = Array.from({ length: rating })
  console.log(ratingNum)
  return (
    <div className="flex items-center">
      {ratingNum.map((star) => <p>{rankStar}</p>)}
    </div>
  )
}