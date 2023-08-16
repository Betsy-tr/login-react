// @ts-ignore

import React from "react";
// import COVER_IMAGE from './cover_image.jpg'


const colors = {

    primary: "#060606",
    background: "#f5f5f5",
    disbaled: "#D9D9D9"

}

const Login = () => {
    return(
        <div className='w-full min-h-screen flex items-start'>
            <div className='relative w-1/2 h-full flex flex-col'>
                <div className="absolute top-[25%] left-[10%] flex flex-col">
                    <h1 className="text-4xl text-white font-bold my-4">Transformez vos idées en réalité</h1>
                    <p className="text-xl text-white font-normal my-4">Commencez gratuitement et obtenez des offres attrayantes de la communauté</p>
                </div>
                {/* <img src={COVER_IMAGE} className='w-full h-full object-cover'/> */}
            </div>

            <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
                <h1 className="text-xl text-[#060606] font-semibold">Marque interactive</h1>
            
                <div className="w-full flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4">Connectez-vous</h3>
                    <p className="text-sm mb-2">Bienvenue! Veuillez saisir vos coordonnées</p>
                </div>

                <div className="w-full">
                    <p className="text-sm font-semibold">Vous n’avez pas de compte ? <span className="font-semibold underline underline-offset-2 cursor-pointer">Inscrivez-vous gratuitement</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;
