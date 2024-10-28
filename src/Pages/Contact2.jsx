import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Contact2 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQ questions and answers
    const faqData = [
        { question: 'Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum justo a nisi sollicitudin.' },
        { question: 'Venentatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?', answer: 'Curabitur nec nisl ac massa tincidunt blandit. Vivamus id lectus at lectus.' },
        { question: 'Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?', answer: 'Praesent commodo nulla non nisl tempus, sed egestas libero vehicula.' },
        { question: 'Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?', answer: 'Donec a elit finibus, scelerisque nunc ac, aliquet eros.' },
        { question: 'Sagittis consectetur gravida nec turpis eros, id sit et, dictum?', answer: 'Maecenas vel ligula ullamcorper, pharetra lorem vel, venenatis est.' },
    ];

    return (
        <div className="faq-container" style={{ backgroundColor: '#100314', color: '#fff', padding: '4rem' }}>
            <h2 className="text-center mb-5">Frequently asked questions</h2>
            <div>
                {faqData.map((item, index) => (
                    <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                        <div 
                            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{item.question}</span>
                            <span>{openIndex === index ?  <i className="bi bi-chevron-up"></i> : 
                            <i className="bi bi-chevron-down"></i>}</span>
                        </div>
                        {openIndex === index && (
                            <div style={{ marginTop: '0.5rem', color: '#aaa' }}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact2;
