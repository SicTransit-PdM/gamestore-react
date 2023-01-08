export function CartReducer(state, action){

    const newCart = [...state.cart]
    switch (action.type){
        case "ADD_ITEM":
        if(state.cart.find((item) => item.id == state.item.id)){
            state.cart.push(state.item);
        } else {
            state.cart.push(state.item);
        }

            return{
                ...state,
                count:action.payload.count,
                item:action.payload.item,
                cart:newCart
            }

            default: 
                break;
    }
}