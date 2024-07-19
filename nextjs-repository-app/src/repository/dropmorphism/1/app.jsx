    import React from 'react'

    const CustomApp = () => {
    return (
        <>
        <DropmorphicButton>Irure exercitation consectetur ullamco deserunt aliquip. Proident in anim nulla non. Eiusmod ad nulla adipisicing culpa Lorem tempor qui non do deserunt ut. Labore esse sint deserunt sint fugiat laboris ipsum sint. Fugiat est non enim commodo sit exercitation do laboris ullamco duis cupidatat do deserunt sit.</DropmorphicButton> 
        </>
    )
    }

    export default CustomApp

    const DropmorphicButton  = ({onClick,children}) => {
        return(
            <>
            <button onClick={onClick} className='bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out shadow-md hover:shadow-lg rounded-lg px-4 py-2'>
                {children}
            </button>
            </>
        )
    }
