export interface Url {
  type: String,
  url: String
}

export interface Image {
  path: String,
  extension: String
}

export interface ComicSummary {
  resourceURI: String,
  name: String
}

export interface ComicList {
  available: Number,
  returned: Number,
  collectionURI: String,
  items: ComicSummary[]
}

export interface StorySummary {
  resourceURI: String,
  name: String,
  type: String
}

export interface StoryList {
  available: Number
  returned: Number
  collectionURI: String
  items: StorySummary[]
}

export interface EventSummary {
  resourceURI: String,
  name: String
}

export interface EventList {
  available: Number,
  returned: Number,
  collectionURI: String,
  items: EventSummary[]
}

export interface SeriesSummary {
  resourceURI: String,
  name: String
}

export interface SeriesList {
  available: Number
  returned: Number,
  collectionURI: String,
  items: SeriesSummary[]
}

export interface ICharacter {
  id: Number,
  name: String,
  description: String,
  modified: Date,
  resourceURI: string,
  urls: Url[],
  thumbnail: Image,
  comics: ComicList,
  stories: StoryList
  events: EventList,
  series: SeriesList
}
