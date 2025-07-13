
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceFeature
 * 
 */
export type ServiceFeature = $Result.DefaultSelection<Prisma.$ServiceFeaturePayload>
/**
 * Model ServiceBenefit
 * 
 */
export type ServiceBenefit = $Result.DefaultSelection<Prisma.$ServiceBenefitPayload>
/**
 * Model ServicePurpose
 * 
 */
export type ServicePurpose = $Result.DefaultSelection<Prisma.$ServicePurposePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ConsultationRequest
 * 
 */
export type ConsultationRequest = $Result.DefaultSelection<Prisma.$ConsultationRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceFeature`: Exposes CRUD operations for the **ServiceFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceFeatures
    * const serviceFeatures = await prisma.serviceFeature.findMany()
    * ```
    */
  get serviceFeature(): Prisma.ServiceFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceBenefit`: Exposes CRUD operations for the **ServiceBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceBenefits
    * const serviceBenefits = await prisma.serviceBenefit.findMany()
    * ```
    */
  get serviceBenefit(): Prisma.ServiceBenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicePurpose`: Exposes CRUD operations for the **ServicePurpose** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicePurposes
    * const servicePurposes = await prisma.servicePurpose.findMany()
    * ```
    */
  get servicePurpose(): Prisma.ServicePurposeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationRequest`: Exposes CRUD operations for the **ConsultationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationRequests
    * const consultationRequests = await prisma.consultationRequest.findMany()
    * ```
    */
  get consultationRequest(): Prisma.ConsultationRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Service: 'Service',
    ServiceFeature: 'ServiceFeature',
    ServiceBenefit: 'ServiceBenefit',
    ServicePurpose: 'ServicePurpose',
    Review: 'Review',
    ConsultationRequest: 'ConsultationRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "service" | "serviceFeature" | "serviceBenefit" | "servicePurpose" | "review" | "consultationRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceFeature: {
        payload: Prisma.$ServiceFeaturePayload<ExtArgs>
        fields: Prisma.ServiceFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          findFirst: {
            args: Prisma.ServiceFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          findMany: {
            args: Prisma.ServiceFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>[]
          }
          create: {
            args: Prisma.ServiceFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          createMany: {
            args: Prisma.ServiceFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>[]
          }
          delete: {
            args: Prisma.ServiceFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          update: {
            args: Prisma.ServiceFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          deleteMany: {
            args: Prisma.ServiceFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>[]
          }
          upsert: {
            args: Prisma.ServiceFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          aggregate: {
            args: Prisma.ServiceFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceFeature>
          }
          groupBy: {
            args: Prisma.ServiceFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceFeatureCountAggregateOutputType> | number
          }
        }
      }
      ServiceBenefit: {
        payload: Prisma.$ServiceBenefitPayload<ExtArgs>
        fields: Prisma.ServiceBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>
          }
          findFirst: {
            args: Prisma.ServiceBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>
          }
          findMany: {
            args: Prisma.ServiceBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>[]
          }
          create: {
            args: Prisma.ServiceBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>
          }
          createMany: {
            args: Prisma.ServiceBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>[]
          }
          delete: {
            args: Prisma.ServiceBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>
          }
          update: {
            args: Prisma.ServiceBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>
          }
          deleteMany: {
            args: Prisma.ServiceBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>[]
          }
          upsert: {
            args: Prisma.ServiceBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceBenefitPayload>
          }
          aggregate: {
            args: Prisma.ServiceBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceBenefit>
          }
          groupBy: {
            args: Prisma.ServiceBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceBenefitCountAggregateOutputType> | number
          }
        }
      }
      ServicePurpose: {
        payload: Prisma.$ServicePurposePayload<ExtArgs>
        fields: Prisma.ServicePurposeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicePurposeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicePurposeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>
          }
          findFirst: {
            args: Prisma.ServicePurposeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicePurposeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>
          }
          findMany: {
            args: Prisma.ServicePurposeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>[]
          }
          create: {
            args: Prisma.ServicePurposeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>
          }
          createMany: {
            args: Prisma.ServicePurposeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicePurposeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>[]
          }
          delete: {
            args: Prisma.ServicePurposeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>
          }
          update: {
            args: Prisma.ServicePurposeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>
          }
          deleteMany: {
            args: Prisma.ServicePurposeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicePurposeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicePurposeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>[]
          }
          upsert: {
            args: Prisma.ServicePurposeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePurposePayload>
          }
          aggregate: {
            args: Prisma.ServicePurposeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicePurpose>
          }
          groupBy: {
            args: Prisma.ServicePurposeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicePurposeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicePurposeCountArgs<ExtArgs>
            result: $Utils.Optional<ServicePurposeCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ConsultationRequest: {
        payload: Prisma.$ConsultationRequestPayload<ExtArgs>
        fields: Prisma.ConsultationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          findFirst: {
            args: Prisma.ConsultationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          findMany: {
            args: Prisma.ConsultationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>[]
          }
          create: {
            args: Prisma.ConsultationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          createMany: {
            args: Prisma.ConsultationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>[]
          }
          delete: {
            args: Prisma.ConsultationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          update: {
            args: Prisma.ConsultationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          aggregate: {
            args: Prisma.ConsultationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationRequest>
          }
          groupBy: {
            args: Prisma.ConsultationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    service?: ServiceOmit
    serviceFeature?: ServiceFeatureOmit
    serviceBenefit?: ServiceBenefitOmit
    servicePurpose?: ServicePurposeOmit
    review?: ReviewOmit
    consultationRequest?: ConsultationRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    services: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | AdminCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    features: number
    benefits: number
    purposes: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | ServiceCountOutputTypeCountFeaturesArgs
    benefits?: boolean | ServiceCountOutputTypeCountBenefitsArgs
    purposes?: boolean | ServiceCountOutputTypeCountPurposesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFeatureWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceBenefitWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountPurposesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePurposeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    services?: boolean | Admin$servicesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Admin$servicesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Admin$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.services
   */
  export type Admin$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
    days: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
    days: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    days: number | null
    imageUrl: string | null
    keywords: string | null
    adminId: string | null
    createdAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    days: number | null
    imageUrl: string | null
    keywords: string | null
    adminId: string | null
    createdAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    days: number
    imageUrl: number
    keywords: number
    adminId: number
    createdAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    days?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    days?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    days?: true
    imageUrl?: true
    keywords?: true
    adminId?: true
    createdAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    days?: true
    imageUrl?: true
    keywords?: true
    adminId?: true
    createdAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    days?: true
    imageUrl?: true
    keywords?: true
    adminId?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    description: string | null
    price: number
    days: number
    imageUrl: string | null
    keywords: string | null
    adminId: string
    createdAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    days?: boolean
    imageUrl?: boolean
    keywords?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    features?: boolean | Service$featuresArgs<ExtArgs>
    benefits?: boolean | Service$benefitsArgs<ExtArgs>
    purposes?: boolean | Service$purposesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    days?: boolean
    imageUrl?: boolean
    keywords?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    days?: boolean
    imageUrl?: boolean
    keywords?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    days?: boolean
    imageUrl?: boolean
    keywords?: boolean
    adminId?: boolean
    createdAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "days" | "imageUrl" | "keywords" | "adminId" | "createdAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    features?: boolean | Service$featuresArgs<ExtArgs>
    benefits?: boolean | Service$benefitsArgs<ExtArgs>
    purposes?: boolean | Service$purposesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      features: Prisma.$ServiceFeaturePayload<ExtArgs>[]
      benefits: Prisma.$ServiceBenefitPayload<ExtArgs>[]
      purposes: Prisma.$ServicePurposePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      price: number
      days: number
      imageUrl: string | null
      keywords: string | null
      adminId: string
      createdAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    features<T extends Service$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Service$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    benefits<T extends Service$benefitsArgs<ExtArgs> = {}>(args?: Subset<T, Service$benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purposes<T extends Service$purposesArgs<ExtArgs> = {}>(args?: Subset<T, Service$purposesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly days: FieldRef<"Service", 'Int'>
    readonly imageUrl: FieldRef<"Service", 'String'>
    readonly keywords: FieldRef<"Service", 'String'>
    readonly adminId: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.features
   */
  export type Service$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    where?: ServiceFeatureWhereInput
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    cursor?: ServiceFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * Service.benefits
   */
  export type Service$benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    where?: ServiceBenefitWhereInput
    orderBy?: ServiceBenefitOrderByWithRelationInput | ServiceBenefitOrderByWithRelationInput[]
    cursor?: ServiceBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceBenefitScalarFieldEnum | ServiceBenefitScalarFieldEnum[]
  }

  /**
   * Service.purposes
   */
  export type Service$purposesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    where?: ServicePurposeWhereInput
    orderBy?: ServicePurposeOrderByWithRelationInput | ServicePurposeOrderByWithRelationInput[]
    cursor?: ServicePurposeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePurposeScalarFieldEnum | ServicePurposeScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceFeature
   */

  export type AggregateServiceFeature = {
    _count: ServiceFeatureCountAggregateOutputType | null
    _min: ServiceFeatureMinAggregateOutputType | null
    _max: ServiceFeatureMaxAggregateOutputType | null
  }

  export type ServiceFeatureMinAggregateOutputType = {
    id: string | null
    name: string | null
    serviceId: string | null
  }

  export type ServiceFeatureMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serviceId: string | null
  }

  export type ServiceFeatureCountAggregateOutputType = {
    id: number
    name: number
    serviceId: number
    _all: number
  }


  export type ServiceFeatureMinAggregateInputType = {
    id?: true
    name?: true
    serviceId?: true
  }

  export type ServiceFeatureMaxAggregateInputType = {
    id?: true
    name?: true
    serviceId?: true
  }

  export type ServiceFeatureCountAggregateInputType = {
    id?: true
    name?: true
    serviceId?: true
    _all?: true
  }

  export type ServiceFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFeature to aggregate.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceFeatures
    **/
    _count?: true | ServiceFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceFeatureMaxAggregateInputType
  }

  export type GetServiceFeatureAggregateType<T extends ServiceFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceFeature[P]>
      : GetScalarType<T[P], AggregateServiceFeature[P]>
  }




  export type ServiceFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFeatureWhereInput
    orderBy?: ServiceFeatureOrderByWithAggregationInput | ServiceFeatureOrderByWithAggregationInput[]
    by: ServiceFeatureScalarFieldEnum[] | ServiceFeatureScalarFieldEnum
    having?: ServiceFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceFeatureCountAggregateInputType | true
    _min?: ServiceFeatureMinAggregateInputType
    _max?: ServiceFeatureMaxAggregateInputType
  }

  export type ServiceFeatureGroupByOutputType = {
    id: string
    name: string
    serviceId: string
    _count: ServiceFeatureCountAggregateOutputType | null
    _min: ServiceFeatureMinAggregateOutputType | null
    _max: ServiceFeatureMaxAggregateOutputType | null
  }

  type GetServiceFeatureGroupByPayload<T extends ServiceFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceFeatureGroupByOutputType[P]>
        }
      >
    >


  export type ServiceFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFeature"]>

  export type ServiceFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFeature"]>

  export type ServiceFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFeature"]>

  export type ServiceFeatureSelectScalar = {
    id?: boolean
    name?: boolean
    serviceId?: boolean
  }

  export type ServiceFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serviceId", ExtArgs["result"]["serviceFeature"]>
  export type ServiceFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceFeature"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serviceId: string
    }, ExtArgs["result"]["serviceFeature"]>
    composites: {}
  }

  type ServiceFeatureGetPayload<S extends boolean | null | undefined | ServiceFeatureDefaultArgs> = $Result.GetResult<Prisma.$ServiceFeaturePayload, S>

  type ServiceFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceFeatureCountAggregateInputType | true
    }

  export interface ServiceFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceFeature'], meta: { name: 'ServiceFeature' } }
    /**
     * Find zero or one ServiceFeature that matches the filter.
     * @param {ServiceFeatureFindUniqueArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFeatureFindUniqueArgs>(args: SelectSubset<T, ServiceFeatureFindUniqueArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFeatureFindUniqueOrThrowArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureFindFirstArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFeatureFindFirstArgs>(args?: SelectSubset<T, ServiceFeatureFindFirstArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureFindFirstOrThrowArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceFeatures
     * const serviceFeatures = await prisma.serviceFeature.findMany()
     * 
     * // Get first 10 ServiceFeatures
     * const serviceFeatures = await prisma.serviceFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceFeatureWithIdOnly = await prisma.serviceFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFeatureFindManyArgs>(args?: SelectSubset<T, ServiceFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceFeature.
     * @param {ServiceFeatureCreateArgs} args - Arguments to create a ServiceFeature.
     * @example
     * // Create one ServiceFeature
     * const ServiceFeature = await prisma.serviceFeature.create({
     *   data: {
     *     // ... data to create a ServiceFeature
     *   }
     * })
     * 
     */
    create<T extends ServiceFeatureCreateArgs>(args: SelectSubset<T, ServiceFeatureCreateArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceFeatures.
     * @param {ServiceFeatureCreateManyArgs} args - Arguments to create many ServiceFeatures.
     * @example
     * // Create many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceFeatureCreateManyArgs>(args?: SelectSubset<T, ServiceFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceFeatures and returns the data saved in the database.
     * @param {ServiceFeatureCreateManyAndReturnArgs} args - Arguments to create many ServiceFeatures.
     * @example
     * // Create many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceFeatures and only return the `id`
     * const serviceFeatureWithIdOnly = await prisma.serviceFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceFeature.
     * @param {ServiceFeatureDeleteArgs} args - Arguments to delete one ServiceFeature.
     * @example
     * // Delete one ServiceFeature
     * const ServiceFeature = await prisma.serviceFeature.delete({
     *   where: {
     *     // ... filter to delete one ServiceFeature
     *   }
     * })
     * 
     */
    delete<T extends ServiceFeatureDeleteArgs>(args: SelectSubset<T, ServiceFeatureDeleteArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceFeature.
     * @param {ServiceFeatureUpdateArgs} args - Arguments to update one ServiceFeature.
     * @example
     * // Update one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceFeatureUpdateArgs>(args: SelectSubset<T, ServiceFeatureUpdateArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceFeatures.
     * @param {ServiceFeatureDeleteManyArgs} args - Arguments to filter ServiceFeatures to delete.
     * @example
     * // Delete a few ServiceFeatures
     * const { count } = await prisma.serviceFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceFeatureDeleteManyArgs>(args?: SelectSubset<T, ServiceFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceFeatureUpdateManyArgs>(args: SelectSubset<T, ServiceFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceFeatures and returns the data updated in the database.
     * @param {ServiceFeatureUpdateManyAndReturnArgs} args - Arguments to update many ServiceFeatures.
     * @example
     * // Update many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceFeatures and only return the `id`
     * const serviceFeatureWithIdOnly = await prisma.serviceFeature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceFeature.
     * @param {ServiceFeatureUpsertArgs} args - Arguments to update or create a ServiceFeature.
     * @example
     * // Update or create a ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.upsert({
     *   create: {
     *     // ... data to create a ServiceFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceFeature we want to update
     *   }
     * })
     */
    upsert<T extends ServiceFeatureUpsertArgs>(args: SelectSubset<T, ServiceFeatureUpsertArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureCountArgs} args - Arguments to filter ServiceFeatures to count.
     * @example
     * // Count the number of ServiceFeatures
     * const count = await prisma.serviceFeature.count({
     *   where: {
     *     // ... the filter for the ServiceFeatures we want to count
     *   }
     * })
    **/
    count<T extends ServiceFeatureCountArgs>(
      args?: Subset<T, ServiceFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceFeatureAggregateArgs>(args: Subset<T, ServiceFeatureAggregateArgs>): Prisma.PrismaPromise<GetServiceFeatureAggregateType<T>>

    /**
     * Group by ServiceFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceFeatureGroupByArgs['orderBy'] }
        : { orderBy?: ServiceFeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceFeature model
   */
  readonly fields: ServiceFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceFeature model
   */
  interface ServiceFeatureFieldRefs {
    readonly id: FieldRef<"ServiceFeature", 'String'>
    readonly name: FieldRef<"ServiceFeature", 'String'>
    readonly serviceId: FieldRef<"ServiceFeature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceFeature findUnique
   */
  export type ServiceFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature findUniqueOrThrow
   */
  export type ServiceFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature findFirst
   */
  export type ServiceFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceFeatures.
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFeatures.
     */
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * ServiceFeature findFirstOrThrow
   */
  export type ServiceFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceFeatures.
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFeatures.
     */
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * ServiceFeature findMany
   */
  export type ServiceFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeatures to fetch.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceFeatures.
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * ServiceFeature create
   */
  export type ServiceFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceFeature.
     */
    data: XOR<ServiceFeatureCreateInput, ServiceFeatureUncheckedCreateInput>
  }

  /**
   * ServiceFeature createMany
   */
  export type ServiceFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceFeatures.
     */
    data: ServiceFeatureCreateManyInput | ServiceFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceFeature createManyAndReturn
   */
  export type ServiceFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceFeatures.
     */
    data: ServiceFeatureCreateManyInput | ServiceFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceFeature update
   */
  export type ServiceFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceFeature.
     */
    data: XOR<ServiceFeatureUpdateInput, ServiceFeatureUncheckedUpdateInput>
    /**
     * Choose, which ServiceFeature to update.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature updateMany
   */
  export type ServiceFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceFeatures.
     */
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyInput>
    /**
     * Filter which ServiceFeatures to update
     */
    where?: ServiceFeatureWhereInput
    /**
     * Limit how many ServiceFeatures to update.
     */
    limit?: number
  }

  /**
   * ServiceFeature updateManyAndReturn
   */
  export type ServiceFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * The data used to update ServiceFeatures.
     */
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyInput>
    /**
     * Filter which ServiceFeatures to update
     */
    where?: ServiceFeatureWhereInput
    /**
     * Limit how many ServiceFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceFeature upsert
   */
  export type ServiceFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceFeature to update in case it exists.
     */
    where: ServiceFeatureWhereUniqueInput
    /**
     * In case the ServiceFeature found by the `where` argument doesn't exist, create a new ServiceFeature with this data.
     */
    create: XOR<ServiceFeatureCreateInput, ServiceFeatureUncheckedCreateInput>
    /**
     * In case the ServiceFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceFeatureUpdateInput, ServiceFeatureUncheckedUpdateInput>
  }

  /**
   * ServiceFeature delete
   */
  export type ServiceFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter which ServiceFeature to delete.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature deleteMany
   */
  export type ServiceFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFeatures to delete
     */
    where?: ServiceFeatureWhereInput
    /**
     * Limit how many ServiceFeatures to delete.
     */
    limit?: number
  }

  /**
   * ServiceFeature without action
   */
  export type ServiceFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
  }


  /**
   * Model ServiceBenefit
   */

  export type AggregateServiceBenefit = {
    _count: ServiceBenefitCountAggregateOutputType | null
    _min: ServiceBenefitMinAggregateOutputType | null
    _max: ServiceBenefitMaxAggregateOutputType | null
  }

  export type ServiceBenefitMinAggregateOutputType = {
    id: string | null
    text: string | null
    serviceId: string | null
  }

  export type ServiceBenefitMaxAggregateOutputType = {
    id: string | null
    text: string | null
    serviceId: string | null
  }

  export type ServiceBenefitCountAggregateOutputType = {
    id: number
    text: number
    serviceId: number
    _all: number
  }


  export type ServiceBenefitMinAggregateInputType = {
    id?: true
    text?: true
    serviceId?: true
  }

  export type ServiceBenefitMaxAggregateInputType = {
    id?: true
    text?: true
    serviceId?: true
  }

  export type ServiceBenefitCountAggregateInputType = {
    id?: true
    text?: true
    serviceId?: true
    _all?: true
  }

  export type ServiceBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceBenefit to aggregate.
     */
    where?: ServiceBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceBenefits to fetch.
     */
    orderBy?: ServiceBenefitOrderByWithRelationInput | ServiceBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceBenefits
    **/
    _count?: true | ServiceBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceBenefitMaxAggregateInputType
  }

  export type GetServiceBenefitAggregateType<T extends ServiceBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceBenefit[P]>
      : GetScalarType<T[P], AggregateServiceBenefit[P]>
  }




  export type ServiceBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceBenefitWhereInput
    orderBy?: ServiceBenefitOrderByWithAggregationInput | ServiceBenefitOrderByWithAggregationInput[]
    by: ServiceBenefitScalarFieldEnum[] | ServiceBenefitScalarFieldEnum
    having?: ServiceBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceBenefitCountAggregateInputType | true
    _min?: ServiceBenefitMinAggregateInputType
    _max?: ServiceBenefitMaxAggregateInputType
  }

  export type ServiceBenefitGroupByOutputType = {
    id: string
    text: string
    serviceId: string
    _count: ServiceBenefitCountAggregateOutputType | null
    _min: ServiceBenefitMinAggregateOutputType | null
    _max: ServiceBenefitMaxAggregateOutputType | null
  }

  type GetServiceBenefitGroupByPayload<T extends ServiceBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceBenefitGroupByOutputType[P]>
        }
      >
    >


  export type ServiceBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceBenefit"]>

  export type ServiceBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceBenefit"]>

  export type ServiceBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceBenefit"]>

  export type ServiceBenefitSelectScalar = {
    id?: boolean
    text?: boolean
    serviceId?: boolean
  }

  export type ServiceBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "serviceId", ExtArgs["result"]["serviceBenefit"]>
  export type ServiceBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceBenefit"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      serviceId: string
    }, ExtArgs["result"]["serviceBenefit"]>
    composites: {}
  }

  type ServiceBenefitGetPayload<S extends boolean | null | undefined | ServiceBenefitDefaultArgs> = $Result.GetResult<Prisma.$ServiceBenefitPayload, S>

  type ServiceBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceBenefitCountAggregateInputType | true
    }

  export interface ServiceBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceBenefit'], meta: { name: 'ServiceBenefit' } }
    /**
     * Find zero or one ServiceBenefit that matches the filter.
     * @param {ServiceBenefitFindUniqueArgs} args - Arguments to find a ServiceBenefit
     * @example
     * // Get one ServiceBenefit
     * const serviceBenefit = await prisma.serviceBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceBenefitFindUniqueArgs>(args: SelectSubset<T, ServiceBenefitFindUniqueArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceBenefitFindUniqueOrThrowArgs} args - Arguments to find a ServiceBenefit
     * @example
     * // Get one ServiceBenefit
     * const serviceBenefit = await prisma.serviceBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitFindFirstArgs} args - Arguments to find a ServiceBenefit
     * @example
     * // Get one ServiceBenefit
     * const serviceBenefit = await prisma.serviceBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceBenefitFindFirstArgs>(args?: SelectSubset<T, ServiceBenefitFindFirstArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitFindFirstOrThrowArgs} args - Arguments to find a ServiceBenefit
     * @example
     * // Get one ServiceBenefit
     * const serviceBenefit = await prisma.serviceBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceBenefits
     * const serviceBenefits = await prisma.serviceBenefit.findMany()
     * 
     * // Get first 10 ServiceBenefits
     * const serviceBenefits = await prisma.serviceBenefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceBenefitWithIdOnly = await prisma.serviceBenefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceBenefitFindManyArgs>(args?: SelectSubset<T, ServiceBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceBenefit.
     * @param {ServiceBenefitCreateArgs} args - Arguments to create a ServiceBenefit.
     * @example
     * // Create one ServiceBenefit
     * const ServiceBenefit = await prisma.serviceBenefit.create({
     *   data: {
     *     // ... data to create a ServiceBenefit
     *   }
     * })
     * 
     */
    create<T extends ServiceBenefitCreateArgs>(args: SelectSubset<T, ServiceBenefitCreateArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceBenefits.
     * @param {ServiceBenefitCreateManyArgs} args - Arguments to create many ServiceBenefits.
     * @example
     * // Create many ServiceBenefits
     * const serviceBenefit = await prisma.serviceBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceBenefitCreateManyArgs>(args?: SelectSubset<T, ServiceBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceBenefits and returns the data saved in the database.
     * @param {ServiceBenefitCreateManyAndReturnArgs} args - Arguments to create many ServiceBenefits.
     * @example
     * // Create many ServiceBenefits
     * const serviceBenefit = await prisma.serviceBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceBenefits and only return the `id`
     * const serviceBenefitWithIdOnly = await prisma.serviceBenefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceBenefit.
     * @param {ServiceBenefitDeleteArgs} args - Arguments to delete one ServiceBenefit.
     * @example
     * // Delete one ServiceBenefit
     * const ServiceBenefit = await prisma.serviceBenefit.delete({
     *   where: {
     *     // ... filter to delete one ServiceBenefit
     *   }
     * })
     * 
     */
    delete<T extends ServiceBenefitDeleteArgs>(args: SelectSubset<T, ServiceBenefitDeleteArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceBenefit.
     * @param {ServiceBenefitUpdateArgs} args - Arguments to update one ServiceBenefit.
     * @example
     * // Update one ServiceBenefit
     * const serviceBenefit = await prisma.serviceBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceBenefitUpdateArgs>(args: SelectSubset<T, ServiceBenefitUpdateArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceBenefits.
     * @param {ServiceBenefitDeleteManyArgs} args - Arguments to filter ServiceBenefits to delete.
     * @example
     * // Delete a few ServiceBenefits
     * const { count } = await prisma.serviceBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceBenefitDeleteManyArgs>(args?: SelectSubset<T, ServiceBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceBenefits
     * const serviceBenefit = await prisma.serviceBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceBenefitUpdateManyArgs>(args: SelectSubset<T, ServiceBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceBenefits and returns the data updated in the database.
     * @param {ServiceBenefitUpdateManyAndReturnArgs} args - Arguments to update many ServiceBenefits.
     * @example
     * // Update many ServiceBenefits
     * const serviceBenefit = await prisma.serviceBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceBenefits and only return the `id`
     * const serviceBenefitWithIdOnly = await prisma.serviceBenefit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceBenefit.
     * @param {ServiceBenefitUpsertArgs} args - Arguments to update or create a ServiceBenefit.
     * @example
     * // Update or create a ServiceBenefit
     * const serviceBenefit = await prisma.serviceBenefit.upsert({
     *   create: {
     *     // ... data to create a ServiceBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceBenefit we want to update
     *   }
     * })
     */
    upsert<T extends ServiceBenefitUpsertArgs>(args: SelectSubset<T, ServiceBenefitUpsertArgs<ExtArgs>>): Prisma__ServiceBenefitClient<$Result.GetResult<Prisma.$ServiceBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitCountArgs} args - Arguments to filter ServiceBenefits to count.
     * @example
     * // Count the number of ServiceBenefits
     * const count = await prisma.serviceBenefit.count({
     *   where: {
     *     // ... the filter for the ServiceBenefits we want to count
     *   }
     * })
    **/
    count<T extends ServiceBenefitCountArgs>(
      args?: Subset<T, ServiceBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceBenefitAggregateArgs>(args: Subset<T, ServiceBenefitAggregateArgs>): Prisma.PrismaPromise<GetServiceBenefitAggregateType<T>>

    /**
     * Group by ServiceBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceBenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceBenefitGroupByArgs['orderBy'] }
        : { orderBy?: ServiceBenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceBenefit model
   */
  readonly fields: ServiceBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceBenefit model
   */
  interface ServiceBenefitFieldRefs {
    readonly id: FieldRef<"ServiceBenefit", 'String'>
    readonly text: FieldRef<"ServiceBenefit", 'String'>
    readonly serviceId: FieldRef<"ServiceBenefit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceBenefit findUnique
   */
  export type ServiceBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * Filter, which ServiceBenefit to fetch.
     */
    where: ServiceBenefitWhereUniqueInput
  }

  /**
   * ServiceBenefit findUniqueOrThrow
   */
  export type ServiceBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * Filter, which ServiceBenefit to fetch.
     */
    where: ServiceBenefitWhereUniqueInput
  }

  /**
   * ServiceBenefit findFirst
   */
  export type ServiceBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * Filter, which ServiceBenefit to fetch.
     */
    where?: ServiceBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceBenefits to fetch.
     */
    orderBy?: ServiceBenefitOrderByWithRelationInput | ServiceBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceBenefits.
     */
    cursor?: ServiceBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceBenefits.
     */
    distinct?: ServiceBenefitScalarFieldEnum | ServiceBenefitScalarFieldEnum[]
  }

  /**
   * ServiceBenefit findFirstOrThrow
   */
  export type ServiceBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * Filter, which ServiceBenefit to fetch.
     */
    where?: ServiceBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceBenefits to fetch.
     */
    orderBy?: ServiceBenefitOrderByWithRelationInput | ServiceBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceBenefits.
     */
    cursor?: ServiceBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceBenefits.
     */
    distinct?: ServiceBenefitScalarFieldEnum | ServiceBenefitScalarFieldEnum[]
  }

  /**
   * ServiceBenefit findMany
   */
  export type ServiceBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * Filter, which ServiceBenefits to fetch.
     */
    where?: ServiceBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceBenefits to fetch.
     */
    orderBy?: ServiceBenefitOrderByWithRelationInput | ServiceBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceBenefits.
     */
    cursor?: ServiceBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceBenefits.
     */
    skip?: number
    distinct?: ServiceBenefitScalarFieldEnum | ServiceBenefitScalarFieldEnum[]
  }

  /**
   * ServiceBenefit create
   */
  export type ServiceBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceBenefit.
     */
    data: XOR<ServiceBenefitCreateInput, ServiceBenefitUncheckedCreateInput>
  }

  /**
   * ServiceBenefit createMany
   */
  export type ServiceBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceBenefits.
     */
    data: ServiceBenefitCreateManyInput | ServiceBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceBenefit createManyAndReturn
   */
  export type ServiceBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceBenefits.
     */
    data: ServiceBenefitCreateManyInput | ServiceBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceBenefit update
   */
  export type ServiceBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceBenefit.
     */
    data: XOR<ServiceBenefitUpdateInput, ServiceBenefitUncheckedUpdateInput>
    /**
     * Choose, which ServiceBenefit to update.
     */
    where: ServiceBenefitWhereUniqueInput
  }

  /**
   * ServiceBenefit updateMany
   */
  export type ServiceBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceBenefits.
     */
    data: XOR<ServiceBenefitUpdateManyMutationInput, ServiceBenefitUncheckedUpdateManyInput>
    /**
     * Filter which ServiceBenefits to update
     */
    where?: ServiceBenefitWhereInput
    /**
     * Limit how many ServiceBenefits to update.
     */
    limit?: number
  }

  /**
   * ServiceBenefit updateManyAndReturn
   */
  export type ServiceBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * The data used to update ServiceBenefits.
     */
    data: XOR<ServiceBenefitUpdateManyMutationInput, ServiceBenefitUncheckedUpdateManyInput>
    /**
     * Filter which ServiceBenefits to update
     */
    where?: ServiceBenefitWhereInput
    /**
     * Limit how many ServiceBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceBenefit upsert
   */
  export type ServiceBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceBenefit to update in case it exists.
     */
    where: ServiceBenefitWhereUniqueInput
    /**
     * In case the ServiceBenefit found by the `where` argument doesn't exist, create a new ServiceBenefit with this data.
     */
    create: XOR<ServiceBenefitCreateInput, ServiceBenefitUncheckedCreateInput>
    /**
     * In case the ServiceBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceBenefitUpdateInput, ServiceBenefitUncheckedUpdateInput>
  }

  /**
   * ServiceBenefit delete
   */
  export type ServiceBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
    /**
     * Filter which ServiceBenefit to delete.
     */
    where: ServiceBenefitWhereUniqueInput
  }

  /**
   * ServiceBenefit deleteMany
   */
  export type ServiceBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceBenefits to delete
     */
    where?: ServiceBenefitWhereInput
    /**
     * Limit how many ServiceBenefits to delete.
     */
    limit?: number
  }

  /**
   * ServiceBenefit without action
   */
  export type ServiceBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceBenefit
     */
    select?: ServiceBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceBenefit
     */
    omit?: ServiceBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceBenefitInclude<ExtArgs> | null
  }


  /**
   * Model ServicePurpose
   */

  export type AggregateServicePurpose = {
    _count: ServicePurposeCountAggregateOutputType | null
    _min: ServicePurposeMinAggregateOutputType | null
    _max: ServicePurposeMaxAggregateOutputType | null
  }

  export type ServicePurposeMinAggregateOutputType = {
    id: string | null
    action: string | null
    detail: string | null
    serviceId: string | null
  }

  export type ServicePurposeMaxAggregateOutputType = {
    id: string | null
    action: string | null
    detail: string | null
    serviceId: string | null
  }

  export type ServicePurposeCountAggregateOutputType = {
    id: number
    action: number
    detail: number
    serviceId: number
    _all: number
  }


  export type ServicePurposeMinAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    serviceId?: true
  }

  export type ServicePurposeMaxAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    serviceId?: true
  }

  export type ServicePurposeCountAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    serviceId?: true
    _all?: true
  }

  export type ServicePurposeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePurpose to aggregate.
     */
    where?: ServicePurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePurposes to fetch.
     */
    orderBy?: ServicePurposeOrderByWithRelationInput | ServicePurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicePurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicePurposes
    **/
    _count?: true | ServicePurposeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicePurposeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicePurposeMaxAggregateInputType
  }

  export type GetServicePurposeAggregateType<T extends ServicePurposeAggregateArgs> = {
        [P in keyof T & keyof AggregateServicePurpose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicePurpose[P]>
      : GetScalarType<T[P], AggregateServicePurpose[P]>
  }




  export type ServicePurposeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePurposeWhereInput
    orderBy?: ServicePurposeOrderByWithAggregationInput | ServicePurposeOrderByWithAggregationInput[]
    by: ServicePurposeScalarFieldEnum[] | ServicePurposeScalarFieldEnum
    having?: ServicePurposeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicePurposeCountAggregateInputType | true
    _min?: ServicePurposeMinAggregateInputType
    _max?: ServicePurposeMaxAggregateInputType
  }

  export type ServicePurposeGroupByOutputType = {
    id: string
    action: string
    detail: string
    serviceId: string
    _count: ServicePurposeCountAggregateOutputType | null
    _min: ServicePurposeMinAggregateOutputType | null
    _max: ServicePurposeMaxAggregateOutputType | null
  }

  type GetServicePurposeGroupByPayload<T extends ServicePurposeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicePurposeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicePurposeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicePurposeGroupByOutputType[P]>
            : GetScalarType<T[P], ServicePurposeGroupByOutputType[P]>
        }
      >
    >


  export type ServicePurposeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePurpose"]>

  export type ServicePurposeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePurpose"]>

  export type ServicePurposeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePurpose"]>

  export type ServicePurposeSelectScalar = {
    id?: boolean
    action?: boolean
    detail?: boolean
    serviceId?: boolean
  }

  export type ServicePurposeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "detail" | "serviceId", ExtArgs["result"]["servicePurpose"]>
  export type ServicePurposeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServicePurposeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServicePurposeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServicePurposePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicePurpose"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      detail: string
      serviceId: string
    }, ExtArgs["result"]["servicePurpose"]>
    composites: {}
  }

  type ServicePurposeGetPayload<S extends boolean | null | undefined | ServicePurposeDefaultArgs> = $Result.GetResult<Prisma.$ServicePurposePayload, S>

  type ServicePurposeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicePurposeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicePurposeCountAggregateInputType | true
    }

  export interface ServicePurposeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicePurpose'], meta: { name: 'ServicePurpose' } }
    /**
     * Find zero or one ServicePurpose that matches the filter.
     * @param {ServicePurposeFindUniqueArgs} args - Arguments to find a ServicePurpose
     * @example
     * // Get one ServicePurpose
     * const servicePurpose = await prisma.servicePurpose.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicePurposeFindUniqueArgs>(args: SelectSubset<T, ServicePurposeFindUniqueArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicePurpose that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicePurposeFindUniqueOrThrowArgs} args - Arguments to find a ServicePurpose
     * @example
     * // Get one ServicePurpose
     * const servicePurpose = await prisma.servicePurpose.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicePurposeFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicePurposeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePurpose that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeFindFirstArgs} args - Arguments to find a ServicePurpose
     * @example
     * // Get one ServicePurpose
     * const servicePurpose = await prisma.servicePurpose.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicePurposeFindFirstArgs>(args?: SelectSubset<T, ServicePurposeFindFirstArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePurpose that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeFindFirstOrThrowArgs} args - Arguments to find a ServicePurpose
     * @example
     * // Get one ServicePurpose
     * const servicePurpose = await prisma.servicePurpose.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicePurposeFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicePurposeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicePurposes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicePurposes
     * const servicePurposes = await prisma.servicePurpose.findMany()
     * 
     * // Get first 10 ServicePurposes
     * const servicePurposes = await prisma.servicePurpose.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicePurposeWithIdOnly = await prisma.servicePurpose.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicePurposeFindManyArgs>(args?: SelectSubset<T, ServicePurposeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicePurpose.
     * @param {ServicePurposeCreateArgs} args - Arguments to create a ServicePurpose.
     * @example
     * // Create one ServicePurpose
     * const ServicePurpose = await prisma.servicePurpose.create({
     *   data: {
     *     // ... data to create a ServicePurpose
     *   }
     * })
     * 
     */
    create<T extends ServicePurposeCreateArgs>(args: SelectSubset<T, ServicePurposeCreateArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicePurposes.
     * @param {ServicePurposeCreateManyArgs} args - Arguments to create many ServicePurposes.
     * @example
     * // Create many ServicePurposes
     * const servicePurpose = await prisma.servicePurpose.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicePurposeCreateManyArgs>(args?: SelectSubset<T, ServicePurposeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicePurposes and returns the data saved in the database.
     * @param {ServicePurposeCreateManyAndReturnArgs} args - Arguments to create many ServicePurposes.
     * @example
     * // Create many ServicePurposes
     * const servicePurpose = await prisma.servicePurpose.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicePurposes and only return the `id`
     * const servicePurposeWithIdOnly = await prisma.servicePurpose.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicePurposeCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicePurposeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicePurpose.
     * @param {ServicePurposeDeleteArgs} args - Arguments to delete one ServicePurpose.
     * @example
     * // Delete one ServicePurpose
     * const ServicePurpose = await prisma.servicePurpose.delete({
     *   where: {
     *     // ... filter to delete one ServicePurpose
     *   }
     * })
     * 
     */
    delete<T extends ServicePurposeDeleteArgs>(args: SelectSubset<T, ServicePurposeDeleteArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicePurpose.
     * @param {ServicePurposeUpdateArgs} args - Arguments to update one ServicePurpose.
     * @example
     * // Update one ServicePurpose
     * const servicePurpose = await prisma.servicePurpose.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicePurposeUpdateArgs>(args: SelectSubset<T, ServicePurposeUpdateArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicePurposes.
     * @param {ServicePurposeDeleteManyArgs} args - Arguments to filter ServicePurposes to delete.
     * @example
     * // Delete a few ServicePurposes
     * const { count } = await prisma.servicePurpose.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicePurposeDeleteManyArgs>(args?: SelectSubset<T, ServicePurposeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePurposes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicePurposes
     * const servicePurpose = await prisma.servicePurpose.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicePurposeUpdateManyArgs>(args: SelectSubset<T, ServicePurposeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePurposes and returns the data updated in the database.
     * @param {ServicePurposeUpdateManyAndReturnArgs} args - Arguments to update many ServicePurposes.
     * @example
     * // Update many ServicePurposes
     * const servicePurpose = await prisma.servicePurpose.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicePurposes and only return the `id`
     * const servicePurposeWithIdOnly = await prisma.servicePurpose.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicePurposeUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicePurposeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicePurpose.
     * @param {ServicePurposeUpsertArgs} args - Arguments to update or create a ServicePurpose.
     * @example
     * // Update or create a ServicePurpose
     * const servicePurpose = await prisma.servicePurpose.upsert({
     *   create: {
     *     // ... data to create a ServicePurpose
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicePurpose we want to update
     *   }
     * })
     */
    upsert<T extends ServicePurposeUpsertArgs>(args: SelectSubset<T, ServicePurposeUpsertArgs<ExtArgs>>): Prisma__ServicePurposeClient<$Result.GetResult<Prisma.$ServicePurposePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicePurposes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeCountArgs} args - Arguments to filter ServicePurposes to count.
     * @example
     * // Count the number of ServicePurposes
     * const count = await prisma.servicePurpose.count({
     *   where: {
     *     // ... the filter for the ServicePurposes we want to count
     *   }
     * })
    **/
    count<T extends ServicePurposeCountArgs>(
      args?: Subset<T, ServicePurposeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicePurposeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicePurpose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicePurposeAggregateArgs>(args: Subset<T, ServicePurposeAggregateArgs>): Prisma.PrismaPromise<GetServicePurposeAggregateType<T>>

    /**
     * Group by ServicePurpose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePurposeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicePurposeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicePurposeGroupByArgs['orderBy'] }
        : { orderBy?: ServicePurposeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicePurposeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicePurposeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicePurpose model
   */
  readonly fields: ServicePurposeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicePurpose.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicePurposeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicePurpose model
   */
  interface ServicePurposeFieldRefs {
    readonly id: FieldRef<"ServicePurpose", 'String'>
    readonly action: FieldRef<"ServicePurpose", 'String'>
    readonly detail: FieldRef<"ServicePurpose", 'String'>
    readonly serviceId: FieldRef<"ServicePurpose", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServicePurpose findUnique
   */
  export type ServicePurposeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * Filter, which ServicePurpose to fetch.
     */
    where: ServicePurposeWhereUniqueInput
  }

  /**
   * ServicePurpose findUniqueOrThrow
   */
  export type ServicePurposeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * Filter, which ServicePurpose to fetch.
     */
    where: ServicePurposeWhereUniqueInput
  }

  /**
   * ServicePurpose findFirst
   */
  export type ServicePurposeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * Filter, which ServicePurpose to fetch.
     */
    where?: ServicePurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePurposes to fetch.
     */
    orderBy?: ServicePurposeOrderByWithRelationInput | ServicePurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePurposes.
     */
    cursor?: ServicePurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePurposes.
     */
    distinct?: ServicePurposeScalarFieldEnum | ServicePurposeScalarFieldEnum[]
  }

  /**
   * ServicePurpose findFirstOrThrow
   */
  export type ServicePurposeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * Filter, which ServicePurpose to fetch.
     */
    where?: ServicePurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePurposes to fetch.
     */
    orderBy?: ServicePurposeOrderByWithRelationInput | ServicePurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePurposes.
     */
    cursor?: ServicePurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePurposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePurposes.
     */
    distinct?: ServicePurposeScalarFieldEnum | ServicePurposeScalarFieldEnum[]
  }

  /**
   * ServicePurpose findMany
   */
  export type ServicePurposeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * Filter, which ServicePurposes to fetch.
     */
    where?: ServicePurposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePurposes to fetch.
     */
    orderBy?: ServicePurposeOrderByWithRelationInput | ServicePurposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicePurposes.
     */
    cursor?: ServicePurposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePurposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePurposes.
     */
    skip?: number
    distinct?: ServicePurposeScalarFieldEnum | ServicePurposeScalarFieldEnum[]
  }

  /**
   * ServicePurpose create
   */
  export type ServicePurposeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicePurpose.
     */
    data: XOR<ServicePurposeCreateInput, ServicePurposeUncheckedCreateInput>
  }

  /**
   * ServicePurpose createMany
   */
  export type ServicePurposeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicePurposes.
     */
    data: ServicePurposeCreateManyInput | ServicePurposeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicePurpose createManyAndReturn
   */
  export type ServicePurposeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * The data used to create many ServicePurposes.
     */
    data: ServicePurposeCreateManyInput | ServicePurposeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePurpose update
   */
  export type ServicePurposeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicePurpose.
     */
    data: XOR<ServicePurposeUpdateInput, ServicePurposeUncheckedUpdateInput>
    /**
     * Choose, which ServicePurpose to update.
     */
    where: ServicePurposeWhereUniqueInput
  }

  /**
   * ServicePurpose updateMany
   */
  export type ServicePurposeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicePurposes.
     */
    data: XOR<ServicePurposeUpdateManyMutationInput, ServicePurposeUncheckedUpdateManyInput>
    /**
     * Filter which ServicePurposes to update
     */
    where?: ServicePurposeWhereInput
    /**
     * Limit how many ServicePurposes to update.
     */
    limit?: number
  }

  /**
   * ServicePurpose updateManyAndReturn
   */
  export type ServicePurposeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * The data used to update ServicePurposes.
     */
    data: XOR<ServicePurposeUpdateManyMutationInput, ServicePurposeUncheckedUpdateManyInput>
    /**
     * Filter which ServicePurposes to update
     */
    where?: ServicePurposeWhereInput
    /**
     * Limit how many ServicePurposes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePurpose upsert
   */
  export type ServicePurposeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicePurpose to update in case it exists.
     */
    where: ServicePurposeWhereUniqueInput
    /**
     * In case the ServicePurpose found by the `where` argument doesn't exist, create a new ServicePurpose with this data.
     */
    create: XOR<ServicePurposeCreateInput, ServicePurposeUncheckedCreateInput>
    /**
     * In case the ServicePurpose was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicePurposeUpdateInput, ServicePurposeUncheckedUpdateInput>
  }

  /**
   * ServicePurpose delete
   */
  export type ServicePurposeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
    /**
     * Filter which ServicePurpose to delete.
     */
    where: ServicePurposeWhereUniqueInput
  }

  /**
   * ServicePurpose deleteMany
   */
  export type ServicePurposeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePurposes to delete
     */
    where?: ServicePurposeWhereInput
    /**
     * Limit how many ServicePurposes to delete.
     */
    limit?: number
  }

  /**
   * ServicePurpose without action
   */
  export type ServicePurposeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePurpose
     */
    select?: ServicePurposeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePurpose
     */
    omit?: ServicePurposeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePurposeInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    text: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    text: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    name: number
    position: number
    text: number
    createdAt: number
    _all: number
  }


  export type ReviewMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    text?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    text?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    name: string
    position: string
    text: string
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    text?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    text?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    text?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "text" | "createdAt", ExtArgs["result"]["review"]>

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      position: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly name: FieldRef<"Review", 'String'>
    readonly position: FieldRef<"Review", 'String'>
    readonly text: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
  }


  /**
   * Model ConsultationRequest
   */

  export type AggregateConsultationRequest = {
    _count: ConsultationRequestCountAggregateOutputType | null
    _min: ConsultationRequestMinAggregateOutputType | null
    _max: ConsultationRequestMaxAggregateOutputType | null
  }

  export type ConsultationRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    agreed: boolean | null
    finished: boolean | null
    createdAt: Date | null
  }

  export type ConsultationRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    agreed: boolean | null
    finished: boolean | null
    createdAt: Date | null
  }

  export type ConsultationRequestCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    agreed: number
    finished: number
    createdAt: number
    _all: number
  }


  export type ConsultationRequestMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    agreed?: true
    finished?: true
    createdAt?: true
  }

  export type ConsultationRequestMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    agreed?: true
    finished?: true
    createdAt?: true
  }

  export type ConsultationRequestCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    agreed?: true
    finished?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationRequest to aggregate.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationRequests
    **/
    _count?: true | ConsultationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationRequestMaxAggregateInputType
  }

  export type GetConsultationRequestAggregateType<T extends ConsultationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationRequest[P]>
      : GetScalarType<T[P], AggregateConsultationRequest[P]>
  }




  export type ConsultationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationRequestWhereInput
    orderBy?: ConsultationRequestOrderByWithAggregationInput | ConsultationRequestOrderByWithAggregationInput[]
    by: ConsultationRequestScalarFieldEnum[] | ConsultationRequestScalarFieldEnum
    having?: ConsultationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationRequestCountAggregateInputType | true
    _min?: ConsultationRequestMinAggregateInputType
    _max?: ConsultationRequestMaxAggregateInputType
  }

  export type ConsultationRequestGroupByOutputType = {
    id: string
    name: string
    phone: string
    agreed: boolean
    finished: boolean
    createdAt: Date
    _count: ConsultationRequestCountAggregateOutputType | null
    _min: ConsultationRequestMinAggregateOutputType | null
    _max: ConsultationRequestMaxAggregateOutputType | null
  }

  type GetConsultationRequestGroupByPayload<T extends ConsultationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationRequestGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    agreed?: boolean
    finished?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultationRequest"]>

  export type ConsultationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    agreed?: boolean
    finished?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultationRequest"]>

  export type ConsultationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    agreed?: boolean
    finished?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultationRequest"]>

  export type ConsultationRequestSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    agreed?: boolean
    finished?: boolean
    createdAt?: boolean
  }

  export type ConsultationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "agreed" | "finished" | "createdAt", ExtArgs["result"]["consultationRequest"]>

  export type $ConsultationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      agreed: boolean
      finished: boolean
      createdAt: Date
    }, ExtArgs["result"]["consultationRequest"]>
    composites: {}
  }

  type ConsultationRequestGetPayload<S extends boolean | null | undefined | ConsultationRequestDefaultArgs> = $Result.GetResult<Prisma.$ConsultationRequestPayload, S>

  type ConsultationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationRequestCountAggregateInputType | true
    }

  export interface ConsultationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationRequest'], meta: { name: 'ConsultationRequest' } }
    /**
     * Find zero or one ConsultationRequest that matches the filter.
     * @param {ConsultationRequestFindUniqueArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationRequestFindUniqueArgs>(args: SelectSubset<T, ConsultationRequestFindUniqueArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationRequestFindUniqueOrThrowArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestFindFirstArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationRequestFindFirstArgs>(args?: SelectSubset<T, ConsultationRequestFindFirstArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestFindFirstOrThrowArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationRequests
     * const consultationRequests = await prisma.consultationRequest.findMany()
     * 
     * // Get first 10 ConsultationRequests
     * const consultationRequests = await prisma.consultationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationRequestWithIdOnly = await prisma.consultationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationRequestFindManyArgs>(args?: SelectSubset<T, ConsultationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationRequest.
     * @param {ConsultationRequestCreateArgs} args - Arguments to create a ConsultationRequest.
     * @example
     * // Create one ConsultationRequest
     * const ConsultationRequest = await prisma.consultationRequest.create({
     *   data: {
     *     // ... data to create a ConsultationRequest
     *   }
     * })
     * 
     */
    create<T extends ConsultationRequestCreateArgs>(args: SelectSubset<T, ConsultationRequestCreateArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationRequests.
     * @param {ConsultationRequestCreateManyArgs} args - Arguments to create many ConsultationRequests.
     * @example
     * // Create many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationRequestCreateManyArgs>(args?: SelectSubset<T, ConsultationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationRequests and returns the data saved in the database.
     * @param {ConsultationRequestCreateManyAndReturnArgs} args - Arguments to create many ConsultationRequests.
     * @example
     * // Create many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationRequests and only return the `id`
     * const consultationRequestWithIdOnly = await prisma.consultationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationRequest.
     * @param {ConsultationRequestDeleteArgs} args - Arguments to delete one ConsultationRequest.
     * @example
     * // Delete one ConsultationRequest
     * const ConsultationRequest = await prisma.consultationRequest.delete({
     *   where: {
     *     // ... filter to delete one ConsultationRequest
     *   }
     * })
     * 
     */
    delete<T extends ConsultationRequestDeleteArgs>(args: SelectSubset<T, ConsultationRequestDeleteArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationRequest.
     * @param {ConsultationRequestUpdateArgs} args - Arguments to update one ConsultationRequest.
     * @example
     * // Update one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationRequestUpdateArgs>(args: SelectSubset<T, ConsultationRequestUpdateArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationRequests.
     * @param {ConsultationRequestDeleteManyArgs} args - Arguments to filter ConsultationRequests to delete.
     * @example
     * // Delete a few ConsultationRequests
     * const { count } = await prisma.consultationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationRequestDeleteManyArgs>(args?: SelectSubset<T, ConsultationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationRequestUpdateManyArgs>(args: SelectSubset<T, ConsultationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationRequests and returns the data updated in the database.
     * @param {ConsultationRequestUpdateManyAndReturnArgs} args - Arguments to update many ConsultationRequests.
     * @example
     * // Update many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationRequests and only return the `id`
     * const consultationRequestWithIdOnly = await prisma.consultationRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationRequest.
     * @param {ConsultationRequestUpsertArgs} args - Arguments to update or create a ConsultationRequest.
     * @example
     * // Update or create a ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.upsert({
     *   create: {
     *     // ... data to create a ConsultationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationRequest we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationRequestUpsertArgs>(args: SelectSubset<T, ConsultationRequestUpsertArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestCountArgs} args - Arguments to filter ConsultationRequests to count.
     * @example
     * // Count the number of ConsultationRequests
     * const count = await prisma.consultationRequest.count({
     *   where: {
     *     // ... the filter for the ConsultationRequests we want to count
     *   }
     * })
    **/
    count<T extends ConsultationRequestCountArgs>(
      args?: Subset<T, ConsultationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationRequestAggregateArgs>(args: Subset<T, ConsultationRequestAggregateArgs>): Prisma.PrismaPromise<GetConsultationRequestAggregateType<T>>

    /**
     * Group by ConsultationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationRequestGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationRequest model
   */
  readonly fields: ConsultationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationRequest model
   */
  interface ConsultationRequestFieldRefs {
    readonly id: FieldRef<"ConsultationRequest", 'String'>
    readonly name: FieldRef<"ConsultationRequest", 'String'>
    readonly phone: FieldRef<"ConsultationRequest", 'String'>
    readonly agreed: FieldRef<"ConsultationRequest", 'Boolean'>
    readonly finished: FieldRef<"ConsultationRequest", 'Boolean'>
    readonly createdAt: FieldRef<"ConsultationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationRequest findUnique
   */
  export type ConsultationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest findUniqueOrThrow
   */
  export type ConsultationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest findFirst
   */
  export type ConsultationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationRequests.
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationRequests.
     */
    distinct?: ConsultationRequestScalarFieldEnum | ConsultationRequestScalarFieldEnum[]
  }

  /**
   * ConsultationRequest findFirstOrThrow
   */
  export type ConsultationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationRequests.
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationRequests.
     */
    distinct?: ConsultationRequestScalarFieldEnum | ConsultationRequestScalarFieldEnum[]
  }

  /**
   * ConsultationRequest findMany
   */
  export type ConsultationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequests to fetch.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationRequests.
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    distinct?: ConsultationRequestScalarFieldEnum | ConsultationRequestScalarFieldEnum[]
  }

  /**
   * ConsultationRequest create
   */
  export type ConsultationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsultationRequest.
     */
    data: XOR<ConsultationRequestCreateInput, ConsultationRequestUncheckedCreateInput>
  }

  /**
   * ConsultationRequest createMany
   */
  export type ConsultationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationRequests.
     */
    data: ConsultationRequestCreateManyInput | ConsultationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationRequest createManyAndReturn
   */
  export type ConsultationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationRequests.
     */
    data: ConsultationRequestCreateManyInput | ConsultationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationRequest update
   */
  export type ConsultationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsultationRequest.
     */
    data: XOR<ConsultationRequestUpdateInput, ConsultationRequestUncheckedUpdateInput>
    /**
     * Choose, which ConsultationRequest to update.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest updateMany
   */
  export type ConsultationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationRequests.
     */
    data: XOR<ConsultationRequestUpdateManyMutationInput, ConsultationRequestUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationRequests to update
     */
    where?: ConsultationRequestWhereInput
    /**
     * Limit how many ConsultationRequests to update.
     */
    limit?: number
  }

  /**
   * ConsultationRequest updateManyAndReturn
   */
  export type ConsultationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationRequests.
     */
    data: XOR<ConsultationRequestUpdateManyMutationInput, ConsultationRequestUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationRequests to update
     */
    where?: ConsultationRequestWhereInput
    /**
     * Limit how many ConsultationRequests to update.
     */
    limit?: number
  }

  /**
   * ConsultationRequest upsert
   */
  export type ConsultationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsultationRequest to update in case it exists.
     */
    where: ConsultationRequestWhereUniqueInput
    /**
     * In case the ConsultationRequest found by the `where` argument doesn't exist, create a new ConsultationRequest with this data.
     */
    create: XOR<ConsultationRequestCreateInput, ConsultationRequestUncheckedCreateInput>
    /**
     * In case the ConsultationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationRequestUpdateInput, ConsultationRequestUncheckedUpdateInput>
  }

  /**
   * ConsultationRequest delete
   */
  export type ConsultationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter which ConsultationRequest to delete.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest deleteMany
   */
  export type ConsultationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationRequests to delete
     */
    where?: ConsultationRequestWhereInput
    /**
     * Limit how many ConsultationRequests to delete.
     */
    limit?: number
  }

  /**
   * ConsultationRequest without action
   */
  export type ConsultationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    days: 'days',
    imageUrl: 'imageUrl',
    keywords: 'keywords',
    adminId: 'adminId',
    createdAt: 'createdAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceFeatureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serviceId: 'serviceId'
  };

  export type ServiceFeatureScalarFieldEnum = (typeof ServiceFeatureScalarFieldEnum)[keyof typeof ServiceFeatureScalarFieldEnum]


  export const ServiceBenefitScalarFieldEnum: {
    id: 'id',
    text: 'text',
    serviceId: 'serviceId'
  };

  export type ServiceBenefitScalarFieldEnum = (typeof ServiceBenefitScalarFieldEnum)[keyof typeof ServiceBenefitScalarFieldEnum]


  export const ServicePurposeScalarFieldEnum: {
    id: 'id',
    action: 'action',
    detail: 'detail',
    serviceId: 'serviceId'
  };

  export type ServicePurposeScalarFieldEnum = (typeof ServicePurposeScalarFieldEnum)[keyof typeof ServicePurposeScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ConsultationRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    agreed: 'agreed',
    finished: 'finished',
    createdAt: 'createdAt'
  };

  export type ConsultationRequestScalarFieldEnum = (typeof ConsultationRequestScalarFieldEnum)[keyof typeof ConsultationRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    services?: ServiceListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    services?: ServiceListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    days?: IntFilter<"Service"> | number
    imageUrl?: StringNullableFilter<"Service"> | string | null
    keywords?: StringNullableFilter<"Service"> | string | null
    adminId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    features?: ServiceFeatureListRelationFilter
    benefits?: ServiceBenefitListRelationFilter
    purposes?: ServicePurposeListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    days?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    features?: ServiceFeatureOrderByRelationAggregateInput
    benefits?: ServiceBenefitOrderByRelationAggregateInput
    purposes?: ServicePurposeOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    days?: IntFilter<"Service"> | number
    imageUrl?: StringNullableFilter<"Service"> | string | null
    keywords?: StringNullableFilter<"Service"> | string | null
    adminId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    features?: ServiceFeatureListRelationFilter
    benefits?: ServiceBenefitListRelationFilter
    purposes?: ServicePurposeListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    days?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: FloatWithAggregatesFilter<"Service"> | number
    days?: IntWithAggregatesFilter<"Service"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Service"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"Service"> | string | null
    adminId?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServiceFeatureWhereInput = {
    AND?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    OR?: ServiceFeatureWhereInput[]
    NOT?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    id?: StringFilter<"ServiceFeature"> | string
    name?: StringFilter<"ServiceFeature"> | string
    serviceId?: StringFilter<"ServiceFeature"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceFeatureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceId?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServiceFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    OR?: ServiceFeatureWhereInput[]
    NOT?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    name?: StringFilter<"ServiceFeature"> | string
    serviceId?: StringFilter<"ServiceFeature"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServiceFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceId?: SortOrder
    _count?: ServiceFeatureCountOrderByAggregateInput
    _max?: ServiceFeatureMaxOrderByAggregateInput
    _min?: ServiceFeatureMinOrderByAggregateInput
  }

  export type ServiceFeatureScalarWhereWithAggregatesInput = {
    AND?: ServiceFeatureScalarWhereWithAggregatesInput | ServiceFeatureScalarWhereWithAggregatesInput[]
    OR?: ServiceFeatureScalarWhereWithAggregatesInput[]
    NOT?: ServiceFeatureScalarWhereWithAggregatesInput | ServiceFeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceFeature"> | string
    name?: StringWithAggregatesFilter<"ServiceFeature"> | string
    serviceId?: StringWithAggregatesFilter<"ServiceFeature"> | string
  }

  export type ServiceBenefitWhereInput = {
    AND?: ServiceBenefitWhereInput | ServiceBenefitWhereInput[]
    OR?: ServiceBenefitWhereInput[]
    NOT?: ServiceBenefitWhereInput | ServiceBenefitWhereInput[]
    id?: StringFilter<"ServiceBenefit"> | string
    text?: StringFilter<"ServiceBenefit"> | string
    serviceId?: StringFilter<"ServiceBenefit"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceBenefitOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    serviceId?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServiceBenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceBenefitWhereInput | ServiceBenefitWhereInput[]
    OR?: ServiceBenefitWhereInput[]
    NOT?: ServiceBenefitWhereInput | ServiceBenefitWhereInput[]
    text?: StringFilter<"ServiceBenefit"> | string
    serviceId?: StringFilter<"ServiceBenefit"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServiceBenefitOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    serviceId?: SortOrder
    _count?: ServiceBenefitCountOrderByAggregateInput
    _max?: ServiceBenefitMaxOrderByAggregateInput
    _min?: ServiceBenefitMinOrderByAggregateInput
  }

  export type ServiceBenefitScalarWhereWithAggregatesInput = {
    AND?: ServiceBenefitScalarWhereWithAggregatesInput | ServiceBenefitScalarWhereWithAggregatesInput[]
    OR?: ServiceBenefitScalarWhereWithAggregatesInput[]
    NOT?: ServiceBenefitScalarWhereWithAggregatesInput | ServiceBenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceBenefit"> | string
    text?: StringWithAggregatesFilter<"ServiceBenefit"> | string
    serviceId?: StringWithAggregatesFilter<"ServiceBenefit"> | string
  }

  export type ServicePurposeWhereInput = {
    AND?: ServicePurposeWhereInput | ServicePurposeWhereInput[]
    OR?: ServicePurposeWhereInput[]
    NOT?: ServicePurposeWhereInput | ServicePurposeWhereInput[]
    id?: StringFilter<"ServicePurpose"> | string
    action?: StringFilter<"ServicePurpose"> | string
    detail?: StringFilter<"ServicePurpose"> | string
    serviceId?: StringFilter<"ServicePurpose"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServicePurposeOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    serviceId?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServicePurposeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicePurposeWhereInput | ServicePurposeWhereInput[]
    OR?: ServicePurposeWhereInput[]
    NOT?: ServicePurposeWhereInput | ServicePurposeWhereInput[]
    action?: StringFilter<"ServicePurpose"> | string
    detail?: StringFilter<"ServicePurpose"> | string
    serviceId?: StringFilter<"ServicePurpose"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServicePurposeOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    serviceId?: SortOrder
    _count?: ServicePurposeCountOrderByAggregateInput
    _max?: ServicePurposeMaxOrderByAggregateInput
    _min?: ServicePurposeMinOrderByAggregateInput
  }

  export type ServicePurposeScalarWhereWithAggregatesInput = {
    AND?: ServicePurposeScalarWhereWithAggregatesInput | ServicePurposeScalarWhereWithAggregatesInput[]
    OR?: ServicePurposeScalarWhereWithAggregatesInput[]
    NOT?: ServicePurposeScalarWhereWithAggregatesInput | ServicePurposeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServicePurpose"> | string
    action?: StringWithAggregatesFilter<"ServicePurpose"> | string
    detail?: StringWithAggregatesFilter<"ServicePurpose"> | string
    serviceId?: StringWithAggregatesFilter<"ServicePurpose"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    name?: StringFilter<"Review"> | string
    position?: StringFilter<"Review"> | string
    text?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    name?: StringFilter<"Review"> | string
    position?: StringFilter<"Review"> | string
    text?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    name?: StringWithAggregatesFilter<"Review"> | string
    position?: StringWithAggregatesFilter<"Review"> | string
    text?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ConsultationRequestWhereInput = {
    AND?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    OR?: ConsultationRequestWhereInput[]
    NOT?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    id?: StringFilter<"ConsultationRequest"> | string
    name?: StringFilter<"ConsultationRequest"> | string
    phone?: StringFilter<"ConsultationRequest"> | string
    agreed?: BoolFilter<"ConsultationRequest"> | boolean
    finished?: BoolFilter<"ConsultationRequest"> | boolean
    createdAt?: DateTimeFilter<"ConsultationRequest"> | Date | string
  }

  export type ConsultationRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    agreed?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    OR?: ConsultationRequestWhereInput[]
    NOT?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    name?: StringFilter<"ConsultationRequest"> | string
    phone?: StringFilter<"ConsultationRequest"> | string
    agreed?: BoolFilter<"ConsultationRequest"> | boolean
    finished?: BoolFilter<"ConsultationRequest"> | boolean
    createdAt?: DateTimeFilter<"ConsultationRequest"> | Date | string
  }, "id">

  export type ConsultationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    agreed?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultationRequestCountOrderByAggregateInput
    _max?: ConsultationRequestMaxOrderByAggregateInput
    _min?: ConsultationRequestMinOrderByAggregateInput
  }

  export type ConsultationRequestScalarWhereWithAggregatesInput = {
    AND?: ConsultationRequestScalarWhereWithAggregatesInput | ConsultationRequestScalarWhereWithAggregatesInput[]
    OR?: ConsultationRequestScalarWhereWithAggregatesInput[]
    NOT?: ConsultationRequestScalarWhereWithAggregatesInput | ConsultationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    name?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    phone?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    agreed?: BoolWithAggregatesFilter<"ConsultationRequest"> | boolean
    finished?: BoolWithAggregatesFilter<"ConsultationRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationRequest"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    services?: ServiceCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    services?: ServiceUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    features?: ServiceFeatureCreateNestedManyWithoutServiceInput
    benefits?: ServiceBenefitCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    adminId: string
    createdAt?: Date | string
    features?: ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput
    benefits?: ServiceBenefitUncheckedCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    features?: ServiceFeatureUpdateManyWithoutServiceNestedInput
    benefits?: ServiceBenefitUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput
    benefits?: ServiceBenefitUncheckedUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    adminId: string
    createdAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFeatureCreateInput = {
    id?: string
    name: string
    service: ServiceCreateNestedOneWithoutFeaturesInput
  }

  export type ServiceFeatureUncheckedCreateInput = {
    id?: string
    name: string
    serviceId: string
  }

  export type ServiceFeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    service?: ServiceUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type ServiceFeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceFeatureCreateManyInput = {
    id?: string
    name: string
    serviceId: string
  }

  export type ServiceFeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceFeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceBenefitCreateInput = {
    id?: string
    text: string
    service: ServiceCreateNestedOneWithoutBenefitsInput
  }

  export type ServiceBenefitUncheckedCreateInput = {
    id?: string
    text: string
    serviceId: string
  }

  export type ServiceBenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    service?: ServiceUpdateOneRequiredWithoutBenefitsNestedInput
  }

  export type ServiceBenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceBenefitCreateManyInput = {
    id?: string
    text: string
    serviceId: string
  }

  export type ServiceBenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceBenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePurposeCreateInput = {
    id?: string
    action: string
    detail: string
    service: ServiceCreateNestedOneWithoutPurposesInput
  }

  export type ServicePurposeUncheckedCreateInput = {
    id?: string
    action: string
    detail: string
    serviceId: string
  }

  export type ServicePurposeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    service?: ServiceUpdateOneRequiredWithoutPurposesNestedInput
  }

  export type ServicePurposeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePurposeCreateManyInput = {
    id?: string
    action: string
    detail: string
    serviceId: string
  }

  export type ServicePurposeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePurposeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    name: string
    position: string
    text: string
    createdAt?: Date | string
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    name: string
    position: string
    text: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    name: string
    position: string
    text: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestCreateInput = {
    id?: string
    name: string
    phone: string
    agreed?: boolean
    finished?: boolean
    createdAt?: Date | string
  }

  export type ConsultationRequestUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    agreed?: boolean
    finished?: boolean
    createdAt?: Date | string
  }

  export type ConsultationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    agreed?: BoolFieldUpdateOperationsInput | boolean
    finished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    agreed?: BoolFieldUpdateOperationsInput | boolean
    finished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestCreateManyInput = {
    id?: string
    name: string
    phone: string
    agreed?: boolean
    finished?: boolean
    createdAt?: Date | string
  }

  export type ConsultationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    agreed?: BoolFieldUpdateOperationsInput | boolean
    finished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    agreed?: BoolFieldUpdateOperationsInput | boolean
    finished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type ServiceFeatureListRelationFilter = {
    every?: ServiceFeatureWhereInput
    some?: ServiceFeatureWhereInput
    none?: ServiceFeatureWhereInput
  }

  export type ServiceBenefitListRelationFilter = {
    every?: ServiceBenefitWhereInput
    some?: ServiceBenefitWhereInput
    none?: ServiceBenefitWhereInput
  }

  export type ServicePurposeListRelationFilter = {
    every?: ServicePurposeWhereInput
    some?: ServicePurposeWhereInput
    none?: ServicePurposeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicePurposeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    days?: SortOrder
    imageUrl?: SortOrder
    keywords?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
    days?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    days?: SortOrder
    imageUrl?: SortOrder
    keywords?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    days?: SortOrder
    imageUrl?: SortOrder
    keywords?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
    days?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServiceFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceBenefitCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceBenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceBenefitMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    serviceId?: SortOrder
  }

  export type ServicePurposeCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    serviceId?: SortOrder
  }

  export type ServicePurposeMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    serviceId?: SortOrder
  }

  export type ServicePurposeMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    serviceId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConsultationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    agreed?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    agreed?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    agreed?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServiceCreateNestedManyWithoutAdminInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ServiceUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutAdminInput | ServiceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutAdminInput | ServiceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutAdminInput | ServiceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutAdminInput | ServiceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutAdminInput | ServiceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutAdminInput | ServiceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutServicesInput = {
    create?: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutServicesInput
    connect?: AdminWhereUniqueInput
  }

  export type ServiceFeatureCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
  }

  export type ServiceBenefitCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceBenefitCreateWithoutServiceInput, ServiceBenefitUncheckedCreateWithoutServiceInput> | ServiceBenefitCreateWithoutServiceInput[] | ServiceBenefitUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceBenefitCreateOrConnectWithoutServiceInput | ServiceBenefitCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceBenefitCreateManyServiceInputEnvelope
    connect?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
  }

  export type ServicePurposeCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServicePurposeCreateWithoutServiceInput, ServicePurposeUncheckedCreateWithoutServiceInput> | ServicePurposeCreateWithoutServiceInput[] | ServicePurposeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePurposeCreateOrConnectWithoutServiceInput | ServicePurposeCreateOrConnectWithoutServiceInput[]
    createMany?: ServicePurposeCreateManyServiceInputEnvelope
    connect?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
  }

  export type ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
  }

  export type ServiceBenefitUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceBenefitCreateWithoutServiceInput, ServiceBenefitUncheckedCreateWithoutServiceInput> | ServiceBenefitCreateWithoutServiceInput[] | ServiceBenefitUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceBenefitCreateOrConnectWithoutServiceInput | ServiceBenefitCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceBenefitCreateManyServiceInputEnvelope
    connect?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
  }

  export type ServicePurposeUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServicePurposeCreateWithoutServiceInput, ServicePurposeUncheckedCreateWithoutServiceInput> | ServicePurposeCreateWithoutServiceInput[] | ServicePurposeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePurposeCreateOrConnectWithoutServiceInput | ServicePurposeCreateOrConnectWithoutServiceInput[]
    createMany?: ServicePurposeCreateManyServiceInputEnvelope
    connect?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutServicesInput
    upsert?: AdminUpsertWithoutServicesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutServicesInput, AdminUpdateWithoutServicesInput>, AdminUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceFeatureUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput | ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    set?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    disconnect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    delete?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    update?: ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput | ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceFeatureUpdateManyWithWhereWithoutServiceInput | ServiceFeatureUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
  }

  export type ServiceBenefitUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceBenefitCreateWithoutServiceInput, ServiceBenefitUncheckedCreateWithoutServiceInput> | ServiceBenefitCreateWithoutServiceInput[] | ServiceBenefitUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceBenefitCreateOrConnectWithoutServiceInput | ServiceBenefitCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceBenefitUpsertWithWhereUniqueWithoutServiceInput | ServiceBenefitUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceBenefitCreateManyServiceInputEnvelope
    set?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    disconnect?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    delete?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    connect?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    update?: ServiceBenefitUpdateWithWhereUniqueWithoutServiceInput | ServiceBenefitUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceBenefitUpdateManyWithWhereWithoutServiceInput | ServiceBenefitUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceBenefitScalarWhereInput | ServiceBenefitScalarWhereInput[]
  }

  export type ServicePurposeUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServicePurposeCreateWithoutServiceInput, ServicePurposeUncheckedCreateWithoutServiceInput> | ServicePurposeCreateWithoutServiceInput[] | ServicePurposeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePurposeCreateOrConnectWithoutServiceInput | ServicePurposeCreateOrConnectWithoutServiceInput[]
    upsert?: ServicePurposeUpsertWithWhereUniqueWithoutServiceInput | ServicePurposeUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServicePurposeCreateManyServiceInputEnvelope
    set?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    disconnect?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    delete?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    connect?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    update?: ServicePurposeUpdateWithWhereUniqueWithoutServiceInput | ServicePurposeUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServicePurposeUpdateManyWithWhereWithoutServiceInput | ServicePurposeUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServicePurposeScalarWhereInput | ServicePurposeScalarWhereInput[]
  }

  export type ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput | ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    set?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    disconnect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    delete?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    update?: ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput | ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceFeatureUpdateManyWithWhereWithoutServiceInput | ServiceFeatureUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
  }

  export type ServiceBenefitUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceBenefitCreateWithoutServiceInput, ServiceBenefitUncheckedCreateWithoutServiceInput> | ServiceBenefitCreateWithoutServiceInput[] | ServiceBenefitUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceBenefitCreateOrConnectWithoutServiceInput | ServiceBenefitCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceBenefitUpsertWithWhereUniqueWithoutServiceInput | ServiceBenefitUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceBenefitCreateManyServiceInputEnvelope
    set?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    disconnect?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    delete?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    connect?: ServiceBenefitWhereUniqueInput | ServiceBenefitWhereUniqueInput[]
    update?: ServiceBenefitUpdateWithWhereUniqueWithoutServiceInput | ServiceBenefitUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceBenefitUpdateManyWithWhereWithoutServiceInput | ServiceBenefitUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceBenefitScalarWhereInput | ServiceBenefitScalarWhereInput[]
  }

  export type ServicePurposeUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServicePurposeCreateWithoutServiceInput, ServicePurposeUncheckedCreateWithoutServiceInput> | ServicePurposeCreateWithoutServiceInput[] | ServicePurposeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePurposeCreateOrConnectWithoutServiceInput | ServicePurposeCreateOrConnectWithoutServiceInput[]
    upsert?: ServicePurposeUpsertWithWhereUniqueWithoutServiceInput | ServicePurposeUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServicePurposeCreateManyServiceInputEnvelope
    set?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    disconnect?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    delete?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    connect?: ServicePurposeWhereUniqueInput | ServicePurposeWhereUniqueInput[]
    update?: ServicePurposeUpdateWithWhereUniqueWithoutServiceInput | ServicePurposeUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServicePurposeUpdateManyWithWhereWithoutServiceInput | ServicePurposeUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServicePurposeScalarWhereInput | ServicePurposeScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<ServiceCreateWithoutFeaturesInput, ServiceUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFeaturesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<ServiceCreateWithoutFeaturesInput, ServiceUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFeaturesInput
    upsert?: ServiceUpsertWithoutFeaturesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFeaturesInput, ServiceUpdateWithoutFeaturesInput>, ServiceUncheckedUpdateWithoutFeaturesInput>
  }

  export type ServiceCreateNestedOneWithoutBenefitsInput = {
    create?: XOR<ServiceCreateWithoutBenefitsInput, ServiceUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBenefitsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutBenefitsNestedInput = {
    create?: XOR<ServiceCreateWithoutBenefitsInput, ServiceUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBenefitsInput
    upsert?: ServiceUpsertWithoutBenefitsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBenefitsInput, ServiceUpdateWithoutBenefitsInput>, ServiceUncheckedUpdateWithoutBenefitsInput>
  }

  export type ServiceCreateNestedOneWithoutPurposesInput = {
    create?: XOR<ServiceCreateWithoutPurposesInput, ServiceUncheckedCreateWithoutPurposesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPurposesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutPurposesNestedInput = {
    create?: XOR<ServiceCreateWithoutPurposesInput, ServiceUncheckedCreateWithoutPurposesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPurposesInput
    upsert?: ServiceUpsertWithoutPurposesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPurposesInput, ServiceUpdateWithoutPurposesInput>, ServiceUncheckedUpdateWithoutPurposesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutAdminInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    features?: ServiceFeatureCreateNestedManyWithoutServiceInput
    benefits?: ServiceBenefitCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    features?: ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput
    benefits?: ServiceBenefitUncheckedCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAdminInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput>
  }

  export type ServiceCreateManyAdminInputEnvelope = {
    data: ServiceCreateManyAdminInput | ServiceCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutAdminInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutAdminInput, ServiceUncheckedUpdateWithoutAdminInput>
    create: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutAdminInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutAdminInput, ServiceUncheckedUpdateWithoutAdminInput>
  }

  export type ServiceUpdateManyWithWhereWithoutAdminInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutAdminInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    days?: IntFilter<"Service"> | number
    imageUrl?: StringNullableFilter<"Service"> | string | null
    keywords?: StringNullableFilter<"Service"> | string | null
    adminId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type AdminCreateWithoutServicesInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type AdminUncheckedCreateWithoutServicesInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type AdminCreateOrConnectWithoutServicesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
  }

  export type ServiceFeatureCreateWithoutServiceInput = {
    id?: string
    name: string
  }

  export type ServiceFeatureUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
  }

  export type ServiceFeatureCreateOrConnectWithoutServiceInput = {
    where: ServiceFeatureWhereUniqueInput
    create: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput>
  }

  export type ServiceFeatureCreateManyServiceInputEnvelope = {
    data: ServiceFeatureCreateManyServiceInput | ServiceFeatureCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceBenefitCreateWithoutServiceInput = {
    id?: string
    text: string
  }

  export type ServiceBenefitUncheckedCreateWithoutServiceInput = {
    id?: string
    text: string
  }

  export type ServiceBenefitCreateOrConnectWithoutServiceInput = {
    where: ServiceBenefitWhereUniqueInput
    create: XOR<ServiceBenefitCreateWithoutServiceInput, ServiceBenefitUncheckedCreateWithoutServiceInput>
  }

  export type ServiceBenefitCreateManyServiceInputEnvelope = {
    data: ServiceBenefitCreateManyServiceInput | ServiceBenefitCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServicePurposeCreateWithoutServiceInput = {
    id?: string
    action: string
    detail: string
  }

  export type ServicePurposeUncheckedCreateWithoutServiceInput = {
    id?: string
    action: string
    detail: string
  }

  export type ServicePurposeCreateOrConnectWithoutServiceInput = {
    where: ServicePurposeWhereUniqueInput
    create: XOR<ServicePurposeCreateWithoutServiceInput, ServicePurposeUncheckedCreateWithoutServiceInput>
  }

  export type ServicePurposeCreateManyServiceInputEnvelope = {
    data: ServicePurposeCreateManyServiceInput | ServicePurposeCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutServicesInput = {
    update: XOR<AdminUpdateWithoutServicesInput, AdminUncheckedUpdateWithoutServicesInput>
    create: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutServicesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutServicesInput, AdminUncheckedUpdateWithoutServicesInput>
  }

  export type AdminUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceFeatureWhereUniqueInput
    update: XOR<ServiceFeatureUpdateWithoutServiceInput, ServiceFeatureUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput>
  }

  export type ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceFeatureWhereUniqueInput
    data: XOR<ServiceFeatureUpdateWithoutServiceInput, ServiceFeatureUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceFeatureUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceFeatureScalarWhereInput
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceFeatureScalarWhereInput = {
    AND?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
    OR?: ServiceFeatureScalarWhereInput[]
    NOT?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
    id?: StringFilter<"ServiceFeature"> | string
    name?: StringFilter<"ServiceFeature"> | string
    serviceId?: StringFilter<"ServiceFeature"> | string
  }

  export type ServiceBenefitUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceBenefitWhereUniqueInput
    update: XOR<ServiceBenefitUpdateWithoutServiceInput, ServiceBenefitUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceBenefitCreateWithoutServiceInput, ServiceBenefitUncheckedCreateWithoutServiceInput>
  }

  export type ServiceBenefitUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceBenefitWhereUniqueInput
    data: XOR<ServiceBenefitUpdateWithoutServiceInput, ServiceBenefitUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceBenefitUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceBenefitScalarWhereInput
    data: XOR<ServiceBenefitUpdateManyMutationInput, ServiceBenefitUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceBenefitScalarWhereInput = {
    AND?: ServiceBenefitScalarWhereInput | ServiceBenefitScalarWhereInput[]
    OR?: ServiceBenefitScalarWhereInput[]
    NOT?: ServiceBenefitScalarWhereInput | ServiceBenefitScalarWhereInput[]
    id?: StringFilter<"ServiceBenefit"> | string
    text?: StringFilter<"ServiceBenefit"> | string
    serviceId?: StringFilter<"ServiceBenefit"> | string
  }

  export type ServicePurposeUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServicePurposeWhereUniqueInput
    update: XOR<ServicePurposeUpdateWithoutServiceInput, ServicePurposeUncheckedUpdateWithoutServiceInput>
    create: XOR<ServicePurposeCreateWithoutServiceInput, ServicePurposeUncheckedCreateWithoutServiceInput>
  }

  export type ServicePurposeUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServicePurposeWhereUniqueInput
    data: XOR<ServicePurposeUpdateWithoutServiceInput, ServicePurposeUncheckedUpdateWithoutServiceInput>
  }

  export type ServicePurposeUpdateManyWithWhereWithoutServiceInput = {
    where: ServicePurposeScalarWhereInput
    data: XOR<ServicePurposeUpdateManyMutationInput, ServicePurposeUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServicePurposeScalarWhereInput = {
    AND?: ServicePurposeScalarWhereInput | ServicePurposeScalarWhereInput[]
    OR?: ServicePurposeScalarWhereInput[]
    NOT?: ServicePurposeScalarWhereInput | ServicePurposeScalarWhereInput[]
    id?: StringFilter<"ServicePurpose"> | string
    action?: StringFilter<"ServicePurpose"> | string
    detail?: StringFilter<"ServicePurpose"> | string
    serviceId?: StringFilter<"ServicePurpose"> | string
  }

  export type ServiceCreateWithoutFeaturesInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    benefits?: ServiceBenefitCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFeaturesInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    adminId: string
    createdAt?: Date | string
    benefits?: ServiceBenefitUncheckedCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFeaturesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFeaturesInput, ServiceUncheckedCreateWithoutFeaturesInput>
  }

  export type ServiceUpsertWithoutFeaturesInput = {
    update: XOR<ServiceUpdateWithoutFeaturesInput, ServiceUncheckedUpdateWithoutFeaturesInput>
    create: XOR<ServiceCreateWithoutFeaturesInput, ServiceUncheckedCreateWithoutFeaturesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFeaturesInput, ServiceUncheckedUpdateWithoutFeaturesInput>
  }

  export type ServiceUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    benefits?: ServiceBenefitUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: ServiceBenefitUncheckedUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutBenefitsInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    features?: ServiceFeatureCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBenefitsInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    adminId: string
    createdAt?: Date | string
    features?: ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput
    purposes?: ServicePurposeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBenefitsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBenefitsInput, ServiceUncheckedCreateWithoutBenefitsInput>
  }

  export type ServiceUpsertWithoutBenefitsInput = {
    update: XOR<ServiceUpdateWithoutBenefitsInput, ServiceUncheckedUpdateWithoutBenefitsInput>
    create: XOR<ServiceCreateWithoutBenefitsInput, ServiceUncheckedCreateWithoutBenefitsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBenefitsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBenefitsInput, ServiceUncheckedUpdateWithoutBenefitsInput>
  }

  export type ServiceUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    features?: ServiceFeatureUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutPurposesInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    features?: ServiceFeatureCreateNestedManyWithoutServiceInput
    benefits?: ServiceBenefitCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutPurposesInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    adminId: string
    createdAt?: Date | string
    features?: ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput
    benefits?: ServiceBenefitUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPurposesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPurposesInput, ServiceUncheckedCreateWithoutPurposesInput>
  }

  export type ServiceUpsertWithoutPurposesInput = {
    update: XOR<ServiceUpdateWithoutPurposesInput, ServiceUncheckedUpdateWithoutPurposesInput>
    create: XOR<ServiceCreateWithoutPurposesInput, ServiceUncheckedCreateWithoutPurposesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPurposesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPurposesInput, ServiceUncheckedUpdateWithoutPurposesInput>
  }

  export type ServiceUpdateWithoutPurposesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    features?: ServiceFeatureUpdateManyWithoutServiceNestedInput
    benefits?: ServiceBenefitUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPurposesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput
    benefits?: ServiceBenefitUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyAdminInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    days: number
    imageUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
  }

  export type ServiceUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: ServiceFeatureUpdateManyWithoutServiceNestedInput
    benefits?: ServiceBenefitUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput
    benefits?: ServiceBenefitUncheckedUpdateManyWithoutServiceNestedInput
    purposes?: ServicePurposeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFeatureCreateManyServiceInput = {
    id?: string
    name: string
  }

  export type ServiceBenefitCreateManyServiceInput = {
    id?: string
    text: string
  }

  export type ServicePurposeCreateManyServiceInput = {
    id?: string
    action: string
    detail: string
  }

  export type ServiceFeatureUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceFeatureUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceFeatureUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceBenefitUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceBenefitUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceBenefitUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePurposeUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePurposeUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePurposeUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}