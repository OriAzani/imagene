import { Box, TextField, Button, Typography } from "@mui/material";

function AddAddress() {
  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: "0 auto" }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Add New Address
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField fullWidth label="Street" placeholder="Enter street name" />

        <TextField
          fullWidth
          label="Number"
          type="number"
          inputProps={{ min: 0 }}
          placeholder="Enter street number"
        />

        <TextField fullWidth label="City" placeholder="Enter city" />

        <TextField fullWidth label="State" placeholder="Enter state" />

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

export default AddAddress;
