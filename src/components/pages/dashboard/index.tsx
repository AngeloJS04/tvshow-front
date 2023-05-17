'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useFetch from '../../../hooks/useFetch'
import Layout from '../../layout'
import { Container, Grid, Loading, Pagination } from '@nextui-org/react'
import { setTvShows } from '../../../redux/slices/tvshow.slice'
import ContainerCard from '../../card/container'

const DashboardPage = () => {
    const dispatch = useDispatch()
    const [offset, setOffset] = React.useState(1)
    const apiUrl = `https://www.episodate.com/api/most-popular?page=${offset}`;
    const { data, error, loading } = useFetch(apiUrl);

    useEffect(() => {
        if (!data || error) return
        dispatch(setTvShows(data))
    }, [data, offset])

    return (

        <Layout>
            <Container>
                {loading ? <Loading /> : <ContainerCard />}
                <Grid css={{ my: '$10', display: 'flex', justifyContent: 'center' }}>
                    <Pagination total={20} initialPage={1}
                        onChange={(page) => setOffset(page)}
                    />
                </Grid>
            </Container>
        </Layout>
    )
}

export default DashboardPage