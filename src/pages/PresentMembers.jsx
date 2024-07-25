import React from 'react';
import MemberCard from '../Components/MemberCard';
import members from '../assets/cps-lab-members-list';


function PresentMembers() {
    return (
        <div className='members-wrapper'>
            <p className="heading">Faculty Members</p>
            <div className="member-list">\
                {
                    members.filter(member =>
                        member["Category (cps.iic.ac.in)"] !== "Past Lab Members" && member["Category (cps.iic.ac.in) Designation"] === "Faculty"
                    ).map(member => 
                        <MemberCard 
                            key = {member["Link"]}
                            name = {member["Name"]}
                            qualification = {member["Qualification/Designation (List Content)"]}
                            image = {member["Link"]}
                            category = {member["Category (cps.iic.ac.in) Designation"]}
                        />
                    )
                }
            </div>
            <p className="heading">Research Scholars</p>
            <div className="member-list">
                {
                    members.filter(member => 
                        member["Category (cps.iic.ac.in)"] !== "Past Lab Members" 
                        && 
                        member["Category (cps.iic.ac.in) Designation"] === "Research Scholar"
                    ).map(member => <MemberCard 
                        name = {member["Name"]}
                        qualification = {member["Qualification/Designation (List Content)"]}
                        image = {member["Link"]}
                        category = {member["Category (cps.iic.ac.in) Designation"]}
                    />)                
                }
            </div>
            <p className="heading">Research Interns</p>
            <div className="member-list">
                {
                    members.filter(member => 
                        member["Category (cps.iic.ac.in)"] !== "Past Lab Members" 
                        && 
                        member["Category (cps.iic.ac.in) Designation"] === "Research Intern"
                    ).map(member => <MemberCard 
                        name = {member["Name"]}
                        qualification = {member["Qualification/Designation (List Content)"]}
                        image = {member["Link"]}
                        category = {member["Category (cps.iic.ac.in) Designation"]}
                    />)
                }
            </div>
        </div>
    )
}

export default PresentMembers