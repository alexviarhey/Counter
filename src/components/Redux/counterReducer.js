const ADD_COUNT = 'ADD_COUNT';
const DELETE_COUNT = 'DELETE_COUNT';
const SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE';
const SET_NEW_MIN_VALUE = 'SET_NEW_MIN_VALUE';
const SET_NEW_VALUES = 'SET_NEW_VALUES';


let initialState = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    newMinValue: 0,
    newMaxValue: 5,
    disabled: true
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            if (state.count < state.maxValue)
                return {
                    ...state,
                    count: state.count + 1
                };
            return {
                ...state,
                count: state.maxValue
            };

        case DELETE_COUNT:
            return {
                ...state,
                count: state.minValue
            };
        case SET_NEW_MAX_VALUE:
            return {
                ...state,
                newMaxValue: action.newValue,
                disabled: false
            };
        case SET_NEW_MIN_VALUE:
            return {
                ...state,
                newMinValue: action.newValue,
                disabled: false
            };
        case SET_NEW_VALUES:
            return {
                ...state,
                count: state.newMinValue,
                minValue: state.newMinValue,
                maxValue: state.newMaxValue,
                disabled: true
            };
        default:
            return state
    }
};

export const addCount = () => {
    return {type: ADD_COUNT}
};

export const deleteCount = () => {
    return {type: DELETE_COUNT}
};

export const setNewMaxValue = (newValue) => {
    return {type: SET_NEW_MAX_VALUE, newValue}
};

export const setNewMinValue = (newValue) => {
    return {type: SET_NEW_MIN_VALUE, newValue}
};

export const setNewValues = () => {
return {type: SET_NEW_VALUES}
};

