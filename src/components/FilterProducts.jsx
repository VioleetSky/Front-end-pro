import {useGetPostsQuery} from "../features/apiSlice.jsx";
import {useDispatch} from "react-redux";
import { updateCategory } from '../features/categorySlice.jsx';
import {CircularProgress, Container, FormGroup, Alert, Box, Checkbox,Typography,TextField, Button, FormControlLabel} from "@mui/material";
import {useEffect, useState} from "react";


function FilterProducts() {
    const {data, isLoading, error} = useGetPostsQuery();
    const dispatch = useDispatch();
    const [maxFilterPrice, setMaxFilterPrice] = useState(0);
    const [minFilterPrice, setMinFilterPrice] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState([]);


    const getArrayValues = (keyValue) => {
        return [...new Set((data || [])
                .map(item => item[keyValue])
                .filter(value => value !== undefined && value !== null)
        )];
    }
    const listCategories=getArrayValues('category');
    const priceArray=getArrayValues('price');
    const minPrice=priceArray.length ? Math.min(...priceArray) :0;
    const maxPrice=priceArray.length ? Math.max(...priceArray) :0;

    useEffect(() => {
    setMaxFilterPrice(maxPrice);
    setMinFilterPrice(minPrice);
    }, [data,minPrice,maxPrice]);

    const handleMaxPriceChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g,"");
        setMaxFilterPrice(value);
    }
    const handleMinPriceChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g,"");
        setMinFilterPrice(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(maxFilterPrice, minFilterPrice, selectedCategory);

        dispatch(updateCategory({
            maxPrice: Number(maxFilterPrice),
            minPrice: Number(minFilterPrice),
            category: selectedCategory
        }));


    }
    const handleCategory=(category) => {
        setSelectedCategory(prevState => {
            const isSelected= prevState.includes(category);
            if(isSelected){
                return prevState.filter(item=>item!==category);
            }
            else{
                return [...prevState, category];
            }
        });

    }
    if (error) return (
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
            }}
        >
            <CircularProgress />
        </Box>
    );
    if(!data){
        return <Container sx={{ mt: 5 }}>
            <Alert severity="info">Дані відсутні.</Alert>
        </Container>
    }
    console.log(minPrice,maxPrice, "-----", listCategories);
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap:4,

        }}>
        <Box>
            <Typography sx={{
                color: 'text.primary',
                fontFamily: 'typography.fontFamily',
                fontSize: '16px'
            }}>Фільтр:</Typography>
            <FormGroup>
                {listCategories.length ? listCategories.map((category,index)=>(
                    <FormControlLabel
                        key={category}
                        control={<Checkbox
                            checked={selectedCategory.includes(category)}
                            onChange={()=>handleCategory(category)}/>}
                        label={
                            <Typography sx={{
                                color: 'text.secondary',
                                fontFamily: 'typography.fontFamily',
                                fontSize: '16px'
                            }} >
                                {category}
                            </Typography>
                        }
                    />
                )) : null}
            </FormGroup>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap:4,
        }}>
            <TextField
                id="minPrice-Text"
                type="number"
                value={minFilterPrice}
                label="Від"
                variant="filled"
                onChange={(e)=>handleMinPriceChange(e)}
                inputProps={{
                    min: minPrice,
                    max: maxPrice,
                }}
            />
            <TextField
                id="maxPrice-Text"
                type="number"
                value= {maxFilterPrice}
                label="До"
                variant="filled"
                onChange={(e)=>handleMaxPriceChange(e)}
                inputProps={{
                    min: minPrice,
                    max: maxPrice,
                }}/>
        </Box>
            <Button variant="outlined"
                    type="submit"
                    onClick={handleSubmit}
            >Застосувати</Button>
        </Box>
    )
}
export default FilterProducts;