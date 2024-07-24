import { ClusterNetwork, useCluster } from './cluster-data-access';
import { RadioButton, Text } from 'react-native-paper';
import { ClusterPickerRadioButtonGroupRow } from './cluster-ui';

function clusternetworkToIndex(clusterName: ClusterNetwork): number {
  switch (clusterName) {
    case ClusterNetwork.Devnet:
      return 0;
    case ClusterNetwork.Testnet:
      return 1;
    case ClusterNetwork.Mainnet:
      return 2;
    default:
      throw new Error('Invalid cluster selected');
  }
}

export default function ClusterPickerFeature() {
  const { selectedCluster, clusters, setSelectedCluster } = useCluster();

  return (
    <>
      <Text variant="headlineMedium">Cluster:</Text>
      <RadioButton.Group
        onValueChange={(newClusternetwork: string) =>
          setSelectedCluster(
            clusters[clusternetworkToIndex(newClusternetwork as ClusterNetwork)]
          )
        }
        value={selectedCluster.network}
      >
        {clusters.map((cluster) => (
          <ClusterPickerRadioButtonGroupRow
            key={cluster.network}
            cluster={cluster}
          />
        ))}
      </RadioButton.Group>
    </>
  );
}
