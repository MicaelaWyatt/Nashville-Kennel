import React from "react"
import "../animal/Animal.css"

export const EmployeeCard = ({employee}) => (
    <section className="animal">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.location}</div>
    </section>
)