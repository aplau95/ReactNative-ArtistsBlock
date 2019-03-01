export const getImageList = () => {
    const URL = "https://api.unsplash.com/photos/random?client_id=bc37901814227d25f99ac03155e0e111c458e496b2d2bd6a14dab630e5568247&count=30&orientation=landscape&query=nature";
    return fetch(URL)
        .then((res) => res.json());
}