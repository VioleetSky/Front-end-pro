import {useParams} from "react-router-dom";
import {useGetPostsByIdQuery} from "../features/apiSlice.jsx";
import Rating from "../components/Rating";
import RecommendedProducts from "../components/RecommendedProducts.jsx";
import {
    CircularProgress,
    Container,
    Card,
    CardActions,
    Button,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Goods(){
    const {id}= useParams();
    const {data, isLoading, error} = useGetPostsByIdQuery(id);
    if (error && !data) return (
        <Container sx={{ mt: 5 }}>
            <Alert severity="error">Помилка завантаження даних</Alert>
        </Container>
    );
    if (isLoading) return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
            <CircularProgress />
        </Box>
    );

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Card sx={{
                p: { xs: "1rem", md: "2rem" },
                maxWidth: "100%"}}>
                <Grid container spacing={4} alignItems="stretch">
                    <Grid item xs={12} md={5}>
                        <CardMedia
                            component="img"
                            alt={data.title}
                            image={data.image}
                            sx={{
                                objectFit: 'contain',
                                height: { xs: 300, md: 450 },
                                width: '100%',
                            }}/>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: '100%',
                            }}>
                            <CardContent sx={{ p: 0 }}>
                                <Typography gutterBottom variant="h5" fontSize="30px" component="div">
                                    {data.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', my: 3, fontSize: "15px" }}>
                                    {data.description}
                                </Typography>
                                <Rating rating={data.rating.rate} />
                                <Typography sx={{ my: 2 }}>
                                    Категорія: {data.category}
                                </Typography>
                            </CardContent>

                            <Box>
                                <Typography sx={{
                                    color: "text.primary", fontWeight: 800,
                                    textAlign: { xs: "left", md: "right" },
                                    fontSize: "24px",
                                    mt: { xs: 2, md: 0 },}}>
                                    Ціна: ${data.price}
                                </Typography>
                                <CardActions
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        justifyContent: "space-between",
                                        alignItems: 'stretch',
                                        p: 0,
                                        mt: 2
                                    }}>
                                    <Button variant="contained" size="large" sx={{ flexGrow: 1, mb: { xs: 1, sm: 0 }, mr: { sm: 1 } }}>
                                        Додати у кошик
                                    </Button>
                                    <Button variant="outlined" size="large" sx={{ flexGrow: 1 }}>
                                        Повернутись на Головну
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Card>

            <RecommendedProducts category={data.category} currentId={data.id} />
        </Container>
    )
}
export default Goods;