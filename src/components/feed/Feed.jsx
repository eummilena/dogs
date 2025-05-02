import React, { useEffect, useState } from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import PropTypes from 'prop-types'

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        let wait = false;
        function infineScroll() {
            const scroll = window.scrollY;
            const height = document.body.offsetHeight - window.innerHeight;
            if (scroll > height * 0.75 && !wait) {
                setPages((pages) => [...pages, pages.length + 1]);
                wait = true;
                setTimeout(() => {
                    wait = false;
                }, 500);
            }
        }

        window.addEventListener('wheel', infineScroll);
        window.addEventListener('scroll', infineScroll);
        return () => {
            window.removeEventListener('wheel', infineScroll);
            window.removeEventListener('scroll', infineScroll);
        }

    }, [infinite])

    return (
        <div>

            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            {pages.map((page) =>
            (<FeedPhotos
                key={page}
                user={user}
                page={page}
                setInfinite={setInfinite}
                setModalPhoto={setModalPhoto} />)
            )}
        </div>
    )
}
Feed.defaultProps = {
    user: 0,
};


Feed.PropTypes = {
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
};

export default Feed