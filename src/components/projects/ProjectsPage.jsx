import React from 'react';


// This all might be fucked, i might want to refactor each gallery as a seperate component that can be rendered, and if on either upcoming projects
// or recent projects, it will display the corresponding content dynamically in reusable components


export default function ProjectsPage() {
    return (
        <>
            <section>
                <header>
                    <h1>Coming Soon...</h1>
                    <div className='line_divider'></div>
                </header>

                <figure>
                    <article>
                        <figcaption>Some fuckass project idk</figcaption>
                        <p>this is the description of the fuckass project </p>
                    </article>

                    <img src={`placeholder`} />
                </figure>
            </section>

            <div>
                <section>
                    <h2>Music</h2>

                    <ul>

                    </ul>
                </section>

                <section>
                    <h2>Film</h2>

                    <ul>

                    </ul>
                </section>

                <section>
                    <h2>Games</h2>

                    <ul>

                    </ul>
                </section>

                <section>
                    <h2>Apps</h2>

                    <ul>

                    </ul>
                </section>
            </div>
        </>
    )
};