
import './App.css'
import {Route, Routes} from "react-router-dom";
import Message from "./features/messages/containers/Message";

const App = () => {

  return (
    <>
        <Routes>
            <Route path="/" element={<Message/>}/>
            <Route path="*" element={<h5>Not found!</h5>} />
        </Routes>
    </>
  )
}

export default App
