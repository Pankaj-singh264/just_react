import React, { useState } from 'react'
import Button from './Button'

const Formsplit = ({ selectFriend, onSplit }) => {
    const [bill, setBill] = useState("")
    const [paidByUser, setPaidByUser] = useState("")
    const [whoisPayment, setWhoisPayment] = useState("user")
    const paidByfriend = bill > paidByUser && bill ? bill - paidByUser : "";

    function handleSubmit(e) {
        e.preventDefault();

        onSplit(whoisPayment === 'user' ? paidByfriend : -paidByUser);
        // Add your form submission logic here
        if (!bill || !paidByUser) return;
        // return e.preventDefault();
        return console.log({ bill, paidByUser, whoisPayment });
        

    }

    return (
        <div style={{ backgroundColor: '#6B46C1', padding: '20px', borderRadius: '10px' }}>
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column' }}>

                <h1 style={{ color: 'white', marginBottom: '16px' }}>Split a bill with {selectFriend?.name}</h1>
                <label style={{ color: 'white', marginBottom: '8px' }}>☠️Bill Value</label>
                <input type="number"
                    value={bill} onChange={(e) => setBill(Number(e.target.value))} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px' }} />
                <label style={{ color: 'white', marginBottom: '8px' }}>Your expense</label>
                <input type="number"
                    value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value))}
                    style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px' }} />

                <label style={{ color: 'white', marginBottom: '8px' }}>{selectFriend?.name}'s expense</label>
                <input type="number" value={paidByfriend} disabled style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', backgroundColor: '#E2E8F0' }} />
                <label style={{ color: 'white', marginBottom: '8px' }}>Who's gonna pay the bill?</label>
                <select
                    value={whoisPayment}
                    onChange={(e) => setWhoisPayment(e.target.value)}
                    style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', backgroundColor: 'black', color: 'white' }}>

                    <option value='user' style={{ backgroundColor: 'black', color: 'white' }}>You</option>
                    <option value='paidByuser' style={{ backgroundColor: 'black', color: 'white' }}>Friend</option>
                </select>
                <Button onClick={handleSubmit}>Split Bill</Button>
            </form>
        </div>
    )
}

export default Formsplit
