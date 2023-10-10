import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2"
import { useState } from "react"

const Form = () => {
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [messaje, setMessage] = useState(null)

    return (
        <>
            <div className="mt-36">
                <h2 className="text-4xl text-center lg:text-5xl font-bold lg:tracking-tight gap-2">
                    Crea tu Enlace Gratuito de WhatsApp
                </h2>
                <p className="text-lg text-center mt-4 text-slate-600">
                    Experimenta la potencia de la conexión instantánea. Genera enlaces de WhatsApp únicos con un solo clic. ¡Comienza tus conversaciones de manera rápida y sin costos!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-6 ">
                <div className="rounded-lg border border-gray-900 p-10 w-full">
                    <form >
                        <div className="w-full">
                            <label className="font-bold text-sm">Ingresa tu numero de Whatsapp</label>
                            <PhoneInput
                                className="mt-2 text-gray-900 border-0"
                                inputStyle={{ width: "100%", background: "#e2e8f0", border: 'none' }}
                                buttonStyle={{ background: "#e2e8f0", border: 'none' }}
                                country="ec"
                                placeholder="Tu número de Whatsapp"
                                value={phoneNumber}
                                onChange={setPhoneNumber} />

                        </div>
                        <span className="text-xs">Recuerda revisar el código de tu país</span>
                        <div className="w-full mt-10">
                            <label className="font-bold text-sm ">Mensaje del cliente</label>

                            <textarea
                                onChange={e => setMessage(e.target.value)}

                                className="w-full bg-[#e2e8f0] borde rounded mt-2 p-2 text-m placeholder:text-sm placeholder:font-light  placeholder:text-gray-900 focus:outline-none text-sm "
                                placeholder="Escribe un mensaje personalizado para que tus clientes te contacten facilmente"
                            />

                        </div>
                        <span className="text-xs">Ejemplo: "Saludos, necesito más información del producto" </span>
                        <div className='w-full mt-10'>
                            <a
                                href={`/api/${phoneNumber}&${messaje ? messaje: ''}`}
                                target ="_blank"
                                className='border border-gray-900 w-full border-xl p-2 rounded text-m '>
                                Vista Previa
                            </a>
                        </div>

                        <div className='w-full mt-10'>
                            <button
                                type='submit'
                                className='border-0 w-full border-xl p-2 rounded bg-degrade'>
                                Crea tu wha.link!
                            </button>
                        </div>
                    </form>
                </div>

                <div className="h-100 flex flex-col justify-center items-center gap-2">
                    <div className="w-10 h-10">
                        <svg viewBox="0 0 15 15">
                            <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
                        </svg>
                    </div>
                     <span>Así lo veran tus usuarios al abrirlo</span>
                </div>

                {/* phone  */}
                <div className="w-full flex justify-center items-center ">
                    <div className='bg-black w-72 h-full min-h-[30em] rounded-3xl p-2 relative'>
                        <div className='bg-[#EBE5DC] h-full w-full relative rounded-3xl overflow-hidden'>
                            <div className="bg-[#075E54] text-white font-light px-5 py-3 gap-2 flex items-center" >
                                <span className="w-5 h-5 rounded-full flex flex-col items-center justify-center border-thin ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                </span>
                                +{phoneNumber}
                            </div>

                        </div>
                        <div className='absolute w-2/4 top-0 right-[25%] bg-black min-w-[50%] h-1 min-h-[1em] rounded-xl'></div>
                        <div className='absolute w-full bottom-2 left-0 p-3 '>
                            <div className="bg-white w-100 h-8 rounded-3xl flex justify-between gap-2 items-center px-2">
                                <small> {messaje || 'Tu mensaje'} </small>
                                <small className="w-4 h-4 text-[#075E54] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                    </svg>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Form