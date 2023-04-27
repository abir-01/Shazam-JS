const initialState = []

const addRemoveFavourite = (state = initialState, action) => {
    switch (action.type) {
        case "ADDFAV":
            let obj = { image: action.image, title: action.title, url: action.url }
            state.push(obj)
            return state 
        case "REMOVEFAV":
            let obj1 = { image: action.image, title: action.title, url: action.url }
            const list = [...state]
            list.splice(action.id, 1)
            state = list
            return state;

        default: return state
    }
}

export default addRemoveFavourite;