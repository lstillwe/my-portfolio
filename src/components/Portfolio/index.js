import React from "react"
import { FaGithub, FaRegImage } from 'react-icons/fa';
 
function Portfolio(props) {
  const images = [
    {
      alt: 'Work Day Scheduler',
      href: 'https://lstillwe.github.io/workday-scheduler/',
      text: 'A daily planner - intended to allow the user to manage their time effectively. Uses HTML, CSS and Javascript.',
      github: 'https://github.com/lstillwe/workday-scheduler'
    },
    {
      alt: 'Note Taker',
      href: 'https://drive.google.com/file/d/1FN4k_en-bjWn6yZbFF6r5kdhqo8wg8HU/view',
      text: 'This is an application for taking notes. The project uses Node, Express and JavaScript.',
      github: 'https://github.com/lstillwe/note-taker'
    },
    {
      alt: 'Movie Quiz',
      href: 'https://gabrielandrews.github.io/Group-project-movie-/',
      text: 'Move Quiz is a game users can play to test their Hollywood knowledge. The objective is to match a movie poster with the correct release date. This app uses Tailwinds CSS and two external APIs: IMBD-API and the OMDB-API',
      github: 'https://github.com/lstillwe/Group-project-movie-'
    },
    {
      alt: 'Budget Tracker',
      href: 'https://salty-cliffs-15729.herokuapp.com/',
      text: 'This application uses PWA techniques to allow for offline access and functionality. The user can add expenses and deposits to their budget with or without a connection.',
      github: 'https://github.com/lstillwe/budget-tracker'
    },
    {
      alt: 'Media Gems',
      href: 'https://gentle-dusk-15958.herokuapp.com/',
      text: 'Media Gems is an application that allows authenticated users to select a streaming service and look at reviews for popular shows on that particular service. Users are able to add, edit, and delete any reviews that they have created.',
      github: 'https://github.com/lstillwe/media-gems'
    }
  ]

  return (
    <section className="portfolio">
        <h2>Portfolio</h2>
         {images.map((image, i) => (
             <div className="span">
                <img src={require(`../../assets/images/${i}.png`)} alt={image.alt}/>
                <div className="image__overlay">
                    <span className="image__title" onClick={() => window.open(`${image.href}`)}>{image.alt}</span>
                    <p className="image__description">{image.text}</p>
                    <span className="githubLink"><FaGithub onClick={() => window.open(`${image.github}`)}/></span>
                </div>
             </div>
    ))}
    </section>
)
}
 
export default Portfolio;
