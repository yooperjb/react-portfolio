import React from 'react';

const Project = ({project}) => {
    
    return (
        
        <figure className="projectCard">
            
            <div className="projectText">
            <a href={project.deploy} target="_blank"><h3>{project.name}</h3></a>
            <p>{project.desc}</p>
            </div>
            <img alt={project.name} src={require(`../../assets/images/${project.image}`).default} />
           
        </figure>
    )
}

export default Project;


