import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export const Search = (props) => {
   const { chanceValue, dropdownValue } = props;
   return (
      <InputGroup>
         <DropdownButton title={dropdownValue} id="dropdown-basic-button">
            <Dropdown.Item onClick={(e) => chanceValue(e.target.textContent)}>Filme</Dropdown.Item>
            <Dropdown.Item onClick={(e) => chanceValue(e.target.textContent)}>Personagem</Dropdown.Item>
         </DropdownButton>
         <Form.Control type="text" placeholder="Digite o nome do personagem/filme" />
      </InputGroup>
   );
};
