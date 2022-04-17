/*
 * Copyright (c) 2022-present Adversport & Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @public
 */
export const AdNetwork = {
  GOOGLE_AD_MANAGER: 'GOOGLE_AD_MANAGER',
  ADMOB: 'ADMOB',
  AD_GENERATION: 'AD_GENERATION',
  IRON_SOURCE: 'IRON_SOURCE',
  MAX: 'MAX',
  NIMBUS: 'NIMBUS',
  OTHER: 'OTHER',
} as const;

/**
 * @public
 */
export type AdNetwork = typeof AdNetwork[keyof typeof AdNetwork];

/**
 * @internal
 */
export function isAdNetwork(value: any): value is AdNetwork {
  return Object.values(AdNetwork).includes(value);
}
