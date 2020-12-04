
export default function HeaderButton(props) {
    return (
        <button 
           className={props.class}
           onClick={props.onClickHeaderButton}>

            {props.icon}
          </button>
    )
}
