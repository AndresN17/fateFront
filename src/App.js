import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Users from './components/Pages/Users';
import Layout from "./components/Layout/Layout";




function App() {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);

  }

  const layout = (
    <Layout handleClick={handleClick} openDrawer={openDrawer} handleOpenDrawer={handleOpenDrawer}>
      <Routes>
        <Route exact path="/" element={<Users openDrawer={openDrawer} handleClose={handleClose} open={open} />} />
      </Routes>
    </Layout>
  );


  return (
    <BrowserRouter>
      {layout}
    </BrowserRouter>
  );
}

export default App;

