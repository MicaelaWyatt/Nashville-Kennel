import React from "react"
import "../animal/Animal.css"

export const LocationCard = ({location}) => (
    <section className="animal">
        <h3 className="location__name"> {location.name} </h3>
        <div className="location__address">{location.address}</div>
    </section>
)