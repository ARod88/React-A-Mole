import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '15vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer

// function MoleContainer(props) {
//     let handleBop = e => {
//       props.setScore(prevScore => prevScore + 1);
//       props.setDisplayMole(false);
//     };
  
//     let isMoleUp = props.displayMole ? (
//       <Mole setDisplayMole={props.setDisplayMole} handleClick={handleBop} />
//     ) : (
//       <EmptySlot />
//     );
  
//     return <>{isMoleUp}</>;
//   }
  
//   export default MoleContainer;
  




// function MoleContainer(props) {

//     let handleBop = e => {
//         props.setScore(prevScore => prevScore + 1);
//         setDisplayMole(false)
//     }

//     let isMoleUp = displayMole ? <Mole setDisplayMole={setDisplayMole} handleClick={handleBop}/> : <EmptySlot />

//     return (
//         <>
//             {isMoleUp}
//         </>
//     )
// }

// export default MoleContainer