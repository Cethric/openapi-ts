import type { Plugin } from '../../types';

export interface Config extends Plugin.Name<'@hey-api/transformers'> {
  /**
   * Convert long integers into BigInt values?
   *
   * @default true
   */
  bigInt?: boolean;
  /**
   * The format to attempt parsing dates with (ignored when dates != luxon)
   *
   * @default 'YYYY-MM-DDTHH:mm:ss.sssZ'
   */
  dateFormat?: string;
  /**
   * Convert date strings into Date objects?
   *
   * @default true
   */
  dates?: boolean | 'luxon';
  /**
   * Name of the generated file.
   *
   * @default 'transformers'
   */
  output?: string;
}
