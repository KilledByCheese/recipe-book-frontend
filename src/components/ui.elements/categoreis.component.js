import React, { useEffect, useState } from "react";

import axios from 'axios';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';





export default function CategoriesOverview(props) {

    const [categoryList, setCategoryList] = useState([]);
 
    useEffect( () => {
        axios.get("/getAllCategories").then(
            res => {
                setCategoryList(res.data);
            }
        ).catch(err => {
            console.log(err)
        });
    }, []);
   
    
    
    return( 
        <div>     
            <Container fluid={true} style={{padding:"10px"}}>
                {buildCategoryView(categoryList)}
            </Container>
            
        </div>
    )
}

function buildCategoryView(categoryList) {
    return(
        <Row xl={6} lg={4} md={3} sm={2} xs={1}  >
            {categoryList.map(category => (
                <Col>
                    {buildCategoryCard(category.category)}
                </Col>
            ))}
        </Row>
    )
}

function buildCategoryCard(title) {
    return(      
        <Card style={{ width: '18rem', marginBottom:"15px" }}>
            <Card.Img variant="top" src="placeholder.png" />
            <Card.Body >
                <Card.Title>{title}</Card.Title>

                <Button variant="primary">See More</Button>
            </Card.Body>
        </Card>  
    )
}



  

