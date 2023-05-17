import React from 'react'
import { Card, Col, Text } from "@nextui-org/react";
import { tvShowSeletedProps } from '../../interface/tvshow.interface';

const CardSelected = ({ movie }: { movie: tvShowSeletedProps }) => {

  return (
    <Card >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            Network
          </Text>
          <Text h4 color="white">
            {movie?.network}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={movie?.image_path}
        width="100%"
        height="100%"
        objectFit='cover'
        alt="Card image background"
      />
    </Card>
  );


}

export default CardSelected