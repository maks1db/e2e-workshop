/* eslint-disable @typescript-eslint/naming-convention */
import { createEffect } from 'effector';
import axios from 'axios';
import { prop } from 'ramda';

export const getUserPostsFx = createEffect((params: UserInfoParams = {}) => {
  return axios
    .get<Post[]>('/messages/most-popular', {
      url: '/messages/most-popular',
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(prop('data'));
});

interface UserInfoParams {
  description?: string;
}

interface Post {
  image: string;
  title: string;
  description: string;
  name: string;
}
