import React from 'react'
import { Button, Grid, Row, Text, Col, Card, Container } from '@nextui-org/react'
import { tvShowProps } from '../../interface/tvshow.interface'
import { useRouter } from 'next/router'


const CardMovies = ({ item }: { item: tvShowProps }) => {
    const router = useRouter()
    return (
        <Card className='card' css={{cursor:'pointer'}} >
            <div className='poster'>
                <img src={item.image_thumbnail_path} alt='poster' />
                <div className='details'>
                    <Text size={30} weight="bold" transform="uppercase" color="#ffffff" className='title'>{item.name}</Text>
                    <h3 style={{ color: '#fff', fontSize: '12px' }}>Network: {item.network}</h3>
                    <Col>
                        <Row justify="flex-end">
                            <Button onClick={() => { router.push(`/${item.id}`) }} flat auto rounded color="error">
                                <Text size={12} weight="bold" transform="uppercase">
                                    See more
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </div>

            </div>
        </Card>
    )
}

export default CardMovies