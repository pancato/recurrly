import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href={"/settings"}
      >
        Go to Settings
      </Link>

      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href={"/subscriptions"}
      >
        Go to Subscriptions
      </Link>

      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href={"/insights"}
      >
        Go to Insights
      </Link>
    </SafeAreaView>
  );
}
