import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const imagesResult = await getGif(category);
        setImages(imagesResult);
    }
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading: images.length == 0
    }
}
