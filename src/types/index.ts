export interface CatPost {
  id: string;
  url: string;
  username: string;
  caption: string;
  likes: number;
  liked: boolean;
  saved: boolean;
  date: string;
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  time: string;
}

export interface User {
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

export type AppView = 'feed' | 'profile' | 'detail';