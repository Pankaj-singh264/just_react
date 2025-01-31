import React, { useState } from 'react'
import Button from './Button'


const AddFriend = ({ onAddFriend }) => {
    const [name, setName] = useState("")
    const [balance, setBalance] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e)
        if (!name || !balance) return;
        const id = Math.floor(Math.random() * 10000) + 1
        const info = {
            name, balance,id:id,
        }
        onAddFriend(info)
        setName("")
        setBalance(0)
    }

    return (
        <div className='mt-8 mb-4  bg-gray-400 p-4 rounded-lg'>
            <form className='flex flex-col mt-4 mb-3 space-y-4 relative' onSubmit={handleSubmit} >
                <div className='flex items-center  '>
                    <label htmlFor="name" className='w-1/4'>Name</label>
                    <input type="text" className='p-1 rounded-md flex-grow' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex items-center '>
                    <label htmlFor="balance" className='w-1/4'>Balance</label>
                    <input type="number" value={balance} className='p-1 rounded-md flex-grow' onChange={(e) => setBalance(e.target.value)} />
                </div>
                <div className='flex justify-end'>
                    <Button className='' onClick={(e) => handleSubmit(e)}>Add</Button>
                </div>
            </form>
        </div>
    )
}

export default AddFriend
