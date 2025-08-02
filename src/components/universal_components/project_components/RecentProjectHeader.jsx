import React from 'react';

export default function RecentProjectHeader({ project }) {
    if (!project) return null;
    
    return (
        <section className='recent_project_header_container flex_column'>
            <header className='flex_column'>
                <h2>Coming Soon...</h2>
                <div className='line_divider'></div>
            </header>
            
            <article className='flex_row just_align_center'>
                <span className='flex_column just_align_center'>
                    <header>
                        <h3>{project.projectName}</h3>
                    </header>
                    
                    <p>{project.projectDescription}</p>
                    <aside>{project.projectAside}</aside>
                </span>

                <figure className='flex_column'>
                    <img className='project_display_image' src={project.projectIcon} alt={project.projectName} type='gif' />
                </figure>
            </article>
        </section>
    )
};