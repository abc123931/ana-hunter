import React from "react";
import { RecoilRoot } from "recoil";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import AppNavigator from "./navigation/AppNavigator";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import { useEnvironment } from "./lib/relay";
dayjs.locale("ja");

export default function App() {
  const environment = useEnvironment();
  return (
    <RelayEnvironmentProvider environment={environment}>
      <RecoilRoot>
        <AppNavigator />
      </RecoilRoot>
    </RelayEnvironmentProvider>
  );
}
