import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';

function Rating({rating}) {
    const maxStars = 5;

    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(maxStars)].map((_, index) => {
                const fullStar = index + 1 <= rating;
                const halfStar = index + 0.5 <= rating && !fullStar;

                return (
                    <span key={index} style={{ color: "#FFD700", fontSize: "22px" }}>
            {fullStar ? <StarIcon/> : halfStar ? <StarHalfIcon/> : <StarBorderIcon/>}
          </span>
                );
            })}
        </div>
    );
}
export default Rating;