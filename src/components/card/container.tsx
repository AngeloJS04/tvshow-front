import { Container, Grid, Text } from '@nextui-org/react'
import { useSelector } from 'react-redux'

import CardMovies from './card'
import { RootState } from '../../redux/store'
import { tvShowProps } from '../../interface/tvshow.interface'
import NotFound from '../noFound'
const ContainerCard = () => {
    const { tvshows } = useSelector((state: RootState) => state.tvShow)

    return (
        <Container>
            <Text size={22} weight="bold" css={{ mt: '$10', textAlign: 'center' }} transform="uppercase" >
                More Popular Tv Shows
            </Text>
            <Grid.Container gap={2} justify="center">
                {
                    tvshows.length ? (
                        tvshows.map((item: tvShowProps) => (
                            <Grid xs={12} sm={3}>
                                {<CardMovies key={item.id} item={item} />}
                            </Grid>
                        ))
                    ) : (<NotFound/>)
                }
            </Grid.Container>
        </Container>
    )
}

export default ContainerCard