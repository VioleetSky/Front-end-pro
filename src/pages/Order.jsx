import { useState } from "react";
import { useSelector } from "react-redux";
import {
    Box,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    Container,
} from "@mui/material";

function Order() {
    const basket = useSelector((state) => state.basket.basket);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Замовлення:", { ...formData, basket });
        setSubmitted(true);
    };
    const totalAmount = basket.reduce((sum, item) => sum + item.price * item.counter, 0);
    const content = submitted ? (
        <Box sx={{ textAlign: "center", mt: 10, p: { xs: 2, sm: 3 } }}>
            <Typography variant="h4" gutterBottom>
                Дякуємо за замовлення!
            </Typography>
            <Typography variant="body1">
                Ми надішлемо вам підтвердження на **{formData.email}**
            </Typography>
        </Box>) : (
        <Box
            sx={{
                maxWidth: 600,
                mx: "auto",
                mt: 5,
                mb: 5,
                px: { xs: 2, sm: 0 }
            }}>
            <Typography variant="h4" gutterBottom>
                Оформлення замовлення
            </Typography>
            <List sx={{ mb: 3 }}>
                {basket.map((item) => (
                    <div key={item.id}>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary={`${item.title} x${item.counter}`}
                                secondary={
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="body2" color="text.secondary">Кількість: {item.counter}</Typography>
                                        <Typography variant="body1" fontWeight="bold">${(item.price * item.counter).toFixed(2)}</Typography>
                                    </Box>
                                }
                            />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
                <Typography variant="h6" sx={{ mt: 2, textAlign: "right", fontWeight: 700 }}>
                    Разом: ${totalAmount.toFixed(2)}
                </Typography>
            </List>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Ім'я" name="name"
                    value={formData.name} onChange={handleChange} fullWidth
                    sx={{ mb: 2 }}
                    required
                />
                <TextField
                    label="Email" name="email" type="email" value={formData.email}
                    onChange={handleChange} fullWidth sx={{ mb: 2 }}
                    required
                />
                <TextField
                    label="Адреса доставки" name="address" value={formData.address}
                    onChange={handleChange} fullWidth
                    sx={{ mb: 2 }}
                    required/>
                <TextField
                    label="Телефон" name="phone" value={formData.phone} onChange={handleChange} fullWidth
                    sx={{ mb: 3 }}
                    required/>
                <Button type="submit" variant="contained" fullWidth size="large">
                    Підтвердити замовлення
                </Button>
            </form>
        </Box>
    );
    return (
        <Container maxWidth="lg">
            {basket.length === 0 ? (
                <Box sx={{ textAlign: "center", mt: 10 }}>
                    <Typography variant="h4">Корзина порожня</Typography>
                </Box>) : (content)}
        </Container>
    );
}

export default Order;