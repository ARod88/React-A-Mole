import { useEffect } from 'react'
import mole from  '../assets/mole.png'


let Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <img style={{'width': '15vw'}} src={mole} onClick={props.handleClick} />
        </div>
    )
}

export default Mole

// function Mole({ handleClick, displayMole }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleClick();
//     }, Math.floor(Math.random() * 5000) + 1000);

//     return () => clearTimeout(timer);
//   }, [handleClick]);

//   if (!displayMole) {
//     return null;
//   }

//   return (
//     <div>
//       <img style={{ width: '100%' }} src={mole} alt="mole" />
//     </div>
//   );
// }

// export default Mole;

// function Mole(props){
//     useEffect(() => {
//         // Feel free to adjust this number as you see fit.
//         // It is your game to tune!
//         let randSeconds = Math.ceil(Math.random() * 5000)
//         let timer = setTimeout(() => {
//             props.setDisplayMole(false)
//         }, randSeconds)
//         return () => clearTimeout(timer);
//     }, [])
//     return (
//         <div>
//             <img style={{'width': '30vw'}} src={mole} onClick={props.handleClick}alt="mole" />
//         </div>
//     )
// }

// export default Mole