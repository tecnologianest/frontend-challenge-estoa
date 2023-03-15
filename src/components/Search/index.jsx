import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const Search = (props) => {
   const { changeValue, dropdownValue, value, inputOnchange, clearInput } = props;

   return (
      <InputGroup>
         <DropdownButton title={dropdownValue} id="dropdown-basic-button">
            <Dropdown.Item onClick={(e) => changeValue(e.target.textContent, "films")}>Filme</Dropdown.Item>
            <Dropdown.Item onClick={(e) => changeValue(e.target.textContent, "people")}>Personagem</Dropdown.Item>
         </DropdownButton>
         <Form.Control id="Teste123" value={value} type="text" placeholder="Faça sua busca" onChange={(event) => inputOnchange(event)} />
         <Button variant="primary" onClick={clearInput}>
            Limpar
         </Button>
      </InputGroup>
   );
};
