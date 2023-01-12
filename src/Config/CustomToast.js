import {ToastContainer} from 'react-toastify'



function CustomToast({position}){


    return(
<ToastContainer
position={position}
autoClose={5000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    )
}

export default CustomToast