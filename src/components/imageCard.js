import React from 'react';

const ImageCard = ({ card }) => {

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        src="https://source.unsplash.com/user/erondu/800x600"
        alt={`erondu-${card.id}`}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {`Photo by ${card.employee_name}`}
        </div>
        <ul>
          <li>
            <strong className="capitalize">salary: </strong>
            {card.employee_salary}
          </li>
          <li>
            <strong className="capitalize">age: </strong>
            {card.employee_age}
          </li>
          <li>
            <strong className="capitalize">id: </strong>
            {card.id}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {card.employee_name.split(" ").map((char, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;