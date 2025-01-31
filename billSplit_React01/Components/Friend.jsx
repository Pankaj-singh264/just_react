import React from 'react'
import Button from './Button'

const Friend = ({ friend, onSelectedOption, selectFriend }) => {
// console.log(friend)
    const isSelected =  selectFriend?.name === friend.name;

    // console.log(selectFriend)
    // console.log(friend.name)
    // console.log(isSelected)

    return (
        <div className={`p-4 rounded-lg flex justify-between  text-md ${isSelected ? 'bg-gray-300' : 'bg-gray-700'}`}>
            <div className="info  text-black grid grid-cols-1 w-42 gap-2" key={friend.id}>
                <h4 className="font-semibold text-xl">{friend.name}</h4>
                {friend.balance < 0 && <p className='text-red-600 '>You owe {friend.name} ${Math.abs(friend.balance)}</p>}
                {friend.balance > 0 && <p className='text-green-600  text-lg'>{friend.name} owes you ${Math.abs(friend.balance)}</p>}
                {friend.balance === 0 && <p className='text-white '>{friend.name} and you are even</p>}
            </div>
            <Button onClick={() => onSelectedOption(friend)}>
                {isSelected ? "Undo" : "Select"}
            </Button>
        </div>
    )
}

export default Friend
