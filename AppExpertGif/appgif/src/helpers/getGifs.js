export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Cd0AslwuDn9je3q1dbi9o3rBdTYnvDnt`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            //? para que use solo si hay imagenes
            url: img.images?.downsized_medium.url
            
        }
    });

    return gifs;

}