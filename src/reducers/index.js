let baseState = {
    male: [],
    female: [],
}

export const reducer = (state = baseState, action) => {
    switch (action.type) {
        case 'GOT_MALE':
            return {
                ...state,
                male: action.male
            }
        case 'GOT_FEMALE':
            return {
                ...state,
                female: action.female
            }
        default:
            return state
    }
}
