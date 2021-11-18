import React from 'react';
import './Pagination.scss';

export default function Pagination({ apiResponse, fetchBookmarks }) {
  const onNext = () => {
    fetchBookmarks(
      apiResponse &&
        apiResponse.pagination &&
        apiResponse.pagination.current.page + 1
    );
  };
  const onPrev = () => {
    fetchBookmarks(
      apiResponse &&
        apiResponse.pagination &&
        apiResponse.pagination.current.page - 1
    );
  };

  return (
    <div className='actions'>
      <div className='buttons'>
        <button
          onClick={onPrev}
          disabled={
            apiResponse &&
            apiResponse.pagination &&
            !apiResponse.pagination.prev
          }
        >
          Prev
        </button>
        <button
          onClick={onNext}
          disabled={
            apiResponse &&
            apiResponse.pagination &&
            !apiResponse.pagination.next
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
