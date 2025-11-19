import CardsProducts from "../components/CardsProducts.jsx";
import FilterProducts from "../components/FilterProducts.jsx";
import Box from "@mui/material/Box";


function Catalog() {

    return (
        <Box sx={{
            display: "flex",
            gap:7,
            marginBottom:20
        }}>
            <FilterProducts/>
        <CardsProducts/>
        </Box>

    )
}

export default Catalog;
