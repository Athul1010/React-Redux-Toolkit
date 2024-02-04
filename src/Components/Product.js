import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, getProduct] = useState([]);
    useEffect(() => {
        //api call
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProduct(result))
    }, []);

    const cards = products.map(product => (
        <div className='col-md-3'>
            <Card style={{ width: '18rem' }}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width : "100px", height : "130px"}}/>
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    ))
    return (
        <div>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {cards}

            </div>
        </div>

    )
}

export default Product