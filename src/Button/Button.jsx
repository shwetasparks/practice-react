import styles from './Button.module.css';

function Button(){
    const handleClick=(e)=>e.target.textContent="hey dude";

    return(
        <button className={styles.button} onDoubleClick={(e)=>handleClick(e)}>
         Click me Pls
        </button>
    )
}
export default Button;