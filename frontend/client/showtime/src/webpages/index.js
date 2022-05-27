import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import users from "./adminusers";
import page_event from "./page_event";
import event_homepage from "./event_homepage";
import page_artist from "./page_artist";
import listArtists from "./listArtists";
import tickets from "./tickets";
import register from "./Register";
import admin_getartists from "./admin_getartists";
import requete_artistfavoris from "./requete_artistfavoris";
import requete_wishlist from "./requete_wishlist";
import admincreateevents from "./admincreateevents";
import admincreateartists from "./admincreateartists";

import page_admin from "./page_admin";
import Login from "./login";
import ProtectedRoute from "./ProtectedRoute";
import adminevent from "./adminevent";
import adminartists from "./adminartists";
import admin_postartists from "./admin_postartists";
import admin_putartists from "./admin_putartists";
import adminupdateevent from "./adminupdateevent";
import adminupdateartist from "./adminupdateartist";
import createUsers from "./admincreateusers";
import adminupdateuser from "./adminupdateuser";
import userpage from "./userpage";
import mesfavoris from "./mesfavoris";

const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/page_event/:_id" component={page_event} />
      <Route path="/event_homepage" component={event_homepage} />
      <ProtectedRoute
        path="/requete_artistfavoris"
        component={requete_artistfavoris}
      />
      <Route path="/register" component={register} />
      <Route path="/login" component={Login} />
      <Route path="/page_event" component={page_event} />
      <Route path="/crud_artist" component={admin_getartists} />
      <Route path="/users" component={users} />
      <Route path="/page_event" component={page_event} />
      <ProtectedRoute path="/page_admin" component={page_admin} />
      <ProtectedRoute path="/admincreateevents" component={admincreateevents} />
      <ProtectedRoute path="/admincreateartists" component={admincreateartists} />
      <Route path="/listArtists" component={listArtists} />
      <Route path="/page_artist/:_id" component={page_artist} />
      <ProtectedRoute path="/tickets" component={tickets} />
      <Route path="/requete_wishlist" component={requete_wishlist} />

      <Route path="/adminevents" component={adminevent} />
      <Route path="/adminartists" component={adminartists} />
      <Route path="/admin_postartists" component={admin_postartists} />
      <Route path="/update/artist/:_id" component={admin_putartists} />
      <Route path="/update/concerts/:_id" component={adminupdateevent} />
      <Route path="/update/bands/:_id" component={adminupdateartist} />
      <Route path="/admincreateusers" component={createUsers} />
      <Route path="/update/users/:_id" component={adminupdateuser} />
      <Route path="/profile/:_id" component={userpage} />
      <Route path="/mesfavoris/:_id" component={mesfavoris}/>
    </Router>
  );
};

export default Webpages;
