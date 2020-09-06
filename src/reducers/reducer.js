const initialState = {
    title: 'React-Redux starter kit.'
}

const dummyReducer = (state = initialState, action) => {
    const { payload, key } = action;
    switch (action.type) {
        case 'GET_INITIAL_STATE':
            return { ...state, [key]: initialState.title };
        default:
            return {
                ...state
            }
    }
};

export default dummyReducer;