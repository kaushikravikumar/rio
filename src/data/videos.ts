export interface Video {
  id: string;
  username: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  shares: number;
}

export const videos: Video[] = [
  {
    id: '1',
    username: '@user1',
    description: 'Amazing sunset view 🌅 #nature #sunset',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 12500,
    comments: 234,
    shares: 89,
  },
  {
    id: '2',
    username: '@user2',
    description: 'Dance challenge 💃 #dance #trending',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 45600,
    comments: 567,
    shares: 234,
  },
  {
    id: '3',
    username: '@user3',
    description: 'Cooking tutorial 🍳 #food #cooking',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 23400,
    comments: 345,
    shares: 156,
  },
  {
    id: '4',
    username: '@user4',
    description: 'Fitness motivation 💪 #fitness #gym',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 34500,
    comments: 456,
    shares: 198,
  },
  {
    id: '5',
    username: '@user5',
    description: 'Pet compilation 🐶 #pets #cute',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 56700,
    comments: 678,
    shares: 345,
  },
];
