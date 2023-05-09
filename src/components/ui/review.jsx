import React from "react";

const Review = ({ name, text, rating, date }) => (
  <article>
    <div className="">
      <div className="flex items-center mb-4 space-x-4">
        <div className="space-y-1 font-medium text-white dark:text-white">
          <div className="flex space-x-5">
            <p className="text-gray-900 dark:text-white">{name}</p>
            {rating.map((value, index) => (
              <div className="flex items-center mb-1" key={index}>
                {[...Array(value)].map((star, i) => (
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    key={i}
                  >
                    <title>Star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            ))}
          </div>

          <p>
            <time className="text-xs text-gray-300" dateTime="2017-03-03 19:00">
              {date}
            </time>
          </p>
        </div>
      </div>

      <p className=" text-gray-900 dark:text-white mb-5 line-clamp-5">{text}</p>
    </div>
  </article>
);

export default Review;
