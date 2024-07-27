import React, { useState, useEffect } from 'react'

function DeroulementTexte(props){
    const [open, setOpen] = useState(false);
    let Class = 'paragraphe';
    const [afficher, setAfficher] = useState(open);

    useEffect(() => {
        if (open===true) {
           setAfficher(true);
        } else {
            const timer = setTimeout(() => {
                setAfficher(false)
            }, 300);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [open])

    if (!open) {
        Class += ' anim';
    } 
    // else {
    //     Class += ' anim';
    // }
    return (
        <div className="les-apropos">
            <div className="titre">
                <p>{props.titre}</p>
                <i onClick={() => setOpen(o => !o)} class="fa-solid fa-chevron-down"></i>
            </div>
            <p className={Class}>{afficher && props.contenu}</p>
        </div>
    )
}

export default DeroulementTexte;
