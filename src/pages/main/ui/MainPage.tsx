import { FC, useEffect } from 'react';

import { Card } from 'shared/ui/card';
import { SearchInput } from 'features/search-input';

import { useUnit } from 'effector-react';
import { $posts, $haveError, $pending, postsRequested } from '../model';

export const MainPage: FC = () => {
  const { posts } = useUnit({
    posts: $posts,
    haveError: $haveError,
    pending: $pending,
  });

  useEffect(() => {
    postsRequested();
  }, []);
  return (
    <div className="p-12 w-full">
      <SearchInput className="text-center mb-8" />
      <div className="grid grid-cols-4 gap-8 w-full">
        {posts.map(x => {
          return <Card key={x.name} {...x} />;
        })}
      </div>
    </div>
  );
};
