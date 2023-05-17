import { Container, Grid, Loading } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CardSelected from '../components/card/cardSelected'
import DescriptionCard from '../components/movie/description'
import useFetch from '../hooks/useFetch'
import { tvShowSeletedProps } from '../interface/tvshow.interface'

const MovieSelect = () => {
    const router = useRouter()
    const { id } = router.query

    const [uuid, setUuid] = React.useState<string | null>(id as string)
    const apiUrl = `https://www.episodate.com/api/show-details?q=${uuid}`;
    const [movie, setMovie] = React.useState<tvShowSeletedProps | null>(null)
    const { data, loading } = useFetch(apiUrl);

    useEffect(() => {
        if (!id) return
        setUuid(id as string)
        setMovie(data?.tvShow)
    }, [uuid, loading])

    return (
        <Container css={{ m: '$18' }}>
            {loading ? <Loading /> :
                movie && (
                    <Grid.Container>
                        <Grid xs={11} md={3} >
                            <CardSelected movie={movie} />
                        </Grid>
                        <Grid xs={11} md={8}>
                            <DescriptionCard movie={movie} />
                        </Grid>
                    </Grid.Container>
                )
            }
        </Container>
    )
}
export default MovieSelect