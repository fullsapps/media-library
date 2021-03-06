import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import * as routes from '../../../shared/constants/routes';
//import AdminProperties from '../AdminProperites/AdminProperties';
import AdminPropertiesContainer from '../../../containers/admin/AdminProperties/AdminPropertiesContainer';
//import AdminProperty from '../AdminProperty/AdminProperty';
import AdminPropertyContainer from '../../../containers/admin/AdminProperty/AdminPropertyContainer';
//import AdminSettings from '../AdminSettings/AdminSettings';
import AdminSettingsContainer from '../../../containers/admin/AdminSettings/AdminSettingsContainer';

export default function Admin({ match }) {
  return (
    <>
      <br />
      <Container>
        <Menu pointing secondary>
          <Menu.Item
            name="Properties"
            as={NavLink}
            to={match.url + routes.ADMINPROPERTIES}
          />
          <Menu.Item
            name="Settings"
            as={NavLink}
            to={match.url + routes.ADMINSETTINGS}
          />
        </Menu>
        <Switch>
          <Route
            path={match.path + routes.ADMINPROPERTIES}
            exact
            component={AdminPropertiesContainer}
          />
          <Route
            path={match.path + routes.ADMINPROPERTY}
            component={AdminPropertyContainer}
          />
          <Route
            path={match.path + routes.ADMINSETTINGS}
            component={AdminSettingsContainer}
          />
          <Redirect to={match.path + routes.ADMINPROPERTIES} />
        </Switch>
      </Container>
    </>
  );
}

Admin.propTypes = {
  match: PropTypes.object.isRequired
};
