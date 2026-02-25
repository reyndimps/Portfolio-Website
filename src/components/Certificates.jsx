import React, { useState } from 'react';
import { certificates } from '../data/data.js';

const Certificates = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div name='certificates' className='relative w-full min-h-screen bg-[#0B1120] text-gray-300 py-20'>
            {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-pulse"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full mt-7'>
                <div className='text-center pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>Certificates</p>
                    <p className='py-4'>A collection of my professional certifications.</p>
                </div>

                {selectedId ? (
                    <div key={selectedId} className="flex flex-col items-center gap-12 animate-fadeIn">
                        {/* Selected Certificate on Top */}
                        {certificates.filter(c => c.id === selectedId).map(cert => (
                            <div 
                                key={cert.id} 
                                className="w-full max-w-4xl mx-auto bg-[#1a2238] rounded-2xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col md:flex-row transition-all duration-500 animate-zoomIn"
                            >
                                <div className="w-full md:w-5/12 bg-black/20 flex items-center justify-center p-4">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-7/12 relative">
                                    <button 
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-2 right-4 text-gray-400 hover:text-white text-3xl font-light transition-colors"
                                    >
                                        &times;
                                    </button>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b-2 border-cyan-400 pb-2 leading-tight">
                                        {cert.name.includes(' in ') ? cert.name.split(' in ').map((part, index) => (
                                            <span key={index} className="block">
                                                {index === 0 ? `${part} in` : part}
                                            </span>
                                        )) : cert.name}
                                    </h3>
                                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed italic">
                                        "{cert.description}"
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={cert.download}
                                            download={`${cert.name}.pdf`}
                                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center text-sm md:text-base"
                                        >
                                            Download
                                        </a>
                                        <button 
                                            onClick={() => setSelectedId(null)}
                                            className="border border-gray-600 hover:border-gray-400 text-gray-400 hover:text-white py-3 px-6 rounded-xl transition-all text-sm md:text-base"
                                        >
                                            Back to Grid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Unselected Certificates Grid below */}
                        <div className="w-full">
                            <p className="text-center text-gray-400 mb-6 uppercase tracking-widest text-sm">Other Certifications</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {certificates.filter(c => c.id !== selectedId).map(cert => (
                                    <div
                                        key={cert.id}
                                        className="w-32 md:w-48 aspect-square bg-[#1a2238] rounded-xl border border-cyan-500/30 overflow-hidden cursor-pointer grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-2 border-dashed"
                                        onClick={() => setSelectedId(cert.id)}
                                    >
                                        <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Initial 4-Column Grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="relative group bg-[#1a2238] rounded-2xl border border-cyan-500/20 shadow-lg shadow-black/50 overflow-hidden cursor-pointer aspect-square transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-500/10 transform hover:scale-[1.02]"
                                onClick={() => setSelectedId(cert.id)}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-bold text-center text-lg drop-shadow-md">
                                        {cert.name.includes(' in ') ? cert.name.split(' in ').map((part, index) => (
                                            <span key={index} className="block">
                                                {index === 0 ? `${part} in` : part}
                                            </span>
                                        )) : cert.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Certificates;