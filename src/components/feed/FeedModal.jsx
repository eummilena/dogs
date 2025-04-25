import React, { useEffect } from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../api';
import Loading from '../Helper/Loading';
import PhotoContent from '../photo/PhotoContent';


const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();

    useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
    }, [photo, request]);

    function handleOutsideClick(event) {
        console.log('Target:', event.target);
        console.log('Current:', event.currentTaret);

        if (event.target === event.currentTarget) setModalPhoto(null)
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
            <img src={photo.scr} />
        </div>
    )
}

export default FeedModal