import React from 'react'
import {Row, Col} from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

export const Store = () => {
  return (
    <>
        <h1>Store</h1>
        <Row  md={1} xs={1} lg={3} className="g-4">
            {
                storeItems.map(item=>{
                    return (
                    <Col key={item.id} >
                        <StoreItem {...item}/>
                    </Col>
                )
                })
            }
        </Row>
    </>
  )
}
