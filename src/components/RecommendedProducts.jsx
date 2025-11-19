import { useGetPostsByCategoryQuery } from "../features/apiSlice.jsx";
import { Box, Typography } from "@mui/material";
import CardComponent from "./CardComponent.jsx";

function RecommendedProducts({ category, currentId }) {
    const { data } = useGetPostsByCategoryQuery(category);
    if (!data) return null;
    const filtered = data.filter(item => item.id !== currentId);
    const recommended = filtered.slice(0, 8);
    if (recommended.length === 0) return null;
    return (
        <Box
            sx={{
                maxWidth: "100%",
                mx: "auto", display: "flex", flexDirection: "column",
                justifyContent: "center",
                pt: 5,
                px: { xs: 1, sm: 2, md: 4 }}}>
            <Typography variant="h5" component="div" sx={{ color: "text.secondary", mb: 2 }}>
                Рекомендовані товари для Вас
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    overflowX: "auto", gap: 3, p: 2,
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    justifyContent: { xs: "flex-start", md: "center" },
                }}>
                {recommended.map((item) => (
                    <Box
                        key={item.id} sx={{
                            flexShrink: 0,
                            width: { xs: '70vw', sm: 250, md: 280 }
                        }}>
                        <CardComponent item={item} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
export default RecommendedProducts;