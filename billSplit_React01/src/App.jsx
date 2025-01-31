import React, { useState } from 'react'
import './App.css'
import Friendlist from './Components/Friendlist';
import AddFriend from './Components/AddFriend';
import Button from './Components/Button';
import Formsplit from './Components/Formsplit';

const initialValues = [
  { name: 'John Doe', balance: 0, id: 1 },
  { name: 'Jane Smith', balance: -150, id: 2 },
  { name: 'Alice Johnson', balance: 200, id: 3 }
];
const App = () => {
  const [friend, setFriend] = useState(initialValues)
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectFriend, setSelectedFriend] = useState(null)
  function handleButton() {
    setShowAddFriend((show) => !show)
  }
  function handleAddFriend(f) {
    setFriend((friend) => [...friend, f])
    setShowAddFriend(false)
  }
  const handleSelectFriend = (friend) => {
    setSelectedFriend((curr) => (curr?.name === friend.name ? null : friend))
    setShowAddFriend(false)
  }

  function handleSplit(value) {
    // console.log('split')
    setFriend(friend.map((f) => (f.name === selectFriend.name ? { ...f, balance: f.balance + value } : f)))
    setShowAddFriend(false)
    setSelectedFriend(null)
    // console.log(value)
  }
  return (
    <div className='container gap-2 flex border-2 border-red-300  align-center justify-center p-4 w-[100vw] h-[100vh]'>
      <div className='w-1/2'>
        <Friendlist
          friends={friend}
          selectFriend={selectFriend}
          onSelectedOption={handleSelectFriend} />

        {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleButton}>{showAddFriend ? 'Close' : "Add-Friend"}</Button>
      </div>



      <div className='w-1/2'>
        {selectFriend && <Formsplit selectFriend={selectFriend} onSplit={handleSplit}
         key={selectFriend.id}
         />}
        
      </div>
    </div >
  )
}

export default App
