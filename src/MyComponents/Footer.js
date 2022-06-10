// This time using rafc to generate using ES7 React extension, a for arrow

import React from 'react'

export const Footer = () => {

    let footerStyle={
        position: "absolute",
        top: "90vh",
        width: "100%"
    }

    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
           <p className="text-center">
            Copyright &copy; MyTodosList
            </p>
        </footer>
    )
}
