import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { InputGroup, InputGroupText, InputGroupAddon, Input,CustomInput, Form, FormGroup, Label } from 'reactstrap';
const Home = (props) => {

    const onCheckboxBtnClick = (event,key) => {
        let selectedValue = event.target.value;
        let checked = event.target.checked;
        props.setSelectedData(selectedValue,key,checked);
    }
    let {selectedData} = {...props};
   
    return (
        <Container >
            
            <Row className="working-row">
                <Col sm="12" md="6">

                    <div className="white-widget">
                        {props.selectableData.map((data, index) => (
                            <div>

                                <FormGroup>
                                    <Label for="exampleCheckbox">{data.key}</Label>
                                    <div>
                                    {data.value.map((value) => {
                                        let comparablevalue = [];
                                        if(selectedData.length>0 ){
                                            for (let i = 0; i < selectedData.length; i++) {
                                                if (data.key == selectedData[i].key) {
    
                                                    comparablevalue = selectedData[i].value;
                                                    
                                                    break;
                                                }
                                            }
                                        }
                                       
                                    return (
                                        <CustomInput className="checkboxInput" type="checkbox" id={"checkBox"+value.replace(/ /g,'')}
                                      checked={comparablevalue.indexOf(value) == -1 ? false : true }
                                        onClick={(event)=>{
                                            onCheckboxBtnClick(event,data.key);
                                               // console.log("checked",event.target.value,event.target.checked);
                                        }} label={value} value={value} />
                                       
                                        )}
                                        )
                                    }
                                    </div>
                                </FormGroup>

                            </div>
                        ))
                        }


                    </div>
                </Col>
                <Col sm="12" md="6">
                <div className="white-widget">
                    
                    {props.selectedData.length > 0 ?  props.selectedData.map((data, index) => (
                        
                            <div>

                                <FormGroup>
                                    <Label for="exampleCheckbox">{data.key}</Label>
                                    <div>
                                    {data.value.map((value) => (
                                     
                                    <InputGroup className="inputBoxGroup">
                                            <Input value={value} disabled className="inputBox"/>
                                            <InputGroupAddon addonType="append" className="crossBox" onClick={()=>{
                                                props.setSelectedData(value,data.key,false);
                                                
                                            }

                                            }>
                                            <InputGroupText>X</InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                       
                                        ))
                                    }
                                    </div>
                                </FormGroup>

                            </div>
                          
                        ))
                        :
                        <div className="white-widget-flex"><div className="noSelected"> No Value Selected</div></div>
                        }

</div>
                   
                </Col>
            </Row>


        </Container>
    );
}

const mapStateToProps = state => {
    return {
        selectedData: state.selectedData,
        selectableData: state.selectableData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSelectedData: (selectedValue,key,checked) =>
            dispatch({ type: "SET_SELECTED_DATA", payload: {"selectedValue":selectedValue,"key":key,"checked":checked }})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
