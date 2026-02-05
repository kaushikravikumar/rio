import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import type {Video as VideoData} from '../data/videos';

interface VideoPlayerProps {
  video: VideoData;
  isActive: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({video, isActive}) => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

  useEffect(() => {
    if (isActive) {
      setPaused(false);
    } else {
      setPaused(true);
    }
  }, [isActive]);

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const containerStyles = [
    styles.container,
    {width: SCREEN_WIDTH, height: SCREEN_HEIGHT},
  ];

  const videoStyles = [
    styles.video,
    {width: SCREEN_WIDTH, height: SCREEN_HEIGHT},
  ];

  return (
    <View style={containerStyles}>
      <TouchableOpacity
        style={styles.videoContainer}
        activeOpacity={1}
        onPress={() => setPaused(!paused)}>
        <Video
          ref={videoRef}
          source={{uri: video.videoUrl}}
          style={videoStyles}
          paused={paused}
          repeat
          resizeMode="cover"
          onLoad={() => setIsLoading(false)}
          onBuffer={() => setIsLoading(true)}
          onReadyForDisplay={() => setIsLoading(false)}
        />
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
      </TouchableOpacity>

      {/* Right side action buttons */}
      <View style={styles.rightActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setLiked(!liked)}>
          <Text style={styles.actionIcon}>{liked ? '❤️' : '🤍'}</Text>
          <Text style={styles.actionText}>{formatCount(video.likes)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionText}>{formatCount(video.comments)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>↗️</Text>
          <Text style={styles.actionText}>{formatCount(video.shares)}</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom user info */}
      <View style={styles.bottomSection}>
        <Text style={styles.username}>{video.username}</Text>
        <Text style={styles.description}>{video.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    position: 'absolute',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  rightActions: {
    position: 'absolute',
    right: 10,
    bottom: 100,
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 4,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 60,
    left: 10,
    right: 80,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 14,
  },
});
