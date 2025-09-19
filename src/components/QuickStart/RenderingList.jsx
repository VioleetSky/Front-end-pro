//Rendering lists

const products=[
    {title: 'Apple', isFruit: true, id:1 },
    {title: 'Tomato', isFruit: false, id:2 },
    {title: 'Pineapple', isFruit: true, id:3 },
    {title: 'Cucumber', isFruit: false, id:4 }
];
export default function RenderingList(){
    const listItems=products.map(product=>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );
        return (
            <ul>{listItems}</ul>
        );
    }