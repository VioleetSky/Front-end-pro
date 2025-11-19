import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    TextField,
    Drawer,
    IconButton,
    useMediaQuery
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GridViewIcon from '@mui/icons-material/GridView';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {useGetPostsQuery} from "../features/apiSlice.jsx";
import {useEffect, useState} from "react";
import Basket from "../pages/Basket.jsx";
import {useTheme} from "@mui/material/styles";

const NavigationBar = () => {
    const navigate = useNavigate();
    const { data } = useGetPostsQuery();

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [openBasket, setOpenBasket] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    useEffect(() => {
        if (!data || searchQuery.trim() === "") {
            setFilteredProducts([]);
            return;
        }
        const searchResult = data.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredProducts(searchResult);
    }, [searchQuery, data]);
    const toggleDrawer = (newState) => {
        setOpenBasket(newState);
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleResultClick = (id) => {
        navigate(`/goods/${id}`);
        setSearchQuery("");
        setOpenMenu(false);
    };
    const SearchField = ({ fullWidth = false }) => (
        <TextField
            label="Пошук"
            variant="standard"
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth={fullWidth}
            sx={{
                width: fullWidth ? '100%' : "50%",
                backgroundColor: "rgba(222, 222, 225, 0.74)",
                borderRadius: "6px",
                paddingLeft: "8px",
                mt: fullWidth ? 1 : 0,
            }}/>
    );

    const SearchResultsBox = ({ isMobile }) => {
        if (searchQuery.trim() === "") return null;
        const resultsStyle = isMobile ? {
            position: "static",
            width: "100%",
            boxShadow: "none",
            borderTop: "1px solid #ddd",
        } : {
            position: "absolute",
            top: "75px",
            left: "25%",
            width: "50%",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            zIndex: 1000,
        };

        return (
            <Box
                sx={{
                    background: "#fff",
                    borderRadius: "8px",
                    maxHeight: "220px",
                    overflowY: "auto",
                    ...resultsStyle,
                }}
            >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <Box
                            key={p.id}
                            sx={{
                                padding: "10px",
                                cursor: "pointer",
                                "&:hover": { backgroundColor: "#efefef" },
                                borderBottom: "1px solid #ddd"
                            }}
                            onClick={() => handleResultClick(p.id)}
                        >
                            {p.title}
                        </Box>
                    ))
                ) : (
                    <Typography sx={{ p: 1, textAlign: "center" }}>
                        Нічого не знайдено
                    </Typography>
                )}
            </Box>
        );
    };

    return (
        <Box sx={{ position: "relative" }}>
            <AppBar
                position="sticky" elevation={0}
                sx={{
                    background: "linear-gradient(90deg, #1abc9c80, #3498db80)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    marginBottom: "30px",
                    px: { xs: 1, sm: 2 }
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography
                        display="flex"
                        alignItems="center"
                        gap={1}
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "primary.dark",
                            textShadow: "0 0 10px rgba(61, 201, 167, 0.3)",
                            letterSpacing: "0.5px",
                            flexShrink: 0,
                        }}
                    >
                        Shop <EmojiFoodBeverageIcon />
                    </Typography>
                    {!isMobile && <SearchField />}
                    {!isMobile ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                            <Button
                                component={Link} to="/"
                                sx={{
                                    color: "primary.contrastText",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    borderRadius: "10px",
                                    border: "2px solid",
                                    "&:hover": { backgroundColor: "primary.dark" },
                                    marginRight: 1}}>
                                <GridViewIcon /> Каталог
                            </Button>
                            <Button
                                sx={{
                                    color: "primary.contrastText",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "primary.dark" },
                                }} onClick={() => toggleDrawer(true)}>
                                <ShoppingBasketIcon />
                            </Button>
                        </Box>
                    ) : (
                        <IconButton onClick={() => setOpenMenu(true)} sx={{ flexShrink: 0 }}>
                            <MenuIcon sx={{ color: "white" }} />
                        </IconButton>
                    )}
                </Toolbar>
                {isMobile && searchQuery.trim() !== "" && (
                    <SearchResultsBox isMobile={true} />
                )}
            </AppBar>
            {searchQuery.trim() !== "" && !isMobile && (
                <SearchResultsBox isMobile={false} />
            )}
            <Drawer  sx={{backgroundColor: "background.basket"}} anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
                <Box sx={{ width: 250, p: 2 }}>
                    <IconButton onClick={() => setOpenMenu(false)} sx={{ float: 'right', p: 0 }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ mb: 2, pt: 1 }}>Меню</Typography>
                    <SearchField fullWidth={true} />
                    {isMobile && searchQuery.trim() !== "" && (
                        <SearchResultsBox isMobile={true} />
                    )}
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            mt: 2,
                            width: "100%",
                            color: "primary.dark",
                            fontWeight: 700,
                            justifyContent: "flex-start"
                        }} onClick={() => setOpenMenu(false)}>
                        <GridViewIcon sx={{ mr: 1 }} /> Каталог
                    </Button>
                    <Button
                        sx={{
                            mt: 1,
                            width: "100%",
                            color: "primary.dark",
                            fontWeight: 700,
                            justifyContent: "flex-start"
                        }}
                        onClick={() => {
                            setOpenMenu(false);
                            toggleDrawer(true);}}>
                        <ShoppingBasketIcon sx={{ mr: 1 }} /> Корзина</Button>
                </Box>
            </Drawer>
            <Drawer
                anchor="right"
                open={openBasket}
                onClose={() => toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: 'background.basket',
                        width: { xs: '90vw', sm: 400 }
                    }}}>
                <Box sx={{ width: '100%', padding: 2 }} role="presentation">
                    <Button onClick={() => toggleDrawer(false)} sx={{ mb: 2 }}><CloseIcon />
                    </Button>
                    <Typography
                        sx={{ color: "primary.main", fontWeight: 700 }}>Корзина</Typography>
                    <Basket />
                </Box>
            </Drawer>

        </Box>
    );
};

export default NavigationBar;