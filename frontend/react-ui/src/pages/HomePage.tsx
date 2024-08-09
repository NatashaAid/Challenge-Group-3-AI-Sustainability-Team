import React from "react";
import Page from "../components/Page";
import PageBody from "../components/PageBody";
import PageFooter from "../components/PageFooter";
import Designtool from "../components/DesignTool";
import SuggestionList from "../components/SuggestionList";
import SupplyChain from "../components/SupplyChain";

const supply = ["material A", "supplier A", "manufacturer A"];
export default function HomePage() {
  return (
    <Page>
      <PageBody>
        <Designtool />
        <SuggestionList />
      </PageBody>
      <PageFooter>
        <SupplyChain supplyChainList={supply} />
      </PageFooter>
    </Page>
  );
}
