import {
  ResourceType,
  ResourceTypeArray,
  BaseApiType
} from './Enums';
import {
  GGMNLocationResponse,
  GGMNTimeseriesResponse,
  GGMNSearchResponse,
  GGMNSearchEntity,
  GGMNUsersResponse,
  GGMNUser,
  GGMNGroundwaterStationResponse,
  GGMNSaveReadingResponse,
  GGMNReadingData,
  GGMNGroundwaterStation,
  GGMNFilterResponse,
  GGMNResponseTimeseries,
  GGMNTimeseriesEvent,
  GGMNLocation,
  GGMNGeometry,
  GGMNOrganisation,
  GGMNOrganisationResponse,
  KeychainLoginDetails,
} from './GGMN';
import { GeoPoint } from './GeoPoint';
import {OrgType} from './OrgType';
import { PendingReading } from './PendingReading';
import { PendingResource } from './PendingResource';
import { PendingTimeseries } from './PendingTimeseries';
import { AnyReading, MyWellReading, GGMNReading } from './Reading';
import {
  MaybeReadingImage,
  ReadingImageType,
  ReadingImage,
  NoReadingImage,
} from './ReadingImage';
import {
  MaybeReadingLocation,
  ReadingLocationType,
  ReadingLocation,
  NoReadingLocation,
} from './ReadingLocation';
import { AnyResource, MyWellResource, GGMNResource }from './Resource';
import { ResourceOwnerType } from './ResourceOwnerType';
import { ShortId } from './ShortId';
import { AnyTimeseries, MyWellTimeseries, GGMNTimeseries } from './Timeseries';


export {
  ResourceType,
  ResourceTypeArray,
  BaseApiType,
  GGMNLocationResponse,
  GGMNTimeseriesResponse,
  GGMNSearchResponse,
  GGMNSearchEntity,
  GGMNUsersResponse,
  GGMNUser,
  GGMNGroundwaterStationResponse,
  GGMNSaveReadingResponse,
  GGMNReadingData,
  GGMNGroundwaterStation,
  GGMNFilterResponse,
  GGMNResponseTimeseries,
  GGMNTimeseriesEvent,
  GGMNLocation,
  GGMNGeometry,
  GGMNOrganisation,
  GGMNOrganisationResponse,
  KeychainLoginDetails,
  GeoPoint,
  OrgType,
  PendingReading,
  PendingResource,
  PendingTimeseries,
  AnyReading, 
  MyWellReading, 
  GGMNReading,
  MaybeReadingImage,
  ReadingImageType,
  ReadingImage,
  NoReadingImage,
  MaybeReadingLocation,
  ReadingLocationType,
  ReadingLocation,
  NoReadingLocation,
  AnyResource, 
  MyWellResource, 
  GGMNResource,
  ResourceOwnerType,
  ShortId,
  AnyTimeseries,
  MyWellTimeseries,
  GGMNTimeseries,
}