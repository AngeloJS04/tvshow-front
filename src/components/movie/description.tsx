import React from 'react'
import { tvShowSeletedProps } from '../../interface/tvshow.interface'
import { Button, Card, Grid, Progress, Row, Text } from '@nextui-org/react'

const DescriptionCard = ({ movie }: { movie: tvShowSeletedProps }) => {
    const rating = Number(movie?.rating) * 10
    return (
        <Grid.Container gap={2} justify='center'>
            <Grid sm={12} md={12}>
                <Card css={{ mw: "100%" }}>
                    <Card.Header>
                        <Text size={22} weight="bold" css={{ mr: '$10' }} transform="uppercase">{movie?.name}</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text size={22} weight="bold" css={{ mr: '$10' }} transform="uppercase" >
                            Description:
                        </Text>
                        <Text size={20}>

                            {movie?.description}
                        </Text>
                        <Button.Group css={{ display: 'flex', justifyContent: '', mt: '$16' }} color="success">
                            <Button onClick={() => window.open(movie?.description_source, "_blank")}>Description Source </Button>
                            <Button onClick={() => window.open(movie?.url, "_blank")}>Watch Episodes</Button>
                            <Button onClick={() => window.open(movie?.youtube_link, "_blank")}>See Trailer</Button>
                        </Button.Group>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Text size={12} weight="bold" css={{ mr: '$10' }} transform="uppercase" >
                                Rating:
                            </Text>
                            <Progress color="success" status="success" value={rating} />

                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>

        </Grid.Container>
    )
}

export default DescriptionCard