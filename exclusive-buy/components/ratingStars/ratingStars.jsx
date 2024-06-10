import { rankStar } from "../itemCard/itemCardIcons"

export default function RatingStars({ rating }) {
  const ratingNum = Array.from({ length: rating })
  return (
    <div className="flex items-center">
      {ratingNum.map((star, index) => <p key={index}>{rankStar}</p>)}
    </div>
  )
}