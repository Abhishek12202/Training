const redux = require('redux');
const createStore = redux.createStore;

const initialState =  {
    NoBooks: 10
}

const action = {
    type: "Buy_Book",
    information: "This is book"
}

function BuyBook(){
    return action;
}

const Reducer = (state=initialState,action) => {
    switch(action.type){
        case "Buy_Book":return{
                ...state,
                NoBooks: state.NoBooks-1
            }   
        default:return state;
    }
}

const store = createStore(Reducer);
console.log("initial value",store.getState());
const unsubcribe = store.subcribe(()=>{console.log("updated state value",store.getState())});
store.dispatch(BuyBook())
unsubcribe();