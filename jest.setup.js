/* eslint-env jest */
/* eslint-disable @react-native/no-deep-imports */

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    GestureHandlerRootView: View,
    State: {},
    PanGestureHandler: View,
  };
});

// Mock react-native-video - must return a default export
jest.mock('react-native-video', () => {
  const React = require('react');
  const {View} = require('react-native');
  const MockVideo = React.forwardRef((props, ref) => {
    return React.createElement(View, {...props, testID: 'video-mock'});
  });
  MockVideo.displayName = 'Video';
  return {
    __esModule: true,
    default: MockVideo,
    VideoRef: {},
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    SafeAreaProvider: ({children}) => children,
    SafeAreaConsumer: ({children}) => children(inset),
    useSafeAreaInsets: () => inset,
  };
});

// Mock useWindowDimensions
jest.mock('react-native/Libraries/Utilities/useWindowDimensions', () => ({
  default: jest.fn(() => ({width: 375, height: 812, scale: 1, fontScale: 1})),
}));
