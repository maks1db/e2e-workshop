import { FC } from 'react';

export const Card: FC<CardProps> = ({ description, image, name, title }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="flex justify-end mt-4">
        <span className="text-xl font-medium text-indigo-500">{name}</span>
      </div>
    </div>
  );
};

interface CardProps {
  image: string;
  title: string;
  description: string;
  name: string;
}
