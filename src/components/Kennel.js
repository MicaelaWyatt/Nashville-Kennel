import React from "react"
import {AnimalCard} from "./animal/AnimalCard"
import {EmployeeCard} from "./employee/EmployeeCard"
import {CustomerCard} from "./customer/CustomerCard"
import {LocationCard} from "./location/LocationCard"
import {PropsAndState} from "./PropsAndStates"
import "./animal/Animal.css"
import "./Kennel.css"

export const Kennel = () => (
    <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when your're not there.</small>
    <address>
        <div>Visit Us at the Nashville North Location</div>
        <div>500 Puppy Way</div>
    </address>
    <PropsAndState yourName="Micaela" />

    <h2>Animals</h2>
    <article className="animals">
        <AnimalCard/>
        <AnimalCard/>
        <AnimalCard/>
    </article>

    <h2>Locations</h2>
    <article className="animals">
        <LocationCard/>
        <LocationCard/>
    </article>

    <h2>Employees</h2>
    <article className="animals">
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
    </article>

    <h2>Customers</h2>
    <article className="animals">
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
    </article>
    </>
)