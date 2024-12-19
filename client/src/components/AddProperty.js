import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";

// Sample addresses array (in real app, this would come from your data source)
const addresses = [
  {
    id: 1,
    state: "NY",
    city: "New York",
    street: "Broadway",
    number: 123,
  },
  {
    id: 2,
    state: "CA",
    city: "Los Angeles",
    street: "Palm Avenue",
    number: 456,
  },
];

function AddProperty() {
  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: "0 auto" }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Add Property
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField fullWidth label="Title" placeholder="Enter property title" />

        <TextField
          fullWidth
          label="Number of Rooms"
          type="number"
          inputProps={{ min: 0 }}
        />

        <TextField
          fullWidth
          label="Price"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          fullWidth
          label="Floor"
          type="number"
          inputProps={{ min: 0 }}
        />

        <TextField
          fullWidth
          label="Contact"
          placeholder="Enter contact information"
        />

        <FormControl fullWidth>
          <InputLabel>Select Address</InputLabel>
          <Select label="Select Address" defaultValue="">
            {addresses.map((address) => (
              <MenuItem key={address.id} value={address.id}>
                {`${address.number} ${address.street}, ${address.city}, ${address.state}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" sx={{ mr: 2 }}>
            Save
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddProperty;
