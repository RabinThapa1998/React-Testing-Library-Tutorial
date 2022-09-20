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
  age: number | string;
};
function HomePage() {
  const [form, setForm] = useState<formProps>({
    name: "",
    age: 0,
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
        {fields.map((item, index) => (
          <Grid item xs={6} key={item.name}>
            <TextField
              {...item}
              inputProps={{
                "data-testid": `${item.name}-${index}`,
              }}
            />
          </Grid>
        ))}
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={handleGen}
            data-testid="generate"
          >
            Generate
          </Button>
        </Grid>
      </Grid>
      <img src="" alt="bg-img" />
      <Grid container spacing={5}>
        {cardList.map((item, index) => (
          <Grid item xs={3} key={item.name} data-testid={index}>
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
