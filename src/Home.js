import React ,{useEffect} from "react";
import { Jumbotron, Button, Container } from 'reactstrap';

const Home =  () => {

    useEffect(()=>{
        document.title="Home Page";

    },[]);
    return(

        <div>
            <Jumbotron className="text-center">
            <h1 >Course-Era</h1>
        <p className="lead"> || Application for beginners || </p>
        <Container>
            <Button color="primary" outline>Start Using</Button>
        </Container>
        </Jumbotron>
        </div>
    );
}
export default Home;