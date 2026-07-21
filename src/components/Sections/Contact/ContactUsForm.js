'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const WHATSAPP_PHONE = '573194765755'

export default function ContactUsForm() {
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)

        // Honeypot: if filled, it's a bot. Pretend success and stop.
        if (data.get('company_website')) {
            setStatus('success')
            form.reset()
            return
        }

        setStatus('sending')
        const payload = {
            name: data.get('name'),
            company: data.get('company'),
            email: data.get('email'),
            phone: data.get('phone'),
            help: data.get('help'),
            message: data.get('message'),
            source: 'Página Contáctenos',
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            if (!res.ok) throw new Error('request_failed')
            setStatus('success')
            form.reset()
        } catch {
            setStatus('error')
        }
    }

    return (
        <form className="form-block bg-white rounded-2xl p-10 shadow-xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
                <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                    <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" name="name" placeholder="Nombre" required />
                </div>
                <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                    <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" name="company" placeholder="Empresa" required />
                </div>
                <div className="col-span-2">
                    <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="email" name="email" placeholder="Correo electrónico" required />
                </div>
                <div className="col-span-2">
                    <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" name="phone" placeholder="Teléfono" />
                </div>
                <div className="col-span-2">
                    <select className="w-full bg-surface caption1 px-4 py-3 rounded-lg" name="help">
                        <option value="">¿Cómo podemos ayudarte?</option>
                        <option value="Desarrollo de Software">Desarrollo de Software</option>
                        <option value="Automatización RPA">Automatización RPA</option>
                        <option value="BPO IT">BPO IT</option>
                        <option value="Consultoría Estratégica">Consultoría Estratégica</option>
                        <option value="Apps Móviles">Apps Móviles</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <textarea className="w-full bg-surface caption1 px-4 py-3 rounded-lg" name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
                </div>
            </div>
            {/* Honeypot anti-spam: hidden from users */}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button className="button-main lg:mt-10 mt-7" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar Mensaje'}
            </button>
            {status === 'success' && (
                <p className="caption1 text-green-600 mt-4">¡Gracias! Hemos recibido tu mensaje, te contactaremos pronto.</p>
            )}
            {status === 'error' && (
                <p className="caption1 text-red-600 mt-4">
                    No pudimos enviar tu mensaje.{' '}
                    <Link href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer" className="underline">
                        Escríbenos por WhatsApp
                    </Link>.
                </p>
            )}
        </form>
    )
}
