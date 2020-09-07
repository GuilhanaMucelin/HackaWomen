import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Slide } from './Slide';
import { styles } from './styles'

export const Carousel = (props) => {

    const { items } = props;
    const itemsPerInterval = props.itemsPerInterval === undefined
        ? 1
        : props.itemsPerInterval;

    const [interval, setInterval] = React.useState(1);
    const [intervals, setIntervals] = React.useState(1);
    const [width, setWidth] = React.useState(0);

    const init = (width) => {
        // initialise width
        setWidth(width);
        // initialise total intervals
        const totalItems = items.length;
        setIntervals(Math.ceil(totalItems / itemsPerInterval));
    }

    const getInterval = (offset) => {
        for (let i = 1; i <= intervals; i++) {
            if (offset < (width / intervals) * i) {
                return i;
            }
            if (i == intervals) {
                return i;
            }
        }
    }

    let bullets = [];
    for (let i = 1; i <= intervals; i++) {
        bullets.push(
            <Text
                key={i}
                style={{
                    ...styles.bullet,
                    opacity: interval === i ? 0.5 : 0.1
                }}
            >
                &bull;
      </Text>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(w, h) => init(w)}
                onScroll={data => {
                    setWidth(data.nativeEvent.contentSize.width);
                    setInterval(getInterval(data.nativeEvent.contentOffset.x));
                }}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate="fast"
            >
                {items.map((item, index) => {

                    return (
                        <Slide
                            key={index}
                            caminho={item.caminho}
                            rota={item.rota}
                        />
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default Carousel;