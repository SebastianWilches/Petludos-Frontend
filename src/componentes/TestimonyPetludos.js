import React from "react";
import { useState, useEffect } from 'react';
import TestimonyCard from "./TestimonyCard";
import '../CSS/TestimonyPetludos.css'

function TestimonyPetludos({accessibleText}) {

    const [Testimonies, setTestimonies] = useState([]);
    const [Loading, setLoading] = useState(false)

    const GET_Testimonies = async () => {
        const response = await fetch('http://localhost:1337/api/testimonies/?populate[description][populate]=*&populate[pet][populate]=*');
        const data = await response.json();


        setTestimonies(data.data);
        setLoading(true);
    }

    useEffect(() => {
        GET_Testimonies();

    }, [])



    return (
        <>
            {!Loading ? 'Cargando' : (
                <>
                    <div className="TestimonyTitle">
                        <h1 >Testimonios</h1>
                    </div>
                    <div className="TestimonyCards">

                        {
                            Testimonies.map((Testimony, index) => {
                                return <TestimonyCard info={Testimony} key={index} accessibleText={accessibleText}/>
                            })
                        }

                        {/* <TestimonyCard Nombre="Tommy" />
                <TestimonyCard Nombre="Pancho" />
                <TestimonyCard Nombre="Botitas" />
                <TestimonyCard Nombre="Oreo" /> */}
                    </div>
                </>
            )
            }
        </>

    );
}

export default TestimonyPetludos;