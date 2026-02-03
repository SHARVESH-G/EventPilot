import './buttons.css';

export const PrimaryButton = ({text})=>{
    return (
        <button className="primarybutton">{text}</button>
    )
}


export const MutedButton = ({text})=>{
    return (
        <button className="mutedbutton">{text}</button>
    )
}