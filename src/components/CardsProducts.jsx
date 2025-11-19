import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../features/apiSlice.jsx";
import _ from "lodash";
import { CircularProgress, Container, Grid, Alert, Box, Button } from "@mui/material";
import CardComponent from "./CardComponent.jsx";

function CardsProducts() {
    const { data, error, isLoading } = useGetPostsQuery();
    const { maxPrice, minPrice, selectedCategory } = useSelector((state) => state.category);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    if (error)
        return (
            <Container sx={{ mt: 5 }}>
                <Alert severity="error">Помилка завантаження даних</Alert>
            </Container>
        );
    if (isLoading)
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",}}>
                <CircularProgress />
            </Box>
        );
    const maxFilterPrice = maxPrice ?? 1000;
    const minFilterPrice = minPrice ?? 0;
    const filteredProducts =
        data?.filter((product) => {
            const priceRange = product.price >= minFilterPrice && product.price <= maxFilterPrice;
            const categoryRange =
                !selectedCategory ||
                selectedCategory.length === 0 ||
                selectedCategory.includes(product.category);
            return priceRange && categoryRange;
        }) || [];
    const paginatedProducts = _.chunk(filteredProducts, itemsPerPage);
    const totalPages = paginatedProducts.length;
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [totalPages]);
    const currentProducts = paginatedProducts[currentPage - 1] || [];
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={3}>
                {currentProducts.map((item) => (
                    <Grid
                        item
                        key={item.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                    >
                        <CardComponent item={item} />
                    </Grid>
                ))}
            </Grid>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 4,
                    gap: 1,
                    flexWrap: "wrap",}}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                        key={i}
                        variant={currentPage === i + 1 ? "contained" : "outlined"}
                        onClick={() => setCurrentPage(i + 1)}
                        sx={{
                            minWidth: { xs: 40, sm: 48 },
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            padding: { xs: "4px 8px", sm: "6px 14px" },
                        }}>{i + 1}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}

export default CardsProducts;
