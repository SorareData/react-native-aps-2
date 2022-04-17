/*
 * Copyright (c) 2022-present Adversport & Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @public
 */
export const AdType = {
  BANNER: 'banner',
  INTERSTITIAL: 'interstitial',
} as const;

/**
 * @public
 */
export type AdType = typeof AdType[keyof typeof AdType];

/**
 * @internal
 */
export function isAdType(value: any): value is AdType {
  return Object.values(AdType).includes(value);
}
