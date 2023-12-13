import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gameProduct from "../imgs/gameproduct.jpeg"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product({data}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const textStyles={
        color: 'white',
    }

    return (
        <Card sx={{ maxWidth: 345,backgroundColor:'rgb(34 34 34)' }}>
            <CardHeader
                style={textStyles}
                title="Product Name"
            />
            <CardMedia
                component="img"
                height="194"
                image={gameProduct}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={textStyles}>
                    <Chip label="$19.99 USD" color="success" variant="outlined"/>
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
            <Typography style={textStyles}>See More Info:</Typography>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon style={textStyles} />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography style={textStyles}>More info</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}