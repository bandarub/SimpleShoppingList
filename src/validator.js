export const validateName = (name) =>{
    if(!name){
        return {
            name:'name',
            error: 'name cannot be empty'
        }
    }
    if(/^\d+$/.test(name)){
        return {
            name:'name',
            error: 'Name must be string'
        }
    }
}
export const validateQuantity = (value) =>{
    if(!/^\d+$/.test(value)){
        return {
            name:'quantity',
            error: value? 'Quantity must be number':'quantity cannot be empty'
        }
    }
}