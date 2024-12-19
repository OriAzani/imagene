import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
function Properties() {

  const [properties, setProperties] = useState(null);
  useEffect(() => {
    (async () => {
      const propertiesRes = await axios.get('http://localhost:3009/properties/');
      console.log(propertiesRes);

      if (propertiesRes.data.length > 0) {
        setProperties(propertiesRes.data)
      }
    })()
  }, [])

  if (!properties) return;
  return (

    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          Properties
        </Typography>
        <Button
          component={Link}
          to="/add-property"
          variant="contained"
          color="primary"
        >
          Add New Property
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: "#132F4C" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Rooms</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Floor</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow
                key={property.id}
                sx={{ "&:hover": { backgroundColor: "#1E4976" } }}
              >
                <TableCell>{property.title}</TableCell>
                <TableCell>{property.number_of_rooms}</TableCell>
                <TableCell>${property.price.toLocaleString()}</TableCell>
                <TableCell>{property.floor || "N/A"}</TableCell>
                <TableCell>{property.contact}</TableCell>
                <TableCell>
                  {`${property.address.number} ${property.address.street}, ${property.address.city}, ${property.address.state}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Properties;
