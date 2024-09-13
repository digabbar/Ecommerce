import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import productList from '../dummy';


interface Product {
    id:number;
    name: string;
    price: number;
}


interface ProductState {
    value: Product[];
}


const initialState: ProductState = {
    value: productList,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

     
        addProduct: (state, action: PayloadAction<Product>) => {

            state.value.unshift({...action.payload,id:state.value.length});
        },

     
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter(product => product.id !== action.payload);
        },

   
    },
});


export const showAllProducts = (state: { product: ProductState }) => state.product.value;


export const { addProduct, deleteProduct } = productSlice.actions;


export default productSlice.reducer;
