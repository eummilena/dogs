import React from 'react'
import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';

const PhotoDelete = ({ id }) => {

    const { loading, request } = useFetch();

    async function handleClick() {
        const confirm = window.confirm('Tem certeza wue deseja deletar?');

        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }

    return (
        <div>
            <button onClick={handleClick} className={styles.delete}>Deletar</button>
        </div>
    )
}

export default PhotoDelete