import React from 'react';

import mechanic1 from '../../../images/mechanic/s.jpg';
import mechanic2 from '../../../images/mechanic/n.jpg'
import mechanic3 from '../../../images/mechanic/m.jpg'
import mechanic4 from '../../../images/mechanic/a.jpg'
import mechanic5 from '../../../images/mechanic/5.jpg'
import mechanic6 from '../../../images/mechanic/6.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic6,
        name: 'Sagor',
        expertize: 'CEO'
    },
    {
        img: mechanic2,
        name: 'Shohel Khan',
        expertize: 'Admin'
    },
    {
        img: mechanic3,
        name: 'Raj',
        expertize: 'Admin'
    },
    {
        img: mechanic4,
        name: 'Shakil',
        expertize: 'Modaretor'
    },
    {
        img: mechanic5,
        name: 'Shakil',
        expertize: 'Member'
    },
    {
        img: mechanic1,
        name: 'Shakil',
        expertize: 'Member'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-danger mt-5 mb-5">Our Tourist Guide</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;