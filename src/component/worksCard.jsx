import { useState } from "react"
import "./worksCard.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function WorksCard({projImage,projectName,tools=[],ProjectDescriptions,FrontendDecsription,BackendDescription,DbDescription,KeyFeatures,Deployment,projImage2,projImage3,projImage4,githubLink,siteLink}){
    const [image,setImage]=useState(projImage)

    return <section className="projCardContainer">
        <h2>{projectName}</h2>


        <section className="projDetails">

        <section className="imageContainer">
        <img src={image} alt="project"/>

        <section className="projImages">
            <img src={projImage} alt="" onClick={()=>setImage(projImage)}/>
            <img src={projImage2} alt="" onClick={()=>setImage(projImage2)}/>
            <img src={projImage3} alt="" onClick={()=>setImage(projImage3)}/>
            <img src={projImage4} alt="" onClick={()=>setImage(projImage4)}/>
        </section>
        </section>


        <section className="projRight">

        <section className="projCardTools">
            {tools.map((tool)=>(
                <div key={tool} className="projCardTools">
                    <p>{tool}</p>
                </div>
            ))}
        </section>

        <section className="projCardFeatures">
        <h4>{ProjectDescriptions}</h4>
        <h5>{KeyFeatures}</h5>
        <h5>{FrontendDecsription}</h5>
        <h5>{BackendDescription}</h5>
        <h5>{DbDescription}</h5>
        <h5>{Deployment}</h5>
        </section>

        <section className="projLinks">
            <a className="links" href={githubLink} target="_blank" rel="noreferrer">
            <button>
                <FaGithub/>
                Github
            </button>        
            </a>

            <a className="links" href={siteLink} target="_blank" rel="noreferrer"> 
            <button>
                <FaExternalLinkAlt/>
                <img src="" alt="" />
                Visit
            </button>
            </a>
        </section>

        </section>

        </section>
        

    </section>
}