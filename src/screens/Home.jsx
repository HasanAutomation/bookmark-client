import React from 'react';
import AddBookmark from '../components/AddBookmark';
import EditBookmark from '../components/EditBookmark';
import Navbar from '../components/Navbar';
import PrivateRoute from '../components/routes/PrivateRoute';
import Bookmark from './Bookmark';
import Search from './Search';

function Home() {
  return (
    <>
      <Navbar />
      <PrivateRoute exact path='/bookmarks'>
        <Bookmark />
      </PrivateRoute>
      <PrivateRoute exact path='/add'>
        <AddBookmark />
      </PrivateRoute>
      <PrivateRoute path='/search'>
        <Search />
      </PrivateRoute>
      <PrivateRoute path='/bookmarks/:id'>
        <EditBookmark />
      </PrivateRoute>
    </>
  );
}

export default Home;
