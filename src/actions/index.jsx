export const addFav = (image,title,url) => {
    return {
        type: "ADDFAV",
        image: image,
        title: title,
        url:url
        
    }
}

export const removeFav = (image, title, url,id) => {
    return {
        type: "REMOVEFAV",
        image: image,
        title: title,
        url: url,
        id:id
    }
}

export const addToPlaylist = () => {
    return {
        type: "ADDTOPLAYLIST",
    }
}
export const removeFromPlaylist = () => {
    return {
        type: "REMOVEFROMPLAYLIST",
    }
}
export const addPlaylist = (image,title) => {
    return {
        type: "ADDPLAYLIST",
        image: image,
        title:title
        
    }
}
export const removePlaylist = (id) => {
    return {
        type: "REMOVEPLAYLIST",
        id:id
    }
}
