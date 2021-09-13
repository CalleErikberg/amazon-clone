export const initialState ={
basket: [],
    user: null,
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
            //Adding user
        case 'ADD_TO_BASKET':
        // Logic for adding item to basket
        return {
            ...state,
            basket: [...state.basket, action.item]
        };
        case 'REMOVE_FROM_BASKET':

        //clone basket
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItems) => basketItems.id === action.id);

        if (index >= 0){
            //if items exists in basket, remove it
            newBasket.splice(index, 1);
            
        }else{
            
        }
            return {...state, basket: newBasket};
            //remove from basket
        default:
            return state;
    }
};

export default reducer;