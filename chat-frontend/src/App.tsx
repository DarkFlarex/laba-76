import {Route, Routes} from "react-router-dom";
import Message from "./features/messages/containers/Message";
import {Container} from "@mui/material";
import './App.css';

const App = () => {

  return (
    <>
        <Container maxWidth="xl" component="main">
            <Routes>
                <Route path="/" element={<Message/>}/>
                <Route path="*" element={<h5>Not found!</h5>} />
            </Routes>
        </Container>
    </>
  )
}

export default App
