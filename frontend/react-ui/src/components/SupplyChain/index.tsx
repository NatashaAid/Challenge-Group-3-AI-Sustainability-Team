import Card from "../Card";
import Text from "../Text";
interface SupplyProps {
  supplyChainList: string[];
}

const SupplyChain = (props: SupplyProps) => {
  const { supplyChainList } = props;
  return (
    <Card header={<h1>Supply Chain Selection</h1>}>
      <div className="supply-card">
        <div>
          {supplyChainList.map((item, index) => (
            <span className="list">
              <Text color="black" fontSize="14px" fontWeight="normal">
                {item}
                {index < supplyChainList.length - 1 && " ➔ "}
              </Text>
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SupplyChain;
