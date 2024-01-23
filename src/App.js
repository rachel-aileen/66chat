
import { Grid } from '@mui/material';
import './App.css';
import ChatTab from './layouts/ChatTab'
import Content from './layouts/Content'


function App() {
  return (
    <div>

      <Grid container
        direction="row"
        style={{ height: "100%" }}
      >

        <Grid item xs={3} >
          <ChatTab />
        </Grid>

        <Grid item xs={9} >
          <Content />
        </Grid>

      </Grid>


    </div>
  );
}

export default App;
