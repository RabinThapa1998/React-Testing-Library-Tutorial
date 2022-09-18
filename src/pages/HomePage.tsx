import {
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";

type formProps = {
  name: string;
  age: number | null;
};
function HomePage() {
  const [form, setForm] = useState<formProps>({
    name: "",
    age: null,
  });
  const [cardList, setCardList] = useState<formProps[]>([]);
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: form.name,
      onChange: handleChange,
      fullWidth: true,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      value: form.age,
      onChange: handleChange,
      fullWidth: true,
    },
  ];
  const handleGen = (e: any) => {
    e.preventDefault();
    setCardList([...cardList, form]);
  };
  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        HomePage
      </Typography>

      <Grid container spacing={2} my={5}>
        {fields.map((item) => (
          <Grid item xs={6}>
            <TextField {...item} />
          </Grid>
        ))}
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleGen}>
            Generate
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        {cardList.map((item) => (
          <Grid item xs={3}>
            <Paper sx={{ p: 2 }}>
              <Stack direction="column">
                <Typography variant={"h5"}>Name: {item.name}</Typography>
                <Typography variant={"h5"}>Age: {item.age}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
