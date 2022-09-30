import { identity } from 'ramda';
import { createEvent, createStore, EffectResult, sample } from 'effector';

import { getUserPostsFx } from './api';

export const $posts = createStore<PostsType>([]).on(
  getUserPostsFx.doneData,
  (_, payload) => payload
);

export const $haveError = createStore(false);
export const $pending = getUserPostsFx.pending.map(identity);

export const postsRequested = createEvent<string | void>();

sample({
  clock: postsRequested,
  fn: description => {
    if (description) {
      return { description };
    }
    return {};
  },
  target: getUserPostsFx,
});

type PostsType = EffectResult<typeof getUserPostsFx>;
