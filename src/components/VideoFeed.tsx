import React, {useRef, useState, useCallback} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ViewToken,
  useWindowDimensions,
} from 'react-native';
import {VideoPlayer} from './VideoPlayer';
import {videos} from '../data/videos';

export const VideoFeed: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const {height: SCREEN_HEIGHT} = useWindowDimensions();

  const onViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveVideoIndex(viewableItems[0].index);
      }
    },
    [],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={videos}
        renderItem={({item, index}) => (
          <VideoPlayer video={item} isActive={index === activeVideoIndex} />
        )}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: SCREEN_HEIGHT,
          offset: SCREEN_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
