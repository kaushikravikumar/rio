# Rio - TikTok-Style Video Feed App

A React Native application featuring a TikTok-style vertical video feed for both iOS and Android.

## Features

- 📱 Cross-platform support (iOS & Android)
- 📹 Vertical video feed with smooth scrolling
- ▶️ Auto-play videos as you scroll
- ❤️ Like, comment, and share interactions
- 🎨 TikTok-style UI with overlay controls
- 📊 Video statistics display (likes, comments, shares)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 20)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- For iOS development: [Xcode](https://developer.apple.com/xcode/) and CocoaPods
- For Android development: [Android Studio](https://developer.android.com/studio) and Android SDK

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kaushikravikumar/rio.git
cd rio
```

2. Install dependencies:
```bash
npm install
```

3. For iOS, install CocoaPods dependencies:
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

## Running the App

### Android

Make sure you have an Android emulator running or a device connected, then run:

```bash
npm run android
```

Or using React Native CLI:
```bash
npx react-native run-android
```

### iOS

Make sure you have an iOS simulator running or a device connected, then run:

```bash
npm run ios
```

Or using React Native CLI:
```bash
npx react-native run-ios
```

## Development

### Start Metro Bundler

The Metro bundler should start automatically, but if you need to start it manually:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Testing

Run tests with Jest:

```bash
npm test
```

## Project Structure

```
rio/
├── src/
│   ├── components/
│   │   ├── VideoFeed.tsx      # Main feed component with vertical scrolling
│   │   └── VideoPlayer.tsx    # Individual video player component
│   └── data/
│       └── videos.ts           # Mock video data
├── android/                    # Android native code
├── ios/                        # iOS native code
├── App.tsx                     # Root component
└── index.js                    # App entry point
```

## How It Works

The app uses:
- **FlatList** with `pagingEnabled` for smooth vertical scrolling
- **react-native-video** for video playback
- **ViewabilityConfig** to track which video is currently visible
- Auto-pause/play based on the active video

## Customization

### Adding Your Own Videos

Edit `src/data/videos.ts` to add your own video URLs:

```typescript
export const videos: Video[] = [
  {
    id: '1',
    username: '@youruser',
    description: 'Your description',
    videoUrl: 'https://your-video-url.mp4',
    likes: 1000,
    comments: 50,
    shares: 25,
  },
  // Add more videos...
];
```

### Styling

Modify styles in the component files:
- `src/components/VideoPlayer.tsx` - Video player and overlay UI
- `src/components/VideoFeed.tsx` - Feed container styles

## Troubleshooting

If you're having issues getting the app to run, see the [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
