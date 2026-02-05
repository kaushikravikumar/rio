# Rio TikTok-Style Feed - Architecture

## Overview
This React Native app implements a TikTok-style vertical video feed with smooth scrolling and interactive controls.

## Component Architecture

### 1. App.tsx (Root Component)
- Entry point for the application
- Sets up:
  - `GestureHandlerRootView` for gesture support
  - `SafeAreaProvider` for safe area handling
  - Dark status bar for immersive video experience
  - `VideoFeed` component

### 2. VideoFeed.tsx (Main Feed Component)
**Purpose**: Manages the vertical scrolling feed of videos

**Key Features**:
- Uses `FlatList` with `pagingEnabled` for snap-to-page scrolling
- Tracks which video is currently visible using `ViewabilityConfig`
- Only plays the video that's currently in view (pauses others)
- Implements smooth vertical scrolling with snap behavior

**State Management**:
- `activeVideoIndex`: Tracks which video is currently visible

**Props Used**:
- `snapToInterval`: Ensures videos snap to full screen
- `decelerationRate="fast"`: Makes scrolling feel snappier
- `viewabilityConfig`: Determines when a video is "active"

### 3. VideoPlayer.tsx (Individual Video Component)
**Purpose**: Renders a single video with TikTok-style UI overlay

**Key Features**:
- Video playback using `react-native-video`
- Auto-play/pause based on `isActive` prop
- Tap to play/pause
- Like button with heart animation
- Comment and share buttons
- User info overlay at bottom
- Loading indicator while video buffers

**UI Layout**:
```
┌─────────────────────────────────┐
│                                 │
│        Video Player             │
│      (Full Screen)              │
│                                 │
│                                 │
│                            ┌───┐│
│                            │ ❤ ││ <- Action Buttons
│                            │ 💬││
│                            │ ↗ ││
│                            └───┘│
│                                 │
│ @username                       │
│ Description text...             │
└─────────────────────────────────┘
```

**State Management**:
- `paused`: Video play/pause state
- `isLoading`: Video buffering state
- `liked`: Whether user has liked the video

### 4. videos.ts (Mock Data)
**Purpose**: Provides sample video data

**Video Interface**:
```typescript
interface Video {
  id: string;
  username: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  shares: number;
}
```

## Technical Decisions

### 1. Why useWindowDimensions instead of Dimensions.get()?
- `useWindowDimensions` is a hook that re-renders on dimension changes (rotation)
- More testable (can be easily mocked in tests)
- Responds to device orientation changes automatically

### 2. Why ViewabilityConfig?
- Determines which video is "in view" based on percentage visible
- Set to 50% threshold (video becomes active when 50% visible)
- Ensures smooth transitions between videos

### 3. Video Player Auto-Pause Logic
- Uses `useEffect` to watch `isActive` prop
- Automatically pauses when user scrolls away
- Prevents multiple videos playing simultaneously
- Saves battery and data

### 4. FlatList Optimization
- `getItemLayout` for performance (skips measurement)
- Each video is exactly screen height
- Enables fast scrolling with consistent item sizes

## User Interactions

1. **Scroll**: Swipe up/down to navigate between videos
2. **Tap Video**: Play/pause the current video
3. **Like Button**: Toggle heart (red/white)
4. **Comment/Share**: UI placeholders (ready for implementation)

## Dependencies

### Production Dependencies
- `react-native-video`: Video playback
- `react-native-gesture-handler`: Touch gestures
- `react-native-safe-area-context`: Safe area handling

### Why These Libraries?
- **react-native-video**: Industry standard for video playback in RN
- **gesture-handler**: Better performance than built-in gestures
- **safe-area-context**: Handles notches and safe areas across devices

## Future Enhancements

1. **Video Preloading**: Preload next/previous videos for smoother experience
2. **Double-tap to Like**: Common TikTok gesture
3. **Comments Modal**: Full comments view
4. **Share Sheet**: Native share functionality
5. **Follow Button**: On user profile
6. **Sound Toggle**: Mute/unmute audio
7. **Video Progress Bar**: Show playback progress
8. **Pull to Refresh**: Load new videos
9. **Infinite Scroll**: Load more videos as user scrolls

## Performance Considerations

1. **Single Active Video**: Only one video plays at a time
2. **Virtualization**: FlatList only renders visible items
3. **Optimized Re-renders**: Minimal state updates
4. **Memoization**: ViewabilityConfig callback is memoized

## Testing Strategy

- Unit tests for components (with mocked native modules)
- Tests verify component exports and basic functionality
- Native modules (Video, GestureHandler) are mocked in jest.setup.js
