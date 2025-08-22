import Layout from "@/components/Layout";
import { Box ,Container, Grid, Typography } from "@mui/material";

export default function LostAndFound(){
    return<Layout>
        <Box>
            <Container maxWidth={"xl"}>
              
              <Grid className="flex item-align-left">
                <Typography>
                   Lost And Found
                </Typography>
                <Typography>
                    All lost things are here in case of things give proof and get things
                </Typography>
              </Grid>

                
            </Container>
        </Box>
    </Layout>
}