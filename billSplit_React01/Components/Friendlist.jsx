import React from 'react';
import Friend from './Friend';

const Friendlist = ({ friends, onSelectedOption, selectFriend }) => {
  return (
    <div className="flex flex-wrap flex-col gap-4 bg-gray-800 mb-4  ">
      {friends.map((friend, i) => {
        return (
          <Friend friend={friend} key={i} onSelectedOption={onSelectedOption} selectFriend={selectFriend} />
        );
      })}
    </div>
  );
};

export default Friendlist;
