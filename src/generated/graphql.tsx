import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown'
}

export type Character = {
  __typename?: 'Character';
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  species: Scalars['String'];
  image: Scalars['String'];
  status: Status;
  gender: Gender;
  originId?: Maybe<Scalars['Int']>;
  Origin?: Maybe<Location>;
  locationId?: Maybe<Scalars['Int']>;
  Location?: Maybe<Location>;
  Episode: Array<Episode>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CharacterEpisodeArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EpisodeWhereUniqueInput>;
  after?: Maybe<EpisodeWhereUniqueInput>;
};

export type Episode = {
  __typename?: 'Episode';
  id: Scalars['Int'];
  name: Scalars['String'];
  episode: Scalars['String'];
  airDate: Scalars['DateTime'];
  Character: Array<Character>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EpisodeCharacterArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterWhereUniqueInput>;
  after?: Maybe<CharacterWhereUniqueInput>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  dimension: Scalars['String'];
  Residents: Array<Character>;
  LastSeens: Array<Character>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LocationResidentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterWhereUniqueInput>;
  after?: Maybe<CharacterWhereUniqueInput>;
};


export type LocationLastSeensArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterWhereUniqueInput>;
  after?: Maybe<CharacterWhereUniqueInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  favoriteCharacters: Array<Character>;
  favoriteEpisodes: Array<Episode>;
  favoriteLocations: Array<Location>;
};


export type UserFavoriteCharactersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterWhereUniqueInput>;
  after?: Maybe<CharacterWhereUniqueInput>;
};


export type UserFavoriteEpisodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EpisodeWhereUniqueInput>;
  after?: Maybe<EpisodeWhereUniqueInput>;
};


export type UserFavoriteLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<LocationWhereUniqueInput>;
  after?: Maybe<LocationWhereUniqueInput>;
};

export type AuthenticationType = {
  __typename?: 'AuthenticationType';
  token: Scalars['String'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown'
}

export type EpisodeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type CharacterWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CharacterCreateInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  species: Scalars['String'];
  image: Scalars['String'];
  status?: Maybe<Status>;
  gender?: Maybe<Gender>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Origin?: Maybe<LocationCreateOneWithoutResidentsInput>;
  Location?: Maybe<LocationCreateOneWithoutLastSeensInput>;
  Episode?: Maybe<EpisodeCreateManyWithoutCharacterInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteCharactersInput>;
};

export type CharacterUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  species?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<EnumStatusFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Origin?: Maybe<LocationUpdateOneWithoutResidentsInput>;
  Location?: Maybe<LocationUpdateOneWithoutLastSeensInput>;
  Episode?: Maybe<EpisodeUpdateManyWithoutCharacterInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteCharactersInput>;
};

export type EpisodeCreateInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  episode: Scalars['String'];
  airDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  Character?: Maybe<CharacterCreateManyWithoutEpisodeInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteEpisodesInput>;
};

export type EpisodeUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  episode?: Maybe<StringFieldUpdateOperationsInput>;
  airDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Character?: Maybe<CharacterUpdateManyWithoutEpisodeInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteEpisodesInput>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type LocationCreateInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  dimension: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  Residents?: Maybe<CharacterCreateManyWithoutOriginInput>;
  LastSeens?: Maybe<CharacterCreateManyWithoutLocationInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteLocationsInput>;
};

export type LocationUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  dimension?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Residents?: Maybe<CharacterUpdateManyWithoutOriginInput>;
  LastSeens?: Maybe<CharacterUpdateManyWithoutLocationInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteLocationsInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
  favoriteCharacters?: Maybe<CharacterCreateManyWithoutFavoritesInput>;
  favoriteLocations?: Maybe<LocationCreateManyWithoutFavoritesInput>;
  favoriteEpisodes?: Maybe<EpisodeCreateManyWithoutFavoritesInput>;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  favoriteCharacters?: Maybe<CharacterUpdateManyWithoutFavoritesInput>;
  favoriteLocations?: Maybe<LocationUpdateManyWithoutFavoritesInput>;
  favoriteEpisodes?: Maybe<EpisodeUpdateManyWithoutFavoritesInput>;
};

export type LocationCreateOneWithoutResidentsInput = {
  create?: Maybe<LocationCreateWithoutResidentsInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutResidentsInput>;
};

export type LocationCreateOneWithoutLastSeensInput = {
  create?: Maybe<LocationCreateWithoutLastSeensInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutLastSeensInput>;
};

export type EpisodeCreateManyWithoutCharacterInput = {
  create?: Maybe<Array<EpisodeCreateWithoutCharacterInput>>;
  connect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EpisodeCreateOrConnectWithoutCharacterInput>>;
};

export type UserCreateManyWithoutFavoriteCharactersInput = {
  create?: Maybe<Array<UserCreateWithoutFavoriteCharactersInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfavoriteCharactersInput>>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type EnumStatusFieldUpdateOperationsInput = {
  set?: Maybe<Status>;
};

export type EnumGenderFieldUpdateOperationsInput = {
  set?: Maybe<Gender>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type LocationUpdateOneWithoutResidentsInput = {
  create?: Maybe<LocationCreateWithoutResidentsInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<LocationUpdateWithoutResidentsInput>;
  upsert?: Maybe<LocationUpsertWithoutResidentsInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutResidentsInput>;
};

export type LocationUpdateOneWithoutLastSeensInput = {
  create?: Maybe<LocationCreateWithoutLastSeensInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<LocationUpdateWithoutLastSeensInput>;
  upsert?: Maybe<LocationUpsertWithoutLastSeensInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutLastSeensInput>;
};

export type EpisodeUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<EpisodeCreateWithoutCharacterInput>>;
  connect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  set?: Maybe<Array<EpisodeWhereUniqueInput>>;
  disconnect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  delete?: Maybe<Array<EpisodeWhereUniqueInput>>;
  update?: Maybe<Array<EpisodeUpdateWithWhereUniqueWithoutCharacterInput>>;
  updateMany?: Maybe<Array<EpisodeUpdateManyWithWhereWithoutCharacterInput>>;
  deleteMany?: Maybe<Array<EpisodeScalarWhereInput>>;
  upsert?: Maybe<Array<EpisodeUpsertWithWhereUniqueWithoutCharacterInput>>;
  connectOrCreate?: Maybe<Array<EpisodeCreateOrConnectWithoutCharacterInput>>;
};

export type UserUpdateManyWithoutFavoriteCharactersInput = {
  create?: Maybe<Array<UserCreateWithoutFavoriteCharactersInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFavoriteCharactersInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFavoriteCharactersInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFavoriteCharactersInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfavoriteCharactersInput>>;
};

export type CharacterCreateManyWithoutEpisodeInput = {
  create?: Maybe<Array<CharacterCreateWithoutEpisodeInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutEpisodeInput>>;
};

export type UserCreateManyWithoutFavoriteEpisodesInput = {
  create?: Maybe<Array<UserCreateWithoutFavoriteEpisodesInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfavoriteEpisodesInput>>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type CharacterUpdateManyWithoutEpisodeInput = {
  create?: Maybe<Array<CharacterCreateWithoutEpisodeInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  set?: Maybe<Array<CharacterWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterWhereUniqueInput>>;
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutEpisodeInput>>;
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereWithoutEpisodeInput>>;
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>;
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutEpisodeInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutEpisodeInput>>;
};

export type UserUpdateManyWithoutFavoriteEpisodesInput = {
  create?: Maybe<Array<UserCreateWithoutFavoriteEpisodesInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFavoriteEpisodesInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFavoriteEpisodesInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFavoriteEpisodesInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfavoriteEpisodesInput>>;
};

export type CharacterCreateManyWithoutOriginInput = {
  create?: Maybe<Array<CharacterCreateWithoutOriginInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutOriginInput>>;
};

export type CharacterCreateManyWithoutLocationInput = {
  create?: Maybe<Array<CharacterCreateWithoutLocationInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutLocationInput>>;
};

export type UserCreateManyWithoutFavoriteLocationsInput = {
  create?: Maybe<Array<UserCreateWithoutFavoriteLocationsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfavoriteLocationsInput>>;
};

export type CharacterUpdateManyWithoutOriginInput = {
  create?: Maybe<Array<CharacterCreateWithoutOriginInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  set?: Maybe<Array<CharacterWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterWhereUniqueInput>>;
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutOriginInput>>;
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereWithoutOriginInput>>;
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>;
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutOriginInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutOriginInput>>;
};

export type CharacterUpdateManyWithoutLocationInput = {
  create?: Maybe<Array<CharacterCreateWithoutLocationInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  set?: Maybe<Array<CharacterWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterWhereUniqueInput>>;
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereWithoutLocationInput>>;
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>;
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutLocationInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutLocationInput>>;
};

export type UserUpdateManyWithoutFavoriteLocationsInput = {
  create?: Maybe<Array<UserCreateWithoutFavoriteLocationsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFavoriteLocationsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFavoriteLocationsInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFavoriteLocationsInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfavoriteLocationsInput>>;
};

export type CharacterCreateManyWithoutFavoritesInput = {
  create?: Maybe<Array<CharacterCreateWithoutFavoritesInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutfavoritesInput>>;
};

export type LocationCreateManyWithoutFavoritesInput = {
  create?: Maybe<Array<LocationCreateWithoutFavoritesInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutfavoritesInput>>;
};

export type EpisodeCreateManyWithoutFavoritesInput = {
  create?: Maybe<Array<EpisodeCreateWithoutFavoritesInput>>;
  connect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EpisodeCreateOrConnectWithoutfavoritesInput>>;
};

export type CharacterUpdateManyWithoutFavoritesInput = {
  create?: Maybe<Array<CharacterCreateWithoutFavoritesInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  set?: Maybe<Array<CharacterWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterWhereUniqueInput>>;
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutFavoritesInput>>;
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereWithoutFavoritesInput>>;
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>;
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutFavoritesInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutfavoritesInput>>;
};

export type LocationUpdateManyWithoutFavoritesInput = {
  create?: Maybe<Array<LocationCreateWithoutFavoritesInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutFavoritesInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereWithoutFavoritesInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutFavoritesInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutfavoritesInput>>;
};

export type EpisodeUpdateManyWithoutFavoritesInput = {
  create?: Maybe<Array<EpisodeCreateWithoutFavoritesInput>>;
  connect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  set?: Maybe<Array<EpisodeWhereUniqueInput>>;
  disconnect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  delete?: Maybe<Array<EpisodeWhereUniqueInput>>;
  update?: Maybe<Array<EpisodeUpdateWithWhereUniqueWithoutFavoritesInput>>;
  updateMany?: Maybe<Array<EpisodeUpdateManyWithWhereWithoutFavoritesInput>>;
  deleteMany?: Maybe<Array<EpisodeScalarWhereInput>>;
  upsert?: Maybe<Array<EpisodeUpsertWithWhereUniqueWithoutFavoritesInput>>;
  connectOrCreate?: Maybe<Array<EpisodeCreateOrConnectWithoutfavoritesInput>>;
};

export type LocationCreateWithoutResidentsInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  dimension: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  LastSeens?: Maybe<CharacterCreateManyWithoutLocationInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteLocationsInput>;
};

export type LocationCreateOrConnectWithoutResidentsInput = {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutResidentsInput;
};

export type LocationCreateWithoutLastSeensInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  dimension: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  Residents?: Maybe<CharacterCreateManyWithoutOriginInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteLocationsInput>;
};

export type LocationCreateOrConnectWithoutLastSeensInput = {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutLastSeensInput;
};

export type EpisodeCreateWithoutCharacterInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  episode: Scalars['String'];
  airDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteEpisodesInput>;
};

export type EpisodeCreateOrConnectWithoutCharacterInput = {
  where: EpisodeWhereUniqueInput;
  create: EpisodeCreateWithoutCharacterInput;
};

export type UserCreateWithoutFavoriteCharactersInput = {
  id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
  favoriteLocations?: Maybe<LocationCreateManyWithoutFavoritesInput>;
  favoriteEpisodes?: Maybe<EpisodeCreateManyWithoutFavoritesInput>;
};

export type UserCreateOrConnectWithoutfavoriteCharactersInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFavoriteCharactersInput;
};

export type LocationUpdateWithoutResidentsInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  dimension?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  LastSeens?: Maybe<CharacterUpdateManyWithoutLocationInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteLocationsInput>;
};

export type LocationUpsertWithoutResidentsInput = {
  update: LocationUpdateWithoutResidentsInput;
  create: LocationCreateWithoutResidentsInput;
};

export type LocationUpdateWithoutLastSeensInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  dimension?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Residents?: Maybe<CharacterUpdateManyWithoutOriginInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteLocationsInput>;
};

export type LocationUpsertWithoutLastSeensInput = {
  update: LocationUpdateWithoutLastSeensInput;
  create: LocationCreateWithoutLastSeensInput;
};

export type EpisodeUpdateWithWhereUniqueWithoutCharacterInput = {
  where: EpisodeWhereUniqueInput;
  data: EpisodeUpdateWithoutCharacterInput;
};

export type EpisodeUpdateManyWithWhereWithoutCharacterInput = {
  where: EpisodeScalarWhereInput;
  data: EpisodeUpdateManyMutationInput;
};

export type EpisodeScalarWhereInput = {
  AND?: Maybe<Array<EpisodeScalarWhereInput>>;
  OR?: Maybe<Array<EpisodeScalarWhereInput>>;
  NOT?: Maybe<Array<EpisodeScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  episode?: Maybe<StringFilter>;
  airDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
};

export type EpisodeUpsertWithWhereUniqueWithoutCharacterInput = {
  where: EpisodeWhereUniqueInput;
  update: EpisodeUpdateWithoutCharacterInput;
  create: EpisodeCreateWithoutCharacterInput;
};

export type UserUpdateWithWhereUniqueWithoutFavoriteCharactersInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFavoriteCharactersInput;
};

export type UserUpdateManyWithWhereWithoutFavoriteCharactersInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
};

export type UserUpsertWithWhereUniqueWithoutFavoriteCharactersInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFavoriteCharactersInput;
  create: UserCreateWithoutFavoriteCharactersInput;
};

export type CharacterCreateWithoutEpisodeInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  species: Scalars['String'];
  image: Scalars['String'];
  status?: Maybe<Status>;
  gender?: Maybe<Gender>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Origin?: Maybe<LocationCreateOneWithoutResidentsInput>;
  Location?: Maybe<LocationCreateOneWithoutLastSeensInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteCharactersInput>;
};

export type CharacterCreateOrConnectWithoutEpisodeInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutEpisodeInput;
};

export type UserCreateWithoutFavoriteEpisodesInput = {
  id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
  favoriteCharacters?: Maybe<CharacterCreateManyWithoutFavoritesInput>;
  favoriteLocations?: Maybe<LocationCreateManyWithoutFavoritesInput>;
};

export type UserCreateOrConnectWithoutfavoriteEpisodesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFavoriteEpisodesInput;
};

export type CharacterUpdateWithWhereUniqueWithoutEpisodeInput = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateWithoutEpisodeInput;
};

export type CharacterUpdateManyWithWhereWithoutEpisodeInput = {
  where: CharacterScalarWhereInput;
  data: CharacterUpdateManyMutationInput;
};

export type CharacterScalarWhereInput = {
  AND?: Maybe<Array<CharacterScalarWhereInput>>;
  OR?: Maybe<Array<CharacterScalarWhereInput>>;
  NOT?: Maybe<Array<CharacterScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  species?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  status?: Maybe<EnumStatusFilter>;
  gender?: Maybe<EnumGenderFilter>;
  originId?: Maybe<IntNullableFilter>;
  locationId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
};

export type CharacterUpsertWithWhereUniqueWithoutEpisodeInput = {
  where: CharacterWhereUniqueInput;
  update: CharacterUpdateWithoutEpisodeInput;
  create: CharacterCreateWithoutEpisodeInput;
};

export type UserUpdateWithWhereUniqueWithoutFavoriteEpisodesInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFavoriteEpisodesInput;
};

export type UserUpdateManyWithWhereWithoutFavoriteEpisodesInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpsertWithWhereUniqueWithoutFavoriteEpisodesInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFavoriteEpisodesInput;
  create: UserCreateWithoutFavoriteEpisodesInput;
};

export type CharacterCreateWithoutOriginInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  species: Scalars['String'];
  image: Scalars['String'];
  status?: Maybe<Status>;
  gender?: Maybe<Gender>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Location?: Maybe<LocationCreateOneWithoutLastSeensInput>;
  Episode?: Maybe<EpisodeCreateManyWithoutCharacterInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteCharactersInput>;
};

export type CharacterCreateOrConnectWithoutOriginInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutOriginInput;
};

export type CharacterCreateWithoutLocationInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  species: Scalars['String'];
  image: Scalars['String'];
  status?: Maybe<Status>;
  gender?: Maybe<Gender>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Origin?: Maybe<LocationCreateOneWithoutResidentsInput>;
  Episode?: Maybe<EpisodeCreateManyWithoutCharacterInput>;
  favorites?: Maybe<UserCreateManyWithoutFavoriteCharactersInput>;
};

export type CharacterCreateOrConnectWithoutLocationInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutLocationInput;
};

export type UserCreateWithoutFavoriteLocationsInput = {
  id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
  favoriteCharacters?: Maybe<CharacterCreateManyWithoutFavoritesInput>;
  favoriteEpisodes?: Maybe<EpisodeCreateManyWithoutFavoritesInput>;
};

export type UserCreateOrConnectWithoutfavoriteLocationsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFavoriteLocationsInput;
};

export type CharacterUpdateWithWhereUniqueWithoutOriginInput = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateWithoutOriginInput;
};

export type CharacterUpdateManyWithWhereWithoutOriginInput = {
  where: CharacterScalarWhereInput;
  data: CharacterUpdateManyMutationInput;
};

export type CharacterUpsertWithWhereUniqueWithoutOriginInput = {
  where: CharacterWhereUniqueInput;
  update: CharacterUpdateWithoutOriginInput;
  create: CharacterCreateWithoutOriginInput;
};

export type CharacterUpdateWithWhereUniqueWithoutLocationInput = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateWithoutLocationInput;
};

export type CharacterUpdateManyWithWhereWithoutLocationInput = {
  where: CharacterScalarWhereInput;
  data: CharacterUpdateManyMutationInput;
};

export type CharacterUpsertWithWhereUniqueWithoutLocationInput = {
  where: CharacterWhereUniqueInput;
  update: CharacterUpdateWithoutLocationInput;
  create: CharacterCreateWithoutLocationInput;
};

export type UserUpdateWithWhereUniqueWithoutFavoriteLocationsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFavoriteLocationsInput;
};

export type UserUpdateManyWithWhereWithoutFavoriteLocationsInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpsertWithWhereUniqueWithoutFavoriteLocationsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFavoriteLocationsInput;
  create: UserCreateWithoutFavoriteLocationsInput;
};

export type CharacterCreateWithoutFavoritesInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  species: Scalars['String'];
  image: Scalars['String'];
  status?: Maybe<Status>;
  gender?: Maybe<Gender>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Origin?: Maybe<LocationCreateOneWithoutResidentsInput>;
  Location?: Maybe<LocationCreateOneWithoutLastSeensInput>;
  Episode?: Maybe<EpisodeCreateManyWithoutCharacterInput>;
};

export type CharacterCreateOrConnectWithoutfavoritesInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutFavoritesInput;
};

export type LocationCreateWithoutFavoritesInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  dimension: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  Residents?: Maybe<CharacterCreateManyWithoutOriginInput>;
  LastSeens?: Maybe<CharacterCreateManyWithoutLocationInput>;
};

export type LocationCreateOrConnectWithoutfavoritesInput = {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutFavoritesInput;
};

export type EpisodeCreateWithoutFavoritesInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  episode: Scalars['String'];
  airDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  Character?: Maybe<CharacterCreateManyWithoutEpisodeInput>;
};

export type EpisodeCreateOrConnectWithoutfavoritesInput = {
  where: EpisodeWhereUniqueInput;
  create: EpisodeCreateWithoutFavoritesInput;
};

export type CharacterUpdateWithWhereUniqueWithoutFavoritesInput = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateWithoutFavoritesInput;
};

export type CharacterUpdateManyWithWhereWithoutFavoritesInput = {
  where: CharacterScalarWhereInput;
  data: CharacterUpdateManyMutationInput;
};

export type CharacterUpsertWithWhereUniqueWithoutFavoritesInput = {
  where: CharacterWhereUniqueInput;
  update: CharacterUpdateWithoutFavoritesInput;
  create: CharacterCreateWithoutFavoritesInput;
};

export type LocationUpdateWithWhereUniqueWithoutFavoritesInput = {
  where: LocationWhereUniqueInput;
  data: LocationUpdateWithoutFavoritesInput;
};

export type LocationUpdateManyWithWhereWithoutFavoritesInput = {
  where: LocationScalarWhereInput;
  data: LocationUpdateManyMutationInput;
};

export type LocationScalarWhereInput = {
  AND?: Maybe<Array<LocationScalarWhereInput>>;
  OR?: Maybe<Array<LocationScalarWhereInput>>;
  NOT?: Maybe<Array<LocationScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  dimension?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
};

export type LocationUpsertWithWhereUniqueWithoutFavoritesInput = {
  where: LocationWhereUniqueInput;
  update: LocationUpdateWithoutFavoritesInput;
  create: LocationCreateWithoutFavoritesInput;
};

export type EpisodeUpdateWithWhereUniqueWithoutFavoritesInput = {
  where: EpisodeWhereUniqueInput;
  data: EpisodeUpdateWithoutFavoritesInput;
};

export type EpisodeUpdateManyWithWhereWithoutFavoritesInput = {
  where: EpisodeScalarWhereInput;
  data: EpisodeUpdateManyMutationInput;
};

export type EpisodeUpsertWithWhereUniqueWithoutFavoritesInput = {
  where: EpisodeWhereUniqueInput;
  update: EpisodeUpdateWithoutFavoritesInput;
  create: EpisodeCreateWithoutFavoritesInput;
};

export type EpisodeUpdateWithoutCharacterInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  episode?: Maybe<StringFieldUpdateOperationsInput>;
  airDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteEpisodesInput>;
};

export type EpisodeUpdateManyMutationInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  episode?: Maybe<StringFieldUpdateOperationsInput>;
  airDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type UserUpdateWithoutFavoriteCharactersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  favoriteLocations?: Maybe<LocationUpdateManyWithoutFavoritesInput>;
  favoriteEpisodes?: Maybe<EpisodeUpdateManyWithoutFavoritesInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CharacterUpdateWithoutEpisodeInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  species?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<EnumStatusFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Origin?: Maybe<LocationUpdateOneWithoutResidentsInput>;
  Location?: Maybe<LocationUpdateOneWithoutLastSeensInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteCharactersInput>;
};

export type CharacterUpdateManyMutationInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  species?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<EnumStatusFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type EnumStatusFilter = {
  equals?: Maybe<Status>;
  in?: Maybe<Array<Status>>;
  notIn?: Maybe<Array<Status>>;
  not?: Maybe<NestedEnumStatusFilter>;
};

export type EnumGenderFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  notIn?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type UserUpdateWithoutFavoriteEpisodesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  favoriteCharacters?: Maybe<CharacterUpdateManyWithoutFavoritesInput>;
  favoriteLocations?: Maybe<LocationUpdateManyWithoutFavoritesInput>;
};

export type CharacterUpdateWithoutOriginInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  species?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<EnumStatusFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Location?: Maybe<LocationUpdateOneWithoutLastSeensInput>;
  Episode?: Maybe<EpisodeUpdateManyWithoutCharacterInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteCharactersInput>;
};

export type CharacterUpdateWithoutLocationInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  species?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<EnumStatusFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Origin?: Maybe<LocationUpdateOneWithoutResidentsInput>;
  Episode?: Maybe<EpisodeUpdateManyWithoutCharacterInput>;
  favorites?: Maybe<UserUpdateManyWithoutFavoriteCharactersInput>;
};

export type UserUpdateWithoutFavoriteLocationsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  favoriteCharacters?: Maybe<CharacterUpdateManyWithoutFavoritesInput>;
  favoriteEpisodes?: Maybe<EpisodeUpdateManyWithoutFavoritesInput>;
};

export type CharacterUpdateWithoutFavoritesInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  species?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<EnumStatusFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Origin?: Maybe<LocationUpdateOneWithoutResidentsInput>;
  Location?: Maybe<LocationUpdateOneWithoutLastSeensInput>;
  Episode?: Maybe<EpisodeUpdateManyWithoutCharacterInput>;
};

export type LocationUpdateWithoutFavoritesInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  dimension?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Residents?: Maybe<CharacterUpdateManyWithoutOriginInput>;
  LastSeens?: Maybe<CharacterUpdateManyWithoutLocationInput>;
};

export type LocationUpdateManyMutationInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  dimension?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type EpisodeUpdateWithoutFavoritesInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  episode?: Maybe<StringFieldUpdateOperationsInput>;
  airDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  Character?: Maybe<CharacterUpdateManyWithoutEpisodeInput>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedEnumStatusFilter = {
  equals?: Maybe<Status>;
  in?: Maybe<Array<Status>>;
  notIn?: Maybe<Array<Status>>;
  not?: Maybe<NestedEnumStatusFilter>;
};

export type NestedEnumGenderFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  notIn?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type Query = {
  __typename?: 'Query';
  characters: Array<Character>;
  character?: Maybe<Character>;
  episodes: Array<Episode>;
  episode?: Maybe<Episode>;
  locations: Array<Location>;
  location?: Maybe<Location>;
  user?: Maybe<User>;
  users: Array<User>;
  currentUser?: Maybe<User>;
};


export type QueryCharactersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterWhereUniqueInput>;
  after?: Maybe<CharacterWhereUniqueInput>;
};


export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type QueryEpisodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EpisodeWhereUniqueInput>;
  after?: Maybe<EpisodeWhereUniqueInput>;
};


export type QueryEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
};


export type QueryLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<LocationWhereUniqueInput>;
  after?: Maybe<LocationWhereUniqueInput>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCharacter: Character;
  updateOneCharacter?: Maybe<Character>;
  deleteOneCharacter?: Maybe<Character>;
  upsertOneCharacter: Character;
  createOneEpisode: Episode;
  updateOneEpisode?: Maybe<Episode>;
  deleteOneEpisode?: Maybe<Episode>;
  upsertOneEpisode: Episode;
  createOneLocation: Location;
  updateOneLocation?: Maybe<Location>;
  upsertOneLocation: Location;
  deleteOneLocation?: Maybe<Location>;
  createOneUser: User;
  deleteOneUser?: Maybe<User>;
  updateOneUser?: Maybe<User>;
  upsertOneUser: User;
  addFavoriteCharacter?: Maybe<User>;
  addFavoriteEpisode?: Maybe<User>;
  addFavoriteLocation?: Maybe<User>;
  removeFavoriteCharacter?: Maybe<User>;
  removeFavoriteEpisode?: Maybe<User>;
  removeFavoriteLocation?: Maybe<User>;
  register?: Maybe<AuthenticationType>;
  login?: Maybe<AuthenticationType>;
};


export type MutationCreateOneCharacterArgs = {
  data: CharacterCreateInput;
};


export type MutationUpdateOneCharacterArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};


export type MutationDeleteOneCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type MutationUpsertOneCharacterArgs = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateInput;
  update: CharacterUpdateInput;
};


export type MutationCreateOneEpisodeArgs = {
  data: EpisodeCreateInput;
};


export type MutationUpdateOneEpisodeArgs = {
  data: EpisodeUpdateInput;
  where: EpisodeWhereUniqueInput;
};


export type MutationDeleteOneEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
};


export type MutationUpsertOneEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
  create: EpisodeCreateInput;
  update: EpisodeUpdateInput;
};


export type MutationCreateOneLocationArgs = {
  data: LocationCreateInput;
};


export type MutationUpdateOneLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpsertOneLocationArgs = {
  where: LocationWhereUniqueInput;
  create: LocationCreateInput;
  update: LocationUpdateInput;
};


export type MutationDeleteOneLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationAddFavoriteCharacterArgs = {
  characterId: Scalars['Int'];
};


export type MutationAddFavoriteEpisodeArgs = {
  episodeId: Scalars['Int'];
};


export type MutationAddFavoriteLocationArgs = {
  locationId: Scalars['Int'];
};


export type MutationRemoveFavoriteCharacterArgs = {
  characterId: Scalars['Int'];
};


export type MutationRemoveFavoriteEpisodeArgs = {
  episodeId: Scalars['Int'];
};


export type MutationRemoveFavoriteLocationArgs = {
  locationId: Scalars['Int'];
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type GetCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = (
  { __typename?: 'Query' }
  & { characters: Array<(
    { __typename?: 'Character' }
    & Pick<Character, 'id' | 'name'>
  )> }
);

export type GetCharacterQueryVariables = Exact<{
  characterWhere: CharacterWhereUniqueInput;
}>;


export type GetCharacterQuery = (
  { __typename?: 'Query' }
  & { character?: Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, 'id' | 'name' | 'image'>
  )> }
);

export type AddFavoriteCharacterMutationVariables = Exact<{
  addFavoriteCharacterCharacterId: Scalars['Int'];
}>;


export type AddFavoriteCharacterMutation = (
  { __typename?: 'Mutation' }
  & { addFavoriteCharacter?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type RemoveFavoriteCharacterMutationVariables = Exact<{
  removeFavoriteCharacterCharacterId: Scalars['Int'];
}>;


export type RemoveFavoriteCharacterMutation = (
  { __typename?: 'Mutation' }
  & { removeFavoriteCharacter?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type GetEpisodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEpisodesQuery = (
  { __typename?: 'Query' }
  & { episodes: Array<(
    { __typename?: 'Episode' }
    & Pick<Episode, 'id' | 'name'>
  )> }
);

export type GetEpisodeQueryVariables = Exact<{
  episodeWhere: EpisodeWhereUniqueInput;
}>;


export type GetEpisodeQuery = (
  { __typename?: 'Query' }
  & { episode?: Maybe<(
    { __typename?: 'Episode' }
    & Pick<Episode, 'id' | 'name'>
  )> }
);

export type AddFavoriteEpisodeMutationVariables = Exact<{
  addFavoriteEpisodeEpisodeId: Scalars['Int'];
}>;


export type AddFavoriteEpisodeMutation = (
  { __typename?: 'Mutation' }
  & { addFavoriteEpisode?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type RemoveFavoriteEpisodeMutationVariables = Exact<{
  removeFavoriteEpisodeEpisodeId: Scalars['Int'];
}>;


export type RemoveFavoriteEpisodeMutation = (
  { __typename?: 'Mutation' }
  & { removeFavoriteEpisode?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & { locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )> }
);

export type GetLocationQueryVariables = Exact<{
  locationWhere: LocationWhereUniqueInput;
}>;


export type GetLocationQuery = (
  { __typename?: 'Query' }
  & { location?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )> }
);

export type AddFavoriteLocationMutationVariables = Exact<{
  addFavoriteLocationLocationId: Scalars['Int'];
}>;


export type AddFavoriteLocationMutation = (
  { __typename?: 'Mutation' }
  & { addFavoriteLocation?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type RemoveFavoriteLocationMutationVariables = Exact<{
  removeFavoriteLocationLocationId: Scalars['Int'];
}>;


export type RemoveFavoriteLocationMutation = (
  { __typename?: 'Mutation' }
  & { removeFavoriteLocation?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);


export const GetCharactersDocument = gql`
    query GetCharacters {
  characters {
    id
    name
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, baseOptions);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, baseOptions);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetCharacterDocument = gql`
    query GetCharacter($characterWhere: CharacterWhereUniqueInput!) {
  character(where: $characterWhere) {
    id
    name
    image
  }
}
    `;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      characterWhere: // value for 'characterWhere'
 *   },
 * });
 */
export function useGetCharacterQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
        return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, baseOptions);
      }
export function useGetCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterQuery, GetCharacterQueryVariables>) {
          return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(GetCharacterDocument, baseOptions);
        }
export type GetCharacterQueryHookResult = ReturnType<typeof useGetCharacterQuery>;
export type GetCharacterLazyQueryHookResult = ReturnType<typeof useGetCharacterLazyQuery>;
export type GetCharacterQueryResult = Apollo.QueryResult<GetCharacterQuery, GetCharacterQueryVariables>;
export const AddFavoriteCharacterDocument = gql`
    mutation AddFavoriteCharacter($addFavoriteCharacterCharacterId: Int!) {
  addFavoriteCharacter(characterId: $addFavoriteCharacterCharacterId) {
    id
  }
}
    `;
export type AddFavoriteCharacterMutationFn = Apollo.MutationFunction<AddFavoriteCharacterMutation, AddFavoriteCharacterMutationVariables>;

/**
 * __useAddFavoriteCharacterMutation__
 *
 * To run a mutation, you first call `useAddFavoriteCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteCharacterMutation, { data, loading, error }] = useAddFavoriteCharacterMutation({
 *   variables: {
 *      addFavoriteCharacterCharacterId: // value for 'addFavoriteCharacterCharacterId'
 *   },
 * });
 */
export function useAddFavoriteCharacterMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteCharacterMutation, AddFavoriteCharacterMutationVariables>) {
        return Apollo.useMutation<AddFavoriteCharacterMutation, AddFavoriteCharacterMutationVariables>(AddFavoriteCharacterDocument, baseOptions);
      }
export type AddFavoriteCharacterMutationHookResult = ReturnType<typeof useAddFavoriteCharacterMutation>;
export type AddFavoriteCharacterMutationResult = Apollo.MutationResult<AddFavoriteCharacterMutation>;
export type AddFavoriteCharacterMutationOptions = Apollo.BaseMutationOptions<AddFavoriteCharacterMutation, AddFavoriteCharacterMutationVariables>;
export const RemoveFavoriteCharacterDocument = gql`
    mutation RemoveFavoriteCharacter($removeFavoriteCharacterCharacterId: Int!) {
  removeFavoriteCharacter(characterId: $removeFavoriteCharacterCharacterId) {
    id
  }
}
    `;
export type RemoveFavoriteCharacterMutationFn = Apollo.MutationFunction<RemoveFavoriteCharacterMutation, RemoveFavoriteCharacterMutationVariables>;

/**
 * __useRemoveFavoriteCharacterMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteCharacterMutation, { data, loading, error }] = useRemoveFavoriteCharacterMutation({
 *   variables: {
 *      removeFavoriteCharacterCharacterId: // value for 'removeFavoriteCharacterCharacterId'
 *   },
 * });
 */
export function useRemoveFavoriteCharacterMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteCharacterMutation, RemoveFavoriteCharacterMutationVariables>) {
        return Apollo.useMutation<RemoveFavoriteCharacterMutation, RemoveFavoriteCharacterMutationVariables>(RemoveFavoriteCharacterDocument, baseOptions);
      }
export type RemoveFavoriteCharacterMutationHookResult = ReturnType<typeof useRemoveFavoriteCharacterMutation>;
export type RemoveFavoriteCharacterMutationResult = Apollo.MutationResult<RemoveFavoriteCharacterMutation>;
export type RemoveFavoriteCharacterMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteCharacterMutation, RemoveFavoriteCharacterMutationVariables>;
export const GetEpisodesDocument = gql`
    query GetEpisodes {
  episodes {
    id
    name
  }
}
    `;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
        return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, baseOptions);
      }
export function useGetEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
          return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, baseOptions);
        }
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = Apollo.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetEpisodeDocument = gql`
    query GetEpisode($episodeWhere: EpisodeWhereUniqueInput!) {
  episode(where: $episodeWhere) {
    id
    name
  }
}
    `;

/**
 * __useGetEpisodeQuery__
 *
 * To run a query within a React component, call `useGetEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeQuery({
 *   variables: {
 *      episodeWhere: // value for 'episodeWhere'
 *   },
 * });
 */
export function useGetEpisodeQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
        return Apollo.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, baseOptions);
      }
export function useGetEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
          return Apollo.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, baseOptions);
        }
export type GetEpisodeQueryHookResult = ReturnType<typeof useGetEpisodeQuery>;
export type GetEpisodeLazyQueryHookResult = ReturnType<typeof useGetEpisodeLazyQuery>;
export type GetEpisodeQueryResult = Apollo.QueryResult<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const AddFavoriteEpisodeDocument = gql`
    mutation AddFavoriteEpisode($addFavoriteEpisodeEpisodeId: Int!) {
  addFavoriteEpisode(episodeId: $addFavoriteEpisodeEpisodeId) {
    id
  }
}
    `;
export type AddFavoriteEpisodeMutationFn = Apollo.MutationFunction<AddFavoriteEpisodeMutation, AddFavoriteEpisodeMutationVariables>;

/**
 * __useAddFavoriteEpisodeMutation__
 *
 * To run a mutation, you first call `useAddFavoriteEpisodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteEpisodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteEpisodeMutation, { data, loading, error }] = useAddFavoriteEpisodeMutation({
 *   variables: {
 *      addFavoriteEpisodeEpisodeId: // value for 'addFavoriteEpisodeEpisodeId'
 *   },
 * });
 */
export function useAddFavoriteEpisodeMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteEpisodeMutation, AddFavoriteEpisodeMutationVariables>) {
        return Apollo.useMutation<AddFavoriteEpisodeMutation, AddFavoriteEpisodeMutationVariables>(AddFavoriteEpisodeDocument, baseOptions);
      }
export type AddFavoriteEpisodeMutationHookResult = ReturnType<typeof useAddFavoriteEpisodeMutation>;
export type AddFavoriteEpisodeMutationResult = Apollo.MutationResult<AddFavoriteEpisodeMutation>;
export type AddFavoriteEpisodeMutationOptions = Apollo.BaseMutationOptions<AddFavoriteEpisodeMutation, AddFavoriteEpisodeMutationVariables>;
export const RemoveFavoriteEpisodeDocument = gql`
    mutation RemoveFavoriteEpisode($removeFavoriteEpisodeEpisodeId: Int!) {
  removeFavoriteEpisode(episodeId: $removeFavoriteEpisodeEpisodeId) {
    id
  }
}
    `;
export type RemoveFavoriteEpisodeMutationFn = Apollo.MutationFunction<RemoveFavoriteEpisodeMutation, RemoveFavoriteEpisodeMutationVariables>;

/**
 * __useRemoveFavoriteEpisodeMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteEpisodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteEpisodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteEpisodeMutation, { data, loading, error }] = useRemoveFavoriteEpisodeMutation({
 *   variables: {
 *      removeFavoriteEpisodeEpisodeId: // value for 'removeFavoriteEpisodeEpisodeId'
 *   },
 * });
 */
export function useRemoveFavoriteEpisodeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteEpisodeMutation, RemoveFavoriteEpisodeMutationVariables>) {
        return Apollo.useMutation<RemoveFavoriteEpisodeMutation, RemoveFavoriteEpisodeMutationVariables>(RemoveFavoriteEpisodeDocument, baseOptions);
      }
export type RemoveFavoriteEpisodeMutationHookResult = ReturnType<typeof useRemoveFavoriteEpisodeMutation>;
export type RemoveFavoriteEpisodeMutationResult = Apollo.MutationResult<RemoveFavoriteEpisodeMutation>;
export type RemoveFavoriteEpisodeMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteEpisodeMutation, RemoveFavoriteEpisodeMutationVariables>;
export const GetLocationsDocument = gql`
    query GetLocations {
  locations {
    id
    name
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, baseOptions);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, baseOptions);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetLocationDocument = gql`
    query GetLocation($locationWhere: LocationWhereUniqueInput!) {
  location(where: $locationWhere) {
    id
    name
  }
}
    `;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      locationWhere: // value for 'locationWhere'
 *   },
 * });
 */
export function useGetLocationQuery(baseOptions: Apollo.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
        return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, baseOptions);
      }
export function useGetLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
          return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, baseOptions);
        }
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<typeof useGetLocationLazyQuery>;
export type GetLocationQueryResult = Apollo.QueryResult<GetLocationQuery, GetLocationQueryVariables>;
export const AddFavoriteLocationDocument = gql`
    mutation AddFavoriteLocation($addFavoriteLocationLocationId: Int!) {
  addFavoriteLocation(locationId: $addFavoriteLocationLocationId) {
    id
  }
}
    `;
export type AddFavoriteLocationMutationFn = Apollo.MutationFunction<AddFavoriteLocationMutation, AddFavoriteLocationMutationVariables>;

/**
 * __useAddFavoriteLocationMutation__
 *
 * To run a mutation, you first call `useAddFavoriteLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteLocationMutation, { data, loading, error }] = useAddFavoriteLocationMutation({
 *   variables: {
 *      addFavoriteLocationLocationId: // value for 'addFavoriteLocationLocationId'
 *   },
 * });
 */
export function useAddFavoriteLocationMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteLocationMutation, AddFavoriteLocationMutationVariables>) {
        return Apollo.useMutation<AddFavoriteLocationMutation, AddFavoriteLocationMutationVariables>(AddFavoriteLocationDocument, baseOptions);
      }
export type AddFavoriteLocationMutationHookResult = ReturnType<typeof useAddFavoriteLocationMutation>;
export type AddFavoriteLocationMutationResult = Apollo.MutationResult<AddFavoriteLocationMutation>;
export type AddFavoriteLocationMutationOptions = Apollo.BaseMutationOptions<AddFavoriteLocationMutation, AddFavoriteLocationMutationVariables>;
export const RemoveFavoriteLocationDocument = gql`
    mutation RemoveFavoriteLocation($removeFavoriteLocationLocationId: Int!) {
  removeFavoriteLocation(locationId: $removeFavoriteLocationLocationId) {
    id
  }
}
    `;
export type RemoveFavoriteLocationMutationFn = Apollo.MutationFunction<RemoveFavoriteLocationMutation, RemoveFavoriteLocationMutationVariables>;

/**
 * __useRemoveFavoriteLocationMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteLocationMutation, { data, loading, error }] = useRemoveFavoriteLocationMutation({
 *   variables: {
 *      removeFavoriteLocationLocationId: // value for 'removeFavoriteLocationLocationId'
 *   },
 * });
 */
export function useRemoveFavoriteLocationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteLocationMutation, RemoveFavoriteLocationMutationVariables>) {
        return Apollo.useMutation<RemoveFavoriteLocationMutation, RemoveFavoriteLocationMutationVariables>(RemoveFavoriteLocationDocument, baseOptions);
      }
export type RemoveFavoriteLocationMutationHookResult = ReturnType<typeof useRemoveFavoriteLocationMutation>;
export type RemoveFavoriteLocationMutationResult = Apollo.MutationResult<RemoveFavoriteLocationMutation>;
export type RemoveFavoriteLocationMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteLocationMutation, RemoveFavoriteLocationMutationVariables>;