# shopify-challenge



## Getting started

To test the developed api for the shopify-challenge, Please go through the follwing steps:

- Get postman extension or install postman in your system
- To test create Api, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/createProduct and set the request type as POST and use the body similar to 
    {
        "name":"Summer Skirt",
        "description": "Floral summaer Skirt",
        "brand": "Shein",
        "price": 100,
        "category": "Woman skirt",
        "quantity": "12"
    }
    hit send button  to create the record in database.

- To test get products with filtered deleted product, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/getProductLists  and set the request type as GET and hit send button  to fetch all the records from database.

- To test get all products, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/getAllProductLists  and set the request type as GET and hit send button  to fetch all the records from database. 

- To test getProductById Api, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/getProductById/anyID and set the request type as GET and hit send button  to fetch all the records from database.

- To test update Api, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/updateProductById/anyId and set the request type as PUT and hit send button  to update the selected record in database.


- To test soft delete Api with comment, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/deleteProduct and set the request type as PUT with body similar to
    {
        "id": "62895b870b487f4564124253",
        "isDelete":true,
        "addDeleteComment": "Deleted Because of reason 1"
    }
    hit send button  to create the record in database..


- To test soft undelete Api with comment, Please use the URL: https://shopify-challenge.anitamishra.repl.co/shopify/api/product/getDeletedProduct to select product that you wish to undelete and set the request type as GET and then use https://shopify-challenge.anitamishra.repl.co/shopify/api/product/deleteProduct and set the request type as PUT with body similar to
    {
        "id": "62895b870b487f4564124253",
        "isDelete":false,
        "addDeleteComment": "Deleted Because of reason 1"
    }
    hit send button  to create the record in database..


