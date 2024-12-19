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
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";

const addresses = [
  {
    id: 1,
    state: "NY",
    city: "New York",
    street: "Broadway",
    number: 123,
    properties: [
      { id: 1, title: "Modern Downtown Apartment" },
      { id: 2, title: "Luxury Penthouse" },
    ],
  },
  {
    id: 2,
    state: "CA",
    city: "Los Angeles",
    street: "Palm Avenue",
    number: 456,
    properties: [{ id: 3, title: "Suburban Family House" }],
  },
  // Add more sample addresses as needed
];

function Addresses() {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          Addresses
        </Typography>
        <Button
          component={Link}
          to="/add-address"
          variant="contained"
          color="primary"
        >
          Add New Address
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: "#132F4C" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Properties</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map((address) => (
              <TableRow
                key={address.id}
                sx={{ "&:hover": { backgroundColor: "#1E4976" } }}
              >
                <TableCell>{`${address.number} ${address.street}`}</TableCell>
                <TableCell>{address.city}</TableCell>
                <TableCell>{address.state}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {address.properties.map((property) => (
                      <Chip
                        key={property.id}
                        label={property.title}
                        size="small"
                        sx={{ backgroundColor: "#1E4976" }}
                      />
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Addresses;
