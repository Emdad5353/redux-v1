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


//action
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
