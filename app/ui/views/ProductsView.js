import React,{useEffect, useContext} from "react";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { ApiService } from "../../data/services/ApiService";
import { ProductContext } from "../provider/ProductProvider";
import { productsResponse } from "../../data/actions/ProductActions";
const ViewContainer = styled.SafeAreaView`
    flex:1;
    
`;
const ProductCart = styled(Card)`
    margin:10px;
`


export default function ProductsView(props){

    const [{productList}, productDispatch] = useContext(ProductContext)

    useEffect (()=>{
        ApiService.get('products').then(productList => productDispatch(productsResponse(productList)))

    })

    return(
        <ViewContainer>
            <Appbar.Header>

                <Appbar.Content title={'Produtos'}/>
 
            </Appbar.Header>

            <ScrollView>
              
               {
                productList.map(item =>{
                    <ProductCart key={item.id}>
                    <Card>
                        <Card.Cover source={{uri:item.picture}}/>
                        <Card.Title
                            title={item.name}
                            right={(props) => <Button>Selecionar</Button>}
                        />
                        <Card.Content>
                            <Paragraph>{item.price}</Paragraph>
                        </Card.Content>
                        
                    </Card>
                    </ProductCart>
                    
                })}

            </ScrollView>

        </ViewContainer>
    )
}