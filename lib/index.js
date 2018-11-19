"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PendingReading", {
  enumerable: true,
  get: function get() {
    return _PendingReading.PendingReading;
  }
});
Object.defineProperty(exports, "PendingResource", {
  enumerable: true,
  get: function get() {
    return _PendingResource.PendingResource;
  }
});
exports.Timeseries = exports.ShortId = exports.ResourceOwnerType = exports.Resource = exports.ReadingLocation = exports.ReadingImage = exports.Reading = exports.PendingTimeseries = exports.OrgType = exports.GeoPoint = exports.GGMN = exports.Enums = void 0;

var Enums = _interopRequireWildcard(require("./Enums"));

exports.Enums = Enums;

var GGMN = _interopRequireWildcard(require("./GGMN"));

exports.GGMN = GGMN;

var GeoPoint = _interopRequireWildcard(require("./GeoPoint"));

exports.GeoPoint = GeoPoint;

var OrgType = _interopRequireWildcard(require("./OrgType"));

exports.OrgType = OrgType;

var _PendingReading = require("./PendingReading");

var _PendingResource = require("./PendingResource");

var PendingTimeseries = _interopRequireWildcard(require("./PendingTimeseries"));

exports.PendingTimeseries = PendingTimeseries;

var Reading = _interopRequireWildcard(require("./Reading"));

exports.Reading = Reading;

var ReadingImage = _interopRequireWildcard(require("./ReadingImage"));

exports.ReadingImage = ReadingImage;

var ReadingLocation = _interopRequireWildcard(require("./ReadingLocation"));

exports.ReadingLocation = ReadingLocation;

var Resource = _interopRequireWildcard(require("./Resource"));

exports.Resource = Resource;

var ResourceOwnerType = _interopRequireWildcard(require("./ResourceOwnerType"));

exports.ResourceOwnerType = ResourceOwnerType;

var ShortId = _interopRequireWildcard(require("./ShortId"));

exports.ShortId = ShortId;

var Timeseries = _interopRequireWildcard(require("./Timeseries"));

exports.Timeseries = Timeseries;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRW51bXMgZnJvbSAnLi9FbnVtcyc7XG5pbXBvcnQgKiBhcyBHR01OIGZyb20gJy4vR0dNTic7XG5pbXBvcnQgKiBhcyBHZW9Qb2ludCBmcm9tICcuL0dlb1BvaW50JztcbmltcG9ydCAqIGFzIE9yZ1R5cGUgZnJvbSAnLi9PcmdUeXBlJztcbmltcG9ydCB7IFBlbmRpbmdSZWFkaW5nIH0gZnJvbSAnLi9QZW5kaW5nUmVhZGluZyc7XG5pbXBvcnQge1BlbmRpbmdSZXNvdXJjZX0gZnJvbSAnLi9QZW5kaW5nUmVzb3VyY2UnO1xuaW1wb3J0ICogYXMgUGVuZGluZ1RpbWVzZXJpZXMgZnJvbSAnLi9QZW5kaW5nVGltZXNlcmllcyc7XG5pbXBvcnQgKiBhcyBSZWFkaW5nIGZyb20gJy4vUmVhZGluZyc7XG5pbXBvcnQgKiBhcyBSZWFkaW5nSW1hZ2UgZnJvbSAnLi9SZWFkaW5nSW1hZ2UnO1xuaW1wb3J0ICogYXMgUmVhZGluZ0xvY2F0aW9uIGZyb20gJy4vUmVhZGluZ0xvY2F0aW9uJztcbmltcG9ydCAqIGFzIFJlc291cmNlIGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0ICogYXMgUmVzb3VyY2VPd25lclR5cGUgZnJvbSAnLi9SZXNvdXJjZU93bmVyVHlwZSc7XG5pbXBvcnQgKiBhcyBTaG9ydElkIGZyb20gJy4vU2hvcnRJZCc7XG5pbXBvcnQgKiBhcyBUaW1lc2VyaWVzIGZyb20gJy4vVGltZXNlcmllcyc7XG5cblxuZXhwb3J0IHtcbiAgRW51bXMsXG4gIEdHTU4sXG4gIEdlb1BvaW50LFxuICBPcmdUeXBlLFxuICBQZW5kaW5nUmVhZGluZyxcbiAgUGVuZGluZ1Jlc291cmNlLFxuICBQZW5kaW5nVGltZXNlcmllcyxcbiAgUmVhZGluZyxcbiAgUmVhZGluZ0ltYWdlLFxuICBSZWFkaW5nTG9jYXRpb24sXG4gIFJlc291cmNlLFxuICBSZXNvdXJjZU93bmVyVHlwZSxcbiAgU2hvcnRJZCxcbiAgVGltZXNlcmllcyxcbn0iXX0=