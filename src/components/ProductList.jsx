import React from 'react';
import Product from './Product.jsx';
import Select from './Select.jsx';

const products = [
    {
        id: 1,
        name: 'Torba',
        productDesc: 'ultra lightweight and travel',
        price: 211,
        categories: ['Bags'],
        colors: ['Black', 'Yellow', 'Orange']
    }, {
        id: 2,
        name: 'Plecak',
        productDesc: 'ultra lightweight and travel',
        price: 100,
        categories: ['Backpacks'],
        colors: ['Black', 'Red', 'Orange']
    }, {
        id: 3,
        name: 'Ak',
        productDesc: 'ultra lightweight and travel',
        price: 333,
        categories: ['Accessories'],
        colors: ['Black', 'Gray', 'White']
    }, {
        id: 4,
        name: 'Ak i plecak',
        productDesc: 'ultra lightweight and travel',
        price: 199,
        categories: [
            'Accessories', 'Backpacks'
        ],
        colors: ['Black', 'Gray', 'White']
    }
];

export const categories = [
    'Bags',
    'Backpacks',
    'Accessories'
];

export const colors = [
    'Black',
    'Red',
    'White',
    'Gray',
    'Orange',
    'Yellow'
];

const ProductList = (props) => {
    return (
        <div>
            <Select list={categories} products={products} colors={colors}>
                {
                    filtered => {
                        Object.keys(filtered).map(x => console.log("Name :", filtered[x].name, "\nCategories :", filtered[x].categories, "\nColors :", filtered[x].colors));
                        
                        return filtered.length > 0 ? filtered.map(prod => <Product key={prod.id} {...prod}/>) : products.map(prod => <Product key={prod.id} {...prod}/>)
                    }
                }
            </Select>
        </div>
    );
}

export default ProductList;
