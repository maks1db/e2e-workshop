import cn from 'classnames';
import { useUnit } from 'effector-react';
import { FC, useEffect, useRef } from 'react';

import { $inputValue, inputValueChanged } from '../model';

export const SearchInput: FC<{ className?: string }> = ({ className }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  const value = useUnit($inputValue);

  return (
    <div className={cn('relative w-full', className)}>
      <input
        type="search"
        ref={ref}
        placeholder="Поиск по содержанию..."
        className={cn(
          'py-3 px-4 w-1/2 rounded shadow font-thin duration-100 shadow-gray-100',
          'focus:outline-none focus:shadow-lg focus:shadow-slate-200'
        )}
        onFocus={() => {
          ref.current?.select();
        }}
        value={value}
        onChange={e => inputValueChanged(e.target.value)}
        data-test="search-input"
      />
    </div>
  );
};
