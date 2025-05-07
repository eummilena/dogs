import React, { useEffect } from 'react'
import Head from '../Helper/Head'
import useFetch from '../../hooks/useFetch'
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading'
import Error from '../Helper/Loading'
import UserStatsGraphs from './UserStatsGraphs';


const UserStats = () => {

    const { data, error, loading, request } = useFetch();

    useEffect(() => {
        async function getData() {
            const { url, options } = STATS_GET();
            await request(url, options)
        }
        getData();
    }, [request]);

    if (loading) return <Loading />
    if (error) return <Error error={error} />
    if (data)
        return (
            <>
                <Head title='Estatísticas' />
                <UserStatsGraphs data={data} />
            </>

        )
    else return null;
}

export default UserStats