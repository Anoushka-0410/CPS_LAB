import React from 'react'
import '../Styles/membercard.css';

function MemberCard({name, qualification, image, category}) {
    return (
        <div className='member-card'>
            <img className='img' src={`${image}`} /> 
            <p className='name'>{name}</p>
            <p className='category'>{category}</p>
            <p className='qualification'>{qualification}</p>
        </div>
    )
}

export default MemberCard