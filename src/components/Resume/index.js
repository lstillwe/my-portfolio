import React from "react";
import resume from '../../assets/images/lisa-resume.doc'

const Resume = () => {

    const techs = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PWA', 'React', 'Bootstrap', 'REST APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'GraphQL', 'MERN', 'Python', 'Java', 'C++']

    return (
        <section className="resume-container">
            <h2>Resume</h2>
            <p><a href={resume} className="resumeDownload" download>Download my resume</a></p>
            <ul>
                <h3>Technology Experience</h3>
                {techs.map((name) => (
                   <li key={name}>{name}</li>
               ))}
            </ul>
        </section>
    )
}

export default Resume;