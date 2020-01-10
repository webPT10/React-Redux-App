
const initialState = {
    title: 'From Reducer!',
    name: 'Fitz'
}

export const reducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        default:
            return state;
    }
};
// export default reducer;