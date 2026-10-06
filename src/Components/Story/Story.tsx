import { useState } from 'react';
import './Story.css';

interface StoryProps {
  username: string;
  avatar: string;
  isOwn?: boolean;
  index: number;
}

const Story = ({ username, avatar }: StoryProps) => {
  const [viewed, setViewed] = useState(false);

  return (
    <button className={`story ${viewed ? 'viewed' : ''}`} onClick={() => setViewed(true)}>
      <div className="story-ring">
        <img src={avatar} alt={username} />
      </div>
      <span>{username}</span>
    </button>
  );
};

export default Story;
