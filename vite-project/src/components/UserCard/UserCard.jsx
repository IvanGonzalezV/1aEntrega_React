import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/W__HpSA7dDuTu1OAwFjfWGMm6rUWnNwz0AF7rN6bHp4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvQUEw/NDU1MDAvcGhvdG8v/Z3JlZW4taWd1YW5h/LWNsb3NlLXVwLXNp/ZGUtdmlldy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dEdJ/ZDc1WkZsb2VEOTB2/RFdhd1lzaFBNR2lQ/WTZXQXdLeVNrazV5/dXEwST0"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ActionAreaCard;