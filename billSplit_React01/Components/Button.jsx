import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                type="button" className=' border border-black bg-purple-300 px-6 py-0.5 rounded-lg'>{children}</button>
        </div>
    )
}
export default Button
