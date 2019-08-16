import React from 'react';
import { Card } from 'semantic-ui-react';

const Breweries = props => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>{props.breweries.name}</Card.Header>
          {/* <Card.Meta>Type of Brewery: {props.breweries.brewery_type}</Card.Meta> */}
          <Card.Description>
            {props.breweries.street}, {props.breweries.city},{' '}
            {props.breweries.state}
          </Card.Description>
          <div>
            <a href={props.breweries.website_url}>
              Click Here for their Website!
            </a>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default Breweries;
