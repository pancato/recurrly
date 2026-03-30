import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href={"/onboarding"}
      >
        Go to Onboarding
      </Link>

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
    </View>
  );
}
