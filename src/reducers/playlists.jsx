const initialState1 = []

const addRemovePlaylists = (state = initialState1, action) => {
    switch (action.type) {
        case 'ADDTOPLAYLIST':

        case 'REMOVEFROMPLAYLIST':
        case 'ADDPLAYLIST':
            const arr = { files: [], title: action.title }
            state.push(arr)
            console.log(state)
            return state
        case 'REMOVEPLAYLIST':
            const list = [...state]
            list.splice(action.id, 1)
            state = list
            return state;
        default: return state
    }
}

export default addRemovePlaylists