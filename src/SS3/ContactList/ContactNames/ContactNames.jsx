import React from 'react'
import './ContactNames.css'

function ContactNames() {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: 20 }}>
            <div className='Contacts'>
                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p className='ContactName' style={{ fontWeight: '600' }}>Leslie Laurens</p>
                    <p style={{ opacity: '0.5' }}>You: UX Consulting</p>
                </div>
            </div>
            <div style={{ marginBottom: 16, opacity: '0.5' }}>12m</div>
        </div>

    )
}

export default ContactNames