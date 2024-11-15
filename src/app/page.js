"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [tipoCambio, setTipoCambio] = useState(null);

    useEffect(() => {
        async function fetchTipoCambio() {
            try {
                const response = await axios.get('http://localhost:8080/api/tipo-cambio');
                setTipoCambio(response.data);
            } catch (error) {
                console.error('Error al obtener el tipo de cambio:', error);
            }
        }
        fetchTipoCambio();
    }, []);

    return (
        <div>
            <h1>Tipo de Cambio a Quetzal</h1>
            {tipoCambio ? (
                <div>
                    <p><strong>Tipo de Cambio:</strong> {tipoCambio.tipoCambio}</p>
                    <p><strong>Fecha de Consulta:</strong> {new Date(tipoCambio.fechaConsulta).toLocaleString()}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

