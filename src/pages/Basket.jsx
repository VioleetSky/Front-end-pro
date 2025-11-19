import { useSelector } from "react-redux";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider, Button
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useBasket} from "../hooks/useBasket.jsx";
import {Link} from "react-router-dom";

function Basket() {
    const productsFromBasket = useSelector(state => state.basket.basket);
    const {deleteBasket, increment, decrement} = useBasket();

    if (productsFromBasket.length === 0) {
        return (
            <Box>
                <Typography variant="h4" component="h2"
                sx={{
                    color:"primary.light",
                    width: 300,
                    mx: "auto",
                    py: "5em"
                }}
                >
                    Корзина порожня
                </Typography>
            </Box>
        );
    }

    return (
        <Box>
            <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
                {productsFromBasket.map((product, index) => (
                    <div key={product.id}>
                        <ListItem alignItems="center"
                        >
                            <ListItemAvatar>
                                <Avatar src={product.image} alt={product.title} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={product.title}
                                secondary={
                                <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        ${product.price}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        sx={{color: 'text.secondary'}}>
                                        <Button onClick={() => increment(product.id)}>+</Button>
                                        {product.counter}
                                        <Button onClick={() => decrement(product.id)}>-</Button>
                                    </Typography>
                                </Box>
                                }
                            />
                            <Button sx={{
                                px:3,
                                color: "red"
                            }}
                            onClick={()=>deleteBasket(product.id)}
                            >
                            <DeleteOutlineIcon />
                            </Button>
                        </ListItem>
                        {index < productsFromBasket.length - 1 && <Divider component="li" />}
                    </div>
                ))}
                <Typography sx={{ my:2, fontWeight: 700 }}>
                    Разом: ${productsFromBasket.reduce((sum, p) => sum + p.price * p.counter, 0)}
                </Typography>
                <Button
                    component={Link}
                    to="/order"
                    variant="contained">
                    Оформити замовлення
                </Button>
            </List>
        </Box>
    );
}

export default Basket;
