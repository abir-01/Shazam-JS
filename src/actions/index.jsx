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