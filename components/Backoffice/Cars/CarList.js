// @mui
import { Grid } from '@mui/material';
import CarCard from './CarCard.js';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import LoadingSpinner from "../Loading/LoadingSpinner";

// ----------------------------------------------------------------------

export default function CarList({... other }) {
  const API_URL = process.env.API_URL;
  const TOKEN = process.env.TOKEN;

  const [products, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const get = await axios({
          method: "get",
          url: `${API_URL}/v1/post/`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          }
        });
        setData(get.data.message);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  const renderUser = (
      <Grid container spacing={3} {...other}>
        {products && products.map((product) => (
            <Grid key={product._id} item xs={12} sm={6} md={3}>
              <CarCard product={product} />
            </Grid>
        ))}
      </Grid>
  );

  return (
      <div>{isLoading ? <LoadingSpinner /> : renderUser}</div>
  );
}