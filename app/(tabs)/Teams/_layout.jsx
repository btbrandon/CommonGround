import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ViewTeams"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="CreateTeam"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="FindTeam"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="PendingTeamRequests"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="TeamDetails"
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="ViewMembers"
        options={{ tabBarStyle: { display: "none" } }}
      />
    </Stack>
  );
}
