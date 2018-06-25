const empReducers = (state=[],action) => {

    console.log(action)
    console.log(state)
    switch(action.type){
        case 'GET_EMP':
            return state.concat(action.payload);
        case 'DELETE_EMP':
            return state.filter((emp)=>emp.id !== action.payload  );
        case 'CREATE_EMP':
            return state.concat(action.payload)
        case 'EDIT_EMP':
            return state.map((emp)=>emp.id===action.payload ? {...emp, editing:!emp.editing}:emp);
        case 'UPDATE_EMP':
            return state.map((emp)=>{
                console.log(emp,action.payload.id)
                if((emp.id) === (action.payload.id))
                {
                    console.log(!emp.editing)
                    return {
                        ...emp,
                        FirstName:action.payload.firstname,
                        LastName:action.payload.lastname,
                        Phone:action.payload.phone,
                        editing:!emp.editing
                    }

                }
                else
                {
                    return emp;
                }
            });
        default:
            return state

    }
}

export default empReducers;