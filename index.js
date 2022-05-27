const INCREMENT= "INCREMENT";
const DECREMENT= "DECREMENT";
const ADD_USER= "ADD_USER";


//state
const initialCounterState= {
    count: 0
}

const initialUserState= {
    users: [
        {
            name: "Emdadur Rahman"
        }
    ]
}


//action- Object- type, payload
const incrementCounterAction =() => {
    return {
        type: INCREMENT,
    };
}

const decrementCounterAction =() => {
    return {
        type: DECREMENT,
    };
}

const addUser=()=>{
    return {
        type: ADD_USER,
        payload: {
            name: 'shakil'
        }
    }
}

//create reducer for counter
const counterReducer=(state, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }

        default:
             state;
    }
}
