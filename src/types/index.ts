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

export type AppView = 'feed' | 'profile' | 'detail';