/*
 * Copyright (c) 2022-present Adversport & Contributors
 *
 * This file is part of react-native-aps.
 *
 * react-native-aps is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3 of the License.
 *
 * react-native-aps is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Foobar. If not, see <https://www.gnu.org/licenses/>.
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

interface AdNetworkInfo {
  /**
   * The name of the primary ad server or mediator
   */
  adNetwork: string;
  adNetworkProperties?: { [key: string]: string };
}

/**
 * @internal
 */
export interface Spec extends TurboModule {
  initialize: (appKey: string) => Promise<void>;

  setAdNetworkInfo: (adNetworkInfo: AdNetworkInfo) => void;

  setMRAIDSupportedVersions: (supportedVersions: string[]) => void;

  setMRAIDPolicy: (policy: string) => void;

  setTestMode: (enabled: boolean) => void;

  setUseGeoLocation: (enabled: boolean) => void;

  addCustomAttribute: (key: string, value: string) => void;

  removeCustomAttribute: (key: string) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNAPSAdsModule');
