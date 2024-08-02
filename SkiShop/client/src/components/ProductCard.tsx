import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../models/Products";
interface Props {
    product: Product;
}
export default function ProductCard({product}:Props) {
    return (
       
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "secondary.main" }}>{product.name.charAt(0)}</Avatar>}
                title={product.name} titleTypographyProps={{}}
            >
                </CardHeader>
            <CardMedia
                sx={{ height: 140, backgroundSize:"contain", backgroundColor: "primary.light" }}
                    image={product.pictureUrl}
                title={product.name}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ${(product.price/100).toFixed(2)}
                     </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} Brand
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
    )
}
