import { PostProps } from "../utils/types"
import { RiExternalLinkLine } from 'react-icons/ri'


export const Post = ({ambassador, className}: PostProps) => {
    return (
        <div className={className}>
            <p>FEATURED POST</p>
            <div className="post-img-container">
                <img src={ambassador.postImage} alt="post" />
            </div>
            <div className="post-ambassador-img-container">
                <img src={ambassador.imgLink} alt={ambassador.name} />
            </div>
            <h2>{ambassador.name}</h2>
            <div className="visit-post-container">
                <a href={ambassador.postLink} target="_blank">
                    Visit Post <RiExternalLinkLine className="post-icon"/>
                </a>
            </div>
            <div className="shadow"></div>
        </div>
    )
}