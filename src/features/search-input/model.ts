import { createApi, createEvent, createStore } from 'effector';
import { debounce } from 'patronum';

export const resetModel = createEvent();

export const $inputValue = createStore('').reset(resetModel);
export const { inputValueChanged } = createApi($inputValue, {
  inputValueChanged: (_, payload: string) => payload,
});

export const inputValueUpdated = debounce({
  source: inputValueChanged,
  timeout: 500,
});
