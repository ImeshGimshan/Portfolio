export const getImageUrl = (path) => {
    return new URL(`/Resources/${path}`, import.meta.url).href;
}