
import { Grid } from "@mui/material";
import { Product } from "../../models/Products"
import ProductCard from "../Products/ProductCard";
import { useEffect, useState } from "react";

export default function Catalog() { 
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch("http://localhost:5081/api/Products")
			.then(response => response.json()).then(data => setProducts(data))
	}, []) 
	return (
		<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{m:4}}> 
				{products.map(product => (
					<Grid item xs={3} key={product.id }>
						<ProductCard product={product} />
					</Grid>
				))} 
		</Grid>
		
	)
}