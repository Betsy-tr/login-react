import { useState } from 'react'
import cover_image from './assets/cover_image.jpg'
import google from './assets/google.jpg'

import './App.css'

const colors = {

  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9"

}

function App() {

  return (
    <div className='w-full h-screen flex items-start'>
      
      <div className='reltive w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Transformez vos idées en réalité</h1>
          <p className='text-xl text-white font-normal' >Commencez gratuitement et obtenez des offres attrayantes de la communauté</p>
        </div>
        <img src={cover_image} className='w-full h-full object-cover'></img>
      </div>

      <div className='w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between items-center'>
        <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>Marque interactive</h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-2'>Connectez-vous</h3>
            <p className='text-base mb-2 '>Bienvenue! Veuillez saisir vos coordonnées.</p>
          </div>

        <div className='w-full flex flex-col'>
          <input
            type='email'
            placeholder='Email'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-l-black outline-none focus:outline-none '/>

          <input
            type='password'
            placeholder='Password'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-l-black outline-none focus:outline-none '/>

            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex item-center'>
                <input type='checkbox' className='w-4 h-4 mr-2' />
                <p className='text-sm'>Se souvenir de moi pendant 30 jours</p>
              </div>

              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Mot de passe oublié ?</p>
            </div>

            <div className='w-full flex flex-col'>
              <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
              S'identifier
              </button>
              
              <button className='w-full text-[#060606] my-2 bg-white border border-black rounded-md p-4 text-center flex items-center justify-center'>
                Sinscrire
              </button>
            </div>

        <div className='w-full flex items-center justify-center relative py-2'>
          <div className='w-full h-[1px] bg-black '></div>
          <p className='text-lg absolute text-black/80 bg-[#F5F5F5]'>or</p>
        </div>

        <div className='w-full text-[#060606] my-2 bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
          <img src={google} className='h-6 mr-2'/>
          Se connecter avec Google
        </div>

        </div>

        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Vous n’avez pas de compte ? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Inscrivez-vous gratuitement</span></p>
        </div>

      </div>
    </div>
  );
}

export default App
