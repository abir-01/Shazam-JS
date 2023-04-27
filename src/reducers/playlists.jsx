const initialState1 = []

const addRemovePlaylists = (state = initialState1, action) => {
    switch (action.type) {
        case 'ADDTOPLAYLIST':

        case 'REMOVEFROMPLAYLIST':
        case 'ADDPLAYLIST':
            const arr = { files: [], title: action.title }
            const list1 = [...state]
            list1.push(arr)
            state=list1
            return state
            console.log(state)
            
        case 'REMOVEPLAYLIST':
            const list = [...state]
            list.splice(action.id, 1)
            state = list
            return state;
        default: return state
    }
}

export default addRemovePlaylists