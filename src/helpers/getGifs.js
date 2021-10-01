export const getGifs = async (tags) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        tags
    )}&limit=6&api_key=wYSQ9FXFZIjyOfD57moAlX5dTOuMLzsQ`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });

    return gif;
};
