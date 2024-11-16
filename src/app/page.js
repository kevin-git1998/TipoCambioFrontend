"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [tipoCambio, setTipoCambio] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTipoCambio() {
            try {
                const response = await axios.get('http://localhost:8080/api/tipo-cambio-frontend');
                setTipoCambio(response.data);
                setError(null); // Resetear el error si la solicitud es exitosa
            } catch (error) {
                console.error('Error al obtener el tipo de cambio:', error);
                setError('Hubo un problema al obtener el tipo de cambio. Intenta nuevamente más tarde.');
            }
        }
        fetchTipoCambio();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-white" style={{
                backgroundColor: '#007bff', 
                padding: '15px 20px', 
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                Tipo de Cambio a Quetzal
            </h1>

            {/* Mensaje de error */}
            {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ fontWeight: 'bold' }}>
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            {/* Si tenemos el tipo de cambio */}
            {tipoCambio ? (
                <div className="card shadow-lg mb-4" style={{
                    backgroundColor: '#f0f8ff', 
                    borderRadius: '15px', 
                    border: '1px solid #007bff'
                }}>
                    <div className="card-body" style={{ textAlign: 'center', padding: '20px' }}>
                        <h5 className="card-title text-primary mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            Información del Tipo de Cambio
                        </h5>
                        <p className="card-text text-dark" style={{ fontSize: '1.2rem' }}>
                            <strong>Tipo de Cambio:</strong> <span style={{ color: '#28a745', fontWeight: 'bold' }}>{tipoCambio.tipoCambio} Q</span>
                        </p>
                        <p className="card-text text-dark" style={{ fontSize: '1.2rem' }}>
                            <strong>Fecha de Consulta:</strong> {new Date(tipoCambio.fechaConsulta).toLocaleString()}
                        </p>
                    </div>
                </div>
            ) : (
                !error && (
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border text-info" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="sr-only">Cargando...</span>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}


