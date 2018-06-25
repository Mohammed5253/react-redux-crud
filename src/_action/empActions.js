export const getEmp = () => {
    return dispatch =>(
        fetch('http://localhost/reactproject/react-emp/PHP-API/select.php')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{

            console.log(data)
            return dispatch({
                type:"GET_EMP",
                payload:data
            })
        })

    )
}

export const editEmp = (id) =>{
    return dispatch => {
        return dispatch({
            type:'EDIT_EMP',
            payload:id
        })
    }
}


export const deleteEmp = (did) => {
    return dispatch => {
        const data = {
            id:did
        }
        fetch('http://localhost/reactproject/react-emp/PHP-API/delete.php',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((res)=>{res.json})
        .then((data)=>{
            return dispatch({
                type:'DELETE_EMP',
                payload:did
            })
        })
    }
}

export const updateEmp = (empdata) => {
    // console.log(empdata)
    return dispatch => {
        
        fetch('http://localhost/reactproject/react-emp/PHP-API/update.php',{
            method:'POST',
            body: JSON.stringify(empdata)
        })
        .then((res)=>{return res.json()})
        .then((ress)=>{
            console.log(ress)
            return dispatch({
                type:'UPDATE_EMP',
                payload:empdata

            })
        })
    }
}

export const addEmp = (data) => {
    return dispatch => {
        fetch('http://localhost/reactproject/react-emp/PHP-API/insert.php',{
            method:'POST',
            body:JSON.stringify(data)
        }).then((res)=>{ return res.json()})
        .then((resdata)=>{
            data['id']=resdata;
            return dispatch({
                type:'CREATE_EMP',
                payload:data
            })
        })
    }
}