import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const propertyTypes = [
  { title: "Residential", image: "/images/residential.jpg" },
  { title: "Commercial", image: "/images/commercial.jpg" },
  { title: "Industrial", image: "/images/industrial.jpg" },
  { title: "Land", image: "/images/land.jpg" },
  { title: "Multi-family", image: "/images/multi-family.jpg" },
  { title: "Special Purpose", image: "/images/special-purpose.jpg" },
];

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1">
          Property Management Dashboard
        </Typography>
        <Typography
          variant="body2"
          sx={{
            ml: 2,
            backgroundColor: "#1E4976",
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          Active
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Property Overview
      </Typography>

      <Grid container spacing={3}>
        {propertyTypes.map((type) => (
          <Grid item xs={12} sm={6} md={4} key={type.title}>
            <Card sx={{ backgroundColor: "#132F4C", height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={type.image}
                alt={type.title}
              />
              <CardContent>
                <Typography variant="h6">{type.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
