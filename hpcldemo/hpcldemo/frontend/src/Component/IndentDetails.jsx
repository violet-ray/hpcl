import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText,FormGroup,FormText } from "reactstrap";
import QuantitySelector from "./QuantitySelector";


const IndentDetails=()=>{


      const CustomerOptions = [
        { label: 'Customer-1', value: 'customer1' },
        { label: 'Customer-2', value: 'customer2' },
        { label: 'Customer-3', value: 'customer3' },
      ];

      const RecipeOptions = [
        { label: 'Recipe-1', value: 'Recipe1' },
        { label: 'Recipe-2', value: 'Recipe2' },
        { label: 'Recipe-3', value: 'Recipe3' },
      ];

    const [indentFormData,setIndentFormData]=useState({
        indentId:'',
        customerId:'',
        quantity:'',
        recipeId:''
    })

        const saveIndentData=(event)=>{
            event.preventDefault();
            indentFormData.quantity=quantity;
            toast.info("Indent Form: "+JSON.stringify(indentFormData));
            
            }

    const [quantity, setQuantity] = useState(1);
    

  const handleQuantityChange = (newQuantity) => {
   // console.log('Quantity changed to:', newQuantity);
    setQuantity(newQuantity);
  };


  const onIndentChange=(event,fieldName)=>
    {
        setIndentFormData({...indentFormData,[fieldName]:event.target.value})
    }


    return(
       <>
        <Container>
            <Row className="mt-2">
    
           <Col className="col-md-3"></Col>
            <Col className="col-md-6">
            <Card className="shadow-lg">
              
                        <CardBody>
                        <h3>Indent Details !!</h3>
                        <Form onSubmit={saveIndentData}>
  <FormGroup>
    <Label for="Customer ID">
    Customer ID
    </Label>
    <div >
      <select 
        id="select-dropdown"
        //value={selectedValue}
        //onChange={handleChange}
        onChange={(event)=>onIndentChange(event,'customerId')}
                         value={indentFormData.customerId}
        style={{ marginLeft: '10px', padding: '5px', width:'100%' }}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {CustomerOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
    Recipe Id:
    </Label>
    <div>
      <select
        id="select-dropdown"
        //value={selectedValue}
        //onChange={handleChange}
        onChange={(event)=>onIndentChange(event,'recipeId')}
                         value={indentFormData.recipeId}
        style={{ marginLeft: '10px', padding: '5px' , width:'100%' }}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {RecipeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </FormGroup>
  <FormGroup>
  <label htmlFor="select-dropdown">Quantity(ltr):  </label>

<div className="App">
<QuantitySelector 
initialQuantity={quantity}
minQuantity={1}
maxQuantity={100}
onQuantityChange={handleQuantityChange}
/>
</div>
  </FormGroup><br/>
  <Button type="submit" color="warning" className="btn btn-lg">Save</Button>
</Form>
                           
                          
                            
                          

  
   
     


                        </CardBody>
                    </Card>
            </Col>
            <Col className="col-md-3"></Col>
            </Row>
        </Container>
        </>
       
    )
    }

export default IndentDetails;