import React from 'react';

const EventDetail = async({params}) => {

    const {eventID} = await params

    console.log(eventID)
    return (
        <div>
            
        </div>
    );
};

export default EventDetail;