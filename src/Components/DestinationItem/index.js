import './index.css'

const DestinationItem = props=>{
    const {destinationDetails}=props
    const {imageurl,name}=destinationDetails

    return(
        <li className='container'>
            <img className='image' alt={name}>{imageurl}</img>
            <p className='name'>{name}</p>
        </li>
    )

}

export default DestinationItem