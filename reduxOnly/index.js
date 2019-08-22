const {createStore} = require('redux'); //importing redux into the project

//setting the initial value 
const initialData = {
    money: 20
}

//reducer
const receptionist = (state=initialData,action) => {
    const bankBalance = {...state}
    if(action.type === 'INCREMENT'){
        bankBalance.money += 1;
    }

    if(action.type === 'DECREMENT'){
        bankBalance.money -= 2;
    }

    return bankBalance;
}

//store
const bankVault = createStore(receptionist);

//to show the state change(whenever the state changes)
bankVault.subscribe( () => {
    console.log('state changed', bankVault.getState())
})

console.log('initialBalance', initialData)
//action
bankVault.dispatch({type:'INCREMENT'});
console.log('if you deposit', bankVault.getState())
bankVault.dispatch({type:'DECREMENT'});
console.log('if you spend', bankVault.getState())