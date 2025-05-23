import React, { useContext } from 'react'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import UserContext from '../../UserContext'
import NotFound from '../NotFound'
import Head from '../Helper/Head'



const User = () => {

    const { data } = useContext(UserContext);
    return (
        <section className='container'>
            <Head title='Minha conta' />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path='*' element={<NotFound />} />

            </Routes>
        </section>
    )
}

export default User