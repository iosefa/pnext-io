const $protobuf = require('protobufjs/minimal')
const THREE = require('three')

// Common aliases
const $Reader = $protobuf.Reader
const $Writer = $protobuf.Writer
const $util = $protobuf.util

// Exported root namespace
const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

module.exports = $root

$root.Box3 = (() => {
  /**
     * Constructs a new Box.
     * @exports Box3
     * @classdesc Represents a Box.
     * @constructor
     * @param {Box3=} [properties] Properties to set
     */
  function Box3 (properties) {
    let min
    let max
    if (properties) {
      min = properties.min
      max = properties.max
    }
    this.min = $root.Vector3.fromObject(min || { x: Infinity, y: Infinity, z: Infinity })
    this.max = $root.Vector3.fromObject(max || { x: -Infinity, y: -Infinity, z: -Infinity })
  }

  Box3.prototype = Object.create(THREE.Box3.prototype)

  /**
     * Box min.
     * @member {Vector3} min
     * @memberof Box3
     * @instance
     */
  Box3.prototype.min = null

  /**
     * Box max.
     * @member {Vector3} max
     * @memberof Box3
     * @instance
     */
  Box3.prototype.max = null

  /**
     * Creates a new Box instance using the specified properties.
     * @function create
     * @memberof Box3
     * @static
     * @param {Box=} [properties] Properties to set
     * @returns {Box3} Box instance
     */
  Box3.create = function create (properties) {
    return new Box3(properties)
  }

  /**
     * Encodes the specified Box message. Does not implicitly {@link Box3.verify|verify} messages.
     * @function encode
     * @memberof Box3
     * @static
     * @param {Box} message Box message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Box3.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    $root.Vector3.encode(message.min, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim()
    $root.Vector3.encode(message.max, writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim()
    return writer
  }

  /**
     * Encodes the specified Box message, length delimited. Does not implicitly {@link Box3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Box3
     * @static
     * @param {Box} message Box message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Box3.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Box message from the specified reader or buffer.
     * @function decode
     * @memberof Box3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Box3} Box
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Box3.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Box()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.min = $root.Vector3.decode(reader, reader.uint32())
          break
        case 2:
          message.max = $root.Vector3.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('min')) { throw $util.ProtocolError("missing required 'min'", { instance: message }) }
    if (!message.hasOwnProperty('max')) { throw $util.ProtocolError("missing required 'max'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Box message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Box3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Box3} Box
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Box3.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Box message.
     * @function verify
     * @memberof Box3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Box3.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    let error = $root.Vector3.verify(message.min)
    if (error) { return 'min.' + error }
    let error2 = $root.Vector3.verify(message.max)
    if (error2) { return 'max.' + error }
    return null
  }

  /**
     * Creates a Box message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Box3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Box3} Box
     */
  Box3.fromObject = function fromObject (object) {
    if (object instanceof $root.Box) { return object }
    let message = new $root.Box()
    if (object.min != null) {
      if (typeof object.min !== 'object') { throw TypeError('.Box3.min: object expected') }
      message.min = $root.Vector3.fromObject(object.min)
    }
    if (object.max != null) {
      if (typeof object.max !== 'object') { throw TypeError('.Box3.max: object expected') }
      message.max = $root.Vector3.fromObject(object.max)
    }
    return message
  }

  /**
     * Creates a plain object from a Box message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Box3
     * @static
     * @param {Box} message Box
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Box3.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.min = null
      object.max = null
    }
    if (message.min != null && message.hasOwnProperty('min')) { object.min = $root.Vector3.toObject(message.min, options) }
    if (message.max != null && message.hasOwnProperty('max')) { object.max = $root.Vector3.toObject(message.max, options) }
    return object
  }

  /**
     * Converts this Box to JSON.
     * @function toJSON
     * @memberof Box3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Box3.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Box3
})()

$root.DensityRange = (() => {
  /**
     * Properties of a DensityRange.
     * @exports IDensityRange
     * @interface IDensityRange
     * @property {number|null} [min] DensityRange min
     * @property {number} max DensityRange max
     */

  /**
     * Constructs a new DensityRange.
     * @exports DensityRange
     * @classdesc Represents a DensityRange.
     * @implements IDensityRange
     * @constructor
     * @param {IDensityRange=} [properties] Properties to set
     */
  function DensityRange (properties) {
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * DensityRange min.
     * @member {number} min
     * @memberof DensityRange
     * @instance
     */
  DensityRange.prototype.min = 0

  /**
     * DensityRange max.
     * @member {number} max
     * @memberof DensityRange
     * @instance
     */
  DensityRange.prototype.max = 0

  /**
     * Creates a new DensityRange instance using the specified properties.
     * @function create
     * @memberof DensityRange
     * @static
     * @param {IDensityRange=} [properties] Properties to set
     * @returns {DensityRange} DensityRange instance
     */
  DensityRange.create = function create (properties) {
    return new DensityRange(properties)
  }

  /**
     * Encodes the specified DensityRange message. Does not implicitly {@link DensityRange.verify|verify} messages.
     * @function encode
     * @memberof DensityRange
     * @static
     * @param {IDensityRange} message DensityRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  DensityRange.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.min != null && message.hasOwnProperty('min')) { writer.uint32(/* id 1, wireType 5 = */13).float(message.min) }
    writer.uint32(/* id 2, wireType 5 = */21).float(message.max)
    return writer
  }

  /**
     * Encodes the specified DensityRange message, length delimited. Does not implicitly {@link DensityRange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DensityRange
     * @static
     * @param {IDensityRange} message DensityRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  DensityRange.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a DensityRange message from the specified reader or buffer.
     * @function decode
     * @memberof DensityRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DensityRange} DensityRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  DensityRange.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.DensityRange()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.min = reader.float()
          break
        case 2:
          message.max = reader.float()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('max')) { throw $util.ProtocolError("missing required 'max'", { instance: message }) }
    return message
  }

  /**
     * Decodes a DensityRange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DensityRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DensityRange} DensityRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  DensityRange.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a DensityRange message.
     * @function verify
     * @memberof DensityRange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  DensityRange.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.min != null && message.hasOwnProperty('min')) {
      if (typeof message.min !== 'number') { return 'min: number expected' }
    }
    if (typeof message.max !== 'number') { return 'max: number expected' }
    return null
  }

  /**
     * Creates a DensityRange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DensityRange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DensityRange} DensityRange
     */
  DensityRange.fromObject = function fromObject (object) {
    if (object instanceof $root.DensityRange) { return object }
    let message = new $root.DensityRange()
    if (object.min != null) { message.min = Number(object.min) }
    if (object.max != null) { message.max = Number(object.max) }
    return message
  }

  /**
     * Creates a plain object from a DensityRange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DensityRange
     * @static
     * @param {DensityRange} message DensityRange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  DensityRange.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.min = 0
      object.max = 0
    }
    if (message.min != null && message.hasOwnProperty('min')) { object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min }
    if (message.max != null && message.hasOwnProperty('max')) { object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max }
    return object
  }

  /**
     * Converts this DensityRange to JSON.
     * @function toJSON
     * @memberof DensityRange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  DensityRange.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return DensityRange
})()

$root.Feature = (() => {
  /**
     * Properties of a Feature.
     * @exports IFeature
     * @interface IFeature
     * @property {string} type Feature type
     * @property {number} byteCount Feature byteCount
     */

  /**
     * Constructs a new Feature.
     * @exports Feature
     * @classdesc Represents a Feature.
     * @implements IFeature
     * @constructor
     * @param {IFeature=} [properties] Properties to set
     */
  function Feature (properties) {
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * Feature type.
     * @member {string} type
     * @memberof Feature
     * @instance
     */
  Feature.prototype.type = ''

  /**
     * Feature byteCount.
     * @member {number} byteCount
     * @memberof Feature
     * @instance
     */
  Feature.prototype.byteCount = 0

  /**
     * Creates a new Feature instance using the specified properties.
     * @function create
     * @memberof Feature
     * @static
     * @param {IFeature=} [properties] Properties to set
     * @returns {Feature} Feature instance
     */
  Feature.create = function create (properties) {
    return new Feature(properties)
  }

  /**
     * Encodes the specified Feature message. Does not implicitly {@link Feature.verify|verify} messages.
     * @function encode
     * @memberof Feature
     * @static
     * @param {IFeature} message Feature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Feature.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    writer.uint32(/* id 1, wireType 2 = */10).string(message.type)
    writer.uint32(/* id 2, wireType 0 = */16).int32(message.byteCount)
    return writer
  }

  /**
     * Encodes the specified Feature message, length delimited. Does not implicitly {@link Feature.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Feature
     * @static
     * @param {IFeature} message Feature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Feature.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Feature message from the specified reader or buffer.
     * @function decode
     * @memberof Feature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Feature} Feature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Feature.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Feature()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string()
          break
        case 2:
          message.byteCount = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('type')) { throw $util.ProtocolError("missing required 'type'", { instance: message }) }
    if (!message.hasOwnProperty('byteCount')) { throw $util.ProtocolError("missing required 'byteCount'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Feature message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Feature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Feature} Feature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Feature.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Feature message.
     * @function verify
     * @memberof Feature
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Feature.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (!$util.isString(message.type)) { return 'type: string expected' }
    if (!$util.isInteger(message.byteCount)) { return 'byteCount: integer expected' }
    return null
  }

  /**
     * Creates a Feature message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Feature
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Feature} Feature
     */
  Feature.fromObject = function fromObject (object) {
    if (object instanceof $root.Feature) { return object }
    let message = new $root.Feature()
    if (object.type != null) { message.type = String(object.type) }
    if (object.byteCount != null) { message.byteCount = object.byteCount | 0 }
    return message
  }

  /**
     * Creates a plain object from a Feature message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Feature
     * @static
     * @param {Feature} message Feature
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Feature.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.type = ''
      object.byteCount = 0
    }
    if (message.type != null && message.hasOwnProperty('type')) { object.type = message.type }
    if (message.byteCount != null && message.hasOwnProperty('byteCount')) { object.byteCount = message.byteCount }
    return object
  }

  /**
     * Converts this Feature to JSON.
     * @function toJSON
     * @memberof Feature
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Feature.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Feature
})()

$root.Frustum = (() => {
  /**
     * Constructs a new Frustum.
     * @exports Frustum
     * @classdesc Represents a Frustum.
     * @constructor
     * @param {Frustum=} [properties] Properties to set
     */
  function Frustum (properties) {
    this.planes = []
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  Frustum.prototype = Object.create(THREE.Frustum.prototype)

  /**
     * Frustum planes.
     * @member {Array.<Plane>} planes
     * @memberof Frustum
     * @instance
     */
  Frustum.prototype.planes = $util.emptyArray

  /**
     * Creates a new Frustum instance using the specified properties.
     * @function create
     * @memberof Frustum
     * @static
     * @param {Frustum=} [properties] Properties to set
     * @returns {Frustum} Frustum instance
     */
  Frustum.create = function create (properties) {
    return new Frustum(properties)
  }

  /**
     * Encodes the specified Frustum message. Does not implicitly {@link Frustum.verify|verify} messages.
     * @function encode
     * @memberof Frustum
     * @static
     * @param {Frustum} message Frustum message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Frustum.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.planes != null && message.planes.length) {
      for (let i = 0; i < message.planes.length; ++i) { $root.Plane.encode(message.planes[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
    }
    return writer
  }

  /**
     * Encodes the specified Frustum message, length delimited. Does not implicitly {@link Frustum.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Frustum
     * @static
     * @param {Frustum} message Frustum message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Frustum.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Frustum message from the specified reader or buffer.
     * @function decode
     * @memberof Frustum
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Frustum} Frustum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Frustum.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Frustum()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (!(message.planes && message.planes.length)) { message.planes = [] }
          message.planes.push($root.Plane.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a Frustum message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Frustum
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Frustum} Frustum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Frustum.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Frustum message.
     * @function verify
     * @memberof Frustum
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Frustum.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.planes != null && message.hasOwnProperty('planes')) {
      if (!Array.isArray(message.planes)) { return 'planes: array expected' }
      for (let i = 0; i < message.planes.length; ++i) {
        let error = $root.Plane.verify(message.planes[i])
        if (error) { return 'planes.' + error }
      }
    }
    return null
  }

  /**
     * Creates a Frustum message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Frustum
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Frustum} Frustum
     */
  Frustum.fromObject = function fromObject (object) {
    if (object instanceof $root.Frustum) { return object }
    let message = new $root.Frustum()
    if (object.planes) {
      if (!Array.isArray(object.planes)) { throw TypeError('.Frustum.planes: array expected') }
      message.planes = []
      for (let i = 0; i < object.planes.length; ++i) {
        if (typeof object.planes[i] !== 'object') { throw TypeError('.Frustum.planes: object expected') }
        message.planes[i] = $root.Plane.fromObject(object.planes[i])
      }
    }
    return message
  }

  /**
     * Creates a plain object from a Frustum message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Frustum
     * @static
     * @param {Frustum} message Frustum
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Frustum.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) { object.planes = [] }
    if (message.planes && message.planes.length) {
      object.planes = []
      for (let j = 0; j < message.planes.length; ++j) { object.planes[j] = $root.Plane.toObject(message.planes[j], options) }
    }
    return object
  }

  /**
     * Converts this Frustum to JSON.
     * @function toJSON
     * @memberof Frustum
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Frustum.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Frustum
})()

$root.Node = (() => {
  /**
     * Properties of a Node.
     * @exports INode
     * @interface INode
     * @property {string} treeId Node treeId
     * @property {Array.<Oct>|null} [address] Node address
     * @property {string} info Node info
     * @property {number|Long} numPoints Node numPoints
     */

  /**
     * Constructs a new Node.
     * @exports Node
     * @classdesc Represents a Node.
     * @implements INode
     * @constructor
     * @param {INode=} [properties] Properties to set
     */
  function Node (properties) {
    this.address = []
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * Node treeId.
     * @member {string} treeId
     * @memberof Node
     * @instance
     */
  Node.prototype.treeId = ''

  /**
     * Node address.
     * @member {Array.<Oct>} address
     * @memberof Node
     * @instance
     */
  Node.prototype.address = $util.emptyArray

  /**
     * Node info.
     * @member {string} info
     * @memberof Node
     * @instance
     */
  Node.prototype.info = ''

  /**
     * Node numPoints.
     * @member {number|Long} numPoints
     * @memberof Node
     * @instance
     */
  Node.prototype.numPoints = 0

  /**
     * Creates a new Node instance using the specified properties.
     * @function create
     * @memberof Node
     * @static
     * @param {INode=} [properties] Properties to set
     * @returns {Node} Node instance
     */
  Node.create = function create (properties) {
    return new Node(properties)
  }

  /**
     * Encodes the specified Node message. Does not implicitly {@link Node.verify|verify} messages.
     * @function encode
     * @memberof Node
     * @static
     * @param {INode} message Node message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Node.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    writer.uint32(/* id 1, wireType 2 = */10).string(message.treeId)
    if (message.address != null && message.address.length) {
      for (let i = 0; i < message.address.length; ++i) { writer.uint32(/* id 2, wireType 0 = */16).int32(message.address[i]) }
    }
    writer.uint32(/* id 3, wireType 2 = */26).string(message.info)
    writer.uint32(/* id 4, wireType 0 = */32).uint64(message.numPoints)
    return writer
  }

  /**
     * Encodes the specified Node message, length delimited. Does not implicitly {@link Node.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Node
     * @static
     * @param {INode} message Node message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Node.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Node message from the specified reader or buffer.
     * @function decode
     * @memberof Node
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Node} Node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Node.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Node()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.treeId = reader.string()
          break
        case 2:
          if (!(message.address && message.address.length)) { message.address = [] }
          if ((tag & 7) === 2) {
            let end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) { message.address.push(reader.int32()) }
          } else { message.address.push(reader.int32()) }
          break
        case 3:
          message.info = reader.string()
          break
        case 4:
          message.numPoints = reader.uint64()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('treeId')) { throw $util.ProtocolError("missing required 'treeId'", { instance: message }) }
    if (!message.hasOwnProperty('info')) { throw $util.ProtocolError("missing required 'info'", { instance: message }) }
    if (!message.hasOwnProperty('numPoints')) { throw $util.ProtocolError("missing required 'numPoints'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Node message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Node
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Node} Node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Node.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Node message.
     * @function verify
     * @memberof Node
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Node.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (!$util.isString(message.treeId)) { return 'treeId: string expected' }
    if (message.address != null && message.hasOwnProperty('address')) {
      if (!Array.isArray(message.address)) { return 'address: array expected' }
      for (let i = 0; i < message.address.length; ++i) {
        switch (message.address[i]) {
          default:
            return 'address: enum value[] expected'
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            break
        }
      }
    }
    if (!$util.isString(message.info)) { return 'info: string expected' }
    if (!$util.isInteger(message.numPoints) && !(message.numPoints && $util.isInteger(message.numPoints.low) && $util.isInteger(message.numPoints.high))) { return 'numPoints: integer|Long expected' }
    return null
  }

  /**
     * Creates a Node message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Node
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Node} Node
     */
  Node.fromObject = function fromObject (object) {
    if (object instanceof $root.Node) { return object }
    let message = new $root.Node()
    if (object.treeId != null) { message.treeId = String(object.treeId) }
    if (object.address) {
      if (!Array.isArray(object.address)) { throw TypeError('.Node.address: array expected') }
      message.address = []
      for (let i = 0; i < object.address.length; ++i) {
        switch (object.address[i]) {
          default:
          case 'AAA':
          case 1:
            message.address[i] = 1
            break
          case 'AAB':
          case 2:
            message.address[i] = 2
            break
          case 'ABA':
          case 3:
            message.address[i] = 3
            break
          case 'ABB':
          case 4:
            message.address[i] = 4
            break
          case 'BAA':
          case 5:
            message.address[i] = 5
            break
          case 'BAB':
          case 6:
            message.address[i] = 6
            break
          case 'BBA':
          case 7:
            message.address[i] = 7
            break
          case 'BBB':
          case 8:
            message.address[i] = 8
            break
        }
      }
    }
    if (object.info != null) { message.info = String(object.info) }
    if (object.numPoints != null) {
      if ($util.Long) { (message.numPoints = $util.Long.fromValue(object.numPoints)).unsigned = true } else if (typeof object.numPoints === 'string') { message.numPoints = parseInt(object.numPoints, 10) } else if (typeof object.numPoints === 'number') { message.numPoints = object.numPoints } else if (typeof object.numPoints === 'object') { message.numPoints = new $util.LongBits(object.numPoints.low >>> 0, object.numPoints.high >>> 0).toNumber(true) }
    }
    return message
  }

  /**
     * Creates a plain object from a Node message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Node
     * @static
     * @param {Node} message Node
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Node.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) { object.address = [] }
    if (options.defaults) {
      object.treeId = ''
      object.info = ''
      object.numPoints = 0
    }
    if (message.treeId != null && message.hasOwnProperty('treeId')) { object.treeId = message.treeId }
    if (message.address && message.address.length) {
      object.address = []
      for (let j = 0; j < message.address.length; ++j) { object.address[j] = options.enums === String ? $root.Oct[message.address[j]] : message.address[j] }
    }
    if (message.info != null && message.hasOwnProperty('info')) { object.info = message.info }
    if (message.numPoints != null && message.hasOwnProperty('numPoints')) {
      if (typeof message.numPoints === 'number') { object.numPoints = options.longs === String ? String(message.numPoints) : message.numPoints } else { object.numPoints = options.longs === String ? $util.Long.prototype.toString.call(message.numPoints) : options.longs === Number ? new $util.LongBits(message.numPoints.low >>> 0, message.numPoints.high >>> 0).toNumber(true) : message.numPoints }
    }
    return object
  }

  /**
     * Converts this Node to JSON.
     * @function toJSON
     * @memberof Node
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Node.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Node
})()

$root.NodeData = (() => {
  /**
     * Properties of a NodeData.
     * @exports INodeData
     * @interface INodeData
     * @property {Array.<Uint8Array>|null} [data] NodeData data
     */

  /**
     * Constructs a new NodeData.
     * @exports NodeData
     * @classdesc Represents a NodeData.
     * @implements INodeData
     * @constructor
     * @param {INodeData=} [properties] Properties to set
     */
  function NodeData (properties) {
    this.data = []
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * NodeData data.
     * @member {Array.<Uint8Array>} data
     * @memberof NodeData
     * @instance
     */
  NodeData.prototype.data = $util.emptyArray

  /**
     * Creates a new NodeData instance using the specified properties.
     * @function create
     * @memberof NodeData
     * @static
     * @param {INodeData=} [properties] Properties to set
     * @returns {NodeData} NodeData instance
     */
  NodeData.create = function create (properties) {
    return new NodeData(properties)
  }

  /**
     * Encodes the specified NodeData message. Does not implicitly {@link NodeData.verify|verify} messages.
     * @function encode
     * @memberof NodeData
     * @static
     * @param {INodeData} message NodeData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  NodeData.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.data != null && message.data.length) {
      for (let i = 0; i < message.data.length; ++i) { writer.uint32(/* id 1, wireType 2 = */10).bytes(message.data[i]) }
    }
    return writer
  }

  /**
     * Encodes the specified NodeData message, length delimited. Does not implicitly {@link NodeData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NodeData
     * @static
     * @param {INodeData} message NodeData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  NodeData.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a NodeData message from the specified reader or buffer.
     * @function decode
     * @memberof NodeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NodeData} NodeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  NodeData.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.NodeData()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (!(message.data && message.data.length)) { message.data = [] }
          message.data.push(reader.bytes())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a NodeData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NodeData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NodeData} NodeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  NodeData.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a NodeData message.
     * @function verify
     * @memberof NodeData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  NodeData.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.data != null && message.hasOwnProperty('data')) {
      if (!Array.isArray(message.data)) { return 'data: array expected' }
      for (let i = 0; i < message.data.length; ++i) {
        if (!((message.data[i] && typeof message.data[i].length === 'number') || $util.isString(message.data[i]))) { return 'data: buffer[] expected' }
      }
    }
    return null
  }

  /**
     * Creates a NodeData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NodeData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NodeData} NodeData
     */
  NodeData.fromObject = function fromObject (object) {
    if (object instanceof $root.NodeData) { return object }
    let message = new $root.NodeData()
    if (object.data) {
      if (!Array.isArray(object.data)) { throw TypeError('.NodeData.data: array expected') }
      message.data = []
      for (let i = 0; i < object.data.length; ++i) {
        if (typeof object.data[i] === 'string') { $util.base64.decode(object.data[i], message.data[i] = $util.newBuffer($util.base64.length(object.data[i])), 0) } else if (object.data[i].length) { message.data[i] = object.data[i] }
      }
    }
    return message
  }

  /**
     * Creates a plain object from a NodeData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NodeData
     * @static
     * @param {NodeData} message NodeData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  NodeData.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) { object.data = [] }
    if (message.data && message.data.length) {
      object.data = []
      for (let j = 0; j < message.data.length; ++j) { object.data[j] = options.bytes === String ? $util.base64.encode(message.data[j], 0, message.data[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.data[j]) : message.data[j] }
    }
    return object
  }

  /**
     * Converts this NodeData to JSON.
     * @function toJSON
     * @memberof NodeData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  NodeData.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return NodeData
})()

$root.NodeRequest = (() => {
  /**
     * Properties of a NodeRequest.
     * @exports INodeRequest
     * @interface INodeRequest
     * @property {Array.<INode>|null} [nodes] NodeRequest nodes
     * @property {Array.<IFeature>|null} [schema] NodeRequest features
     */

  /**
     * Constructs a new NodeRequest.
     * @exports NodeRequest
     * @classdesc Represents a NodeRequest.
     * @implements INodeRequest
     * @constructor
     * @param {INodeRequest=} [properties] Properties to set
     */
  function NodeRequest (properties) {
    this.nodes = []
    this.schema = []
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * NodeRequest nodes.
     * @member {Array.<INode>} nodes
     * @memberof NodeRequest
     * @instance
     */
  NodeRequest.prototype.nodes = $util.emptyArray

  /**
     * NodeRequest features.
     * @member {Array.<IFeature>} schema
     * @memberof NodeRequest
     * @instance
     */
  NodeRequest.prototype.schema = $util.emptyArray

  /**
     * Creates a new NodeRequest instance using the specified properties.
     * @function create
     * @memberof NodeRequest
     * @static
     * @param {INodeRequest=} [properties] Properties to set
     * @returns {NodeRequest} NodeRequest instance
     */
  NodeRequest.create = function create (properties) {
    return new NodeRequest(properties)
  }

  /**
     * Encodes the specified NodeRequest message. Does not implicitly {@link NodeRequest.verify|verify} messages.
     * @function encode
     * @memberof NodeRequest
     * @static
     * @param {INodeRequest} message NodeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  NodeRequest.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.nodes != null && message.nodes.length) {
      for (let i = 0; i < message.nodes.length; ++i) { $root.Node.encode(message.nodes[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
    }
    if (message.schema != null && message.schema.length) {
      for (let i = 0; i < message.schema.length; ++i) { $root.Feature.encode(message.schema[i], writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim() }
    }
    return writer
  }

  /**
     * Encodes the specified NodeRequest message, length delimited. Does not implicitly {@link NodeRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NodeRequest
     * @static
     * @param {INodeRequest} message NodeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  NodeRequest.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a NodeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof NodeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NodeRequest} NodeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  NodeRequest.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.NodeRequest()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (!(message.nodes && message.nodes.length)) { message.nodes = [] }
          message.nodes.push($root.Node.decode(reader, reader.uint32()))
          break
        case 3:
          if (!(message.schema && message.schema.length)) { message.schema = [] }
          message.schema.push($root.Feature.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a NodeRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NodeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NodeRequest} NodeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  NodeRequest.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a NodeRequest message.
     * @function verify
     * @memberof NodeRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  NodeRequest.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.nodes != null && message.hasOwnProperty('nodes')) {
      if (!Array.isArray(message.nodes)) { return 'nodes: array expected' }
      for (let i = 0; i < message.nodes.length; ++i) {
        let error = $root.Node.verify(message.nodes[i])
        if (error) { return 'nodes.' + error }
      }
    }
    if (message.schema != null && message.hasOwnProperty('schema')) {
      if (!Array.isArray(message.schema)) { return 'features: array expected' }
      for (let i = 0; i < message.schema.length; ++i) {
        let error = $root.Feature.verify(message.schema[i])
        if (error) { return 'schema.' + error }
      }
    }
    return null
  }

  /**
     * Creates a NodeRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NodeRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NodeRequest} NodeRequest
     */
  NodeRequest.fromObject = function fromObject (object) {
    if (object instanceof $root.NodeRequest) { return object }
    let message = new $root.NodeRequest()
    if (object.nodes) {
      if (!Array.isArray(object.nodes)) { throw TypeError('.NodeRequest.nodes: array expected') }
      message.nodes = []
      for (let i = 0; i < object.nodes.length; ++i) {
        if (typeof object.nodes[i] !== 'object') { throw TypeError('.NodeRequest.nodes: object expected') }
        message.nodes[i] = $root.Node.fromObject(object.nodes[i])
      }
    }
    if (object.schema) {
      if (!Array.isArray(object.schema)) { throw TypeError('.NodeRequest.schema: array expected') }
      message.schema = []
      for (let i = 0; i < object.schema.length; ++i) {
        if (typeof object.schema[i] !== 'object') { throw TypeError('.NodeRequest.schema: object expected') }
        message.schema[i] = $root.Feature.fromObject(object.schema[i])
      }
    }
    return message
  }

  /**
     * Creates a plain object from a NodeRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NodeRequest
     * @static
     * @param {NodeRequest} message NodeRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  NodeRequest.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) {
      object.nodes = []
      object.schema = []
    }
    if (message.nodes && message.nodes.length) {
      object.nodes = []
      for (let j = 0; j < message.nodes.length; ++j) { object.nodes[j] = $root.Node.toObject(message.nodes[j], options) }
    }
    if (message.schema && message.schema.length) {
      object.schema = []
      for (let j = 0; j < message.schema.length; ++j) { object.schema[j] = $root.Feature.toObject(message.schema[j], options) }
    }
    return object
  }

  /**
     * Converts this NodeRequest to JSON.
     * @function toJSON
     * @memberof NodeRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  NodeRequest.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return NodeRequest
})()

/**
 * Oct enum.
 * @exports Oct
 * @enum {string}
 * @property {number} AAA=0 AAA value
 * @property {number} AAB=1 AAB value
 * @property {number} ABA=2 ABA value
 * @property {number} ABB=3 ABB value
 * @property {number} BAA=4 BAA value
 * @property {number} BAB=5 BAB value
 * @property {number} BBA=6 BBA value
 * @property {number} BBB=7 BBB value
 */
$root.Oct = (function () {
  const valuesById = {}
  const values = Object.create(valuesById)
  values[valuesById[0] = 'AAA'] = 0
  values[valuesById[1] = 'AAB'] = 1
  values[valuesById[2] = 'ABA'] = 2
  values[valuesById[3] = 'ABB'] = 3
  values[valuesById[4] = 'BAA'] = 4
  values[valuesById[5] = 'BAB'] = 5
  values[valuesById[6] = 'BBA'] = 6
  values[valuesById[7] = 'BBB'] = 7
  return values
})()

$root.Plane = (() => {
  /**
     * Constructs a new Plane.
     * @exports Plane
     * @classdesc Represents a Plane.
     * @constructor
     * @param {Plane=} [properties] Properties to set
     */
  function Plane (properties) {
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  Plane.prototype = Object.create(THREE.Plane.prototype)

  /**
     * Plane normal.
     * @member {Vector3} normal
     * @memberof Plane
     * @instance
     */
  Plane.prototype.normal = null

  /**
     * Plane constant.
     * @member {number} constant
     * @memberof Plane
     * @instance
     */
  Plane.prototype.constant = 0

  /**
     * Creates a new Plane instance using the specified properties.
     * @function create
     * @memberof Plane
     * @static
     * @param {Plane=} [properties] Properties to set
     * @returns {Plane} Plane instance
     */
  Plane.create = function create (properties) {
    return new Plane(properties)
  }

  /**
     * Encodes the specified Plane message. Does not implicitly {@link Plane.verify|verify} messages.
     * @function encode
     * @memberof Plane
     * @static
     * @param {Plane} message Plane message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Plane.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    $root.Vector3.encode(message.normal, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim()
    writer.uint32(/* id 2, wireType 5 = */21).float(message.constant)
    return writer
  }

  /**
     * Encodes the specified Plane message, length delimited. Does not implicitly {@link Plane.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Plane
     * @static
     * @param {Plane} message Plane message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Plane.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Plane message from the specified reader or buffer.
     * @function decode
     * @memberof Plane
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Plane} Plane
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Plane.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Plane()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.normal = $root.Vector3.decode(reader, reader.uint32())
          break
        case 2:
          message.constant = reader.float()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('normal')) { throw $util.ProtocolError("missing required 'normal'", { instance: message }) }
    if (!message.hasOwnProperty('constant')) { throw $util.ProtocolError("missing required 'constant'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Plane message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Plane
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Plane} Plane
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Plane.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Plane message.
     * @function verify
     * @memberof Plane
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Plane.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    {
      let error = $root.Vector3.verify(message.normal)
      if (error) { return 'normal.' + error }
    }
    if (typeof message.constant !== 'number') { return 'constant: number expected' }
    return null
  }

  /**
     * Creates a Plane message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Plane
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Plane} Plane
     */
  Plane.fromObject = function fromObject (object) {
    if (object instanceof $root.Plane) { return object }
    let message = new $root.Plane()
    if (object.normal != null) {
      if (typeof object.normal !== 'object') { throw TypeError('.Plane.normal: object expected') }
      message.normal = $root.Vector3.fromObject(object.normal)
    }
    if (object.constant != null) { message.constant = Number(object.constant) }
    return message
  }

  /**
     * Creates a plain object from a Plane message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Plane
     * @static
     * @param {Plane} message Plane
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Plane.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.normal = null
      object.constant = 0
    }
    if (message.normal != null && message.hasOwnProperty('normal')) { object.normal = $root.Vector3.toObject(message.normal, options) }
    if (message.constant != null && message.hasOwnProperty('constant')) { object.constant = options.json && !isFinite(message.constant) ? String(message.constant) : message.constant }
    return object
  }

  /**
     * Converts this Plane to JSON.
     * @function toJSON
     * @memberof Plane
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Plane.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Plane
})()

$root.Query = (() => {
  /**
     * Properties of a Query.
     * @exports IQuery
     * @interface IQuery
     * @property {Frustum} frustum Query frustum
     * @property {IRelevanceRange} relevance Query relevance
     * @property {IDensityRange|null} [density] Query density
     * @property {Box3|null} [cut] Query cut
     * @property {Array.<string>|null} [feature] Query feature
     */

  /**
     * Constructs a new Query.
     * @exports Query
     * @classdesc Represents a Query.
     * @implements IQuery
     * @constructor
     * @param {IQuery=} [properties] Properties to set
     */
  function Query (properties) {
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * Query frustum.
     * @member {Frustum} frustum
     * @memberof Query
     * @instance
     */
  Query.prototype.frustum = null

  /**
     * Query relevance.
     * @member {IRelevanceRange} relevance
     * @memberof Query
     * @instance
     */
  Query.prototype.relevance = null

  /**
     * Query density.
     * @member {IDensityRange|null|undefined} density
     * @memberof Query
     * @instance
     */
  Query.prototype.density = null

  /**
     * Query cut.
     * @member {Box3|null|undefined} cut
     * @memberof Query
     * @instance
     */
  Query.prototype.cut = null

  /**
     * Creates a new Query instance using the specified properties.
     * @function create
     * @memberof Query
     * @static
     * @param {IQuery=} [properties] Properties to set
     * @returns {Query} Query instance
     */
  Query.create = function create (properties) {
    return new Query(properties)
  }

  /**
     * Encodes the specified Query message. Does not implicitly {@link Query.verify|verify} messages.
     * @function encode
     * @memberof Query
     * @static
     * @param {IQuery} message Query message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Query.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    $root.Frustum.encode(message.frustum, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim()
    if (message.relevance != null && message.hasOwnProperty('relevance')) { $root.RelevanceRange.encode(message.relevance, writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim() }
    if (message.density != null && message.hasOwnProperty('density')) { $root.DensityRange.encode(message.density, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim() }
    if (message.cut != null && message.hasOwnProperty('cut')) { $root.Box3.encode(message.cut, writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim() }
    return writer
  }

  /**
     * Encodes the specified Query message, length delimited. Does not implicitly {@link Query.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Query
     * @static
     * @param {IQuery} message Query message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Query.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Query message from the specified reader or buffer.
     * @function decode
     * @memberof Query
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Query} Query
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Query.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Query()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.frustum = $root.Frustum.decode(reader, reader.uint32())
          break
        case 2:
          message.relevance = $root.RelevanceRange.decode(reader, reader.uint32())
          break
        case 3:
          message.density = $root.DensityRange.decode(reader, reader.uint32())
          break
        case 4:
          message.cut = $root.Box3.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('frustum')) { throw $util.ProtocolError("missing required 'frustum'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Query message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Query
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Query} Query
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Query.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Query message.
     * @function verify
     * @memberof Query
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Query.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    {
      let error = $root.Frustum.verify(message.frustum)
      if (error) { return 'frustum.' + error }
    }
    {
      let error = $root.RelevanceRange.verify(message.relevance)
      if (error) { return 'relevance.' + error }
    }
    if (message.density != null && message.hasOwnProperty('density')) {
      let error = $root.DensityRange.verify(message.density)
      if (error) { return 'density.' + error }
    }
    if (message.cut != null && message.hasOwnProperty('cut')) {
      let error = $root.Box3.verify(message.cut)
      if (error) { return 'cut.' + error }
    }
    return null
  }

  /**
     * Creates a Query message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Query
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Query} Query
     */
  Query.fromObject = function fromObject (object) {
    if (object instanceof $root.Query) { return object }
    let message = new $root.Query()
    if (object.frustum != null) {
      if (typeof object.frustum !== 'object') { throw TypeError('.Query.frustum: object expected') }
      message.frustum = $root.Frustum.fromObject(object.frustum)
    }
    if (object.relevance != null) {
      if (typeof object.relevance !== 'object') { throw TypeError('.Query.relevance: object expected') }
      message.relevance = $root.RelevanceRange.fromObject(object.relevance)
    }
    if (object.density != null) {
      if (typeof object.density !== 'object') { throw TypeError('.Query.density: object expected') }
      message.density = $root.DensityRange.fromObject(object.density)
    }
    if (object.cut != null) {
      if (typeof object.cut !== 'object') { throw TypeError('.Query.cut: object expected') }
      message.cut = $root.Box3.fromObject(object.cut)
    }
    return message
  }

  /**
     * Creates a plain object from a Query message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Query
     * @static
     * @param {Query} message Query
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Query.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.frustum = null
      object.relevance = null
      object.density = null
      object.cut = null
    }
    if (message.frustum != null && message.hasOwnProperty('frustum')) { object.frustum = $root.Frustum.toObject(message.frustum, options) }
    if (message.relevance != null && message.hasOwnProperty('relevance')) { object.relevance = $root.RelevanceRange.toObject(message.relevance, options) }
    if (message.density != null && message.hasOwnProperty('density')) { object.density = $root.DensityRange.toObject(message.density, options) }
    if (message.cut != null && message.hasOwnProperty('cut')) { object.cut = $root.Box3.toObject(message.cut, options) }
    return object
  }

  /**
     * Converts this Query to JSON.
     * @function toJSON
     * @memberof Query
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Query.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Query
})()

$root.QueryResponse = (() => {
  /**
     * Properties of a QueryResponse.
     * @exports IQueryResponse
     * @interface IQueryResponse
     * @property {Array.<INode>|null} [nodes] QueryResponse nodes
     * @property {Array.<IFeature>|null} [feature] QueryResponse feature
     */

  /**
     * Constructs a new QueryResponse.
     * @exports QueryResponse
     * @classdesc Represents a QueryResponse.
     * @implements IQueryResponse
     * @constructor
     * @param {IQueryResponse=} [properties] Properties to set
     */
  function QueryResponse (properties) {
    this.nodes = []
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * QueryResponse nodes.
     * @member {Array.<INode>} nodes
     * @memberof QueryResponse
     * @instance
     */
  QueryResponse.prototype.nodes = $util.emptyArray

  /**
     * Creates a new QueryResponse instance using the specified properties.
     * @function create
     * @memberof QueryResponse
     * @static
     * @param {IQueryResponse=} [properties] Properties to set
     * @returns {QueryResponse} QueryResponse instance
     */
  QueryResponse.create = function create (properties) {
    return new QueryResponse(properties)
  }

  /**
     * Encodes the specified QueryResponse message. Does not implicitly {@link QueryResponse.verify|verify} messages.
     * @function encode
     * @memberof QueryResponse
     * @static
     * @param {IQueryResponse} message QueryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  QueryResponse.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.nodes != null && message.nodes.length) {
      for (let i = 0; i < message.nodes.length; ++i) { $root.Node.encode(message.nodes[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
    }
    return writer
  }

  /**
     * Encodes the specified QueryResponse message, length delimited. Does not implicitly {@link QueryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QueryResponse
     * @static
     * @param {IQueryResponse} message QueryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  QueryResponse.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a QueryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof QueryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QueryResponse} QueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  QueryResponse.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.QueryResponse()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (!(message.nodes && message.nodes.length)) { message.nodes = [] }
          message.nodes.push($root.Node.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a QueryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QueryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QueryResponse} QueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  QueryResponse.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a QueryResponse message.
     * @function verify
     * @memberof QueryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  QueryResponse.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.nodes != null && message.hasOwnProperty('nodes')) {
      if (!Array.isArray(message.nodes)) { return 'nodes: array expected' }
      for (let i = 0; i < message.nodes.length; ++i) {
        let error = $root.Node.verify(message.nodes[i])
        if (error) { return 'nodes.' + error }
      }
    }
    return null
  }

  /**
     * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QueryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QueryResponse} QueryResponse
     */
  QueryResponse.fromObject = function fromObject (object) {
    if (object instanceof $root.QueryResponse) { return object }
    let message = new $root.QueryResponse()
    if (object.nodes) {
      if (!Array.isArray(object.nodes)) { throw TypeError('.QueryResponse.nodes: array expected') }
      message.nodes = []
      for (let i = 0; i < object.nodes.length; ++i) {
        if (typeof object.nodes[i] !== 'object') { throw TypeError('.QueryResponse.nodes: object expected') }
        message.nodes[i] = $root.Node.fromObject(object.nodes[i])
      }
    }
    return message
  }

  /**
     * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QueryResponse
     * @static
     * @param {QueryResponse} message QueryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  QueryResponse.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) {
      object.nodes = []
    }
    if (message.nodes && message.nodes.length) {
      object.nodes = []
      for (let j = 0; j < message.nodes.length; ++j) { object.nodes[j] = $root.Node.toObject(message.nodes[j], options) }
    }
    return object
  }

  /**
     * Converts this QueryResponse to JSON.
     * @function toJSON
     * @memberof QueryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  QueryResponse.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return QueryResponse
})()

$root.RelevanceRange = (() => {
  /**
     * Properties of a RelevanceRange.
     * @exports IRelevanceRange
     * @interface IRelevanceRange
     * @property {number|null} [min] RelevanceRange min
     * @property {number} max RelevanceRange max
     */

  /**
     * Constructs a new RelevanceRange.
     * @exports RelevanceRange
     * @classdesc Represents a RelevanceRange.
     * @implements IRelevanceRange
     * @constructor
     * @param {IRelevanceRange=} [properties] Properties to set
     */
  function RelevanceRange (properties) {
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * RelevanceRange min.
     * @member {number} min
     * @memberof RelevanceRange
     * @instance
     */
  RelevanceRange.prototype.min = 0

  /**
     * RelevanceRange max.
     * @member {number} max
     * @memberof RelevanceRange
     * @instance
     */
  RelevanceRange.prototype.max = 0

  /**
     * Creates a new RelevanceRange instance using the specified properties.
     * @function create
     * @memberof RelevanceRange
     * @static
     * @param {IRelevanceRange=} [properties] Properties to set
     * @returns {RelevanceRange} RelevanceRange instance
     */
  RelevanceRange.create = function create (properties) {
    return new RelevanceRange(properties)
  }

  /**
     * Encodes the specified RelevanceRange message. Does not implicitly {@link RelevanceRange.verify|verify} messages.
     * @function encode
     * @memberof RelevanceRange
     * @static
     * @param {IRelevanceRange} message RelevanceRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  RelevanceRange.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.min != null && message.hasOwnProperty('min')) { writer.uint32(/* id 1, wireType 0 = */8).int32(message.min) }
    writer.uint32(/* id 2, wireType 0 = */16).int32(message.max)
    return writer
  }

  /**
     * Encodes the specified RelevanceRange message, length delimited. Does not implicitly {@link RelevanceRange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RelevanceRange
     * @static
     * @param {IRelevanceRange} message RelevanceRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  RelevanceRange.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a RelevanceRange message from the specified reader or buffer.
     * @function decode
     * @memberof RelevanceRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RelevanceRange} RelevanceRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  RelevanceRange.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.RelevanceRange()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.min = reader.int32()
          break
        case 2:
          message.max = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('max')) { throw $util.ProtocolError("missing required 'max'", { instance: message }) }
    return message
  }

  /**
     * Decodes a RelevanceRange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RelevanceRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RelevanceRange} RelevanceRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  RelevanceRange.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a RelevanceRange message.
     * @function verify
     * @memberof RelevanceRange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  RelevanceRange.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.min != null && message.hasOwnProperty('min')) {
      if (!$util.isInteger(message.min)) { return 'min: integer expected' }
    }
    if (!$util.isInteger(message.max)) { return 'max: integer expected' }
    return null
  }

  /**
     * Creates a RelevanceRange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RelevanceRange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RelevanceRange} RelevanceRange
     */
  RelevanceRange.fromObject = function fromObject (object) {
    if (object instanceof $root.RelevanceRange) { return object }
    let message = new $root.RelevanceRange()
    if (object.min != null) { message.min = object.min | 0 }
    if (object.max != null) { message.max = object.max | 0 }
    return message
  }

  /**
     * Creates a plain object from a RelevanceRange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RelevanceRange
     * @static
     * @param {RelevanceRange} message RelevanceRange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  RelevanceRange.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.min = 0
      object.max = 0
    }
    if (message.min != null && message.hasOwnProperty('min')) { object.min = message.min }
    if (message.max != null && message.hasOwnProperty('max')) { object.max = message.max }
    return object
  }

  /**
     * Converts this RelevanceRange to JSON.
     * @function toJSON
     * @memberof RelevanceRange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  RelevanceRange.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return RelevanceRange
})()

$root.Tree = (() => {
  /**
     * Properties of a Tree.
     * @exports ITree
     * @interface ITree
     * @property {string} id Tree id
     * @property {Box} Box Tree Box
     * @property {Vector3|null} [scale] Tree scale
     * @property {Vector3|null} [offset] Tree offset
     * @property {number|Long|null} [numPoints] Tree numPoints
     * @property {Box3|null} [BoxConforming] Tree BoxConforming
     * @property {Array.<IFeature>|null} [schema] Tree schema
     * @property {Object.<string,google.protobuf.IAny>|null} [metadata] Tree metadata
     */

  /**
     * Constructs a new Tree.
     * @exports Tree
     * @classdesc Represents a Tree.
     * @implements ITree
     * @constructor
     * @param {ITree=} [properties] Properties to set
     */
  function Tree (properties) {
    this.schema = []
    this.metadata = {}
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * Tree id.
     * @member {string} id
     * @memberof Tree
     * @instance
     */
  Tree.prototype.id = ''

  /**
     * Tree Box.
     * @member {Box3} Box
     * @memberof Tree
     * @instance
     */
  Tree.prototype.bounds = null

  /**
     * Tree scale.
     * @member {Vector3|null|undefined} scale
     * @memberof Tree
     * @instance
     */
  Tree.prototype.scale = null

  /**
     * Tree offset.
     * @member {Vector3|null|undefined} offset
     * @memberof Tree
     * @instance
     */
  Tree.prototype.offset = null

  /**
     * Tree numPoints.
     * @member {number|Long} numPoints
     * @memberof Tree
     * @instance
     */
  Tree.prototype.numPoints = 0

  /**
     * Tree boundsConforming.
     * @member {Box3|null|undefined} BoxConforming
     * @memberof Tree
     * @instance
     */
  Tree.prototype.boundsConforming = null

  /**
     * Tree schema.
     * @member {Array.<IFeature>} schema
     * @memberof Tree
     * @instance
     */
  Tree.prototype.schema = $util.emptyArray

  /**
     * Tree metadata.
     * @member {Object.<string,google.protobuf.IAny>} metadata
     * @memberof Tree
     * @instance
     */
  Tree.prototype.metadata = $util.emptyObject

  /**
     * Creates a new Tree instance using the specified properties.
     * @function create
     * @memberof Tree
     * @static
     * @param {ITree=} [properties] Properties to set
     * @returns {Tree} Tree instance
     */
  Tree.create = function create (properties) {
    return new Tree(properties)
  }

  /**
     * Encodes the specified Tree message. Does not implicitly {@link Tree.verify|verify} messages.
     * @function encode
     * @memberof Tree
     * @static
     * @param {ITree} message Tree message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Tree.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    writer.uint32(/* id 1, wireType 2 = */10).string(message.id)
    $root.Box3.encode(message.bounds, writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim()
    if (message.scale != null && message.hasOwnProperty('scale')) { $root.Vector3.encode(message.scale, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim() }
    if (message.offset != null && message.hasOwnProperty('offset')) { $root.Vector3.encode(message.offset, writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim() }
    if (message.numPoints != null && message.hasOwnProperty('numPoints')) { writer.uint32(/* id 5, wireType 0 = */40).uint64(message.numPoints) }
    if (message.boundsConforming != null && message.hasOwnProperty('boundsConforming')) { $root.Box.encode(message.boundsConforming, writer.uint32(/* id 6, wireType 2 = */50).fork()).ldelim() }
    if (message.schema != null && message.schema.length) {
      for (let i = 0; i < message.schema.length; ++i) { $root.Feature.encode(message.schema[i], writer.uint32(/* id 7, wireType 2 = */58).fork()).ldelim() }
    }
    if (message.metadata != null && message.hasOwnProperty('metadata')) {
      for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i) {
        writer.uint32(/* id 8, wireType 2 = */66).fork().uint32(/* id 1, wireType 2 = */10).string(keys[i])
        $root.google.protobuf.Any.encode(message.metadata[keys[i]], writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim().ldelim()
      }
    }
    return writer
  }

  /**
     * Encodes the specified Tree message, length delimited. Does not implicitly {@link Tree.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Tree
     * @static
     * @param {ITree} message Tree message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Tree.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Tree message from the specified reader or buffer.
     * @function decode
     * @memberof Tree
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Tree} Tree
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Tree.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Tree()
    let key
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.bounds = $root.Box3.decode(reader, reader.uint32())
          break
        case 3:
          message.scale = $root.Vector3.decode(reader, reader.uint32())
          break
        case 4:
          message.offset = $root.Vector3.decode(reader, reader.uint32())
          break
        case 5:
          message.numPoints = reader.uint64()
          break
        case 6:
          message.boundsConforming = $root.Box3.decode(reader, reader.uint32())
          break
        case 7:
          if (!(message.schema && message.schema.length)) { message.schema = [] }
          message.schema.push($root.Feature.decode(reader, reader.uint32()))
          break
        case 8:
          reader.skip().pos++
          if (message.metadata === $util.emptyObject) { message.metadata = {} }
          key = reader.string()
          reader.pos++
          message.metadata[key] = $root.google.protobuf.Any.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('id')) { throw $util.ProtocolError("missing required 'id'", { instance: message }) }
    if (!message.hasOwnProperty('bounds')) { throw $util.ProtocolError("missing required 'bounds'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Tree message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Tree
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Tree} Tree
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Tree.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Tree message.
     * @function verify
     * @memberof Tree
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Tree.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (!$util.isString(message.id)) { return 'id: string expected' }
    {
      let error = $root.Box3.verify(message.bounds)
      if (error) { return 'bounds.' + error }
    }
    if (message.scale != null && message.hasOwnProperty('scale')) {
      let error = $root.Vector3.verify(message.scale)
      if (error) { return 'scale.' + error }
    }
    if (message.offset != null && message.hasOwnProperty('offset')) {
      let error = $root.Vector3.verify(message.offset)
      if (error) { return 'offset.' + error }
    }
    if (message.numPoints != null && message.hasOwnProperty('numPoints')) {
      if (!$util.isInteger(message.numPoints) && !(message.numPoints && $util.isInteger(message.numPoints.low) && $util.isInteger(message.numPoints.high))) { return 'numPoints: integer|Long expected' }
    }
    if (message.boundsConforming != null && message.hasOwnProperty('boundsConforming')) {
      let error = $root.Box3.verify(message.boundsConforming)
      if (error) { return 'boundsConforming.' + error }
    }
    if (message.schema != null && message.hasOwnProperty('schema')) {
      if (!Array.isArray(message.schema)) { return 'schema: array expected' }
      for (let i = 0; i < message.schema.length; ++i) {
        let error = $root.Feature.verify(message.schema[i])
        if (error) { return 'schema.' + error }
      }
    }
    if (message.metadata != null && message.hasOwnProperty('metadata')) {
      if (!$util.isObject(message.metadata)) { return 'metadata: object expected' }
      let key = Object.keys(message.metadata)
      for (let i = 0; i < key.length; ++i) {
        let error = $root.google.protobuf.Any.verify(message.metadata[key[i]])
        if (error) { return 'metadata.' + error }
      }
    }
    return null
  }

  /**
     * Creates a Tree message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Tree
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Tree} Tree
     */
  Tree.fromObject = function fromObject (object) {
    if (object instanceof $root.Tree) { return object }
    let message = new $root.Tree()
    if (object.id != null) { message.id = String(object.id) }
    if (object.bounds != null) {
      if (typeof object.bounds !== 'object') { throw TypeError('.Tree.bounds: object expected') }
      message.bounds = $root.Box3.fromObject(object.bounds)
    }
    if (object.scale != null) {
      if (typeof object.scale !== 'object') { throw TypeError('.Tree.scale: object expected') }
      message.scale = $root.Vector3.fromObject(object.scale)
    }
    if (object.offset != null) {
      if (typeof object.offset !== 'object') { throw TypeError('.Tree.offset: object expected') }
      message.offset = $root.Vector3.fromObject(object.offset)
    }
    if (object.numPoints != null) {
      if ($util.Long) { (message.numPoints = $util.Long.fromValue(object.numPoints)).unsigned = true } else if (typeof object.numPoints === 'string') { message.numPoints = parseInt(object.numPoints, 10) } else if (typeof object.numPoints === 'number') { message.numPoints = object.numPoints } else if (typeof object.numPoints === 'object') { message.numPoints = new $util.LongBits(object.numPoints.low >>> 0, object.numPoints.high >>> 0).toNumber(true) }
    }
    if (object.boundsConforming != null) {
      if (typeof object.boundsConforming !== 'object') { throw TypeError('.Tree.boundsConforming: object expected') }
      message.boundsConforming = $root.Box3.fromObject(object.boundsConforming)
    }
    if (object.schema) {
      if (!Array.isArray(object.schema)) { throw TypeError('.Tree.schema: array expected') }
      message.schema = []
      for (let i = 0; i < object.schema.length; ++i) {
        if (typeof object.schema[i] !== 'object') { throw TypeError('.Tree.schema: object expected') }
        message.schema[i] = $root.Feature.fromObject(object.schema[i])
      }
    }
    if (object.metadata) {
      if (typeof object.metadata !== 'object') { throw TypeError('.Tree.metadata: object expected') }
      message.metadata = {}
      for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i) {
        if (typeof object.metadata[keys[i]] !== 'object') { throw TypeError('.Tree.metadata: object expected') }
        message.metadata[keys[i]] = $root.google.protobuf.Any.fromObject(object.metadata[keys[i]])
      }
    }
    return message
  }

  /**
     * Creates a plain object from a Tree message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Tree
     * @static
     * @param {Tree} message Tree
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Tree.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) { object.schema = [] }
    if (options.objects || options.defaults) { object.metadata = {} }
    if (options.defaults) {
      object.id = ''
      object.bounds = null
      object.scale = null
      object.offset = null
      object.numPoints = 0
      object.boundsConforming = null
    }
    if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id }
    if (message.bounds != null && message.hasOwnProperty('bounds')) { object.bounds = $root.Box3.toObject(message.bounds, options) }
    if (message.scale != null && message.hasOwnProperty('scale')) { object.scale = $root.Vector3.toObject(message.scale, options) }
    if (message.offset != null && message.hasOwnProperty('offset')) { object.offset = $root.Vector3.toObject(message.offset, options) }
    if (message.numPoints != null && message.hasOwnProperty('numPoints')) {
      if (typeof message.numPoints === 'number') { object.numPoints = options.longs === String ? String(message.numPoints) : message.numPoints } else { object.numPoints = options.longs === String ? $util.Long.prototype.toString.call(message.numPoints) : options.longs === Number ? new $util.LongBits(message.numPoints.low >>> 0, message.numPoints.high >>> 0).toNumber(true) : message.numPoints }
    }
    if (message.boundsConforming != null && message.hasOwnProperty('boundsConforming')) { object.boundsConforming = $root.Box3.toObject(message.boundsConforming, options) }
    if (message.schema && message.schema.length) {
      object.schema = []
      for (let j = 0; j < message.schema.length; ++j) { object.schema[j] = $root.Feature.toObject(message.schema[j], options) }
    }
    let keys2
    if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
      object.metadata = {}
      for (let j = 0; j < keys2.length; ++j) { object.metadata[keys2[j]] = $root.google.protobuf.Any.toObject(message.metadata[keys2[j]], options) }
    }
    return object
  }

  /**
     * Converts this Tree to JSON.
     * @function toJSON
     * @memberof Tree
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Tree.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Tree
})()

$root.google = (() => {
  /**
     * Namespace google.
     * @exports google
     * @namespace
     */
  const google = {}

  google.protobuf = (function () {
    /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
    const protobuf = {}

    protobuf.Any = (function () {
      /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

      /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
      function Any (properties) {
        if (properties) {
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
          }
        }
      }

      /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
      Any.prototype.type_url = ''

      /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
      Any.prototype.value = $util.newBuffer([])

      /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
      Any.create = function create (properties) {
        return new Any(properties)
      }

      /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      Any.encode = function encode (message, writer) {
        if (!writer) { writer = $Writer.create() }
        if (message.type_url != null && message.hasOwnProperty('type_url')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.type_url) }
        if (message.value != null && message.hasOwnProperty('value')) { writer.uint32(/* id 2, wireType 2 = */18).bytes(message.value) }
        return writer
      }

      /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      Any.encodeDelimited = function encodeDelimited (message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      Any.decode = function decode (reader, length) {
        if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
        let end = length === undefined ? reader.len : reader.pos + length
        let message = new $root.google.protobuf.Any()
        while (reader.pos < end) {
          let tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.type_url = reader.string()
              break
            case 2:
              message.value = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      Any.decodeDelimited = function decodeDelimited (reader) {
        if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
        return this.decode(reader, reader.uint32())
      }

      /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
      Any.verify = function verify (message) {
        if (typeof message !== 'object' || message === null) { return 'object expected' }
        if (message.type_url != null && message.hasOwnProperty('type_url')) {
          if (!$util.isString(message.type_url)) { return 'type_url: string expected' }
        }
        if (message.value != null && message.hasOwnProperty('value')) {
          if (!((message.value && typeof message.value.length === 'number') || $util.isString(message.value))) { return 'value: buffer expected' }
        }
        return null
      }

      /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
      Any.fromObject = function fromObject (object) {
        if (object instanceof $root.google.protobuf.Any) { return object }
        let message = new $root.google.protobuf.Any()
        if (object.type_url != null) { message.type_url = String(object.type_url) }
        if (object.value != null) {
          if (typeof object.value === 'string') { $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0) } else if (object.value.length) { message.value = object.value }
        }
        return message
      }

      /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
      Any.toObject = function toObject (message, options) {
        if (!options) { options = {} }
        let object = {}
        if (options.defaults) {
          object.type_url = ''
          object.value = options.bytes === String ? '' : []
        }
        if (message.type_url != null && message.hasOwnProperty('type_url')) { object.type_url = message.type_url }
        if (message.value != null && message.hasOwnProperty('value')) { object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value }
        return object
      }

      /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
      Any.prototype.toJSON = function toJSON () {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Any
    })()

    return protobuf
  })()

  return google
})()

$root.TreeQuery = (() => {
  /**
     * Properties of a TreeQuery.
     * @exports ITreeQuery
     * @interface ITreeQuery
     * @property {string} id TreeQuery id
     * @property {Array.<string>|null} [metadataProperties] TreeQuery metadataProperties
     */

  /**
     * Constructs a new TreeQuery.
     * @exports TreeQuery
     * @classdesc Represents a TreeQuery.
     * @implements ITreeQuery
     * @constructor
     * @param {ITreeQuery=} [properties] Properties to set
     */
  function TreeQuery (properties) {
    this.metadataProperties = []
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * TreeQuery id.
     * @member {string} id
     * @memberof TreeQuery
     * @instance
     */
  TreeQuery.prototype.id = ''

  /**
     * TreeQuery metadataProperties.
     * @member {Array.<string>} metadataProperties
     * @memberof TreeQuery
     * @instance
     */
  TreeQuery.prototype.metadataProperties = $util.emptyArray

  /**
     * Creates a new TreeQuery instance using the specified properties.
     * @function create
     * @memberof TreeQuery
     * @static
     * @param {ITreeQuery=} [properties] Properties to set
     * @returns {TreeQuery} TreeQuery instance
     */
  TreeQuery.create = function create (properties) {
    return new TreeQuery(properties)
  }

  /**
     * Encodes the specified TreeQuery message. Does not implicitly {@link TreeQuery.verify|verify} messages.
     * @function encode
     * @memberof TreeQuery
     * @static
     * @param {ITreeQuery} message TreeQuery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  TreeQuery.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    writer.uint32(/* id 1, wireType 2 = */10).string(message.id)
    if (message.metadataProperties != null && message.metadataProperties.length) {
      for (let i = 0; i < message.metadataProperties.length; ++i) { writer.uint32(/* id 2, wireType 2 = */18).string(message.metadataProperties[i]) }
    }
    return writer
  }

  /**
     * Encodes the specified TreeQuery message, length delimited. Does not implicitly {@link TreeQuery.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TreeQuery
     * @static
     * @param {ITreeQuery} message TreeQuery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  TreeQuery.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a TreeQuery message from the specified reader or buffer.
     * @function decode
     * @memberof TreeQuery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TreeQuery} TreeQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  TreeQuery.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.TreeQuery()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          if (!(message.metadataProperties && message.metadataProperties.length)) { message.metadataProperties = [] }
          message.metadataProperties.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('id')) { throw $util.ProtocolError("missing required 'id'", { instance: message }) }
    return message
  }

  /**
     * Decodes a TreeQuery message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TreeQuery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TreeQuery} TreeQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  TreeQuery.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a TreeQuery message.
     * @function verify
     * @memberof TreeQuery
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  TreeQuery.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (!$util.isString(message.id)) { return 'id: string expected' }
    if (message.metadataProperties != null && message.hasOwnProperty('metadataProperties')) {
      if (!Array.isArray(message.metadataProperties)) { return 'metadataProperties: array expected' }
      for (let i = 0; i < message.metadataProperties.length; ++i) {
        if (!$util.isString(message.metadataProperties[i])) { return 'metadataProperties: string[] expected' }
      }
    }
    return null
  }

  /**
     * Creates a TreeQuery message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TreeQuery
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TreeQuery} TreeQuery
     */
  TreeQuery.fromObject = function fromObject (object) {
    if (object instanceof $root.TreeQuery) { return object }
    let message = new $root.TreeQuery()
    if (object.id != null) { message.id = String(object.id) }
    if (object.metadataProperties) {
      if (!Array.isArray(object.metadataProperties)) { throw TypeError('.TreeQuery.metadataProperties: array expected') }
      message.metadataProperties = []
      for (let i = 0; i < object.metadataProperties.length; ++i) { message.metadataProperties[i] = String(object.metadataProperties[i]) }
    }
    return message
  }

  /**
     * Creates a plain object from a TreeQuery message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TreeQuery
     * @static
     * @param {TreeQuery} message TreeQuery
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  TreeQuery.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.arrays || options.defaults) { object.metadataProperties = [] }
    if (options.defaults) { object.id = '' }
    if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id }
    if (message.metadataProperties && message.metadataProperties.length) {
      object.metadataProperties = []
      for (let j = 0; j < message.metadataProperties.length; ++j) { object.metadataProperties[j] = message.metadataProperties[j] }
    }
    return object
  }

  /**
     * Converts this TreeQuery to JSON.
     * @function toJSON
     * @memberof TreeQuery
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  TreeQuery.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return TreeQuery
})()

$root.Vector3 = (() => {
  /**
     * Constructs a new Vector3.
     * @exports Vector3
     * @classdesc Represents a Vector3.
     * @constructor
     * @param {Vector3=} [properties] Properties to set
     */
  function Vector3 (properties) {
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  Vector3.prototype = Object.create(THREE.Vector3.prototype)

  /**
     * Vector3 x.
     * @member {number} x
     * @memberof Vector3
     * @instance
     */
  Vector3.prototype.x = 0

  /**
     * Vector3 y.
     * @member {number} y
     * @memberof Vector3
     * @instance
     */
  Vector3.prototype.y = 0

  /**
     * Vector3 z.
     * @member {number} z
     * @memberof Vector3
     * @instance
     */
  Vector3.prototype.z = 0

  /**
     * Creates a new Vector3 instance using the specified properties.
     * @function create
     * @memberof Vector3
     * @static
     * @param {Vector3=} [properties] Properties to set
     * @returns {Vector3} Vector3 instance
     */
  Vector3.create = function create (properties) {
    return new Vector3(properties)
  }

  /**
     * Encodes the specified Vector3 message. Does not implicitly {@link Vector3.verify|verify} messages.
     * @function encode
     * @memberof Vector3
     * @static
     * @param {Vector3} message Vector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Vector3.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    writer.uint32(/* id 1, wireType 5 = */13).float(message.x)
    writer.uint32(/* id 2, wireType 5 = */21).float(message.y)
    writer.uint32(/* id 3, wireType 5 = */29).float(message.z)
    return writer
  }

  /**
     * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link Vector3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Vector3
     * @static
     * @param {Vector3} message Vector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Vector3.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Vector3 message from the specified reader or buffer.
     * @function decode
     * @memberof Vector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Vector3} Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Vector3.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    let end = length === undefined ? reader.len : reader.pos + length
    let message = new $root.Vector3()
    while (reader.pos < end) {
      let tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float()
          break
        case 2:
          message.y = reader.float()
          break
        case 3:
          message.z = reader.float()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('x')) { throw $util.ProtocolError("missing required 'x'", { instance: message }) }
    if (!message.hasOwnProperty('y')) { throw $util.ProtocolError("missing required 'y'", { instance: message }) }
    if (!message.hasOwnProperty('z')) { throw $util.ProtocolError("missing required 'z'", { instance: message }) }
    return message
  }

  /**
     * Decodes a Vector3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Vector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Vector3} Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Vector3.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Vector3 message.
     * @function verify
     * @memberof Vector3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Vector3.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (typeof message.x !== 'number') { return 'x: number expected' }
    if (typeof message.y !== 'number') { return 'y: number expected' }
    if (typeof message.z !== 'number') { return 'z: number expected' }
    return null
  }

  /**
     * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Vector3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Vector3} Vector3
     */
  Vector3.fromObject = function fromObject (object) {
    if (object instanceof $root.Vector3) { return object }
    let message = new $root.Vector3()
    if (object.x != null) { message.x = Number(object.x) }
    if (object.y != null) { message.y = Number(object.y) }
    if (object.z != null) { message.z = Number(object.z) }
    return message
  }

  /**
     * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Vector3
     * @static
     * @param {Vector3} message Vector3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Vector3.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    let object = {}
    if (options.defaults) {
      object.x = 0
      object.y = 0
      object.z = 0
    }
    if (message.x != null && message.hasOwnProperty('x')) { object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x }
    if (message.y != null && message.hasOwnProperty('y')) { object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y }
    if (message.z != null && message.hasOwnProperty('z')) { object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z }
    return object
  }

  /**
     * Converts this Vector3 to JSON.
     * @function toJSON
     * @memberof Vector3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Vector3.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Vector3
})()

export const PnextIO = $root.PnextIO = (() => {
  /**
     * Constructs a new PnextIO service.
     * @exports PnextIO
     * @classdesc Represents a PnextIO
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
  function PnextIO (rpcImpl, requestDelimited, responseDelimited) {
    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
  }

  (PnextIO.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PnextIO

  /**
     * Creates new PnextIO service using the specified rpc implementation.
     * @function create
     * @memberof PnextIO
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {PnextIO} RPC service. Useful where requests and/or responses are streamed.
     */
  PnextIO.create = function create (rpcImpl, requestDelimited, responseDelimited) {
    return new this(rpcImpl, requestDelimited, responseDelimited)
  }

  /**
     * Callback as used by {@link PnextIO#getTree}.
     * @memberof PnextIO
     * @typedef getTreeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Tree} [response] Tree
     */

  /**
     * Calls getTree.
     * @function getTree
     * @memberof PnextIO
     * @instance
     * @param {ITreeQuery} request TreeQuery message or plain object
     * @param {PnextIO.getTreeCallback} callback Node-style callback called with the error, if any, and Tree
     * @returns {undefined}
     * @variation 1
     */
  PnextIO.prototype.getTree = function getTree (request, callback) {
    return this.rpcCall(getTree, $root.TreeQuery, $root.Tree, request, callback)
  }

  /**
     * Calls getTree.
     * @function getTree
     * @memberof PnextIO
     * @instance
     * @param {ITreeQuery} request TreeQuery message or plain object
     * @returns {Promise<Tree>} Promise
     * @variation 2
     */

  /**
     * Callback as used by {@link PnextIO#queryPoints}.
     * @memberof PnextIO
     * @typedef queryPointsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {QueryResponse} [response] QueryResponse
     */

  /**
     * Calls queryPoints.
     * @function queryPoints
     * @memberof PnextIO
     * @instance
     * @param {IQuery} request Query message or plain object
     * @param {PnextIO.queryPointsCallback} callback Node-style callback called with the error, if any, and QueryResponse
     * @returns {undefined}
     * @variation 1
     */
  PnextIO.prototype.queryPoints = function queryPoints (request, callback) {
    return this.rpcCall(queryPoints, $root.Query, $root.QueryResponse, request, callback)
  }

  /**
     * Calls queryPoints.
     * @function queryPoints
     * @memberof PnextIO
     * @instance
     * @param {IQuery} request Query message or plain object
     * @returns {Promise<QueryResponse>} Promise
     * @variation 2
     */

  /**
     * Calls getNodes.
     * @function getNodes
     * @memberof PnextIO
     * @instance
     * @param {INodeRequest} request NodeRequest message or plain object
     * @returns {Readable}
     * @variation 1
     */
  PnextIO.prototype.getNodes = function getNodes (request) {
    return this.rpcCall(getNodes, $root.NodeRequest, $root.NodeData, request)
  }

  /**
     * Calls getNodes.
     * @function getNodes
     * @memberof PnextIO
     * @instance
     * @param {INodeRequest} request NodeRequest message or plain object
     * @returns {Promise<NodeData>} Promise
     * @variation 2
     */

  return PnextIO
})()
