const initialState = [

];

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'Submit_Info':
            state.push(action.payload)
            return state;

        case 'MOVE_TO_REGISTER':
            return ({state: state.map( list => {
                if (list.plateNumber === action.payload.plateNumber){
                  list.status = 'pending';
                  return list;
                } else {
                  return list;
                }})}
              );
              
         case 'MOVE_TO_APPROVE':
            return ({state: state.map( list => {
                if (list.plateNumber === action.payload.plateNumber){
                  list.status = 'approved';
                  return list;
                } else {
                  return list;
                }})}
              );

        case 'DELETE':
            return ({
                state: state.filter(info =>
                    info.plateNumber !== action.payload.plateNumber
                )});

        default :
            return state;
    }
}


export default reducer;