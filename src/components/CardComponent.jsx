import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";
import Rating from "./Rating.jsx";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../hooks/useBasket.jsx";

function CardComponent({ item }) {
    const navigate = useNavigate();
    const { basket, addBasket } = useBasket();
    const limitWords = (text, limit = 5) =>
        text.split(" ").slice(0, limit).join(" ");
    const basketClick = (product) => {
        addBasket(product);
        console.log("Basket" + basket);
    };
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: 280, md: 300 },
                height: { xs: 350, sm: 380, md: 400 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 2,
            }}>
            <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                    height: { xs: 140, sm: 160, md: 180 },
                    objectFit: "contain",
                    p: {md:1,sm:10}
                }}/>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                    px: { xs: 1.5, sm: 2 },}}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="text.primary"
                    sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                    }}>
                    {limitWords(item.title)}
                </Typography>
                <Typography sx={{ mt: 0.5 }}><Rating rating={item.rating.rate} />
                </Typography>
                <Typography
                    color="text.secondary"
                    fontWeight="bold"
                    textAlign="right"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        mt: 1,
                    }}>
                    ${item.price}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: "space-between",
                    p: { xs: 1, sm: 1.5 },
                }}>
                <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => basketClick(item)}
                    sx={{
                        minWidth: { xs: 40, sm: 50 },
                        px: { xs: 1, sm: 3 },}}>
                    <ShoppingBasketIcon fontSize="small" />
                </Button>
                <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => navigate(`/goods/${item.id}`)}
                    sx={{
                        fontSize: { xs: "0.75rem", sm: "0.9rem" },
                        px: { xs: 1.5, sm: 2.5 },
                    }}>Детально
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
