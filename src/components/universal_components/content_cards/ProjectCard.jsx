import React from 'react';

export default function ProjectCard({ project, onClose }) {
    if (!project) {
        return null;
    }

    const { projectName, projectIcon, projectDescription, projectAside, article, contentGallery } = project;
    
    const handleCardClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className='content_card_overlay' onClick={onClose}>
            <div className='content_card_container' onClick={handleCardClick}>
                <header className='flex_row card_header'>
                    <div className='flex_column card_title'>
                        <h1>{projectName}</h1>
                        <div className='line_divider'></div>
                    </div>
                    <nav>
                        <button onClick={onClose} className='close_card_x_button background_image'></button>
                    </nav>
                </header>

                <div className='flex_row'>
                    <section className='flex_column just_align_center'>
                        <figure>
                            <img className='project_image' src={projectIcon} alt={projectName} />
                        </figure>
                        <aside>
                            {projectAside}
                        </aside>
                    </section>
                    
                    <section className='flex_column just_align_center'>
                        <article>
                            {article && <p>{article}</p>}
                            <p>{projectDescription}</p>
                        </article>

                        {contentGallery && (
                            <figure>
                                {contentGallery.map((image, index) => (
                                    <img key={index} src={image} alt={`${projectName} gallery image ${index}`} />
                                ))}
                            </figure>
                        )}
                    </section>
                </div>

                <footer>
                    <h5>(c) 2025</h5>
                </footer>
            </div>
        </section>
    );
}
