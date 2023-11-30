import React from 'react';
import { useLocation } from 'react-router';
import { Grid } from '@mui/material';

import { CharacterType, EpisodeType, LocationType } from 'types';
import { cardComponentMap } from './cards';
import { PATHNAME } from 'constants/pathname';
import { PROPERTY } from 'constants/filter';
import Actions from 'components/Actions';

interface IProps {
  data: CharacterType[] | EpisodeType[] | LocationType[];
  isDetailsPage?: boolean;
}

const EntitiesList: React.FC<IProps> = ({ data, isDetailsPage = false }) => {
  const location = useLocation();
  const { characters, locations } = PATHNAME;
  const isCharactersList = isDetailsPage || location.pathname === characters;
  const isLocationList = location.pathname === locations;

  const Card = isDetailsPage
    ? cardComponentMap[characters]
    : cardComponentMap[location.pathname];

  const propKey = isCharactersList
    ? PROPERTY.character
    : isLocationList
    ? PROPERTY.location
    : PROPERTY.episode;

  // Handle unknown pathname
  if (!Card) return null;
  return (
    <Grid component="ul" container spacing={3} mb={5} position="relative">
      {data.map(
        entity =>
          entity && (
            <Grid key={entity.id} component="li" item xs={12} md={6}>
              <Card {...{ [propKey]: entity }} />
            </Grid>
          )
      )}
      <Actions type="filter" />
    </Grid>
  );
};

export default EntitiesList;
