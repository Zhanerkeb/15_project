import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios';

function ArtworkDetail() {
    const params = useParams()
    const [artwork, setArtwork] = useState({})

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/${params.id}`).then(res => {
           setArtwork(res.data.data)
        }    
        ).catch(err => console.log(err))
    }, []);

    return(
        <h1>
            {artwork.title}
        </h1>
    )
}

export default ArtworkDetail