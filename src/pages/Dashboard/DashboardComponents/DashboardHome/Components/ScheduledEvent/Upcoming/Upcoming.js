import React from 'react';
import { useNavigate } from 'react-router-dom';

import event from '../../../../../../../media/images/dashboard/scheduled events/event.svg'
const Upcoming = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-16 text-center'>
            <img className='flex justify-center items-center m-auto' src={event} alt="" />
            <h1 className='text-lg py-2 font-medium'>No Events Yet</h1>
            <h1>Share Event Type links to schedule events.</h1>
            <button onClick={() => navigate("/dashboard/d-home/event-types")} className="button-orange-border-h40 flex items-center justify-center m-auto my-4 btn-sm">View Event Types</button>
        </div>
    );
};

export default Upcoming;