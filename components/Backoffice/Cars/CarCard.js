// @mui
import {Box, Card, Link, Typography, Stack, Switch} from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
// components
import Label from '../Label/Label.js';
import {useState} from "react";
import axios from "axios";

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

export default function CarCard({ product }) {
  const { name, image, price, description, status, model, visibility , _id} = product;
  let image_card;
  if(Array.isArray(image)){
    image_card = image[0];
  }else{
    image_card = image;
  }

  const [checked, setData] = useState(visibility);

  async function handleChange() {
    setData(!checked);
    product.visibility = !checked
    const put = await axios.put(`/api/v1/products/${_id}`, product)
  }

  return (

  <Link href={`/backoffice/${_id}`} underline="none">
    <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          {status && (
            <Label
              color={(status === 'sale' && 'error') || 'info'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase',
              }}
            >
              {status}
            </Label>
          )}
          <StyledProductImg alt={name} src={image_card} />
        </Box>

        <Stack spacing={1} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" noWrap>
              {name}
            </Typography>
            <Typography variant="subtitle2" noWrap>
              {model}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2" noWrap>
              {description}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">
              {price}
            </Typography>
            <Switch
                checked={checked}
                onChange={handleChange}
            />
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
}
