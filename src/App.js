import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./componint/DatesCount";
import DatesList from "./componint/DatesList";
import DateAction from "./componint/DatesAction";
import { useState } from "react";
function App() {

  const [personData, setPersonData] = useState(person);

  const onDelete =()=>{
    setPersonData([])
  }
  const onShow =()=>{
    setPersonData(person)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DateAction DeleteData={onDelete} showData ={onShow} />
      </Container>
    </div>
  );
}

export default App;
