import { AddressZero } from '@ethersproject/constants';

import { configService } from '@/services/config/config.service';
import { ref } from 'vue';

export const defaultWeb3Account = ref(AddressZero);

export const defaultBlockNumber = ref(123);

export default function useWeb3Mock() {
  return {
    isWalletReady: ref(true),
    getProvider: vi.fn(),
    appNetworkConfig: {
      nativeAsset: {
        address: configService.network.nativeAsset.address,
      },
      addresses: {
        wstETH: 'wstETHAddressMock',
      },
    },
    account: defaultWeb3Account,
    explorerLinks: {
      addressLink: (address: string) => `$test-explorer/address/${address}`,
    },
    blockNumber: defaultBlockNumber,
    connector: ref('Test connector'),
    getSigner: () => ({
      getAddress: async () => '0xcd3b766ccdd6ae456741f452c550ca635964ce71',
    }),
  };
}
