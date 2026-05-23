import './Stories.css';
import Story from '../Story/Story.tsx';
import { storyUsers } from '../../objects/mockData.ts';

const Stories = () => {
  return (
    <section className="stories">
      {storyUsers.map((user, i) => (
        <Story
          key={user.username}
          username={user.username}
          avatar={user.avatar}
          isOwn={user.isOwn ?? false}
          index={i}
        />
      ))}
    </section>
  );
};

export default Stories;