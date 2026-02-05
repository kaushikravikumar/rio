# Rio App - UI Mockup

## Main Screen: Video Feed

The app displays a full-screen vertical video feed similar to TikTok. Users can swipe up/down to navigate between videos.

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                   ┃
┃                                   ┃
┃                                   ┃
┃         VIDEO PLAYING             ┃
┃        (FULL SCREEN)              ┃
┃                                   ┃
┃                                   ┃
┃                                   ┃
┃                              ┌──┐ ┃
┃                              │❤️│ ┃  ← Like Button
┃                              │  │ ┃
┃                              │12K┃ ┃
┃                              └──┘ ┃
┃                                   ┃
┃                              ┌──┐ ┃
┃                              │💬│ ┃  ← Comments
┃                              │  │ ┃
┃                              │234┃ ┃
┃                              └──┘ ┃
┃                                   ┃
┃                              ┌──┐ ┃
┃                              │↗️│ ┃  ← Share
┃                              │  │ ┃
┃                              │89 ┃ ┃
┃                              └──┘ ┃
┃                                   ┃
┃  @user1                           ┃  ← Username
┃  Amazing sunset view 🌅           ┃  ← Description
┃  #nature #sunset                  ┃  ← Hashtags
┃                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
       ↑ Swipe up for next video ↑
```

## User Interactions

### 1. Scrolling
- **Swipe Up**: Go to next video
- **Swipe Down**: Go to previous video
- Videos snap to full screen automatically

### 2. Video Controls
- **Tap Video**: Play/Pause toggle
- Video auto-plays when it comes into view
- Video auto-pauses when scrolled away

### 3. Action Buttons (Right Side)
- **Like Button (Heart)**:
  - White outline = Not liked
  - Red filled = Liked
  - Shows like count (e.g., "12.5K")
  
- **Comment Button**:
  - Shows comment count
  - UI ready for future comment implementation
  
- **Share Button**:
  - Shows share count
  - UI ready for future share implementation

### 4. Video Information (Bottom)
- **Username**: Displayed with @ symbol
- **Description**: Video caption/description
- **Hashtags**: Included in description

## Video States

### Loading State
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                   ┃
┃                                   ┃
┃                                   ┃
┃            ⟳                      ┃
┃        Loading...                 ┃  ← Spinner
┃                                   ┃
┃                                   ┃
┃                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Playing State
- Video plays smoothly
- All controls visible
- Tap to pause

### Paused State
- Video frozen on current frame
- All controls visible
- Tap to play

## Color Scheme

- **Background**: Black (#000)
- **Text**: White (#fff)
- **Overlay**: Semi-transparent black for readability
- **Like Button Active**: Red (❤️)
- **Like Button Inactive**: White outline (🤍)
- **Other Buttons**: White/emoji

## Typography

- **Username**: 16px, Bold
- **Description**: 14px, Regular
- **Action Counts**: 12px, Semi-bold
- **Action Icons**: 32px emoji

## Sample Videos Included

1. **Video 1**: @user1 - "Amazing sunset view 🌅 #nature #sunset"
2. **Video 2**: @user2 - "Dance challenge 💃 #dance #trending"
3. **Video 3**: @user3 - "Cooking tutorial 🍳 #food #cooking"
4. **Video 4**: @user4 - "Fitness motivation 💪 #fitness #gym"
5. **Video 5**: @user5 - "Pet compilation 🐶 #pets #cute"

## Technical Notes

- All videos are full screen
- Videos maintain aspect ratio with "cover" resize mode
- Smooth scrolling with momentum
- Only one video plays at a time
- Optimized for performance with FlatList virtualization
- Responsive to device orientation and screen size changes
