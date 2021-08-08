import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import { useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes} from '@fortawesome/free-solid-svg-icons'

export default function ErrorMessage() {
    const error = useSelector(state => state.error)
    // const [show, setShow] = useState(true);
    if (!error) {
        return <div />;
    }
    return (
        <Alert variant='danger'>
            Error: {error.message}
        </Alert>
    //     <>
    //     <Alert show={show} variant="danger">
    //       <Alert.Heading>Error</Alert.Heading>
    //       {error.message}
    //       <hr />
    //       <div className="d-flex justify-content-end">
    //         {/* <Button onClick={() => setShow(false)} variant="outline-danger">
    //           Close
    //         </Button> */}
    //         <FontAwesomeIcon 
    //             style={{ marginLeft : '10px', fontSize : '20px'}} 
    //             icon={faTimes} 
    //             onClick={() => setShow(false)}
    //         />
    //       </div>
    //     </Alert>
  
    //     {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    //   </>
    )
}