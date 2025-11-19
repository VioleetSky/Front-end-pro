import {useDispatch, useSelector} from "react-redux";
import {addProduct, deleteProduct, decrementCounter, incrementCounter} from "../features/basketSlice.jsx";

export const useBasket=()=>{
    const dispatch = useDispatch();
    const basket=useSelector(state => state.basket.basket);
    const addBasket=(product)=>{
        dispatch(addProduct(product))
    }
    const deleteBasket= (id)=>{
        dispatch(deleteProduct(id))
    }
    const increment = (id) => dispatch(incrementCounter(id));
    const decrement = (id) => dispatch(decrementCounter(id));
      return {basket, addBasket, deleteBasket, decrement, increment};
}