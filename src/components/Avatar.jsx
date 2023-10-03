import defaultImage from '../assets/blank.png';


export default function Avatar({ className = 'h-10 ', src = defaultImage }) {
    const defaultClass = 'rounded-full aspect-square';
    const classes = defaultClass + ' ' + className;

    return (
        <img
            src={src}
            alt="user"
            className={classes}
        />
    );
}
