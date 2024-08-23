// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Metadata } from '../wk2/metadata.js';
import { WeatherAlertSummary } from '../wk2/weather-alert-summary.js';


export class WeatherAlertCollectionData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):WeatherAlertCollectionData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsWeatherAlertCollectionData(bb:flatbuffers.ByteBuffer, obj?:WeatherAlertCollectionData):WeatherAlertCollectionData {
  return (obj || new WeatherAlertCollectionData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsWeatherAlertCollectionData(bb:flatbuffers.ByteBuffer, obj?:WeatherAlertCollectionData):WeatherAlertCollectionData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new WeatherAlertCollectionData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

metadata(obj?:Metadata):Metadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Metadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

detailsUrl():string|null
detailsUrl(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
detailsUrl(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

alerts(index: number, obj?:WeatherAlertSummary):WeatherAlertSummary|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new WeatherAlertSummary()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

alertsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startWeatherAlertCollectionData(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, metadataOffset, 0);
}

static addDetailsUrl(builder:flatbuffers.Builder, detailsUrlOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, detailsUrlOffset, 0);
}

static addAlerts(builder:flatbuffers.Builder, alertsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, alertsOffset, 0);
}

static createAlertsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startAlertsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endWeatherAlertCollectionData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createWeatherAlertCollectionData(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset, detailsUrlOffset:flatbuffers.Offset, alertsOffset:flatbuffers.Offset):flatbuffers.Offset {
  WeatherAlertCollectionData.startWeatherAlertCollectionData(builder);
  WeatherAlertCollectionData.addMetadata(builder, metadataOffset);
  WeatherAlertCollectionData.addDetailsUrl(builder, detailsUrlOffset);
  WeatherAlertCollectionData.addAlerts(builder, alertsOffset);
  return WeatherAlertCollectionData.endWeatherAlertCollectionData(builder);
}
}
